export function add(str) {

  let finalVal = 0;
  
  for (let string of str.split(',')){
    finalVal += Number(string);
  }

  return (Math.round(finalVal*100)/100).toString();


}
