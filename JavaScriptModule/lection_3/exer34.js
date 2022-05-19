function solve(list){
    let js_arr=[]
    for(each in list){
        let dict={};
       let [name,level,items]=list[each].split(' / ')
    //    console.log(name);
    
       dict.name=name
       dict.level=Number(level)
       if(items){dict.items=items.split(', ');}
       else{dict.items=[]}
       
       js_arr.push(dict)


    }

    return JSON.stringify(js_arr)




}



// a=solve(['Isacc / 25 / ',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// );

// console.log(a);