import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

	form: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  	this.form = this.formBuilder.group({
      hotel_name: [null, [Validators.required]], 
      email: [null, [Validators.required, Validators.email]],
      //password: [null, Validators.required],
    });

  }


  	isFieldValid(field: string) {
	  return !this.form.get(field).valid && this.form.get(field).touched;
	}

	onSubmit(){
		 console.log(this.form.value)
	}

}
