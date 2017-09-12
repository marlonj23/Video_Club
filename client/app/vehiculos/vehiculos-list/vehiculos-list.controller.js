'use strict';
(function(){

class VehiculosListComponent {
  constructor() {
    this.vehiculos = [
      {
        id:1,
        marca:"Kia",
        descripcion:"color gris, transmision automatica, cuatro puertas",
        valorAlquiler:101800,
        tipo:"pequeño"
      },
      {
        id:2,
        marca:"Kia picanto",
        descripcion:"color gris, transmision automatica, cuatro puertas",
        valorAlquiler:251700,
        tipo:"Mediano"
      },
      {
        id:3,
        marca:"Ford focus",
        descripcion:"color rojo,aire acondicionado 100cv",
        valorAlquiler:301750,
        tipo:"Mediano"
      },
      {
        id:4,
        marca:"Renault",
        descripcion:"color blanco, transmision automatica, cuatro puertas",
        valorAlquiler:400000,
        tipo:"Gama Alta"
      }
    ];
  }
  $onInit(){
  for(var i = 0; i < this.vehiculos.length; i++){
    this.vehiculos[i].impuesto = (this.vehiculos[i].valorAlquiler  + (this.vehiculos[i].valorAlquiler * 0.15));
    console.log(this.vehiculos[i]);
    if (this.vehiculos[i].tipo == "Mediano") {
      this.vehiculos[i].descuento = this.vehiculos[i].impuesto - (this.vehiculos[i].impuesto * 0.2);

    }
    else {
      this.vehiculos[i].descuento = this.vehiculos[i].impuesto;
    }
  }

  }
}

angular.module('videoClubApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs: 'vm'
  });

})();
