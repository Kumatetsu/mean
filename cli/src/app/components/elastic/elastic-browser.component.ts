import { Component, Input } from '@angular/core';
import { Case }             from '../../model/case'

@Component({
    selector: 'elastic-browser',
    template: '../../templates/elastic/elastic-browser.component.html',
})
export class ElasticBrowserComponent {
    public selectedCase: Case
    @Input() cases: Case[]
}