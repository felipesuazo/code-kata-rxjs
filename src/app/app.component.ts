import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'code-kata-rxjs';

  ngOnInit() {
    const subject = new BehaviorSubject('Rankmi');

    const observer1 = subject.subscribe(
      data => console.log(data),
      error => this.handleError(error),
      () => console.log('observer1 completed')
    )

    subject.next('Hello');

    const observer2 = subject.subscribe(
      data => console.log(data),
      error => this.handleError(error),
      () => console.log('observer2 completed')
    )

    subject.next('World!');
    subject.complete();
  }

  handleError(error) {
    console.error(error);
  }
}
