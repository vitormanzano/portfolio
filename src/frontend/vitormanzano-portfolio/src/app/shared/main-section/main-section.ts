import { Component } from '@angular/core';
import { MainAnimation } from '../main-animation/main-animation';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  imports: [MainAnimation, BtnPrimary],
  selector: 'app-main-section',
  styleUrl: './main-section.css',
  templateUrl: './main-section.html',
})
export class MainSection {}
