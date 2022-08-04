import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  loading = true;

  constructor(){
    setTimeout(()=>{ this.loading = false},4000)
  }
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/json/particles.json', null);
  }

}
