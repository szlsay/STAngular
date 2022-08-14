//导入Injectable装饰器
import { Injectable } from '@angular/core';
//使用Injectable装饰器声明服务
@Injectable({
  //作用域设定，'root'表示默认注入，注入到AppModule里
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  
  list:Array<string>=['Angular','React','Vue']

  getList(){
    return this.list
  }

  addList(str:string){
    this.list.push(str)
  }
}
