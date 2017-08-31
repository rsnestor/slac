let sum=0;
process.argv.forEach((val, index) => {
  if(index>1) { sum+=Number(val) } 
});
console.log(sum);
