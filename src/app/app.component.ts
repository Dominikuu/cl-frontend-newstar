import { Component } from "@angular/core";
import { MessageService } from "src/app/message.service";
import { HeroService } from "src/app/hero.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";

  constructor(
    public heroService: HeroService,
    public messageService: MessageService
  ) {}
}
