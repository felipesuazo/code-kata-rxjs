import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    get apiUrl() {
        return 'http://api.test.dev';
    }
}