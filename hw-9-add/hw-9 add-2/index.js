function getFormattedTime(time) {
  
  const date = new Date (time);
  let min = date.getMinutes();

  if( min < 10 ) {
    min = "0" + min;
  }

  let sec = date.getSeconds();
  if(sec < 10 ) {
    sec = "0"+ sec;
  }

  let milis = parseInt(date.getMilliseconds() / 100)

    return `${min}:${sec}.${milis}`;
  }
  
  console.log(
    getFormattedTime(1523621052858)
  ); // 04:12.8
  
  console.log(
    getFormattedTime(1523621161159)
  ); // 06:01.1
  
  console.log(
    getFormattedTime(1523621244239)
  ); // 07:24.2
   
  
   