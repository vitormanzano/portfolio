import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MainSection } from '../../shared/main-section/main-section';
import { Github } from '../../services/github';
import { AboutMe } from '../../shared/about-me/about-me';
import { Projects } from '../../shared/projects/projects';
import { SocialMedia } from '../../shared/social-media/social-media';

@Component({
  imports: [Header, MainSection, AboutMe, Projects, SocialMedia],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
