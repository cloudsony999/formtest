import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formtest';
  
  uname=new FormControl('');
  updateName()
  {
    this.uname.setValue("AMITAVA");
  }
  person1:number=0;
  person2:number=0;
  tall=false;
  ph1=new FormControl(0);
  ph2=new FormControl(0);

  findTaller()
  {
    this.person1=Number(this.ph1.value);
    this.person2=Number(this.ph2.value);
    if (this.person1>this.person2)
    {
    this.tall=true;
    }
    else
    {
    this.tall=false;
    }
  }
    products=[
      {name:"Mobile",price:30000,company:"Samsung"},
      {name:"Music System",price:34000,company:"JBL"},
      {name:"AC",price:38000,company:"Hitachi"}
      
    ];
  }
  

