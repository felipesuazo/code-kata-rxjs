import { Injectable } from "@angular/core";
import { HttpClient }    from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ImportantInformation } from '../models/important-information.model';

@Injectable({
    providedIn: 'root'
})
export class ImportantInformationService {
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {}

    getImportantInformation(id: number): Observable<ImportantInformation> {
        return this.http.get(`${this.apiUrl}?id=${id}`)
                        .pipe(
                            map((response: any) => {
                                const { 
                                    short_name: shortName,
                                    show_in_home: showInHome,
                                    show_in_detail: showInDetail 
                                } = response;
                                
                                return <ImportantInformation>{
                                    ...response,
                                    shortName,
                                    showInHome,
                                    showInDetail
                                }
                            }),
                            catchError(error => Observable.throw(error))
                        )
    }

    get apiUrl(): string {
        return `${this.global.apiUrl}/important-information`;
    }
}