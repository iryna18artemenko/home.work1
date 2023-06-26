const num1= prompt ('Перше число?', 2);
const num2= prompt ('Друге число?', 2);

const result1= num1 +'+'+num2 +'='+ +(+num1 + +num2);
const result2= num1 +'-'+num2 +'='+ (num1 - num2);
const result3= num1 +'*'+num2 +'='+ (num1 * num2);
const result4= num1 +'/'+num2 +'='+ (num1 / num2);

alert (result1+'\n' + result2+'\n' + result3+'\n' + result4);

