import { Routes } from "@angular/router"
import { HubComponent } from "./hub/hub.component"
import { LoginComponent } from "./login/login.component"

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "hub", component: HubComponent },
]
