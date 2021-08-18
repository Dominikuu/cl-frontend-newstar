import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "src/app/message.service";
import { HeroService } from "src/app/hero.service";
import { Observable } from "rxjs";
interface DashboardLink {
  heroes: string;
  dashboard: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
  dashboardLink$: Observable<DashboardLink>;
  constructor(
    public heroService: HeroService,
    public messageService: MessageService,
    private http: HttpClient // location: Location
  ) {
    this.dashboardLink$ = this.http.get(
      "/assets/data/dashboard-link.json"
    ) as Observable<DashboardLink>;
  }
}
