import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changer-number',
  templateUrl: './changer-number.component.html',
  styleUrls: ['./changer-number.component.scss']
})
export class ChangerNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter() //filho p/  pae

  constructor() { }

  ngOnInit(): void {
  }

  handleClic():void {
    this.changeNumber.emit();
  }

}
