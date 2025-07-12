import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      state: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      subscribe: [false]
    }, { validators: this.matchEmails });
  }

  // Custom validator to match email and confirm email
  matchEmails(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      // Mock API call (since API implementation is skipped)
      this.appService.currentTab = 'complete'
      this.registrationService.register(registrationData).subscribe({
        next: () => { this.appService.currentTab = 'complete' }
        ,
        error: () => alert('Registration failed. Please try again.')
      });
    }
  }
}