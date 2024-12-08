import type { Router } from "vue-router";

export class CustomRouter {
    public routers?: Router;
    addRoutes(routes: any[]) {
        var self = this;
        routes.forEach(function (route) {
            self.routers!.addRoute(route);
        })
    }
}