import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stlogin',
  templateUrl: './stlogin.component.html',
  styleUrls: ['./stlogin.component.less']
})
export class STLoginComponent implements OnInit {
  handleOutLogin(str: String) { 
    console.log(str)
  }
  constructor() { }
  ngOnChanges(): void {
    console.log('stlogin-ngOnChanges');
  }
  ngOnInit(): void {
    console.log('stlogin-ngOnInit');
  }
  ngDoCheck(): void {
    console.log('stlogin-ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('stlogin-ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('stlogin-ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('stlogin-ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('stlogin-ngOnDestroy');
  }
}
