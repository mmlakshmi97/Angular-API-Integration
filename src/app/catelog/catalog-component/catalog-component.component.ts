import { Component, OnInit } from '@angular/core';
import { CatalogService} from './../catalog.service';

@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.sass']
})
export class CatalogComponentComponent implements OnInit {

  // private _catalogService: CatalogService;
  // constructor(catalogService: CatalogService) {
  //   this._catalogService = catalogService;
  // }
  catalog_details: any;
  // ngOnInit(): void {
  //   // this.getCatalogs();
  //   this._catalogService.getCatalogs().subscribe(
  //     data => {
  //       this.catalog_details = data;
  //       console.log('ammma');
  //       console.log(data);
  //     },
  //     error => {
  //       console.log("Error retrieving expenses");
  //       console.error(error);
  //     }
  //   );
  // }
  constructor(private apiService: CatalogService) { }
  ngOnInit() {
    this.apiService.getCatalogs().subscribe((data: any)=>{
      console.log(data);
      this.catalog_details = data;
    });
  }
}
