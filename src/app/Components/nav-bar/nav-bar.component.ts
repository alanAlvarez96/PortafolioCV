import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    const burger: HTMLElement = document.querySelector('.burger');
    const nav: HTMLElement = document.querySelector('.nav-links');
    const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((  link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      burger.classList.toggle('toggle');
    });
  }

}
