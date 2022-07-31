import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent {
    reasons = ['Wrong colour', 'Wrong size', 'Damaged', 'Other'];

    model = new User("","","","");

    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
}