import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  titlemodel: String = ''
  
  ageForm:FormControl = new FormControl(6);
  loginForm:FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  fromData={
    name:'',
    password:''
  };

  dateStr: Date = new Date();
  nameStr: string = 'hEllo';

  constructor(private fbCustom: FormBuilder) { }
  valiDataForm:FormGroup = this.fbCustom.group({
    userName: ['', [Validators.required,
      Validators.maxLength(18),
      Validators.minLength(6)]],
    password: ['', [this.passWordVal]],
    phone: ['', [Validators.required,this.phoneVal],]
  });

  passWordVal(password: FormControl):object{
    let value = password.value || '';
    if(!value){
      return {msg:'请输入密码'}
    }else{
      const valid = value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
      return valid?{}:{msg:'密码至少包含 数字和英文，长度6-20'}
    }
  }

  phoneVal(phone: FormControl): object {
    const value = phone.value || '';
    if(!value) return  {msg:'请输入手机号'}
    const valid =  value.match(/[0-9]{11}/);
    return valid ? {} :{msg:'手机号必须是11位数字'}
  }

  subvaliDataFormFun(){
    console.log(this.valiDataForm.get('userName'));
  }

  ngOnInit(): void {
  }

  handlerOutLogin(){
    this.outLogin.emit('用户退出')
  }

  clickFun(e:Event){
    console.log(e)
    alert("点击了按钮")
  }

  inpChange(e:any){
    console.log(e.target.value)
  }

  getUserName(v:string){
    console.log(v)
  }

  ageChangeFun(){
    this.ageForm.setValue(18)
  }

  subFormFun(){
    console.log(this.loginForm.value)
  }

  subBtnFun(obj:any){
    console.log(obj); 
  }
}
