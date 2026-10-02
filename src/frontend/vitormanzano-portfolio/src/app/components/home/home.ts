import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MainSection } from '../../shared/main-section/main-section';
import { Github } from '../../services/github';
import { AboutMe } from '../../shared/about-me/about-me';

@Component({
  imports: [Header, MainSection, AboutMe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private githubService = inject(Github);

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (response) => console.log(response),
    });
  }
}
