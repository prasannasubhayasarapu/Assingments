let count=0;
const loadinginterval=setInterval(()=>{
console.log(("Loading..."));
count++
if(count>=5){
    clearInterval(loadinginterval);
    console.log("Loaded successfully")
}
},1000);