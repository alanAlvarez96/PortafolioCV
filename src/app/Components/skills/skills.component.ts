import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private readonly htmlProgress: string;
  private readonly jsProgress: string;
  private readonly cssProgress: string;
  private readonly sqlProgress: string;
  private readonly javaProgress: string;
  private readonly phpProgress: string;
  constructor() {
    this.htmlProgress = '70%';
    this.jsProgress = '70%';
    this.cssProgress = '50%';
    this.sqlProgress = '60%';
    this.javaProgress = '60%';
    this.phpProgress = '70%';
  }

  ngOnInit() {
    this.fillProgressBars();
  }
  getProgressBars() {
    const js = document.getElementById('JS');
    const html = document.getElementById('HTML');
    const css = document.getElementById('CSS');
    const php = document.getElementById('php');
    const java = document.getElementById('java');
    const sql = document.getElementById('sql');
    return{js, html, php, java, css, sql};
  }
  fillProgressBars() {
    const {js, html , php , java , css , sql } = this.getProgressBars();
    js.innerText = this.jsProgress;
    js.style.width = this.jsProgress;
    html.innerText = this.htmlProgress;
    html.style.width = this.htmlProgress;
    css.innerText = this.cssProgress;
    css.style.width = this.cssProgress;
    sql.innerText = this.sqlProgress;
    sql.style.width = this.sqlProgress;
    java.innerText = this.javaProgress;
    java.style.width = this.javaProgress;
    php.innerText = this.phpProgress;
    php.style.width = this.phpProgress;
  }
}
