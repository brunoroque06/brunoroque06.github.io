import { Component } from "@angular/core";
import { TypingDirective } from "./typing.directive";

@Component({
  selector: "app-root",
  template: `
    <main>
      <div class="header">
        <div class="name">
          <span typing>Bruno Roque</span>
          <span class="caret">&nbsp;</span>
        </div>
        <div class="title">Software Engineer</div>
      </div>
      <div class="links">
        @for (l of links; track l.ref) {
          <a href="{{ l.ref }}" target="_blank" rel="noopener noreferrer">{{
            l.name
          }}</a>
        }
      </div>
    </main>
  `,
  imports: [TypingDirective],
})
export class AppComponent {
  links = [
    {
      name: "GitHub",
      ref: "https://github.com/brunoroque06",
    },
    {
      name: "Resume",
      ref: "/bruno-roque-resume.pdf",
    },
  ];
}
