import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadModule } from 'ng2-file-upload';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { DashboardRoutes } from "./dashboard.routing";
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { CountProcessorComponent } from './count-processor/count-processor.component';
import { SliderProcessorComponent } from './slider-processor/slider-processor.component';
import { CaptureFailedSlabComponent } from './capture-dashboard/capture-dashboard.component';
import { DetailedAnalysisComponent } from './detailed-analysis/detailed-analysis.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TableDetailedAnalysisComponent } from './detailed-analysis-table/detailed-analysis-table.component';
import { ImageDialogComponent } from './detailed-analysis-table/detailedanalysis-dialog/da-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    NgxEchartsModule,
    NgApexchartsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    SharedPipesModule,
    NgImageSliderModule,
    MatCarouselModule.forRoot(),
    FileUploadModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DefaultDashboardComponent, CountProcessorComponent, SliderProcessorComponent, CaptureFailedSlabComponent, DetailedAnalysisComponent, TableDetailedAnalysisComponent, ImageDialogComponent],
  exports: [],

})
export class DashboardModule {

}