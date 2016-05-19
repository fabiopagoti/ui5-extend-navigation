sap.ui.component.load({
    name: "base.app"
});

base.app.Component.extend("ext.app.Component", {

    metadata: {
        routing: {
            routes: [{
                pattern: "",
                name: "r4",
                target: "t2"
            }],
            targets: {
                // t1: {
                //     viewName: "First",
                //     viewLevel: 1,
                //     controlAggregation: "pages"
                // },
                // t2: {
                //     viewName: "Second",
                //     viewLevel: 1,
                //     controlAggregation: "pages"
                // },
                // t3: {
                //     viewName: "Second",
                //     viewLevel: 1,
                //     controlAggregation: "pages"
                // }
            }
        },

        config: {

        }
    }

});