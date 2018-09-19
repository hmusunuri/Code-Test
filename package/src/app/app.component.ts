import { Component } from '@angular/core';
import { Subscription ,  Observable} from 'rxjs';

import { TimerObservable } from 'rxjs-compat/observable/TimerObservable';

@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'count-down-clock';
  isActiveCounter = false;
  subscription: Subscription;
  currentDuration = 0;

  startCall() {
    const timer = TimerObservable.create(0, 1000);
      this.subscription = timer.subscribe(time => {
        this.currentDuration = time;
      });
      this.isActiveCounter = true;
  }

  endCall() {
    this.isActiveCounter = false;
    this.currentDuration = 0;
    this.subscription.unsubscribe();
  }
}
