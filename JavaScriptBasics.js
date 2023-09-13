//1. multiplication table 
const number = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}


//2. print first n prime numbers
let count=0
let i,j 
for(j=2;j<=100;j++)
{
	for( i=1;i<=j;i++)
	{
	 
	  if(j%i==0)
	  count++
	  
	}

	if(count==2){
	console.log(j)
	}
	count=0
    
}