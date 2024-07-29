import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';

@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent implements OnInit {
  componenteId: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componenteId = params.get('id');
    });
  }

  componentDetail: ComponentDetail[] = [];
}
