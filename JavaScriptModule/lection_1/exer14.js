function prev_day(year, month,day){
    let string_date=`${year}-${month}-${day}`
    let date= new Date(string_date);
    let day_before=new Date(date.getTime());
    day_before.setDate(date.getDate()-1);

    let y=day_before.getFullYear();
    let m=day_before.getMonth();
    m+=1;
    let d=day_before.getDate();
    
    // console.log(`${year}-${month}-${day}`)
    // console.log(day_before);
    console.log(`${y}-${m}-${d}`);
}


// prev_day(2022, 1, 1);