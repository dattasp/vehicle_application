import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }
  data:any;
  ngOnInit(): void {
    
    this.api.get_all_vehicle().subscribe((res:any) => {
      console.log(res);
      if(res.status =="success"){
        this.data=res.vehicle_data;
      }
      return this.data;
    })
  }

  printstar(star:any){
    var output="";
    for(var i=0;i<star;i++){
      if(star-i == 0.5){ 
        star = Number(star)+0.5;
        output+='<i class="fa fa-star-half-o text-warning float-left pt-1" style="font-size:24px;"></i>'
      }
      else
        output+='<i class="fa fa-star text-warning float-left pt-1" style="font-size:24px;"></i>'
    }

    for(i= star ; i< 5; i++){
      output+='<i class="fa fa-star-o text-warning float-left pt-1" style="font-size:24px;"></i>'
    }

    return output;

  }

  // <i class="fa fa-star text-warning" style="font-size:24px;"></i>
  // <i class="fa fa-star-o text-warning" style="font-size:24px;"></i>

}
