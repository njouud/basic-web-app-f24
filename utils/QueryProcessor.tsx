export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "ntalib" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "ntalib" );
  }

  if (query.toLowerCase().includes("plus")) {
    let numbers = query.match(/\d+/g); // Extracts all numbers from the string
  
    if (numbers) {
      let sum = 0;
  
      // Loop through each extracted number and calculate the sum
      for (let numString of numbers) {
        let num = parseInt(numString, 10);
        sum += num; // Add each number to the sum
      }
  
      return sum.toString(); // Return the total sum as a string
    }
  }
  

  if (query.toLowerCase().includes("largest")) {

     let numbers = query.match(/\d+/g); // Extracts all numbers from the string

     if (numbers) {
       let num1 = parseInt(numbers[0], 10);
       let num2 = parseInt(numbers[1], 10);
       let num3 = parseInt(numbers[2], 10);
       let largest = 0;

       if (num1 >= num2 && num1 >= num3) {
          largest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
          largest = num2;
        } else {
          largest = num3;
      }
    
       return ( largest.toString() );
     }
   }

   if (query.toLowerCase().includes("largest")) {

    let numbers = query.match(/\d+/g); // Extracts all numbers from the string

    if (numbers) {
      let num1 = parseInt(numbers[0], 10);
      let num2 = parseInt(numbers[1], 10);
      let num3 = parseInt(numbers[2], 10);
      let largest = 0;

      if (num1 >= num2 && num1 >= num3) {
         largest = num1;
       } else if (num2 >= num1 && num2 >= num3) {
         largest = num2;
       } else {
         largest = num3;
     }
   
      return ( largest.toString() );
    }
  }
  if (query.toLowerCase().includes("square and a cube")) {
    let numbers = query.match(/\d+/g); // Extracts all numbers from the string
  
    if (numbers) {
      let results = [];
  
      // Loop through each extracted number
      for (let numString of numbers) {
        let num = parseInt(numString, 10);
        let sqrt = Math.sqrt(num);
        let cbrt = Math.cbrt(num);
  
        // Check if the number is both a perfect square and a perfect cube
        if (Number.isInteger(sqrt) && Number.isInteger(cbrt)) {
          results.push(num);
        }
      }
  
      // Return the results or a message if no numbers are found
      return results.length > 0 ? results.join(", ") : "No numbers are both a square and a cube.";
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
     let numbers = query.match(/\d+/g); // Extracts all numbers from the string
 
     if (numbers) {
       let num1 = parseInt(numbers[0], 10);
       let num2 = parseInt(numbers[1], 10);
       console.log(num1, num2);
 
       let ans = num1 * num2;
       return ( ans.toString() );
     }
   }

   if (query.toLowerCase().includes("minus")) {
    let numbers = query.match(/\d+/g); // Extracts all numbers from the string

    if (numbers) {
      let num1 = parseInt(numbers[0], 10);
      let num2 = parseInt(numbers[1], 10);
      console.log(num1, num2);

      let ans = num1 - num2;
      return ( ans.toString() );
    }
  }

  if (query.toLowerCase().includes("are primes")) {
    let numbers = query.match(/\d+/g); // Extracts all numbers from the string
  
    if (numbers) {
      let results = [];
  
      // Loop through each extracted number
      for (let numString of numbers) {
        let num = parseInt(numString, 10);
  
        // Check if the number is prime directly
        if (num <= 1) {
          // 0 and 1 are not prime numbers
          continue; // Skip this iteration
        }
        if (num <= 3) {
          // 2 and 3 are prime numbers
          results.push(num);
          continue; // Skip to the next number
        }
  
        // Check for factors from 2 to the square root of num
        let isPrime = true; // Assume the number is prime
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) {
            isPrime = false; // Found a factor, not prime
            break; // No need to check further
          }
        }
        
        // If no factors were found, the number is prime
        if (isPrime) {
          results.push(num);
        }
      }
  
      // Return the results or a message if no prime numbers are found
      return results.length > 0 ? results.join(", ") : "No prime numbers found.";
    } else {
      return "No numbers were found in the query.";
    }
  }
  
  

  return "";
}
