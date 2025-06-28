import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})

export class ReactiveForm implements OnInit{
  reactiveForm! : FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]),
      user: new FormControl("", [Validators.required, Validators.pattern(/^\S*$/)]),
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/)]),
      confirm: new FormControl("", Validators.required),
      addresses: new FormArray([this.createAddress()])
  }, { validators: this.confirmPasswordValidator
    })
  }

  confirmPasswordValidator(form: AbstractControl): ValidationErrors | null{
    let password:String= form.get("password")?.value;
    let confirm:String= form.get("confirm")?.value;
    if(password !== confirm){
      return {passwordInCorrect: true}
    }
    return null
  }

  createAddress():FormGroup {
    return new FormGroup({
      address: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
    })
  }

  get addresses(): FormArray{
    return this.reactiveForm.get("addresses") as FormArray;
  }

  addAddress(){
    this.addresses.push(this.createAddress());
  }
  removeAddress(index: number){
    if(this.addresses.length > 1){
      this.addresses.removeAt(index)
    }
  }
  submit(){
    console.log(this.reactiveForm.value);
  }
}
