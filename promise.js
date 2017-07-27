function plus(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Either a or b need to be number');
        }
    })
}

plus(3,4).then(function(result){
    console.log("Result is " + result);
}, function(error){
    console.error(error);
})

plus('a', 'b').then(function(result){
    console.log("Result is " + result);
}, function(error){
    console.error(error);
})
