import { createApp } from 'vue'
import App from '@/core/App.vue';
import { CoreModule } from '@/core'
import { RouterModule } from '@/router'
import { createPinia } from 'pinia';

function bootstrap() {


  const app = createApp(App);
  const pinia = createPinia();


  const routerModule = new RouterModule();
  routerModule.install(app);
  if(import.meta.env.PROD){
  app.config.errorHandler = (err: any, vm: any, info: any) => {
    if(import.meta.env.DEV){
      console.log(`Error: ${err.toString()}\nInfo: ${info}`);
    }
    return false
  };
}
  

  const coreModule = new CoreModule(pinia, routerModule.traderRouter!);
  coreModule.install(app);

}

bootstrap()



