import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroSearchComponent } from "src/app/hero-search/hero-search.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
