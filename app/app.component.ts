import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    
    <header class="text-center">
      <nav>
        <div class="navbar-header">
          <a href="/" class="navbar-brand">My Angular 2 App!</a>
        </div>
      </nav>
    </header>

    <div class="jumbotron">
      <h1>Welcome to Our App!</h1>
      <p>{{message}}</p>
    </div>

    <div *ngIf="users">
      <div *ngFor="let user of users">
        {{user.name}} {{user.password}}
      </div>
    </div>
    
    <footer class="text-center">
      Copyright &copy; 2016
    </footer>

  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})

export class AppComponent {
	message = 'Hello';
  users = [
      {id: 10, name: 'Charles', username: 'servilcha'},
      {id: 25, name: 'Ester', username: 'servilester'},
      {id: 30, name: 'Francis', username: 'servilfrancis'}
    ]
  };
}