function common(a,b){
    while (a!==b){
        if (a>b){
            a-=b;
        }else{
            b-=a;
        }
    }
    console.log(a);
}

// common(15,5);
// common(2154, 458);