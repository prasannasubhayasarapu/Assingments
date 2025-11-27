console.log("Begin");//synchronous-runs first
 setTimeout(() => { console.log("Timeout Task"); }, 0);
 Promise.resolve().then(() => { console.log("Promise Task"); }); 
 console.log("End");