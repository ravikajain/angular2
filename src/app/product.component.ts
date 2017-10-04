import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/product.component.html',
})
export   class   Appproduct  {

appList: any[] = [ {
      "ID": "1",
      "url": 'app/Images/One.jpg'
   },

   {
      "ID": "2",
      "url": 'app/Images/Two.jpg'
   } ];
}
