const oddSquare=(arr)=>{
    const res=[]
    for(let ele of arr){
        if (ele%2 == 1) {
            res.push(ele*ele)
        }
    }
    return res

}

console.log(oddSquare([10, 15, 20, 25, 30]))