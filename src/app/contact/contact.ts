import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  model = {
    name: '',
    email: '',
    message: ''
  };

  // Called when form is submitted
  send() {
    if (this.model.name && this.model.email && this.model.message) {
      console.log('Contact form submitted:', this.model);
      alert(`Message sent successfully! \n\nFrom: ${this.model.name}`);
      
      // Reset the form after submit
      this.model = { name: '', email: '', message: '' };
    } else {
      alert('Please fill in all fields.');
    }
  }
}
