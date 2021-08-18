import { Component, OnInit } from "@angular/core";
import { BsJs1Service } from "./bs-js1.service";
import { forkJoin, of, concat } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-bonus-point",
  templateUrl: "./bonus-point.component.html",
  styleUrls: ["./bonus-point.component.css"],
})
export class BonusPointComponent implements OnInit {
  constructor(private bsJs1Service: BsJs1Service) {}

  ngOnInit() {}

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`;
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`;
  }

  answerCookie1() {
    //ToDo..
    const cookieName = "Key";
    const cookieValue = "ck1";
    const myDate = new Date();
    myDate.setMonth(myDate.getMonth() + 12);
    document.cookie =
      cookieName +
      "=" +
      cookieValue +
      ";expires=" +
      myDate +
      ";domain=.careline.host;path=/bonusPoint";
    // document.cookie = "";
    console.log(document.cookie);
  }

  answerRxjs1() {
    const first$ = of("first", 2000).pipe(tap(() => console.log("first")));
    const second$ = of("second", 1500).pipe(tap(() => console.log("second")));
    const third$ = of("thrid", 800).pipe(tap(() => console.log("thrid")));

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third
    // ToDo...
    concat(first$, second$, third$).subscribe(() => {});
  }

  answerJs1() {
    let result: string;
    const parentChildMap: { [key: string]: string[] } = {};
    this.bsJs1Service.getSample().forEachChilds((child) => {
      // ToDo : 實作你的解決方案...
      if (!parentChildMap[child.parent.value]) {
        parentChildMap[child.parent.value] = child.parent["child"].map(
          ({ value }) => value
        );
      }
    });
    const res = [];
    for (const [parent, childs] of Object.entries(parentChildMap)) {
      res.push(...childs, parent);
    }
    result = res.join(" , ");

    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result}`);
  }
}
