import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

const USERS_API = 'http://localhost:9991/users';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }
  userObj :object = {};
  isAdded :boolean = false;

  addNewUser = function(user): void{
    this.userObj = {
    'id': user._id,
    'firstName': user.firstName,
    'lastName': user.lastName,
    'age': user.age,
    'companyId': user.companyId
    }
    this.http.post(USERS_API, this.userObj).subscribe(
      (response: Response) => {
        console.log('+ Added:', response);
        this.isAdded = true;
      });
  }
  ngOnInit() {
  }

}
