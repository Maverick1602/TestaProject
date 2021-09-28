import { Component, OnInit } from '@angular/core';
import { TesterService } from './tester.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  reportObj: any;
  errorMsg: String;
  flag: boolean = true;
  dbMessage:String;


  constructor(private service: TesterService) { }

  ngOnInit() {
  }

  evaluate() {
    this.errorMsg = null;
    this.reportObj = null;
    this.service.getData().subscribe((response) => {
      this.flag = false;
      this.reportObj = response;
      this.report(response);
      setTimeout(() => {
        response.forEach(element => {
          element.percent = this.calculatePercent(element.suitName, element.totalNoOfTestCases, element.noOfTestCasesPassed);
        });
      }, 1000)
    }, (err) => { this.errorMsg = err.error.message; this.flag = false; })
  }

  report(obj) {
    obj.forEach(value => {
      if (value.failTest.length == 0) {
        value.failTest.push("Passed")
      }
    });
  }

  setColor(status) {
    return (status === 'Passed') ? "green" : "red"
  }

  calculatePercent(id, total, pass) {
    let target = document.getElementById(id);
    let percent = Math.round((pass / total) * 100);
    target.setAttribute("style", `width:${percent}%`);
    target.setAttribute("aria-valuenow", String(percent));
    if (percent > 90) {
      target.setAttribute("class", "progress-bar bg-success progress-bar-striped progress-bar-animated")
    }
    else if (percent > 50) {
      target.setAttribute("class", "progress-bar bg-warning progress-bar-striped progress-bar-animated")
    }
    else {
      target.setAttribute("class", "progress-bar bg-danger progress-bar-striped progress-bar-animated")
    }
    return percent
  }

  setUpDb(){
    this.dbMessage=""
    this.service.loadDatabse().subscribe(
      (data)=>this.dbMessage=data,
      (err)=>this.dbMessage=err.error.message)
  }




}
