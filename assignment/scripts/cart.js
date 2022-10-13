console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

console.log('Basket is full?:',isFull());

function addItem(item){
  if (isFull()==false){basket.push(item)
    console.log('Added item:',item,true);
  }else {
    console.log('Added item:',item,false);
  }
};

function isFull(){
  return (basket.length < maxItems) ? false : true;
};

addItem('bearings');
addItem('axle');
addItem('bushings');
addItem('consumables');
addItem('battery');
addItem('pump');

function empty(){
  basket.length=0;
}



console.log('Basket is full?:',isFull());

function listItems(){
  {console.log('BASKET:')
  }for (let item of basket){
    console.log(item)
  }
};

listItems();

function removeItem(item){
  if(basket.includes(item)){
    console.log('Items removed:',item),
    basket.splice(basket.indexOf(item),1)
  }else {
    console.log('Items removed: null')
  }
};

removeItem('bushings');
removeItem('adapter');
removeItem([1,2,3,4]);
listItems();
console.log('Basket is full?:',isFull());
addItem('pulley');
empty();
listItems();
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
/*let basketFull = true;
let detergentEmpty = false;
*/
