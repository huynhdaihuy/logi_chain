import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageGoodsRoutingModule } from './manage-goods-routing.module';
import { MangeGoodsPageComponent } from './pages/mange-goods-page/mange-goods-page.component';


@NgModule({
  declarations: [
    MangeGoodsPageComponent
  ],
  imports: [
    CommonModule,
    ManageGoodsRoutingModule
  ]
})
export class ManageGoodsModule { }
