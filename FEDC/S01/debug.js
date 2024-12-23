// there is a issue in adding element to remove last index element and we directly add in third index its wrong.
//because our array length is 3 and we remove in last index is 2 then we add in third index our output is [ 'Apple', 'Banana', <1 empty item>, 'Orange' ]
//so we add in second index then our output is correct
const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();  
//fruits[3] = "Orange";  
fruits[2] = "Orange";  
console.log(fruits);  
