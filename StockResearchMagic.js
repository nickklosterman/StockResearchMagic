stockResearchMagic = new Meteor.Collection("StockResearchMagic");

if (Meteor.isClient) {

Meteor.startup(function() { 
    stockResearchMagic.insert({"Volume": 3635848.0, "Div & Yield": "N/A (N/A) ", "P/E": 1297.68, "Avg Vol": 2595700.0, "Mean Recommendation*": 1.9, "ticker": "amzn", "Forward P/E": 127.46, "PEG Ratio": 12.95, "1y Target Est": 386.16, "Beta": 0.52, "Next Earnings Date": "N/A", "Prev Close": 363.39, "Open": 359.92, "Ex-Dividend Date": "N/A", "Quarterly EPS Est": 0.69, "EPS": 0.28, "Bid": 357.0, "Ask": 360.42, "Market Cap": "164.04B", "Annual EPS Est": 0.77, "P/S": 2.37, "Day's Range": 357.2, "52wk Range": 218.18});
    stockResearchMagic.insert({"Forward P/E": 3.97, "ticker": "bidu", "Ask": 154.7, "P/E": 32.23, "Quarterly EPS Est": 8.65, "1y Target Est": 915.12, "52wk Range": 82.98, "P/S": 13.38, "Next Earnings Date": "29-Oct-13", "Prev Close": 159.36, "Avg Vol": 3624560.0, "Annual EPS Est": 30.67, "PEG Ratio": 1.47, "Beta": 2.15, "EPS": 4.78, "Open": 157.0, "Div & Yield": "N/A (N/A) ", "Day's Range": 152.5, "Mean Recommendation*": 2.2, "Market Cap": "53.91B", "Volume": 4511491.0, "Ex-Dividend Date": "N/A", "Bid": 150.0});
    stockResearchMagic.insert({"Prev Close": 10.63, "1y Target Est": 26.9, "Next Earnings Date": "12-Nov-13", "Forward P/E": 6.62, "Volume": 35987309.0, "Mean Recommendation*": 2.0, "PEG Ratio": 0.26, "Avg Vol": 4378710.0, "Ask": 8.71, "Div & Yield": "N/A (N/A) ", "Open": 11.64, "EPS": 0.2, "Quarterly EPS Est": 0.27, "P/S": 4.19, "ticker": "nq", "Beta": 4.45, "52wk Range": 5.07, "Annual EPS Est": 1.04, "Market Cap": "453.02M", "P/E": 45.13, "Day's Range": 7.58, "Ex-Dividend Date": "N/A", "Bid": 8.67});
    stockResearchMagic.insert({"Annual EPS Est": 26.19, "PEG Ratio": 1.46, "Beta": 0.5, "Prev Close": 723.78, "Avg Vol": 641492.0, "P/S": 11.17, "Next Earnings Date": "31-Oct-13", "52wk Range": 451.18, "1y Target Est": 709.82, "Day's Range": 721.36, "P/E": 30.17, "Quarterly EPS Est": 6.94, "ticker": "ma", "Market Cap": "88.05B", "Volume": 441617.0, "Bid": 729.45, "Ex-Dividend Date": "07-Oct-13", "Forward P/E": 23.74, "Ask": 733.75, "Mean Recommendation*": 2.0, "EPS": 24.2, "Open": 724.03, "Div & Yield": "2.40 (0.30%) "});
stockResearchMagic.insert({"Market Cap": "131.00B", "Forward P/E": 22.82, "Day's Range": 202.45, "P/E": 24.68, "Volume": 1719529.0, "Quarterly EPS Est": 1.85, "EPS": 8.23, "Mean Recommendation*": 2.0, "P/S": 11.35, "Ex-Dividend Date": "13-Nov-13", "Annual EPS Est": 7.59, "Beta": 0.45, "Avg Vol": 3824420.0, "Bid": 203.08, "Next Earnings Date": "30-Oct-13", "Open": 203.57, "52wk Range": 137.4, "Prev Close": 203.06, "1y Target Est": 210.65, "Div & Yield": "1.60 (0.80%) ", "Ask": 203.59, "ticker": "v", "PEG Ratio": 1.41});

    recordCount = getNumberOfRecords();
});

  Template.hello.greeting = function () {
    return "Welcome to StockResearchMagic.";
  };

    function getNumberOfRecords() {
	return stockResearchMagic.count({}); //http://docs.mongodb.org/manual/reference/method/db.collection.count/
    };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
    Template.stockmagic.StockData= function() {
	return stockResearchMagic.find({});
    };
var recordCount=0;
    var bob=0; //without the var in front it is global??
    Template.singlestockmagic.SingleStockData= function() {
	//why doens't this work???? return stockResearchMagic.find({}).limit(1).skip( 2 ); // http://docs.mongodb.org/manual/reference/method/db.collection.find/
 	return stockResearchMagic.findOne({},{skip:bob}); // http://docs.mongodb.org/manual/reference/method/db.collection.find/
    }; 
    Template.singlestockmagic.events({ 
	'click':function() {
	    bob=bob+1;
//	    billy=stockResearchMagic.count({});
	    //billy=getNumberOfRecords();
	    if (bob > undefined )
//	    if (bob > recordCount )
//	    if (bob > billy )
	    {bob=0;}
	    console.log(bob);
	    console.log(recordCount);
	    doSomething();
//	    console.log(stockResearchMagic.count({}));
//then I need to call ??Template.singlestockmagic.SingleStockData to update our stock of interest.
	} 
    });
function doSomething() {
    console.log("I'm doing something");
};
    Session.set('counter',0);
} // end isClient

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


/**

{#each StockData}} 
{{/each}} 

**/
