import { inject } from "@angular/core"
import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http"
import { Router } from "@angular/router"
import { catchError } from "rxjs/operators"
import { throwError } from "rxjs"

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        localStorage.removeItem("access_token")
        router.navigate(["login"])
      }
      return throwError(() => err)
    })
  )
}
