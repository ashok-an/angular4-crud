import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

const USERS_API = 'http://localhost:9991/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  constructor(private http: Http) { }

  fetchData = function(){
    this.http.get(USERS_API).subscribe(
      (response: Response) => { this.users = response.json(); }
    )
  }

  ngOnInit() {
    this.fetchData();
  }

}
