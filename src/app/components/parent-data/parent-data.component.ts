import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})

export class ParentDataComponent implements OnInit {

  @Input() name: string = '';
  @Input() userData!: {user: string, email: string }

  constructor() { }

  ngOnInit(): void {
  }

}