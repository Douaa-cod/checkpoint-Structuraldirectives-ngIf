import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showhide',
  templateUrl: './showhide.component.html',
  styleUrls: ['./showhide.component.css']
})
export class ShowhideComponent implements OnInit {
  showme = true
  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    this.showme = ! this.showme
  }
}
