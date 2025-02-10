import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public menuItem: MenuItem[] | undefined;

  constructor(private router: Router) {}

    ngOnInit() {
        this.menuItem = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                  {
                      label: 'Textos y Fechas',
                      icon: 'pi pi-align-left',
                      command: () => {
                        this.router.navigate(['/']);
                      }
                  },
                  {
                      label: 'Números',
                      icon: 'pi pi-dollar',
                      shortcut: '⌘+B',
                      routerLink: '/numbers'
                      // command: () => {
                      //   this.router.navigate(['/numbers']);
                      // }
                  },
                  {
                      label: 'No comunes',
                      icon: 'pi pi-globe',
                      command: () => {
                        this.router.navigate(['/uncommon']);
                      }
                  }
              ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                      label: 'Otro elemento',
                      icon: 'pi pi-cog',
                      routerLink: '/custom'
                  }
                ]
            }
        ];
    }
}
