import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobileMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(): void {
    this.mobileMenu = !this.mobileMenu;
    if (this.mobileMenu) {
      document.querySelector<HTMLElement>(".main__menu").style.display = "flex";
    }
    else {
      document.querySelector<HTMLElement>(".main__menu").style.display = "none";
    }
  }

  subMenuOpen(e): void {
    let el = e.target.closest('li') as HTMLElement;
    let ifPresent = el.classList.contains("active");
    if (el) {
      let element = document.querySelectorAll<HTMLElement>(".mm");
      Array.prototype.forEach.call(element, function (node) {
        node.classList.remove("active");
      });
    }
  }

}
