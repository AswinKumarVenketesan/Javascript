export function* randomNuber(number) {
  
    while(true) {
      number = number * 16807 % 2147483647
      yield number;
    }
  
  };
  
  let generator = randomNuber(2);
  
  console.log(generator.next().value); // 16807
  console.log(generator.next().value); // 282475249
  console.log(generator.next().value); // 1622650073