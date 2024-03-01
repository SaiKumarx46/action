sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'uploadfile/test/integration/FirstJourney',
		'uploadfile/test/integration/pages/parentList',
		'uploadfile/test/integration/pages/parentObjectPage'
    ],
    function(JourneyRunner, opaJourney, parentList, parentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('uploadfile') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheparentList: parentList,
					onTheparentObjectPage: parentObjectPage
                }
            },
            opaJourney.run
        );
    }
);