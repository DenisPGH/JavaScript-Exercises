function my(arr, count) {
    
    for (let i=0;i<count;i++){
        arr.unshift(arr.pop());
    } 
    
    return arr.join(' ');
  }


//   d=my(['1', 
//   '2', 
//   '3', 
//   '4'], 
//   2
//   );

//   console.log(d);