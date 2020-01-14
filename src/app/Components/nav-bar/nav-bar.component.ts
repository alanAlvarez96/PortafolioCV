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
    const links: NodeListOf<HTMLElement> = document.querySelectorAll('.link');
    links.forEach( (link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
          nav.classList.toggle('nav-active');
          this.animateLinks(navLinks);
          burger.classList.toggle('toggle');
        }
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth'});
      });
    });
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      this.animateLinks(navLinks);
      burger.classList.toggle('toggle');
    });
  }
  animateLinks(navLinks) {
    navLinks.forEach((  link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.25s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  }
}
