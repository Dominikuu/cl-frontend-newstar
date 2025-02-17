import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { MessagesComponent } from "./messages/messages.component";
import { BonusPointModule } from "./bonus-point/bonus-point.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      // In order to get json in assets folder
      // Ref: https://github.com/ngx-translate/core/issues/853
      passThruUnknownUrl: true,
    }),
    BonusPointModule,
  ],
  declarations: [AppComponent, HeroDetailComponent, MessagesComponent],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
