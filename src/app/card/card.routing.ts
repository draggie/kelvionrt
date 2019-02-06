import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCardComponent } from '@app/simple-card/simple-card.component';

const routes: Routes = [
   {path: '', component: SimpleCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CardRouting { }
