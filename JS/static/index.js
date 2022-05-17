function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML ="Time:" + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}


function print(){
  let a='Deni';
  document.body.innerHTML+= `<div>${a}</div>`;
}
function print_other(){
  let a='Petrov';
  document.body.innerHTML += `<div>${a}</div>`;
  for(let b=1;b<10;b++){
    document.body.innerHTML += `<div>${b}</div>`;
  }
}