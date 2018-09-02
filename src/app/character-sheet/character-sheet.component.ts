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
	alignments = ['', 'good/law', 'good/neutral', 'good/chaos', 'neutral/law', 'neutral/neutral', 'neutral/chaos', 'evil/law', 'evil/neutral', 'evil/chaos'];
	
	defaultStrength: Array<number> = [10, 0];//characteristic and modifier
	defaultDexterity: Array<number> = [10, 0];//characteristic and modifier
	defaultConstitution: Array<number> = [10, 0];//characteristic and modifier
	defaultIntelligence: Array<number> = [10, 0];//characteristic and modifier
	defaultWisdom: Array<number> = [10, 0];//characteristic and modifier
	defaultCharisma: Array<number> = [10, 0];//characteristic and modifier
	
	characterSheet: CharacterSheet = new CharacterSheet(null, null, this.alignments[0], 1, 1, this.defaultStrength, this.defaultDexterity, 
		this.defaultConstitution, this.defaultIntelligence, this.defaultWisdom, this.defaultCharisma);
	
	submitted = false;

	onSubmit() { this.submitted = true; }

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
