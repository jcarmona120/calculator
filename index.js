let calculator = function () {
    let total,
        firstN,
        secondN;

    let calcAPI = {
        add: function (firstN, secondN) {
            total = firstN + secondN;
            return total;
        },
        subtract: function (firstN, secondN) {
            total = firstN - secondN;
            return total;
        },
        divide: function (firstN, secondN) {
            total = firstN / secondN;
            return total;
        },
        multiply: function (firstN, secondN) {
            total = firstN * secondN;
            return total;
        },
        total: function () {
            return total;
        }
    };
    return calcAPI;

}

module.exports = calculator();