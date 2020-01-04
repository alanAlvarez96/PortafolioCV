import { Component, OnInit } from '@angular/core';
import {projects} from './ProjectsInfo';
import {ProjectData} from '../../Tools/Interfaces';
import {ProjectDialogComponent} from '../Dialogs-Templates/project-dialog/project-dialog.component';
import {MatDialog, } from '@angular/material';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private cardProject: NodeListOf<HTMLElement>;
  private dialogBox;
  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    this.cardProject = document.querySelectorAll('.projectCard');
    this.cardProject.forEach( (card, index ) => {
      const cardInfo = this.cardProject[index];
      let projectName: any;
      let idProject: number;
      let dialogRef;
      let data: ProjectData;
      projectName = card.querySelector('.projectName');
      idProject = parseInt(cardInfo.dataset.id, 10);
      data = projects.find(project => project.id === idProject);
      projectName.innerText = data.nombre;
      card.addEventListener('click', () => {
        this.dialogBox = this.dialog;
        if (data === undefined || data === null) {
          alert('No se encontro informacion de esta actividad');
        } else {
          dialogRef = this.dialogBox.open(ProjectDialogComponent, { height: '80%', width: '80%', data });
        }
      });
    });
  }
}
