import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  template:` <div>
  <!--class binding-->
  <p class="para">Hey Siri,show me the Submit button</p>
  <button class="colorClass">Submit</button>
  </div>`,
  /* External template*/
 // templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit{



  /*Columnspan:number=2;
  PageHeader:string="Company Details:"*/
Company:string="Capgemini";
Contact:string="Pranit";
Country:string="India";

Company1:string="Cognizant";
Contact1:string="Akshata";
Country1:string="Germany";

  constructor() {}

  ngOnInit(): void {
    
  }
}
