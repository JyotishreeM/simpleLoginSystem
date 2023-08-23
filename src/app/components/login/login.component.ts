import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private http:HttpClient,private userService:UserService){}

UserDetails='';
signupUsers:any[]=[];
signupObj:any={
  username:'',
  email:'',
  password:''
}
loginObj:any={
  username:'',
  password:''
}
signup(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers))
this.signupObj={
  username:'',
  email:'',
  password:''
}

}
login(){
  const isUserExist = this.signupUsers.find(m=>m.username == this.loginObj.username && m.password == this.loginObj.password);
  if(isUserExist != undefined){
    alert('user logged in successfully!')
    this.router.navigate(['/dashboard'])
    this.userService.userData=this.UserDetails;
    this.UserDetails=isUserExist.username;
    localStorage.setItem('loginData',this.UserDetails)
    console.log(this.UserDetails)
  }
  else{
    alert('Wrong credentials!')
  }
  
}
ngOnInit(): void {
    const LocalData = localStorage.getItem('signupUsers');
    if(LocalData!=null){
      this.signupUsers = JSON.parse(LocalData)
    }
}
}
