function num(num){
    let str_num=String(num)
    let str_num_len=str_num.length
    let sum=0;
    let is_same=true;
    let first_num=str_num[0];
    
   

    for(let i=0;i<str_num_len;i++){
        sum+=Number(str_num[i]);
        if(first_num !==str_num[i]){
            is_same=false;
        }


    }
    console.log(is_same);
    console.log(sum);
    

}

// num(2222222);