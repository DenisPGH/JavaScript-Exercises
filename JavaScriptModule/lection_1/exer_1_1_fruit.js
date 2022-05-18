function fruit(fruit,weigth,priceKg){
    let weightKg=weigth/1000;
    let sum=weightKg*priceKg;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}


fruit('orange', 2500, 1.80);