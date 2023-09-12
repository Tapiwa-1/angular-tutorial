import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
    <main>
     
        <header class="brand-name">
        <a class="d-flex align-items-center" [routerLink]="['/']">
          <img class="brand-logo" src="/assets/logo.png" height="50" alt="logo" aria-hidden="true">
          <h4 style=" text-underline:none ">Homes</h4>
        </a>
        </header>
      
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

