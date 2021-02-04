const numbers = [5, 6, 7, 8, 9, 10];
const output = [];

for (let i = 0; i < numbers.length; i++){
      const element = numbers[i];
      const result = element * element;
      output.push(result);
}
console.log(output);

//Map
const numbers = [5, 6, 7, 8, 9, 10];

const result = numbers.map(function(element){
    return element * element;
})

console.log(result);


//Filter
const numbers = [5, 6, 7, 8, 9, 10];

const result = numbers.filter(x => x < 7);
const there = numbers.find(x => x > 7);

console.log(result);
console.log(there);