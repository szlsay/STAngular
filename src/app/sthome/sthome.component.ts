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

  handlerOutLogin(){
    this.outLogin.emit('用户退出')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
