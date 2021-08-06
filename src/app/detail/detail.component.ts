import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: string | null;
  scammer: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    db: AngularFireDatabase,
    private _location: Location
    ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.scammer = db.object('scammers/' + this.id).valueChanges();
  }  

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
