import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  personaje: any;
  comentario: string = '';

  constructor(
    private route: ActivatedRoute,
    private api: RickandmortyService,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.detalle(id).subscribe(data => {
        this.personaje = data;
      });
    }
  }

  guardarEnFirebase() {
    const data = {
      id: this.personaje.id,
      name: this.personaje.name,
      status: this.personaje.status,
      species: this.personaje.species,
      gender: this.personaje.gender,
      origin: this.personaje.origin.name,
      image: this.personaje.image,
      comentario: this.comentario
    };

    const personajesRef = collection(this.firestore, 'personajes');
    addDoc(personajesRef, data).then(() => {
      alert('Personaje guardado en Firebase');
      this.comentario = '';
    }).catch(err => {
      console.error(err);
      alert('Error al guardar en Firebase');
    });
  }
}
