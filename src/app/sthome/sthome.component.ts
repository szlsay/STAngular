import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sthome',
  templateUrl: './sthome.component.html',
  styleUrls: ['./sthome.component.less']
})
export class STHomeComponent implements OnInit {
  @Input()
  name!: String

  @Output()
  outLogin = new EventEmitter()

  age: number = 18
  isHome: boolean = true
  desc: string = '世界和平'
  date: Date = new Date()

  handlerOutLogin(){
    this.outLogin.emit('用户退出')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
