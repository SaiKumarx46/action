sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customcreate/test/integration/FirstJourney',
		'customcreate/test/integration/pages/peolList',
		'customcreate/test/integration/pages/peolObjectPage'
    ],
    function(JourneyRunner, opaJourney, peolList, peolObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customcreate') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepeolList: peolList,
					onThepeolObjectPage: peolObjectPage
                }
            },
            opaJourney.run
        );
    }
);