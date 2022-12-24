import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
 
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GetQuoteComponent } from '../get-quote/get-quote.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  constructor( private api:ApiService, private route:ActivatedRoute,public dialog: MatDialog) { }
  data:any;
  ngOnInit(): void {

    this.route.params.subscribe(urlData => {
      var vehicle_id = urlData['vehicle_id']
      this.api.getvehicleDetails(vehicle_id).subscribe((res:any) => {
        console.log(res);
        this.data = res.data;
      })
    })

  }

  printstar(star:any){
    var output="";
    for(var i=0;i<star;i++){
      if(star-i==0.5){
        star=Number(star)+0.5
        output+='<i class="fa fa-star-half-o text-warning  pt-1" style="font-size:24px;"></i>'
      }
      else{
        output+='<i class="fa fa-star text-warning  pt-1" style="font-size:24px;"></i>'
      }
    }
    for(i=star;i<5;i++){
      output+='<i class="fa fa-star-o text-warning  pt-1" style="font-size:24px;"></i>'
    }
    return output;
  }

  getquote(){
    const dialogRef = this.dialog.open(GetQuoteComponent,{
      data: {
        vehicle_name: this.data.vehicle_name,
        vehicle_model_no: this.data.vehicle_model_no,
        vehicle_price:this.data.vehicle_price
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
