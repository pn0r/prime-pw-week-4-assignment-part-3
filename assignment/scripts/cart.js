console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

console.log('Basket is full:',isFull());

function addItem(item){
  if (isFull()==false){basket.push(item)
    console.log('Added item:',item,true);
  }
  else {
    console.log('Added item:',item,false);
  }
};

function isFull(){
  if(basket.length<maxItems){
    return false;
  }
  else{
    return true;
  }
};

addItem('bearings');
addItem('axle');
addItem('bushings');
addItem('consumables');
addItem('battery');
addItem('pump');

console.log('Basket is full:',isFull());

function empty(){
  basket.length=0;
}

function listItems(){
  for (item of basket){
    console.log(item)
  }
}
listItems();

function removeItem(item){
  let match = false;{
  for (let i=0; i<basket.length; i++)
    if (basket[i]==item){
      match = true;
    }
  }
  if(match){
    console.log('Items removed:',item),
    basket.splice(basket.indexOf(item),1)
  }else {
    console.log('Items removed: null')
  } 
;}
       

removeItem('bushings');
removeItem('adapter');
removeItem([1,2,3,4]);
console.log(basket);
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
