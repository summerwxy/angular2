import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() expiry_date: string;
  text: string = "";

  constructor() { }

  ngOnInit() {
    var date: any = new Date(this.expiry_date);
    var today: any = new Date()
    var days: any = Math.round((date - today) / (1000*60*60*24));
    if (days > 0) {
      this.text = "剩下 " + days + " 天"
    } else {
      this.text = "时间已过"
    }
  }


}
