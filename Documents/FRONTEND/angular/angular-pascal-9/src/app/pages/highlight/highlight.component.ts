import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['../../app.component.scss','./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  title = 'angular-pascal-9';
  name = 'Abang daud'

  constructor() { }

  ngOnInit(): void {
  }

}
