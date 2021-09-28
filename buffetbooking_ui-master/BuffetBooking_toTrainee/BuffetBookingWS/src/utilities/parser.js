var fs = require("fs-extra")
var exec = require('child-process-promise').exec;
const path = require('path');

class Module {
    constructor(sName, fTname, total, fCount) {
        this.suitName = sName;
        this.failTest = fTname
        this.totalNoOfTestCases = total;
        this.noOfTestCasesPassed = total - fCount;
        this.noOfTestCasesFailed = fCount;
    }
}

function parse(reportObj) {
    var evalObj = [];
    var suiteList = [];
    var testCount = 0;
    var failTests = []
    for (iterator of reportObj.browsers[0].results) {
        let obj = false
        if (suiteList.indexOf(iterator.suite[0]) > -1) {
            testCount++;
            if (!iterator.success)
                failTests.push(iterator.description)
        }
        else {
            suiteList.push(iterator.suite[0])
            var failTests = []
            testCount = 1;
            if (!iterator.success)
                failTests.push(iterator.description)

        }
        obj = evalObj.find((o, i) => {
            if (o.suitName == iterator.suite[0]) {
                evalObj[i] = { suitName: iterator.suite[0], failTest: failTests, totalNoOfTestCases: testCount, noOfTestCasesPassed: testCount - failTests.length, noOfTestCasesFailed: failTests.length };
                return true;
            }
        });
        if (!obj) {
            evalObj.push(new Module(iterator.suite[0], failTests, testCount, failTests.length));
        }
    }
    console.log(evalObj)
    return evalObj
}


var angularPath = path.join(__dirname, "../../../BuffetBookingUI");

exports.reportGenerator = function () {
    console.log("--- Verifying ---");
    return exec(`cd ${angularPath} && npm test `).then(pass => {
        return pass
    }).catch((err) => {
        return err.message
    }).then(() => {
        try {
            let resultObj = fs.readJsonSync(path.join(angularPath, '/result.json'));
            result = parse(resultObj);
            fs.writeFileSync(path.join(angularPath, '/result.json'),JSON.stringify(result))
            return result;
        }
        catch (err) {
            
            throw new Error("Compilation error in code!!")
        }
        
    })
}


