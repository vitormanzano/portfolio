import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'btn-primary',
  styleUrl: './btn-primary.css',
  templateUrl: './btn-primary.html',
})
export class BtnPrimary {
  text = input.required<string>();
}
