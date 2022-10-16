console.log('***** Cart Functions *****');

let basket = [];

const maxItems = 5;

function addItem(item){
  if (isFull()==false){basket.push(item)
    return true;
  }else {
    return false;
  }
}

function isFull(){
  return (basket.length >= maxItems);
}

function empty(){
  basket.length=0;
}

function listItems(){
  for (let item of basket){
    console.log(item);
  }
}

function removeItem(item){
  if(basket.includes(item)){
    basket.splice(basket.indexOf(item),1)
    return item;
  }else {
    return 'null';
  }
}


console.log('added: bearings', addItem('bearings'));
console.log('added: axle', addItem('axle'));
console.log('added: bushings', addItem('bushings'));
console.log('added: consumables', addItem('consumables'));
console.log('added: battery',addItem('battery'));
console.log('added: pump', addItem('pump'));
console.log('added: 5', addItem());
listItems();
console.log('removed', removeItem('bushings'));
console.log('removed', removeItem('adapter'));
console.log('removed', removeItem([1,2,3,4]));
console.log('removed',removeItem(5));
listItems();
console.log('Basket is full?:',isFull());
console.log('added pulley',addItem('pulley'));
empty();
listItems();



// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

