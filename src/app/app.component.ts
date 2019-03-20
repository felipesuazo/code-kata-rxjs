import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'code-kata-rxjs';

  ngOnInit() {
    const source = timer(0, 5000);

    const example = source.pipe(
      switchMap(() => interval(500))
    );

    const subscribe = example.subscribe(value => console.log(value));
  }

  handleError(error) {
    console.error(error);
  }
}
