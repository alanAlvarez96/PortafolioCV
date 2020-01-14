import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public angular: string;
  public jwt: string;
  public materialze: string;
  public mysql: string;
  public mariadb: string;
  public nodeJs: string;
  public oracle: string;
  public postgres: string;
  public sqlserver: string;
  public git: string;
  public flutter: string;
  constructor() { }
  ngOnInit() {
    this.angular = '1 año';
    this.jwt = '6 meses';
    this.materialze = '2 años';
    this.mysql = '3 años';
    this.mariadb = '1 año';
    this.nodeJs = '1 año';
    this.oracle = '4 meses';
    this.postgres = '2 años';
    this.sqlserver = '3 años';
    this.git = '2 años';
    this.flutter = '6 meses';
  }

}
