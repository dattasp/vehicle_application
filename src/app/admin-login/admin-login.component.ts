import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

// ES6 Modules or TypeScript
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';

// CommonJS
var Swal = require('sweetalert2')


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private api:ApiService , private router:Router) { }

  ngOnInit(): void {
  }

  adminlogin = new FormGroup({
   admin_mobile:new FormControl("",[Validators.required]),
    admin_password: new FormControl("", [Validators.required])
  });

  admin_login(){
    // console.log(this.adminlogin.value);
    this.api.admin_login(this.adminlogin.value).subscribe(res =>{
      var data:any=res;
      if(data.status == "success"){
        console.log(data.token)
        localStorage.setItem("Token",data.token);
        this.router.navigate(['/admin/vehicle_list'])
      }
      else{
        console.log(data.status);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please Try Again ',
        })
      }
    })
  }

}
