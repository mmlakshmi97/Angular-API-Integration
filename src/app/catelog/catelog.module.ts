import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogRoutingModule } from './catelog-routing.module';
import { CatalogComponentComponent } from './catalog-component/catalog-component.component';


@NgModule({
  declarations: [
    CatalogComponentComponent
  ],
  imports: [
    CommonModule,
    CatelogRoutingModule
  ]
})
export class CatelogModule { }
