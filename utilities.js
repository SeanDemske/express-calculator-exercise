function getNumbersFromQuery(queryString) {
    return queryString.split(",").map(function (num) { 
        return parseInt(num, 10); 
    });
}


module.exports = { getNumbersFromQuery }