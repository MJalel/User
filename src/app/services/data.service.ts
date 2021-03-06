import { Injectable } from '@angular/core';


export interface User {

  name: string;
  username: string;
  email: string;
  id: number;
  street:string;
  phone:string;
  website:string;
  company:string;
  city:string;

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  public users: User[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.bizDammm!",
        "street": "Kulas Light",
        "city": "Gwenborough",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": "Romaguera-Crona",

    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company":  "Deckow-Crist",

    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": "Romaguera-Jacobson",

    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": "Robel-Corkery",

    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company":  "Keebler LLC",

    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company":"Considine-Lockman",

    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": "Johns Group",

    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "street": "Ellsworth Summit",
        "city": "Aliyaview",
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
        "company": "Abernathy Group",

    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": "Yost and Sons",

    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": "Hoeger LLC",

    }
  ];

  public getMessages(): User[] {
    return this.users;
  }

  public getMessageById(id: number): User {
    return this.users[id-1];
  }
}