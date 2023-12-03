let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  
  /* let order = (fruitName, production) => {
    setTimeout(() => {
      console.log(`${stocks.fruits[fruitName]} was selected`);
      production();
    }, 2000);
  };
  
  let production = () => {
    setTimeout(() => {
      console.log('production has started');
  
      setTimeout(() =>{
        console.log('the food has been chopped');
  
        setTimeout(() => {
          console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
  
          setTimeout(() => {
            console.log('the machine was started');
  
            setTimeout(() => {
              console.log(`${stocks.holders[0]} was selected`);
  
              setTimeout(() => {
                console.log(`${stocks.toppings[0]}  was added as toppings`);
  
                setTimeout(() => {
                  console.log('serve ice cream');
                }, 1000);
  
  
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    });
  }
  
  order(0, production); */
  
  //promises: an alternative to callback hell
   
  let isShopOpen = true; 
  
  let order = (time, work) => {
  
    return new Promise ((resolve, reject) => {
      if(isShopOpen) {
  
        setTimeout(() => {
          resolve(work())
        }, time);
        
      } else {
        reject(console.log('our shop is closed'))
      }
    })
  }
  
  order(2000, () => {console.log(`${stocks.fruits[0]} was selected`)})
  
  .then(() => {
    return order(0000, () => {console.log('production has started')});
  })
  
  .then(() => {
    return order(2000, () => {console.log('the fruit has been chopped')});
  })
  
  .then(() => {
    return order(1000, () => {console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]}  was selected`)});
  })
  
  .then(() => {
    return order(1000, () => {console.log('start the machine')});
  })
  
  .then(() => {
    return order(2000, () => {console.log(`ice cream was placed on ${stocks.holders[0]}`)});
  })
  
  .then(() => {
    return order(3000, () => {console.log(`${stocks.toppings[0]} was selected`)});
  })
  
  .then(() => {
    return order(2000, () => {console.log('ice cream was served')});
  })
  
  //catch. handled rejection, will run when rejected
  .catch(() => {
    console.log('Customer left');
  })
  
  //finally runs whether promise runs or is rejected
  .finally(() => {
    console.log('day ended. shop is cosed');
  })*/
  
  //async and await: a better way to write promises
  
   async function order () {
    try{
      await Abc;
    }
    catch(error){
      console.log('abc doesn\'t exist', error)
    }
    finally{
      console.log('runs code anyway')
    }
  }
  
  order().then(() => {
    console.log('then');
  }); 
  
  let toppingsChoice = () => {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          console.log('which toppings would you love?')
        )}, 3000);
    });
  }
  
  async function kitchen () {
    console.log('A')
    console.log('B')
    console.log('C')
  
    await toppingsChoice()
  
    console.log('D')
    console.log('E')
  }
  
  kitchen()
  
  console.log("cleaning the dishes")
  console.log("cleaning the tables")
  console.log("taling others orders") */ 
  
  //best way to write asynchronous code
  
  function time(ms) {
    return new Promise ((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(resolve, ms)
      } else {
        reject(console.log('shop is closed'));
      }
    })
  }
  
  async function kitchen () {
    try{
      await time(2000)
      console.log(`${stocks.fruits[0]} was selected`)
  
      console.log('start the production')
  
      await time(2000)
      console.log('cut the fruit')
  
      await time(1000)
      console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`)
  
      await time(1000)
      console.log('start the machine')
  
      await time(2000)
      console.log(`ice cream placed on ${stocks.holders[0]}`)
  
      await time(3000)
      console.log(`${stocks.toppings[0]} was selected`)
  
      await time(2000)
      console.log('serve ice cream')
    }
    catch(error){
      console.log('customer left', error)
    }
    finally{
      console.log('day ended, shop is closed');
    }
  }
  
  kitchen();