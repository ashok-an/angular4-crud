import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const USERS_API = 'http://localhost:9991/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  id: number ;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  fetchData = function(){
    this.http.get(USERS_API).subscribe(
      (response: Response) => { this.users = response.json(); }
    )
  }

  editUser = function(){

  }

  deleteUser = function(id){
    if(confirm("Are you sure?")){
      const url = `${USERS_API}/${id}`;
      console.log(url);
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(()=>{
          console.log('+ Deleted:', id);
          this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
