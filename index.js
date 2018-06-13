var App = function() {
    var total,
        firstN,
        secondN;

    var publicAPI = {
        add: function(firstN, secondN) {
            console.log(total = firstN + secondN)
        },
        subtract: function(firstN, secondN) {
            console.log(total = firstN - secondN)
        },
        divide: function(firstN, secondN) {
            console.log(total = firstN / secondN)
        },
        multiply: function(firstN, secondN) {
            console.log(total = firstN * secondN)
        },
        total: function() {
            console.log(total)
        }
    }

    return publicAPI;
    
}

var calculator = App();
calculator.add(5,2);
calculator.subtract(5,2);
calculator.divide(5,2);
calculator.multiply(5,2)
calculator.total();