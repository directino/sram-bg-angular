import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string, repeatPassword: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Success', value);
     this.router.navigateByUrl('/');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

}
