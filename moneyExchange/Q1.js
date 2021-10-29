function moneyExchange(mainMoney, numberOfCurrencies, currencyValue) {
    let result = 0;
    for (let eu = 0; eu <= Math.min(numberOfCurrencies[1], Math.floor(mainMoney / currencyValue[1])); eu++) {
        for (let doll = 0; doll <= Math.min(numberOfCurrencies[2], Math.floor(mainMoney / currencyValue[2])); doll++) {
            for (let der = 0; der <= Math.min(numberOfCurrencies[0], Math.floor(mainMoney / currencyValue[0])); der++) {
                if(mainMoney === der * currencyValue[0] + eu * currencyValue[1] + doll * currencyValue[2]){
                    result++;
                }
            }
        }
    }
    console.log(result);
}

moneyExchange(10000, [1, 1, 1], [5000, 3000, 7000])
moneyExchange(6000, [3, 3, 3], [3000, 2000, 3000])
moneyExchange(32000, [2, 1, 1], [4200, 7500, 3600])
