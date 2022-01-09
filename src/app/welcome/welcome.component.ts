import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Gpa Calculator";
  grade1="";
  credit1="";
  grade2="";
  credit2="";
  grade3="";
  credit3="";
  grade4="";
  credit4="";
  mark5="";
  grade5="";
  credit5=""
  grade6="";
  credit6="";
  grade7="";
  credit7="";
  grade8="";
  credit8="";
  grade9="";
  credit9="";

  //score1 = 0;
  gpa=0;
  grade = "";
  grade11 = "";


  constructor(private router: Router) { }

/*gradetoPoints(){
    var grade1 = this.pointsforGrade(this.grade1);
    var grade2 = this.pointsforGrade(this.grade2);
    var grade3 = this.pointsforGrade(this.grade3);
    var grade4 = this.pointsforGrade(this.grade4);
    var grade5 = this.pointsforGrade(this.grade5);
    var grade6 = this.pointsforGrade(this.grade6);
    var grade7 = this.pointsforGrade(this.grade7);
    var grade8 = this.pointsforGrade(this.grade8);
    var grade9 = this.pointsforGrade(this.grade9);
}

  pointsforGrade(grade: string){
    if(grade == "O"){
      return "10";
    }
    else if(grade == "A+"){
      return "9";
    }
    else if(grade == "A"){
      return "8";
    }
    else if(grade == "B+"){
      return "7";
    }
    else if(grade == "B"){
      return "6";

  }*/

  calculateGPA(){
    this.gpa = (parseInt(this.grade1) * parseInt(this.credit1) + parseInt(this.grade2) * parseInt(this.credit2)
    + parseInt(this.grade3) * parseInt(this.credit3) + parseInt(this.grade4) * parseInt(this.credit4)
    + parseInt(this.grade5) * parseInt(this.credit5) + parseInt(this.grade6) * parseInt(this.credit6)
    + parseInt(this.grade7) * parseInt(this.credit7) + parseInt(this.grade8) * parseInt(this.credit8)
    + parseInt(this.grade9) * parseInt(this.credit9))/(parseInt(this.credit1) + parseInt(this.credit2)
    + parseInt(this.credit3) + parseInt(this.credit4) + parseInt(this.credit5) + parseInt(this.credit6)
    + parseInt(this.credit7) + parseInt(this.credit8) + parseInt(this.credit9));

    //this.gpa = (parseInt(this.mark1)+parseInt(this.mark2)+parseInt(this.mark3)+parseInt(this.mark4)+parseInt(this.mark5))/5;

  }


  ngOnInit(): void {
  }

}
