import { Component, OnInit } from '@angular/core';
import { ImportantInformation } from '../../models/important-information.model';
import { ImportantInformationService } from '../../services/important-information.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-important-information',
    templateUrl: './important-information.component.html'
})
export class ImportantInformationComponent implements OnInit {
    importantInformation$: Observable<ImportantInformation>;
    
    constructor(private importantInformationService: ImportantInformationService) {}

    ngOnInit() {
        this.importantInformation$ = this.importantInformationService.getImportantInformation(1);
    }

}