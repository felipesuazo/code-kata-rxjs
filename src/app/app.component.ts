import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, timer, interval, Subscription } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  title = 'code-kata-rxjs';

  ngOnInit() {
    const source = of(1,2,3,4,5);

    const example = source.pipe(
      tap(value => console.log(`Before map ${value}`)),
      map(value => value + 10),
      tap(value => console.log(`After map ${value}`))
    );

    this.subscriptions.add(
      example.subscribe(value => console.log(value))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleError(error) {
    console.error(error);
  }
}
