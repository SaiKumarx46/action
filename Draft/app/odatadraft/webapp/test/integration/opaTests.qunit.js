sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'odatadraft/test/integration/FirstJourney',
		'odatadraft/test/integration/pages/collegeList',
		'odatadraft/test/integration/pages/collegeObjectPage'
    ],
    function(JourneyRunner, opaJourney, collegeList, collegeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('odatadraft') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecollegeList: collegeList,
					onThecollegeObjectPage: collegeObjectPage
                }
            },
            opaJourney.run
        );
    }
);