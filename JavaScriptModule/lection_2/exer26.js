// list of names
function sort_my(arr){
    arr=arr.sort((a,b)=>a.localeCompare(b));
    let n=arr.map(x=> console.log(`${arr.indexOf(x)+1}.${x}`));

    // return n;
}


sort_my(["John", "bob", "Christina", "Ema"]);
