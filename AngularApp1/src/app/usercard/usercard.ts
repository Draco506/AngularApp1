
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.html',
  styleUrls: ['./usercard.css']
})
export class usercard {
  
  // Receives user profile data from the parent component
  @Input() user!: User;
}

