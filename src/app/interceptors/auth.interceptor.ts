import { HttpInterceptorFn } from "@angular/common/http"

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const access_token = localStorage.getItem("access_token")
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return next(clonedReq)
}
