import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  send_to_server(data:any){
     return this.http.post("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/add_vehicle",data);
  }


  get_all_vehicle(){
    return this.http.get("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/get_vehicle_list");
  }

  delete_vehicle(id:any){
    return this.http.get("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/delete_vehicle/"+id)
  }

  admin_login(data:any){
    return this.http.post("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/admin_login",data)

  }

  getvehicleDetails(vehicle_id:any){
    return this.http.get("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/vehicle_details/"+vehicle_id)
  }

  update_vehicle(id:any,data:any){
    return this.http.post("http://a2zinfotechs.com/nirmal_dairy/vehicleapi/update_vehicle/"+id,data) 
  }

}
