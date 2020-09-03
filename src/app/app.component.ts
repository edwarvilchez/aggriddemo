import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agGridDemo';

// apertura del area para uso de ag-grid
  columnDefs = [
        {	headerName: 'Marca', field: 'marca', sortble:true, filter:true 		},
        {	headerName: 'Modelo', field: 'modelo', sortble:true, filter:true 	},
        {	headerName: 'Precio', field: 'precio', sortble:true, filter:true 	}
    ];

    rowData = [
        {	marca: 'Toyota', modelo: 'Celica', precio: 35000 	},
        { 	marca: 'Ford', modelo: 'Mondeo', precio: 32000 		},
        { 	marca: 'Porsche', modelo: 'Boxter', precio: 72000 	}
    ];
// cierre del area para uso de ag-grid
}
