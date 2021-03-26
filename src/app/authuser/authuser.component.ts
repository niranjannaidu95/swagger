import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authuser',
  templateUrl: './authuser.component.html',
  styleUrls: ['./authuser.component.scss']
})
export class AuthuserComponent implements OnInit {
public data:any;
  constructor(private service:AuthService) {}

  ngOnInit(): void {
    this.service.authLogin()
    .subscribe(
     res => this.data=res
    )
  }

}
