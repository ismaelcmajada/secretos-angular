import { CanActivateFn, Router } from "@angular/router"
import { inject } from "@angular/core"

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const access_token = localStorage.getItem("access_token")
  if (access_token) {
    router.navigate(["hub"])
    return false
  }
  return true
}
