import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    const id = this.heroes.length;
    this.heroService.addHero(new Hero({ name, id })).subscribe((hero) => {
      this.heroes.push(hero);
    });
    this.heroService.heroes$.next(this.heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    console.log(this.heroes);
    this.heroService.deleteHero(hero).subscribe();
    this.heroService.heroes$.next(this.heroes);
  }
}
