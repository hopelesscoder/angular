import { Component } from '@angular/core';
import { FileSaver } from 'file-saver/FileSaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  downloadPdf(){
    var data = new Blob(['testo di prova'], { type: 'text/plain;charset=utf-8' });
    return FileSaver.saveAs(data, 'text.txt');
  }
  
}
