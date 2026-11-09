import { Component } from '@angular/core';
import { User } from './models/user.model';
import { usercard } from './usercard/usercard';
import { UserStatusComponent } from './user-status/user-status';
import { UserBioComponent } from './user-bio/user-bio';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [usercard, UserStatusComponent, UserBioComponent],
  template: `
    <div class="dashboard-wrapper">
      <h1>User Profile Dashboard</h1>
      
      <!-- Component 1: User Card receiving data via @Input -->
      <app-user-card [user]="currentUser"></app-user-card>

      <!-- Component 2: Status toggle with @Input and @Output event binding -->
      <app-user-status 
        [isOnline]="currentUser.isOnline" 
        (statusChanged)="handleStatusChange($event)">
      </app-user-status>

      <!-- Component 3: Bio editor with @Input and @Output event binding -->
      <app-user-bio 
        [bio]="currentUser.bio" 
        (bioChanged)="handleBioChange($event)">
      </app-user-bio>
    </div>
  `,
  styles: [`
    .dashboard-wrapper {
      font-family: Arial, sans-serif;
      max-width: 450px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 12px;
      background: #f8f9fa;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      text-align: center;
    }
    h1 {
      color: #333;
      font-size: 1.6rem;
      margin-bottom: 20px;
    }
  `]
})
export class App {
  // Model data instantiated using the User interface
  currentUser: User = {
    name: 'Jane Doe',
    age: 28,
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    isOnline: true,
    bio: 'Software development student learning Angular components, templates, and data binding!'
  };

  // Handles state updates when UserStatusComponent emits changes
  handleStatusChange(newStatus: boolean): void {
    this.currentUser.isOnline = newStatus;
  }

  // Handles state updates when UserBioComponent emits changes
  handleBioChange(newBio: string): void {
    this.currentUser.bio = newBio;
  }
}