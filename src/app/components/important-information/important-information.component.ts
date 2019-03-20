import { Component, OnInit } from '@angular/core';
import { ImportantInformation } from '../../models/important-information.model';
import { ImportantInformationService } from '../../services/important-information.service';

@Component({
    selector: 'app-important-information',
    templateUrl: './important-information.component.html'
})
export class ImportantInformationComponent implements OnInit {
    importantInformation: ImportantInformation;
    
    constructor(private importantInformationService: ImportantInformationService) {}

    ngOnInit() {
        this.importantInformationService
            .getImportantInformation(1)
            .subscribe((importantInformation: ImportantInformation) => {
                this.importantInformation = importantInformation;
            });
    }
}