import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private responsive: BreakpointObserver) {}

  isXSmall: boolean = false;
  isSmall: boolean = false;
  isMedium: boolean = false;

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = true;
          this.isSmall = false;
          this.isMedium = false;
        }
        else if (breakpoints[Breakpoints.Small]) {
          this.isXSmall = false;
          this.isSmall = true;
          this.isMedium = false;
        }
        else if (breakpoints[Breakpoints.Medium]) {
          this.isXSmall = false;
          this.isSmall = false;
          this.isMedium = true;
        }
    });
  }
}
