import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from './countries-interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

 

  contactForm = this.fb.group({
    firstName :["",[Validators.required , Validators.minLength(3)]],
    lastName :["",[Validators.required , Validators.minLength(3)]],
    email :["",[Validators.required , Validators.email]],
    country :["Egypt",[Validators.required]],
    gender :[Validators.required],
    isMarried :[false]
  })

  myValues = this.contactForm.controls

  onsubmit(x:any){
    console.log(x)
     
  }

  countries: Country[]=[{name:"Egypt"},{name:"Giza"},{name:"Tanta"}]

  ngOnInit(): void {
  }

}
