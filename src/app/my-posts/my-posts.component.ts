import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  user: any;
  scammers: any;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.scammers = db.list('/scammers', ref => ref.orderByChild("reporter").equalTo(user.email)).valueChanges(undefined, {idField: 'id'});
      }    
    })
  }  

  deleteObject(itemKey:any) {
    this.db.object('scammers/' + itemKey).remove();
   }
  
  ngOnInit(): void {
  }

}