import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: any;
  password: any;
  repeatPassword: any;

  constructor(public authService: UserService, private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

}