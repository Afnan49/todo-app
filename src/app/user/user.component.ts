import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type user } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: user;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  get imgUrl() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
