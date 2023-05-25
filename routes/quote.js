var express = require('express');
var router = express.Router();
// var iexCloud = require('../api/iexCloud');
var polygon = require('../api/polygon');

router.get("/:symbol", async (req, res, next) => {
    // const iexCloudGetStockQuoteResponse = await iexCloud.fetchStockQuote(req.params.symbol);
    const polygonGetStockPriceResponse = await polygon.fetchLatestPrice(req.params.symbol);
    const polygonGetCompanyNameResponse = await polygon.fetchTickerSymbols(req.params.symbol, 1);

    // res.json(iexCloudGetStockQuoteResponse);
    res.json({
        "latestPrice": polygonGetStockPriceResponse.results[0].c,
        "statusCode": (polygonGetCompanyNameResponse.status == "OK" && polygonGetStockPriceResponse.status == "OK") ? 200 : polygonGetStockPriceResponse.status,
        "companyName": polygonGetCompanyNameResponse.results[0].name,
        "symbol": polygonGetStockPriceResponse.ticker,
    });
});

module.exports = router;
