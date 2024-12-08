import type { VueModule } from 'vue-modules'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { CustomRouter } from '@/router/customRouter';


export class RouterModule implements VueModule {
    name = 'router';
    public traderRouter: CustomRouter;
    constructor() {
        this.traderRouter = new CustomRouter();
    }
    install(app: any) {

        const routes: RouteRecordRaw[] = [
   
            {
                path: '/',
                name: '',
                component: () => {
                        // return import("/");

                },
            },


        ];
        this.traderRouter!.routers = createRouter({
            history: createWebHistory(),
            scrollBehavior(to) {
                if (to.hash) {
                    return { el: to.hash, behavior: "smooth" };
                } else {
                    return { top: 0 };
                }
            },
            routes
        });

    }


}
