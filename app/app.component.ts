import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template: `

        {{message}}

    `
})

export class AppComponent {
    message = 'Hello there!';
}