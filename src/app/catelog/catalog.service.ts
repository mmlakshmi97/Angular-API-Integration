import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
 
// @Injectable()
@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    [x: string]: any;

    private url = "assets/api/catalog_details.json";
    constructor(private httpClient:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getCatalogs() {
        return this.httpClient
            .get(this.url)
        // return this.http.get(this.url);
    }
}