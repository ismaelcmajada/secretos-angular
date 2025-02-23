import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { provideRouter } from "@angular/router"
import { provideHttpClient, withInterceptors } from "@angular/common/http"

import { routes } from "./app.routes"

import { providePrimeNG } from "primeng/config"
import Aura from "@primeng/themes/aura"
import { authInterceptor } from "./interceptors/auth.interceptor"
import { errorInterceptor } from "./interceptors/auth-error.interceptor"

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
}
