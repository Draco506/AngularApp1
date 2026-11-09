import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.html',
  styleUrls: ['./user-bio.css']
})
export class UserBioComponent {
  @Input() bio: string = '';
  @Output() bioChanged = new EventEmitter<string>();

  isEditing: boolean = false;
  tempBio: string = '';

  startEditing(): void {
    this.isEditing = true;
    this.tempBio = this.bio; // Load current bio into temporary edit buffer
  }

  saveBio(): void {
    this.bio = this.tempBio;
    this.isEditing = false;
    this.bioChanged.emit(this.bio); // Emit updated bio to parent
  }

  cancelEditing(): void {
    this.isEditing = false;
  }
}