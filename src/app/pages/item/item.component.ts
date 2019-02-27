import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
                public productoService: ProductosService) {
    this.route.params
      .subscribe( parametro => {
        this.productoService.getProducto(parametro['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          this.id = parametro['id'];
          this.producto = producto;
        })
      })
   }

  ngOnInit() {
  }

}
