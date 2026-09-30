import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MainSection } from '../../shared/main-section/main-section';

@Component({
  imports: [Header, MainSection],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
