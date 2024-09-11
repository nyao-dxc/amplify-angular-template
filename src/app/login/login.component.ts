// import { Component } from '@angular/core';
// import { MsalService } from '@azure/msal-angular';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   constructor(private msalService: MsalService) {}

//   login() {
//     this.msalService.loginRedirect();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // ここで認証トークンを取得し、ローカルストレージに保存します
      localStorage.setItem('auth_token', code);
      this.router.navigate(['/todos']);
    }
  }
}