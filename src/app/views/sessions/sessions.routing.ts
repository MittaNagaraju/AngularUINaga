
import { Routes } from "@angular/router";

import { SigninComponent } from "./signin/signin.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component";
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const SessionsRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      },
      {
        path: "coming-soon",
        component: ComingSoonComponent,
        data: { title: "Coming Soon" }
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" }
      },
      {
        path: "error",
        component: ErrorComponent,
        data: { title: "Error" }
      }
    ]
  }
];
