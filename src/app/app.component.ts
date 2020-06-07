import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ease4Es';
  public defpwd:string= "ieb20"; //
  public isshow:boolean = false;

  ngOnInit(): void {
    var storage=window.localStorage;
    var flag = storage.getItem("islock");
    if(flag==null){
      var pwd = null;
      
      pwd = prompt("please enter passwoooord:","")
      while(pwd!=this.defpwd){

        pwd = prompt("please enter passwoooord:","")
      }
      this.isshow = true;
      storage.setItem("islock","true");


      }else {
        
        this.isshow = true;
        
      }
  }
}
