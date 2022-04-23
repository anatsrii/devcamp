let fruits = ['apple', 'mango', 'banana'];

function addFruits (fruit, callback) {
    setTimeout(function() {
        fruits.push(fruit);
        console.log(`add ${fruit} succeed`);
        callback();
    }, 1000);
}

function getFruit() {
    setTimeout(function() {
        console.log('This is callback', fruits);
    }, 500);
}


addFruits('grape', getFruit);