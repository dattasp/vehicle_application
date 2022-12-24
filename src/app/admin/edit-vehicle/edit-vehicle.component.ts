import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl } from '@angular/forms';

var Swal = require('sweetalert2')


@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private api:ApiService, private router:Router) { }
  vehicle_data:any;
  vehicle_id:any;
  vehicle:any;
  vehicle_image:any;
  ngOnInit(): void {

    this.activatedroute.params.subscribe(urlData => {
      console.log(urlData);
      this.vehicle_id = urlData['vehicle_id'];

      this.api.getvehicleDetails(this.vehicle_id).subscribe(res => {
        var res_data:any= res;
        // console.log(res_data.status);
        if(res_data.status == "success"){
          this.vehicle_data = res_data.data;

          this.vehicle = new FormGroup({
            "vehicle_type":new FormControl(this.vehicle_data.vehicle_type),
            "vehicle_name":new FormControl(this.vehicle_data.vehicle_name),
            "vehicle_model_no":new FormControl(this.vehicle_data.vehicle_model_no),
            "manufacture_year":new FormControl(this.vehicle_data.manufacture_year),
            "vehicle_price":new FormControl(this.vehicle_data.vehicle_price),
            "vehicle_image":new FormControl(this.vehicle_data.vehicle_image),
            "vehicle_rating":new FormControl(this.vehicle_data.vehicle_rating),
            "vehicle_details":new FormControl(this.vehicle_data.vehicle_details),
          })

        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please Try Again ',
          })
        }
      })
    })
  }

  saveimage(event:any){
    this.vehicle_image = event.target.files[0];
  }
  update_vehicle(){
    var data:any=this.vehicle.value;
    // console.log(data.vehicle_name);
    var myform = new FormData();
   
    if(this.vehicle_image){
      myform.append("vehicle_image",this.vehicle_image);
    }
    myform.append("vehicle_type",data.vehicle_type)
    myform.append("vehicle_name",data.vehicle_name)
    myform.append("vehicle_model_no",data.vehicle_model_no)
    myform.append("manufacture_year",data.manufacture_year)
    myform.append("vehicle_price",data.vehicle_price)
    myform.append("vehicle_rating",data.vehicle_rating)
    myform.append("vehicle_details",data.vehicle_details)
    // console.log(myform);

    this.api.update_vehicle(this.vehicle_id,myform).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/vehicle_list']);
    })

  }

}
