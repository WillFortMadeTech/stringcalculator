export function add(str) {
  if (str === ''){
    return '0';
  }

  const stringArr = str.split(',');
  let finalVal = 0;
  
  for (let string of stringArr){
    finalVal = finalVal + Number(string);
  }
  return (Math.round(finalVal*100)/100).toString();


}
