import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CharacterSheet } from '../models/characterSheet.model';

import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CharacterSheetService {

  constructor(private http:HttpClient) {}

	private printCharacterSheetUrl = 'https://fast-earth-86108.herokuapp.com/printCharacterSheet';

  
  public printCharacterSheet(characterSheet) {
	
    return this.http.post<any>(this.printCharacterSheetUrl, characterSheet, { responseType: 'blob' as 'json' })
	.pipe(
	map(
        (res) => {
            return new Blob([res], { type: 'application/pdf' });
		}
	)
	);
	
  }

}