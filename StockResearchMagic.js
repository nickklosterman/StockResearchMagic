var stocks = new Meteor.Collection('StockResearchMagic')
  , index = 0, count = null, $elems = null;

if (Meteor.isClient) {

  Meteor.startup(function() {
    stocks.insert({"Volume": 3635848.0, "Div & Yield": "N/A (N/A) ", "P/E": 1297.68, "Avg Vol": 2595700.0, "Mean Recommendation*": 1.9, "ticker": "amzn", "Forward P/E": 127.46, "PEG Ratio": 12.95, "1y Target Est": 386.16, "Beta": 0.52, "Next Earnings Date": "N/A", "Prev Close": 363.39, "Open": 359.92, "Ex-Dividend Date": "N/A", "Quarterly EPS Est": 0.69, "EPS": 0.28, "Bid": 357.0, "Ask": 360.42, "Market Cap": "164.04B", "Annual EPS Est": 0.77, "P/S": 2.37, "Day's Range": 357.2, "52wk Range": 218.18});
    stocks.insert({"Forward P/E": 3.97, "ticker": "bidu", "Ask": 154.7, "P/E": 32.23, "Quarterly EPS Est": 8.65, "1y Target Est": 915.12, "52wk Range": 82.98, "P/S": 13.38, "Next Earnings Date": "29-Oct-13", "Prev Close": 159.36, "Avg Vol": 3624560.0, "Annual EPS Est": 30.67, "PEG Ratio": 1.47, "Beta": 2.15, "EPS": 4.78, "Open": 157.0, "Div & Yield": "N/A (N/A) ", "Day's Range": 152.5, "Mean Recommendation*": 2.2, "Market Cap": "53.91B", "Volume": 4511491.0, "Ex-Dividend Date": "N/A", "Bid": 150.0});
    stocks.insert({"Prev Close": 10.63, "1y Target Est": 26.9, "Next Earnings Date": "12-Nov-13", "Forward P/E": 6.62, "Volume": 35987309.0, "Mean Recommendation*": 2.0, "PEG Ratio": 0.26, "Avg Vol": 4378710.0, "Ask": 8.71, "Div & Yield": "N/A (N/A) ", "Open": 11.64, "EPS": 0.2, "Quarterly EPS Est": 0.27, "P/S": 4.19, "ticker": "nq", "Beta": 4.45, "52wk Range": 5.07, "Annual EPS Est": 1.04, "Market Cap": "453.02M", "P/E": 45.13, "Day's Range": 7.58, "Ex-Dividend Date": "N/A", "Bid": 8.67});
    stocks.insert({"Annual EPS Est": 26.19, "PEG Ratio": 1.46, "Beta": 0.5, "Prev Close": 723.78, "Avg Vol": 641492.0, "P/S": 11.17, "Next Earnings Date": "31-Oct-13", "52wk Range": 451.18, "1y Target Est": 709.82, "Day's Range": 721.36, "P/E": 30.17, "Quarterly EPS Est": 6.94, "ticker": "ma", "Market Cap": "88.05B", "Volume": 441617.0, "Bid": 729.45, "Ex-Dividend Date": "07-Oct-13", "Forward P/E": 23.74, "Ask": 733.75, "Mean Recommendation*": 2.0, "EPS": 24.2, "Open": 724.03, "Div & Yield": "2.40 (0.30%) "});
    stocks.insert({"Market Cap": "131.00B", "Forward P/E": 22.82, "Day's Range": 202.45, "P/E": 24.68, "Volume": 1719529.0, "Quarterly EPS Est": 1.85, "EPS": 8.23, "Mean Recommendation*": 2.0, "P/S": 11.35, "Ex-Dividend Date": "13-Nov-13", "Annual EPS Est": 7.59, "Beta": 0.45, "Avg Vol": 3824420.0, "Bid": 203.08, "Next Earnings Date": "30-Oct-13", "Open": 203.57, "52wk Range": 137.4, "Prev Close": 203.06, "1y Target Est": 210.65, "Div & Yield": "1.60 (0.80%) ", "Ask": 203.59, "ticker": "v", "PEG Ratio": 1.41});
  });

  Template.stocks.stockData = function() {
    return stocks.find();
  };

  Template.stock.stockData = function() {
    return stocks.findOne();
  };

  Template.stock.events({
    'click': function() {
      if (!$elems) $elems = $('.stock');
      if (count === null) count = stocks.find().count();
      $('.selected-stock').empty().html($elems.get(index === count ? index = 1 : ++index));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
