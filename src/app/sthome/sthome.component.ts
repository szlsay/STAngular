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

  box: String = 'home-box'
  itemClass: String = 'home-item'

  homeClasses: String = 'h3-dom title-dom'
  isActive: boolean = true

  isMax: boolean = false

  colors:Array<string> = [ 'red', 'blue', 'yellow', 'green' ];
  type:Number = 4
  handlerOutLogin(){
    this.outLogin.emit('用户退出')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
