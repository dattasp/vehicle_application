import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }


  vehicle=new FormGroup({
    vehicle_type: new FormControl(""),
    vehicle_name:new FormControl(""),
    vehicle_model_no:new FormControl(""),
    manufacture_year:new FormControl(""),
    vehicle_price:new FormControl(""),
    vehicle_rating:new FormControl(""),
    vehicle_details:new FormControl(""),
  });

  vehicle_image:any;

  saveimage(image:any){
    this.vehicle_image=image.target.files[0];
  }

  add_vehicle(){
    var data:any=this.vehicle.value;
    // console.log(data.vehicle_name);
    var myform = new FormData();
    myform.append("vehicle_image",this.vehicle_image);
    myform.append("vehicle_type",data.vehicle_type)
    myform.append("vehicle_name",data.vehicle_name)
    myform.append("vehicle_model_no",data.vehicle_model_no)
    myform.append("manufacture_year",data.manufacture_year)
    myform.append("vehicle_price",data.vehicle_price)
    myform.append("vehicle_rating",data.vehicle_rating)
    myform.append("vehicle_details",data.vehicle_details)
    // console.log(myform);

    this.api.send_to_server(myform).subscribe(res => {
      console.log(res);
    })
  }

}
