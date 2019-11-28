import { Component, OnInit } from '@angular/core';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private cardProject: NodeListOf<HTMLElement>;
  tarjetas: NodeListOf<HTMLElement>;
  private dataset: any;
  constructor() {
  }
  ngOnInit() {
    this.cardProject = document.querySelectorAll('.projectCard');
    console.log(this.cardProject);
    this.cardProject.forEach( card => {
      card.addEventListener('click', (item)  => {
        console.log('item', item );
        console.log('tarjeta', this );
        this.tarjetas = this.cardProject;
        console.log('tarjetas',this.tarjetas);
        console.log('id', this.tarjetas[0].dataset.id);
      });
    });
  }
}
