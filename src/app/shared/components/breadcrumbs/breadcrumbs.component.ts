import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.router.url);
      });
  }

  private buildBreadcrumbs(url: string): { label: string; url: string }[] {
    const segments = url.split('/').filter((segment) => segment);
    const breadcrumbs = [];
    let accumulatedUrl = '';

    for (const segment of segments) {
      accumulatedUrl += `/${segment}`;
      breadcrumbs.push({ label: segment, url: accumulatedUrl });
    }

    return breadcrumbs;
  }
}
