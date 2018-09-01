import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileSaver } from 'file-saver/FileSaver';
import { saveAs } from 'file-saver';

import { CharacterSheet } from '../models/characterSheet.model';
import { CharacterSheetService } from './characterSheet.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent{
	
	characterSheet: CharacterSheet = new CharacterSheet();

	constructor(private router: Router, private characterSheetService: CharacterSheetService) {

	}


  printCharacterSheet(): void {
    this.characterSheetService.printCharacterSheet(this.characterSheet)
        .subscribe( (data) => {
          //alert("CharacterSheet start print.");
		  saveAs(data, "characterSheet.pdf");
		  //var fileURL = URL.createObjectURL(data);//to open in another page
		  //window.open(fileURL);//to open in another page
		  });

  };

}
