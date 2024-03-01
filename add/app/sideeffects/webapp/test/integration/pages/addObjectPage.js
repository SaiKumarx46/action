sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sideeffects',
            componentId: 'addObjectPage',
            contextPath: '/add'
        },
        CustomPageDefinitions
    );
});