import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public HTML: string;
  public JS: string;
  public CSS: string;
  public PHP: string;
  public JAVA: string;
  public SQL: string;
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
