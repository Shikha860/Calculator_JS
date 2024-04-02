const output = document.querySelector('.result');
const button = document.querySelectorAll('button');
console.log("button",button);
console.log("output",output);

let str ='';

button.forEach((button)=>{
  button.addEventListener('click',(b)=>
  {
    console.log("b.target.textContent",b.target.textContent);
    if(b.target.textContent === 'AC')
    {
        str = '';
        output.value =str;
    }
    else if(b.target.textContent === 'Del')
    {
      str = str.substring(0, str.length-1);
      output.value = str;
    }
    else if(b.target.textContent==='=')
    {
       str = eval(str);
       output.value = str;
    }
    else
    {
      str += b.target.textContent;
      output.value = str;
    }
  })
})

