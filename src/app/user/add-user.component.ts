import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileSaver } from 'file-saver/FileSaver';
import { saveAs } from 'file-saver';

import { User } from '../models/user.model';
import { UserService } from './user.service';


@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  addUser(): void {
    this.userService.addUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
		  });

  };
  
  printUser(): void {
    this.userService.printUser(this.user)
        .subscribe( (data) => {
          alert("User start print.");
		  saveAs(data, "myPDF.pdf");
		  //var fileURL = URL.createObjectURL(data);//to open in another page
		  //window.open(fileURL);//to open in another page
		  });

  };

}