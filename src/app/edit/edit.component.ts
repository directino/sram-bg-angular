import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  scammer: Observable<any>;
  id: any;
  phone: any;
  city: any;
  firstName: any;
  secondName: any;
  description: any;
  reporter: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.scammer = db.object('scammers/' + this.id).valueChanges();

  }

  ngOnInit() {

  }

  onSubmit(formData: any) {
    if (formData.valid) {
      this.afAuth.authState.subscribe(user => {

        if (user) {
          this.db.list('scammers').update(this.id,
            {
              city: formData.value.city,
              firstName: formData.value.firstName,
              phone: formData.value.phone,
              secondName: formData.value.secondName,
              description: formData.value.description,
              reporter: user.email
            }
          ).then(value => {
            console.log('Success');
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