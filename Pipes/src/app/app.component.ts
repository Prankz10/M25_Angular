import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
    students: any[]= [
    {
      ID:101,Name:"Pranit Jadhav",Gender:"male",City:"mumbai",Fee:25000
    },
    {
      ID:102,Name:"Akshata Jadhav",Gender:"female",City:"pune",Fee:35000
    },
    {
      ID:103,Name:"Shekhar Jadhav",Gender:"male",City:"Thane",Fee:45000
    }];

    today:number=Date.now();
}
