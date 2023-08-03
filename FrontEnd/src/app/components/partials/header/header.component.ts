import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('profileMenu') profileMenu!: ElementRef;

  showProfileMenu: boolean = false;

  constructor() {}

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  // Cerrar el menú desplegable cuando se haga clic fuera del menú
  @HostListener('document:click', ['$event'])
  onClickOutside(event: any) {
    if (this.profileMenu && !this.profileMenu.nativeElement.contains(event.target)) {
      this.showProfileMenu = false;
      console.log("aoajsdhjkslfsd")
    }
  }
}
