import type { CustomRouter } from '@/router/customRouter';
import type { VueModule } from 'vue-modules';
import type { Pinia } from 'pinia';

export class CoreModule implements VueModule {
  app: any;

  constructor(private pinia: Pinia, private router: CustomRouter) {
  }

  install(app: any) {
   
    app.use(this.pinia);
    app.use(this.router.routers);
    app.mount('#app');
  }
  
}
