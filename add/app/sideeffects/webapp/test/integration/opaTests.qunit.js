sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sideeffects/test/integration/FirstJourney',
		'sideeffects/test/integration/pages/addList',
		'sideeffects/test/integration/pages/addObjectPage'
    ],
    function(JourneyRunner, opaJourney, addList, addObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sideeffects') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheaddList: addList,
					onTheaddObjectPage: addObjectPage
                }
            },
            opaJourney.run
        );
    }
);