const sortProducts=(arr)=>{

    return arr.sort((a,b)=>a.price-b.price)
}

console.log(
    sortProducts([{
        name:"Banana",
        price:3
    },
    {
        name:"Avocado",
        price:1
    },{
        name:"papaya",
        price:2
    }
])
);
