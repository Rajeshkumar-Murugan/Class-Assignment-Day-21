
document.body.setAttribute("style", "text-align:center; height:100vh; display: flex; font-size: 3em; height: 100vh; flex-direction: column; align-items: center; justify-content: space-around;"); 
const msg = (count) => {
    return new Promise((resolve, reject) => {
    
      if(count> 0)
        {
          setTimeout(() =>{
          const heading = document.querySelector("h1");
          heading.innerText = count;
          resolve(count)
        }, 1000);
      
         }
    else{
     setTimeout(() => {reject("Happy Newyear!!");},1000)
    }
    });
    
  };
  

  async function check(num){  
    const count1 = await msg(num);
    const count2 = await msg(num-1);
    const count3 = await msg(num-2);
    const count4 = await msg(num-3);
    const count5 = await msg(num-4);
    const count6 = await msg(num-5);
  }
  check(5)
  .catch(() => {
                const heading = document.querySelector("h1");
                heading.innerText = "Happy Newyear!!";
                });
  