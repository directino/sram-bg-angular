import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scammers: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.scammers = db.list('scammers').valueChanges(undefined, {idField: 'id'});
  }  


  
  ngOnInit(): void {
  }
  

}
