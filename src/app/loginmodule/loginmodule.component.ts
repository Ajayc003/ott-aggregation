import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.scss']
})
export class LoginmoduleComponent implements OnInit {
formGroup:FormGroup;
  constructor(private authservice:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.initform()
  }
  initform(){
    this.formGroup=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])

    })
  }
  loginprocessed(){
    // console.log("hello")
  if(this.formGroup.valid){
    // console.log("hello2")
    console.log(this.formGroup.value)
    this.authservice.login(this.formGroup.value).subscribe(result=>{
      // console.log("hello")
      console.log(result)
      localStorage.setItem('token',result.jwt)
      this.router.navigateByUrl('/ott-onboarding')
      if(result.success){
        console.log(result);
}})
    }
  }

}

