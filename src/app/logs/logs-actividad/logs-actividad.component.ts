import { Component } from '@angular/core';
import { Logs } from '../../interfaces/logs';
import { LogsService } from '../../services/logs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logs-actividad',
  templateUrl: './logs-actividad.component.html',
  styleUrl: './logs-actividad.component.css',
})
export class LogsActividadComponent {
  form: FormGroup;
  logs: Logs[] = [];
  cargando: boolean = true;

  constructor(private logsService: LogsService, private fb: FormBuilder) {
    this.form = this.fb.group({
      moduloNombre: ['', Validators.required],
    });
  }

  buscarLogs() {
    if (this.form.invalid) {
      return;
    }

    const moduloNombre = this.form.get('moduloNombre')?.value;
    console.log('Modulo buscado: ' + moduloNombre);
    this.cargando = true;
    this.logsService.getLogs(moduloNombre).subscribe({
      next: (data) => {
        this.logs = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }
}
