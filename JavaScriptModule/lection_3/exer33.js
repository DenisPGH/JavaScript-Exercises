// car factory

function solve(dict){
    let parts_dict= {90: { power: 90, volume: 1800 },
    120: { power: 120, volume: 2400 },
    200: { power: 200, volume: 3500 },
}
if(dict.power<=90){dict.power=parts_dict[90];}
else if(dict.power<=120){dict.power=parts_dict[120];}
else{dict.power=parts_dict[200];}



Object.defineProperty(dict, 'engine',
    Object.getOwnPropertyDescriptor(dict, 'power'));
delete dict['power'];


let carr={
    'hatchback': { type: 'hatchback', color: '' },
'coupe': { type: 'coupe', color: '' },

}
dict.carriage=carr[dict.carriage]
dict.carriage.color=dict.color
delete dict.color


let wheelSizeNum=dict.wheelsize
if(wheelSizeNum%2==0){
    dict.wheelsize=Array(4).fill(wheelSizeNum-1);
}
else{
    dict.wheelsize=Array(4).fill(wheelSizeNum);
}

Object.defineProperty(dict, 'wheels',
    Object.getOwnPropertyDescriptor(dict, 'wheelsize'));
delete dict['wheelsize'];

    
    


    return dict;

}


let a={ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }

b=solve(a);


console.log(b);