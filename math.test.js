const { getMean, getMode, getMedian } = require('./math');

describe("#getMean", function() {
    it("Finds the mean from an array on integers", function() {
        expect(getMean([2, 4, 6])).toEqual(4);
    });
    it("Returns false if strings are included in the array", function() {
        expect(getMean([2, 4, "string"])).toEqual(false);
    });
});

describe("#getMode", function() {
    it("Finds the mode from an array of integers, returns an array", function() {
        expect(getMode([2, 2, 3, 4, 5])).toEqual([2]);
    });
    it("Returns false if strings are included in the array", function() {
        expect(getMode([2, 4, "string"])).toEqual(false);
    });
});

describe("#getMedian", function() {
    it("Finds the median from an array of integers", function() {
        expect(getMedian([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(5);
    });
    it("Returns false if strings are included in the array", function() {
        expect(getMedian([2, 4, "string"])).toEqual(false);
    });
});