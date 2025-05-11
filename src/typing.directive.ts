import { Directive, ElementRef, input, OnDestroy, OnInit } from "@angular/core";
import { concatMap, delay, from, of, Subscription, tap } from "rxjs";

function type(val: string) {
  return [...Array(val.length + 1).keys()].map((i) => val.substring(0, i));
}

@Directive({
  selector: "[typing]",
  standalone: true,
})
export class TypingDirective implements OnInit, OnDestroy {
  delay = input(1000);
  interval = input(100);

  private sub?: Subscription;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.sub = of(this.el.nativeElement.innerText)
      .pipe(
        tap(() => (this.el.nativeElement.innerText = "")),
        delay(this.delay()),
        concatMap((n) => from(type(n))),
        concatMap((n) => of(n).pipe(delay(this.interval())))
      )
      .subscribe((v) => {
        this.el.nativeElement.innerText = v;
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
