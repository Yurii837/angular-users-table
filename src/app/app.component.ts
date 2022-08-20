import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-users-table';


  helloWorld(e: any) {
    console.log(e)
  }

  // employees: Employee[];

  // constructor(private service: Service) {
  //   this.employees = service.getEmployees();
  // }
}
