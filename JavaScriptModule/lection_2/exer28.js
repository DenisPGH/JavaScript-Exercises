// 8.	Sort an Array by 2 Criteria



function def(list){
    let new_list=list;
    new_list=list.sort((a,b)=>{
        let alen=a.length;
        let blen=b.length;
        if (alen !==blen){
            return alen-blen

        }
        else{
            return a.localeCompare(b);
        }
        
        
    }
    )
            
            
        
        
    for(a of new_list){
        console.log(a);

    }
    

}


// def(['alpha', 
// 'beta', 
// 'gamma']
// );

// def(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// )

// def(['test', 
// 'Deny', 
// 'omen', 
// 'Default']
// );
