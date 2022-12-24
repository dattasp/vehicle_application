import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';

const routes: Routes = [
  {path:'',component:AddVehicleComponent},
  {path:'vehicle_list',component:VehicleListComponent},
  {path:'edit_vehicle/:vehicle_id',component:EditVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
