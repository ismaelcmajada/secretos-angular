import { Routes } from "@angular/router"
import { HubComponent } from "./hub/hub.component"
import { LoginComponent } from "./login/login.component"
import { authGuard } from "./guards/auth.guard"
import { publicGuard } from "./guards/public.guard"

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [publicGuard] },
  { path: "hub", component: HubComponent, canActivate: [authGuard] },
]
