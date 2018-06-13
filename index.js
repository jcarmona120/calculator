var calculator = function() {
    var total,
        firstN,
        secondN;

    var publicAPI = {
        add: function(firstN, secondN) {
            total = firstN + secondN
            return total;
        },
        subtract: function(firstN, secondN) {
            total = firstN - secondN
            return total;
        },
        divide: function(firstN, secondN) {
            total = firstN / secondN;
            return total;
        },
        multiply: function(firstN, secondN) {
            total = firstN * secondN;
            return total;
        },
        total: function() {
            return total;
        }
    }

    return publicAPI;
    
}

module.exports = calculator;