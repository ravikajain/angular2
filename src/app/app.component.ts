import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [appService]
})
export class AppComponent  {
constructor(private _appService: appService) { }
      appTitle = this._appService.getApp();

appList: any[] = [ {
      "ID": "1",
      "url": 'app/Images/One.jpg'
   },

   {
      "ID": "2",
      "url": 'app/Images/Two.jpg'
   } ];
 }
