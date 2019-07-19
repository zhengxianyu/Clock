$(function() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let secondDeg = second / 60 * 360;
  let minuteDeg = (minute + second / 60) / 60 * 360;
  let hourDeg = (hour + minute / 60 + second / 3600) / 12 * 360;
  $('#second').html('@keyframes secondMove{0%{transform:rotate(' + secondDeg + 'deg);}100%{transform: rotate(' + (360 + secondDeg) + 'deg);}}');
  $('#minute').html('@keyframes minuteMove{0%{transform:rotate(' + minuteDeg + 'deg);}100%{transform: rotate(' + (360 + minuteDeg) + 'deg);}}');
  $('#hour').html('@keyframes hourMove{0%{transform:rotate(' + hourDeg + 'deg);}100%{transform: rotate(' + (360 + hourDeg) + 'deg);}}');
})
