import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import                              'rxjs/add/operator/switchMap';
import { Case }                     from '../model/case';
import { CaseService }              from '../services/case.service';

@Component({
  selector:    'case-detail',
  templateUrl: '../templates/case-detail.component.html',
})

export class CaseDetailComponent implements OnInit {
  @Input() case:         Case;
  param:                 string;
  constructor(
    private CaseService: CaseService,
    private route:       ActivatedRoute
  ) {}

  ngOnInit(): void {
    let that = this;

    console.log("[stack-trace] calling on ngOnInit with param: ", this.route.params)
    this.route.params
    .switchMap((params: Params) => this.CaseService.getCase(params['param']))
    .subscribe(function(c){
      console.log("suscribing:", c)
      that.case = c
      console.log(that.case)
    })
  }
}
