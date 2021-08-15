import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    /*if (indice !== -1) {
      const heroeBorrado = this.heroes.splice(indice, 1);
      console.log(heroeBorrado);
    }*/

    this.heroeBorrado = this.heroes.shift() || '';
  }
}
