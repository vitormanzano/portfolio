import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  imports: [BtnPrimary],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
