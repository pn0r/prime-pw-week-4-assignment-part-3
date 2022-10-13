console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

console.log('Basket is full?:',isFull());

function addItem(item){
  if (isFull()==false){basket.push(item)
    return true;
  }else {
    return false;
  }
};

function isFull(){
  return (basket.length < maxItems) ? false : true;
};

console.log('added: bearings', addItem('bearings'));
console.log('added: axle', addItem('axle'));
console.log('added: bushings', addItem('bushings'));
console.log('added: consumables', addItem('consumables'));
console.log('added: battery',addItem('battery'));
console.log('added: pump', addItem('pump'));
console.log('added: ldskfv', addItem("[]"));

function empty(){
  basket.length=0;
}

console.log('Basket is full?:',isFull());

function listItems(){
  for (let item of basket){
    console.log(item)
  }
};

listItems();


function removeItem(item){
  if(basket.includes(item)){
    basket.splice(basket.indexOf(item),1)
    return('Items removed:' + ' ' + item)
  }else {
    return('Items removed: null')
  }
};

console.log(removeItem('bushings'));
console.log(removeItem('adapter'));
console.log(removeItem([1,2,3,4]));
console.log(removeItem('string'));
listItems();
console.log('Basket is full?:',isFull());
console.log('added pulley',addItem('pulley'));
empty();
listItems();
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

