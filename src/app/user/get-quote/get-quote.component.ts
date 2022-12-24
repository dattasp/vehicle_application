import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  result:any;
  ngOnInit(): void {

    console.log(this.data)
    this.result=this.data;
  }

  save_data(uname:any,umobile:any,uemail:any,uvehicle:any){
    console.log(uname.value);
    console.log(uemail.value);
    console.log(umobile.value);
    console.log(uvehicle.value);
    console.log("vehicle_model_no = "+this.result.vehicle_model_no);
    console.log("vehicle_price = "+this.result.vehicle_price);
    console.log("vehicle_name = "+this.result.vehicle_name)
  }


}
