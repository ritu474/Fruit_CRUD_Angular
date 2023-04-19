import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"create",component:CreateComponent},
  {path:"fruit_route",component:FruitsComponent},
  {path:"update/:id",component:UpdateComponent},
  
  {
    path: '',
    redirectTo: 'fruit_route',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


