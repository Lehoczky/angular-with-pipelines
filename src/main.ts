import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { AppModule } from "./app/app.module"

var a = 10

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
