import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private _electronService: ElectronService) {}   // DI

  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }

}
