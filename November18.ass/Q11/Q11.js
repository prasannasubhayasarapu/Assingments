function processProducts(products) {
const productnames=products.map((el)=>el.name)
products.forEach(b=>{
if(b.price>50){
    console.log(`${b.name} is above $ 50`);
}
else{
   console.log(`${b.name} is below $ 50`);
}
})
return productnames;

}

const products= [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }
]

console.log(processProducts (products));