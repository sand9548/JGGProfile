//Jessica Card
//Jessica G. Greene

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


(function(){
	//Set up platform specific variables
	Ti.API.info('Platform:'+ Ti.Platform.name);
	function isAndroid(){
		Ti.API.info('Platform:'+ Ti.Platform.name);
		return (Ti.Platform.name == 'android');
	}
	function isiPhone(){
		Ti.API.info('Platform:'+ Ti.Platform.name);
		return (Ti.Platform.name == 'iPhone');
	}
	//Set variables for views
	//var viewTop = 290;
	var tableHeight = 90;
	var dtableHeight = 205;
	var textColor = 'black';
	
	if (isAndroid() || isiPhone()){
		var ImageLeft = 85;
		var smallImageLeft = 115;
		var viewTop = 230;//'50%';
		var dViewTop = 100;//'20%';
		var bText = 'More Information';
		var buttonShift = 0;
	}
	else{
		var ImageLeft = 55;
		var smallImageLeft = 100;
		var viewTop = 330;//'50%';
		var dViewTop = 140;//'20%';
		var bText = 'More Information';
		var buttonShift = 6;
	}
	
	//Create Landing Page
	var win1 = Titanium.UI.createWindow({
		title:'Basic Information',
		background:'#fff'
	});
	
	//Add Image
	var personImage = Ti.UI.createImageView({
		image: 'FULLprofilepic300h.png',
		top: 20,
		left:ImageLeft
	});
	
	//Add Image to window
	win1.add(personImage);
	
	
	Ti.API.info('viewTOP:'+viewTop);
	
	var FillerView = Ti.UI.createView({
		top: viewTop,
		height:20
	});
	
	//Create view for the information labels
	LabelView = Ti.UI.createView({
		left: 10,//'8%',		
		top:viewTop,
		width: 110,//'32%',
		height: tableHeight,
		backgroundColor: 'white'
	});
	
	//Create view for the information
	InfoView = Ti.UI.createView({
		left: 110,//'36%',		
		top:viewTop,
		width: 200,//'54%',
		height: tableHeight,
		backgroundColor: 'white'
	});

	//Set up data for tables
	
	var InfoListLabels = ["                  Name:", 
						  "                School:", 
						  "Graduation Date:",
		 				  "                  Major:", 
		 				  "    Contact Email:"];

	var InfoData = ["  Jessica Greene", "  University of Idaho", "  May 2015", 
		"  Operations Management", "  gree7704@vandals.uidaho.edu"];
						  
	//Create table view for the information labels
	var theInfoLabel = Titanium.UI.createTableView({
		left:'3%',
		top: '5%'
	});
	
	//Load information into label table
	var allLabelRows = [];
	var theRow;
	for (var i=0; i <InfoListLabels.length; i++) {		
		theRow = Titanium.UI.createTableViewRow({
			color: textColor,	
			borderColor:'white',		
			font:{fontSize:10},height:15, title: InfoListLabels[i]});
	
		allLabelRows.push(theRow);
	}

	theInfoLabel.setData(allLabelRows);
	
	//Create table view for the information
	var theInfo = Titanium.UI.createTableView({
		left:'3%',
		top: '5%'
	});
	
	//Load information into info table
	var allDataRows = [];
	var theRow;
	for (var i=0; i <InfoData.length; i++) {
		theRow = Titanium.UI.createTableViewRow({ 
			color: textColor,
			borderColor:'black',
			font:{fontSize:10},height:15, title: InfoData[i]});
		allDataRows.push(theRow);
	}

	theInfo.setData(allDataRows);
	
	//Add Navigation Button (More Information)
	
	var MoreInfoButton = Ti.UI.createButton({
		title: bText, 
		top:'85%',
		left:85 + buttonShift
	});
		
	LabelView.add(theInfoLabel);
	InfoView.add(theInfo);
	win1.add(FillerView);
	win1.add(LabelView);
	win1.add(InfoView);
	win1.add(MoreInfoButton);
	// open window
	win1.open();
	
	///////////////////////////////////////////////////////////////////
	//Create Child page window
	
	var win2 = Titanium.UI.createWindow({
		title:'Expanded Information',
		background:'#fff'
	});
	
	//Add Image
	var smallPersonImage = Ti.UI.createImageView({
		image: 'Profilepic120.png',
		top: 10,
		left: smallImageLeft
	});
	
	//Add Image to window
	win2.add(smallPersonImage);

		//Create view for the information labels
	LabelDView = Ti.UI.createView({
		left: 10,//'6%',		
		top:dViewTop,
		width: 110, // '32%',
		height: dtableHeight,
		backgroundColor: 'white'
	});
	
	//Create view for the information
	InfoDView = Ti.UI.createView({
		left: 110,//'35%',		
		top:dViewTop,
		width: 200,//'58%',
		height: dtableHeight,
		backgroundColor: 'white'
	});

	
	var DetailInfoListLabels = ["                   Name:", 
						  "                 School:", 
						  " Graduation Date:",
		 				  "                   Major:", 
		 				  "     Contact Email:",
		 				  "Current Employer:",
		 				  " Current Position:",
		 				  "               Interests:"];

	var DetailInfoData = ["   Jessica Greene", 
						  "   University of Idaho", 
						  "   May 2015", 
						  "   Operations Management", 
						  "   gree7704@vandals.uidaho.edu",
						  "   Schweitzer Engineering Labs",
						  "   Human Resource Specialist",
						  "   Recruiting, Project Management,\n"+
						  "   Interviewing, Writing, Photography,\n"+
						  "   Industrial Economics, Scuba Diving,\n"+
						  "   Long walks on the beach, and\n"+
						  "   drinking, a lot of drinking!"];
						  
	//Create table view for the information labels
	var theDInfoLabel = Titanium.UI.createTableView({
		left:'3%',
		top: '5%'
	});
	
	//Load information into label table
	var allDLabelRows = [];
	var allDDataRows = [];
	var theLabelRow, dataRow;
	var numRows;
	for (var i=0; i <DetailInfoListLabels.length; i++) {
		//Ti.API.info('Data length:'+DetailInfoData[i].length);
		numRows = Math.round(DetailInfoData[i].length/33);
		if (numRows == 0){
			numRows = 1;
		}		
		//Ti.API.info('Rows:'+numRows);		
		dataRow = Titanium.UI.createTableViewRow({
			color: textColor,	
			borderColor:'black',
			height:numRows*15, 		
			font:{fontSize:10}, 
			title: DetailInfoData[i]
		});
			
		var currentRowHeight = dataRow.size.height;
		
		//Ti.API.info('rowheight:'+currentRowHeight);
		theLabelRow = Titanium.UI.createTableViewRow({
			color: textColor,	
			borderColor:'white',		
			font:{fontSize:10},
			height:numRows*15, 
			title: DetailInfoListLabels[i]
		});	
		
		allDLabelRows.push(theLabelRow);
		allDDataRows.push(dataRow);
	}

	theDInfoLabel.setData(allDLabelRows);
	
	//Create table view for the information
	var theDInfo = Titanium.UI.createTableView({
		left:'1%',
		top: '5%'
	});
	
	theDInfo.setData(allDDataRows);
	
	//Add Navigation Button (More Information)
	
	var ReturnButton = Ti.UI.createButton({
		title: 'Return to Menu', 
		top:'85%',
		left: 94+buttonShift
	});
	//	
	LabelDView.add(theDInfoLabel);
	InfoDView.add(theDInfo);
	win2.add(FillerView);
	win2.add(LabelDView);
	win2.add(InfoDView);
	win2.add(ReturnButton);

	//Add Event Listener for navigation button
	MoreInfoButton.addEventListener('click', function (){
		Ti.API.info('User clicked More Info button');

		win2.open();
		win1.close();
	});

	//Add Event Listener for navigation button
	ReturnButton.addEventListener('click', function (){
		Ti.API.info('User clicked Return button');
		win1.open();
		win2.close();
	});
	var linkButtonTop = '72%';
	var TwitterButton = Ti.UI.createButton({
		title: 'Twitter', 
		top:linkButtonTop, 
		font:'16',
		width:'100',
		left: '2'
	});
	win2.add(TwitterButton);
	
	var LinkedInButton = Ti.UI.createButton({
		title: 'LinkedIn', 
		font:'16',
		top:linkButtonTop,
		width:'100',
		left: '108'
	});
	win2.add(LinkedInButton);
	
	var FBButton = Ti.UI.createButton({
		title: 'Facebook', 
		font:'16',
		top:linkButtonTop,
		width:'100',
		left: '213'
	});
	win2.add(FBButton);	
	

})();