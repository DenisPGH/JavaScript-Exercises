function my(list,num){
    // let n=list.filter(x=>{
    //     if(list.indexOf(x)%num==0){
    //         return x;
    //     };
    // });
    let my_list=list;
    let n=[];
    for(let i=0;i<list.length;i+=num){
        n.push(list[i]);
        console.log(list[i]);

    }
    // console.log(n);
}




my(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);