
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.css']
})
export class UserStatusComponent {
  @Input() isOnline: boolean = false;
  
  // Emits the updated boolean state back to the parent component
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus(): void {
    this.isOnline = !this.isOnline;
    this.statusChanged.emit(this.isOnline);
  }
}