import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private HTML: string;
  private JS: string;
  private CSS: string;
  private PHP: string;
  private JAVA: string;
  private SQL: string;
  constructor() {
    this.HTML = '2 años';
    this.JS = '1 año';
    this.CSS = '1 año';
    this.PHP = '2 años';
    this.JAVA = '2 años';
    this.SQL = '2 años';
  }

  ngOnInit() {}
}
