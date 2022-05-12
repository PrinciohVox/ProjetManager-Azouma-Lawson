import { NgModule } from '@angular/core';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [BreadcumbComponent,AreaChartComponent, BubbleChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule
  ],
  exports:[ CommonModule,FormsModule,BreadcumbComponent,AreaChartComponent, BubbleChartComponent, PieChartComponent ]
})
export class SharedModule { }
