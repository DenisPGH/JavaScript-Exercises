function worker(dict){
    if(dict["dizziness"]===true){
        let need_water=Number(dict.experience)*Number(dict.weight)*0.1;
        dict['levelOfHydrated']+=need_water;
        dict['dizziness']=false;

    }

    return dict

}



a=worker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

console.log(a);