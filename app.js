const express = require('express');
const { getMean, getMode, getMedian } = require('./math');
const { getNumbersFromQuery } = require('./utilities');
const ExpressError = require('./expressError');

const app = express();

app.get('/', function(req, res) {
  return res.send('Homepage');
});

app.get('/mean', function(req, res) {
    const numbers = getNumbersFromQuery(req.query.nums);
    const value = getMean(numbers);

    if (value) {
        return res.json(
            { 
                response: {
                    operation: "Mean",
                    value: value || "Invalid input"
                } 
            }
        );
    } else {
        throw new ExpressError("Invalid input", 404);
    }
});

app.get('/median', function(req, res) {
    const numbers = getNumbersFromQuery(req.query.nums);
    const value = getMedian(numbers);

    if (value) {
        return res.json(
            { 
                response: {
                    operation: "Median",
                    value: value || "Invalid input"
                } 
            }
        );
    } else {
        throw new ExpressError("Invalid input", 404);
    }
});

app.get('/mode', function(req, res) {
    const numbers = getNumbersFromQuery(req.query.nums);
    const value = getMode(numbers);

    if (value) {
        return res.json(
            { 
                response: {
                    operation: "Mode",
                    value: value || "Invalid input"
                } 
            }
        );
    } else {
        throw new ExpressError("Invalid input", 404);
    }
});


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({ error: err });
});


app.listen(3000, function () {
  console.log('App on port 3000');
})