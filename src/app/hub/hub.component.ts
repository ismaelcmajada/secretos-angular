import { Component } from "@angular/core"
import { OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"

@Component({
  selector: "app-hub",
  imports: [],
  templateUrl: "./hub.component.html",
  styleUrl: "./hub.component.css",
})
export class HubComponent implements OnInit {
  http = inject(HttpClient)

  ngOnInit() {
    this.http.get("http://localhost:3000/auth/profile").subscribe((res) => {
      console.log(res)
    })
  }
}
