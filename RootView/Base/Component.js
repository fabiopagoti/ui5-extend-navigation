
sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/m/routing/Router'
], function (UIComponent,
            Router) {

    return UIComponent.extend("base.app.Component", {

        metadata: {
            rootView: "base.app.view.App",
            routing: {
                config: {
                    routerClass: Router,
                    viewType: "XML",
                    viewPath: "base.app.view",
                    controlId: "app",
                    transition: "slide",
                },
                routes: [
                    {
                        pattern: "",
                        name: "r1",
                        target: "t1"
                    },
                    {
                        pattern: "p2",
                        name: "r2",
                        target: "t2"
                    },
                    {
                        pattern: "p3",
                        name: "r3",
                        target: "t3"
                    },

                ],
                targets: {
                    t1: {
                        viewName: "First",
                        viewLevel: 1,
                        controlAggregation: "pages"
                    },
                    t2:{
                        viewName: "Second",
                        viewLevel: 1,
                        controlAggregation: "pages"
                    },
                    t3:{
                        viewName: "Third",
                        viewLevel: 2,
                        controlAggregation: "pages"
                    }
                }
            }
        },

        init: function () {
            // call overwritten init (calls createContent)
            UIComponent.prototype.init.apply(this, arguments);

            //extend the router
            this._router = this.getRouter();

            // initialize the router
            this._router.initialize();

        }

    });

});
