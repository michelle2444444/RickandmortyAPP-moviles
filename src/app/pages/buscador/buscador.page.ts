import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  nombre = '';
  personajes: any[] = [];

  constructor(private api: RickandmortyService) {}

  buscar() {
    this.api.buscar(this.nombre).subscribe((res: any) => {
      this.personajes = res.results;
    }, () => {
      this.personajes = [];
      alert("No se encontró el personaje");
    });
  }
  
  verDetalle(id: number) {
  window.location.href = `/detalle/${id}`;
}

}
