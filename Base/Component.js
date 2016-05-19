
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
                    // bypassed: {
                    //     target: ["home"]
                    // }
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
                    }
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

        }//,

        // createContent: function () {

        //     // create root view
        //     var oView = sap.ui.view({
        //         viewName: "base.app.view.App",
        //         type: "XML"
        //     });

        //     return oView;
        // }

    });

});
