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
  public Dart: string;
  constructor() {
    this.HTML = '2 años';
    this.JS = '2 años';
    this.CSS = '2 años';
    this.PHP = '2 años';
    this.JAVA = '4 años';
    this.SQL = '3 años';
    this.Dart = '6 meses';
  }

  ngOnInit() {}
}
