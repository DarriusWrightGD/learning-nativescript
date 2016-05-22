import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {setHintColor} from "../../utils/hint-util";
import {TextField} from "ui/text-field";
 

@Component({
  selector: "login",
  providers: [UserService],
  templateUrl:"./pages/login//login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginPage implements OnInit{
  user: User;
  isLoggingIn: boolean = true;
  
  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;
  
  constructor(private _userService: UserService, private _router: Router, private page: Page){
    this.user = new User();
    this.user.email = "darriuswrightgd@gmail.com";
    this.user.password = "password";
  }
  
  ngOnInit(){
    this.page.actionBarHidden = true;
    this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
  }
  
  submit() {
    if(!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }
    
    if(this.isLoggingIn){
      this.login();
    }else {
      this.signUp();
    }
  }
  
  login() {
    this._userService.login(this.user)
      .subscribe(
        ()=> this._router.navigate(["List"]),
        (error)=> alert("Unfortunately we could not find your account.")
      )
  }
  
  signUp(){
    this._userService.register(this.user)
      .subscribe(()=> {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      ()=> alert("Sorry we were unable to create your account."));
  }
  
  toggleDisplay()
  {
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor:this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration:200
    })
  }
  
  private setTextFieldColors(){
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;
    
    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;
    
    let hintColor = new Color(this.isLoggingIn ? "#ACA647" : "#C4AFB4");
    setHintColor({view:emailTextField, color: hintColor});
    setHintColor({view:passwordTextField, color: hintColor});
  }
}
