import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // selectedUser: any;
  users = DUMMY_USERS;
  onSelectUser(id: string) {
    // const user = this.users.find((user) => {
    //   return user.id === id;
    // });
    // console.log(user);
    // this.selectedUser = user?.name;
    this.selectedUserId = id;
  }
}
