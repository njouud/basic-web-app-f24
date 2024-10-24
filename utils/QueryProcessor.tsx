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
   // const num = 70 + 67;
    // return ( num.toString() );
    let numbers = query.match(/\d+/g); // Extracts all numbers from the string

    if (numbers) {
      let num1 = parseInt(numbers[0], 10);
      let num2 = parseInt(numbers[1], 10);
      console.log(num1, num2);

      let ans = num1 + num2;
      return ( ans.toString() );
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
  
  return "";
}
