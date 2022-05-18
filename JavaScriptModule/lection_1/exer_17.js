function my_func(...arguments){
    let list =[...arguments]
    let num=Number(list[0]);
    for(let i=1;i<list.length;i++){
        switch(list[i]){
            case 'chop': num/=2; break;
            case 'dice': num=Math.sqrt(num);break;
            case 'spice':num+=1;break;
            case 'bake': num*=3;break;
            case 'fillet': num-=num*0.2;break;
        }


        console.log(num);
    }



    // console.log(num);

}


// my_func('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// my_func('9', 'dice', 'spice', 'chop', 'bake', 'fillet');