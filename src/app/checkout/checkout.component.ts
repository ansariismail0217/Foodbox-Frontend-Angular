import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [],
        city: [''],
        zip: [''],
        state: ['']
      }),
      creditCard: this.formBuilder.group({
        nameOnCard: [''],
        cardType: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });

  }

  onSubmit(){
    console.log(`Clicked`);
    console.log(this.checkoutFormGroup.get('customer')?.value);
  }

}
