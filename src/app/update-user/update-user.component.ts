import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

const USERS_API = 'http://localhost:9991/users';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  isUpdated: boolean = false;
  data: object = {};
  invalidId: boolean = false;
  userObj: object = {};

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
    private route: ActivatedRoute,
    private router: Router) { }

  updateUser = function(user): void {
    this.userObj = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      companyId: user.companyId
    };

    const userUrl = `${USERS_API}/${this.id}`;
    this.http.put(userUrl, JSON.stringify(this.userObj), {headers: this.headers}).toPromise()
    .then(() => {
      this.isUpdated = true;
      this.router.navigate(['/']);
    });
    

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    const userUrl = `${USERS_API}/${this.id}`;
    this.http.get(userUrl).subscribe(
      (response: Response) => { this.data = response.json(); },
      (error?: string) => { this.invalidId = true; console.log("* Error: Invalid ID:", this.id); }
    )

  }

}
