import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-stdetail',
  templateUrl: './stdetail.component.html',
  styleUrls: ['./stdetail.component.less']
})
export class STDetailComponent implements OnInit {

  id: string = ''
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit(): void {
    let queryParams = this.routerInfo.snapshot.queryParams
    console.log(queryParams)
    console.log(queryParams['name']);
    this.routerInfo.params.subscribe((params: Params)=>{
      this.id = params['id']
      console.log(params);
      console.log(this.id);
    })
  }

}
