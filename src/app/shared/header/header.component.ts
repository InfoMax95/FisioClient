import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}
