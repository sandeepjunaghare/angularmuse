import { Component, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'app-hooks-list',
  template: `
    <hr />
    <div class="parent">
      <h2>Lifecycle Hooks events list</h2>

      <button type="button" (click)="toggleChild()">
        {{ hasChild ? 'Destroy' : 'Create' }} Lifecycle Hooks Component
      </button>

      <button type="button" (click)="updateHero()" [hidden]="!hasChild">
        Update Hero
      </button>

      <div class="info">
        <hooks-list *ngIf="hasChild" [hero]="heroName"></hooks-list>

        <h3>-- Lifecycle Hook Log --</h3>
        <div *ngFor="let msg of hookLog">{{ msg }}</div>
      </div>
    </div>
`,

    providers: [ LoggerService ]
})
  
export class HooksListComponent {
  
  hasChild = false;
  hookLog: string[] = [];
 
  heroName = 'Windstorm'; 
  private logger: LoggerService;

  constructor(logger: LoggerService) { 
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
