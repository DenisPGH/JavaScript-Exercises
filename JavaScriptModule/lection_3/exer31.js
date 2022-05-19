// 1.	Calorie Object

function solve(list){
    let dict={}
    for(let i=0;i<list.length;i+=2){
        dict[list[i]]=Number(list[i+1]);
        // console.log(i);
    }
    console.log(dict);
}






// solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);