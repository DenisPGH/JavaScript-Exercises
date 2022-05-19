function town(list){


    let dict_products={};
    for(index in list){
        let[town,product,price]=list[index].split(' | ');
        if(!(Object.keys(dict_products).includes(product))){
            dict_products[product]={};
            dict_products[product]['town']=town;
            dict_products[product]['price']=Number(price);
            
        }
        else{
            if(dict_products[product]['price']>Number(price)){
                dict_products[product]['town']=town;
            dict_products[product]['price']=Number(price);

            }
            
                
        }
        // dict_products[product]={}
        

        // console.log(dict_products);
    }
    for(kvp of Object.entries(dict_products)) //Burger -> 10 (New York)
    
    console.log(`${kvp[0]} -> ${kvp[1]['price']} (${kvp[1]['town']})`);

}



// town(['Sample Town | Sample Product | 1000',
// 'New York | Sample Product | 1000.1']

// );

town(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);