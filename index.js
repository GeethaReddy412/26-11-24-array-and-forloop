// 1.	Write a for loop to print the numbers from 1 to 20.
for(var i=0;i<=20;i++){
    console.log(i);
}
// 2.	Create a for loop to print the squares of numbers from 1 to 10.
for(var i=0;i<=10;i++){
    console.log(i*i);
}
// 3.	Use a for loop to print the first 10 multiples of 5.
for(var i=1;i<=10;i++){
    console.log(i*5);
}
// 4.	Write a for loop to print numbers from 20 to 1 in reverse order.
for(var i=20;i>=1;i--){
    console.log(i);
}
// 5.	Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
for(var i=20;i>=2;i-=2){
    console.log(i);
}
// 6.	Print each element of the array	Input: [10, 20, 30, 40, 50]
array=[10, 20, 30, 40, 50];
for(var i=0;i<=array.length;i++){
    console.log(array[i]);
 }
// 7.	Print the index of each element along with its value Input: ['apple', 'banana', 'cherry']
var friut=['apple', 'banana', 'cherry'];
       for(var i=0;i<=friut.length;i++)
        {
             console.log(`index ${i}: ${friut[i]}`)
}