const arrayStat=(arr)=>{
    const stat={
        sum:0,
        average:0,
        min:Math.min(...arr),
        max:Math.max(...arr)
    }
    for (let i of arr){
        console.log(i)
        stat.sum+=i
    }
    stat.average=Number((stat.sum/(arr.length)).toFixed(2))

    return stat
}

console.log(arrayStat([1,2,56,3,61,34,100]))