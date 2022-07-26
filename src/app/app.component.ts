import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  loading = true;
  constructor(){
    setTimeout(()=>{ this.loading = false},4000)
  }
}
