import { CanActivateFn, Router } from "@angular/router"
import { inject } from "@angular/core"

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const access_token = localStorage.getItem("access_token")
  if (!access_token) {
    router.navigate(["login"])
    return false
  }
  return true
}
