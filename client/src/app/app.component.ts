import { Component } from '@angular/core';
import {IUser} from "../user/IUser";
import {UserService} from "../user/user.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [UserService]
})

export class AppComponent  {
  appTitle = 'Expertzlab';

  users:IUser[] = null;

  constructor(private userService: UserService){
  }

  ngOnInit():void{
    this.userService.getUsers().subscribe(
     uL => this.users = uL
    )
  }

}
