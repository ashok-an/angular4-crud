# Ng4App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Assumption:
* REST-API server is running on http://localhost:9991
`$json-server -p 9991 -w db-file.json`

* DB file: A json file like below:
`$cat db-file.json
{
  "users": [
    {
      "id": 1,
      "firstName": "Amit",
      "lastName": "Agarwal",
      "age": 37,
      "companyId": "1"
    },
    {
      "id": 2,
      "firstName": "Ashok",
      "lastName": "Shastry",
      "age": 35,
      "companyId": "1"
    },
  {
      "id": 3,
      "firstName": "Deepak",
      "lastName": "Vernekar",
      "age": 38,
      "companyId": "1"
    },
    {
      "id": 4,
      "firstName": "Ebin",
      "lastName": "Johnson",
      "age": 36,
      "companyId": "2"
    }
  ]
}
`

## Screenshots
![alt text](screenshots/ADD.PNG?raw=true "CREATE")
![alt text](screenshots/READ.PNG?raw=true "READ")
![alt text](screenshots/UPDATE.PNG?raw=true "UPDATE")
![alt text](screenshots/DELETE.PNG?raw=true "DELETE")

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
