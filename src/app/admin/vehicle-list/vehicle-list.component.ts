import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  data:any;

  ngOnInit(): void {

    this.api.get_all_vehicle().subscribe(res => {
    this.data = res;
    // console.log(this.data);
    if(this.data.status == "success"){
      console.log(this.data.vehicle_data);
    }
    else{
      console.log("Failed to Get Data");
    }
    })

  }

  delete_vehicle(id:any){
    this.api.delete_vehicle(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
    // console.log(id)
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/admin_login'])
  }

}
