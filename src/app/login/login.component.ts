import { Component, inject } from "@angular/core"
import { ButtonModule } from "primeng/button"
import { DividerModule } from "primeng/divider"
import { InputTextModule } from "primeng/inputtext"
import { FormsModule } from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"

@Component({
  selector: "app-login",
  imports: [ButtonModule, DividerModule, InputTextModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  standalone: true,
})
export class LoginComponent {
  loginObj: any = {
    email: "",
    password: "",
  }

  http = inject(HttpClient)

  router = inject(Router)

  onLogin() {
    this.http
      .post("http://localhost:3000/auth/login", this.loginObj)
      .subscribe({
        next: (res: any) => {
          if (res.access_token) {
            localStorage.setItem("access_token", res.access_token)
            this.router.navigate(["hub"])
          } else {
            alert("Unexpected response structure")
          }
        },
        error: (err) => {
          if (err.status === 401) {
            alert("Invalid username or password")
          } else {
            alert("Error: " + err.status)
          }
        },
      })
  }
}
