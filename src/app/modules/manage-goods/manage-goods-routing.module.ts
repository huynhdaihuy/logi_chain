import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangeGoodsPageComponent } from './pages/mange-goods-page/mange-goods-page.component';

const routes: Routes = [
  {
    path: '',
    component: MangeGoodsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGoodsRoutingModule {}
