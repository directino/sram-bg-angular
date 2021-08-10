import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  phone: any;
  city: any;
  firstName: any;
  secondName: any;
  description: any;
  reporter: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  onSubmit(formData: any) {
    if (formData.valid) {
      this.afAuth.authState.subscribe(user => {

        if (user) {
          this.db.list('scammers').push(
            {
              city: formData.value.city,
              firstName: formData.value.firstName,
              phone: formData.value.phone,
              secondName: formData.value.secondName,
              description: formData.value.description,
              reporter: user.email
            }
          ).then(value => {
            console.log('Success', value);
            this.router.navigateByUrl('/');
          })
            .catch(error => {
              console.log('Something went wrong: ', error);
            });
        }
      })
    }
  }
}