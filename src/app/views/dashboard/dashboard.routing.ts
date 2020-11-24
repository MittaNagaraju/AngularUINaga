import { Routes } from "@angular/router";
import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import { CountProcessorComponent } from "./count-processor/count-processor.component";
import { SliderProcessorComponent } from "./slider-processor/slider-processor.component";
import { CaptureFailedSlabComponent } from "./capture-dashboard/capture-dashboard.component";
import { DetailedAnalysisComponent } from "./detailed-analysis/detailed-analysis.component";
import { TableDetailedAnalysisComponent } from "./detailed-analysis-table/detailed-analysis-table.component";

export const DashboardRoutes: Routes = [

  {
    path: "",
    component: DefaultDashboardComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "DASHBOARD" }
  },
  {
    path: "count-processor/:id",
    component: CountProcessorComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "{{id}}" }
  },
  {
    path: 'count-processor/:id',
    data: { title: "Digital Finger Printing", breadcrumb: "{{id}}" },
    children: [{
      path: "detailed-analysis",
      component: TableDetailedAnalysisComponent,
      data: { title: "Digital Finger Printing", breadcrumb: "FAILED SLAB DETAILS" },
    },
    {
      path: 'slider-processor',
      component: SliderProcessorComponent,
      data: { title: 'Digital Finger Printing', breadcrumb: 'JOURNEY OF FAILED SLAB' }
    },

    {
      path: "capture-failed-slab",
      component: CaptureFailedSlabComponent,
      data: { title: "Digital Finger Printing", breadcrumb: "CAPTURE FAILED SLAB" }
    },
    {
      path: "view-detailed-analysis",
      component: DetailedAnalysisComponent,
      data: { title: "Digital Finger Printing", breadcrumb: "VIEW DETAILED ANALYSIS" }
    },]
  },




  /* {
    path: "",
    component: DefaultDashboardComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "DASHBOARD" }
  },
  {
    path: "count-processor/:id",
    component: CountProcessorComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "{{id}}" }
  }, */
  {
    path: "slider-processor",
    component: SliderProcessorComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "JOURNEY OF FAILED SLAB" }
  },
  /* {
    path: "detailed-analysis",
    component: FilterTableComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "Detailed Analysis" }
  },
  {
    path: "view-detailed-analysis",
    component: DetailedAnalysisComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "View Detailed Analysis" }
  }, */

  {
    path: "capture-failed-slab",
    component: CaptureFailedSlabComponent,
    data: { title: "Digital Finger Printing", breadcrumb: "CAPTURE FAILED SLAB" }
  }




];
