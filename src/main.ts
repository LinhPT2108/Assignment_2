import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction(): void {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    (<HTMLElement>document.getElementById('navbar')).style.padding = '5px 10px';
  } else {
    (<HTMLElement>document.getElementById('navbar')).style.padding =
      '20px 10px';
  }
}
