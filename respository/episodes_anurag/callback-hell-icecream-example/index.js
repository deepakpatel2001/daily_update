let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
};

// ab hame pehle order lena hoga and then production will start

function takeOrder(fruits, production) {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruits]} was selected`);
        production();
    }, 2000);
}

function production() {
    setTimeout(() => {
        console.log('production is started');

        setTimeout(() => {
            console.log('Fruits has been chopped');

            setTimeout(() => {
                console.log(
                    `${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`
                );
                setTimeout(() => {
                    console.log('Machine started');

                    setTimeout(() => {
                        console.log(
                            `${stocks.holder[0]} was seleted as container`
                        );

                        setTimeout(() => {
                            console.log(
                                `${stocks.toppings[1]} was selected as toppings`
                            );

                            setTimeout(() => {
                                console.log(`serving ice cream`);
                            }, 1000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}

takeOrder(2, production);
