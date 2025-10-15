import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9+\\-\\s()]*$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    // Here you would typically send the form data to your backend
    console.log('Form submitted', this.contactForm.value);
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Thank you for your message. We will get back to you soon!');
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}