sap.ui.component.load({
    name: "base.app"
});

base.app.Component.extend("ext.app.Component", {

    metadata: {
        routing: {
            routes: [{
                pattern: "p1",
                name: "r1",
                target: "t1"
            }, {
                pattern: "p2",
                name: "r2",
                target: "t2"
            }, {
                pattern: "",
                name: "r3",
                target: "t3"
            }],
            targets: {
                t1: {
                    viewName: "First",
                    viewLevel: 1,
                    controlAggregation: "pages"
                },
                t2: {
                    viewName: "Second",
                    viewLevel: 1,
                    controlAggregation: "pages"
                },
                t3: {
                    viewName: "Second",
                    viewLevel: 1,
                    controlAggregation: "pages"
                }
            }
        },

        config: {

        }
    }
});


// jQuery.sap.declare("com.duxinnovation.safety.epi.listaFuncionarios.ZEPI_LIST_TERC.Component");
// // use the load function for getting the optimized preload file if present
// this.com.duxinnovation.safety.epi.listaFuncionarios.Component.extend(
//     "com.duxinnovation.safety.epi.listaFuncionarios.ZEPI_LIST_TERC.Component", {
//         metadata: {
//             version: "1.0",
//             config: {
//                 "serviceConfig": {
//                     "name": "ServicoEPI",
//                     "serviceUrl": "/sap/opu/odata/sap/ZEPI_LIST_TERC_SRV/"
//                 }
//             },
//             customizing: {}
//         }
//     });