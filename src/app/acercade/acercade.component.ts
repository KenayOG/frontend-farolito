import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [AnimateOnScrollModule, CardModule, DividerModule],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css',
})
export class AcercadeComponent {}
