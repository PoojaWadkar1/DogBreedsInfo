import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-comp',
  templateUrl: './card-comp.component.html',
  styleUrls: ['./card-comp.component.css']
})
export class CardCompComponent {
  @Input() breed: any;
}
