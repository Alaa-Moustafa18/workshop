import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

const ngxComponent = [
  TooltipModule.forRoot()
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngxComponent
  ],
  exports:[
    ngxComponent
  ]
})
export class NgxModule { }
