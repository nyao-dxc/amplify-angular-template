import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

Amplify.configure(outputs);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, TodosComponent,RouterModule]
})
export class AppComponent {
  constructor(private router: Router, public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }

  navigateToLogin() {
    //window.location.href = 'https://nyao.auth.ap-northeast-1.amazoncognito.com/oauth2/authorize?client_id=3b1i73n0o57vdk824dsts37jou&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3sostuq9a761k.amplifyapp.com%2F';
    this.router.navigate(['/todos']);
  }
}
