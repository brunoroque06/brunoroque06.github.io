import { Component } from "@angular/core";
import { concatMap, delay, from, of } from "rxjs";
import { AsyncPipe, NgForOf } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  template: `
    <header>
      <a
        *ngFor="let l of links"
        href="{{ l.ref }}"
        target="_blank"
        rel="noopener noreferrer"
        >{{ l.name }}</a
      >
    </header>
    <main>
      <div>
        <span>{{ name | async }}</span>
        <span class="caret">&nbsp;</span>
      </div>
      <div class="title">Software Engineer</div>
    </main>
  `,
})
export class AppComponent {
  links = [
    {
      name: "Curriculum Vitae",
      ref: "/assets/docs/bruno-roque-cv.pdf",
    },
    {
      name: "GitHub",
      ref: "https://github.com/brunoroque06",
    },
    {
      name: "LinkedIn",
      ref: "https://www.linkedin.com/in/brunoroque06",
    },
  ];

  name = of("Bruno Roque").pipe(
    delay(1000),
    concatMap((n) =>
      from([...Array(n.length + 1).keys()].map((i) => n.substring(0, i)))
    ),
    concatMap((n) => of(n).pipe(delay(100)))
  );
}
