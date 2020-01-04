import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProjectData} from '../../../Tools/Interfaces';
@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {
  private Projects: ProjectData;
  private nombre: string;
  private id: number;
  private desc: string;
  private sinopsis: string;
  constructor(public dialog: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.Projects = this.data;
    // tslint:disable-next-line:no-unused-expression
    this.id = this.Projects.id; this.nombre = this.Projects.nombre; this.desc = this.Projects.desc; this.sinopsis = this.Projects.sinopsis;
  }
  ngOnInit() {
  }

}
