export default function getTimeDifference(date_future: Date, date_now: Date) {
  var d = Math.abs(+date_future - +date_now) / 1000; // delta
  var r: Record<string, any> = {}; // result
  var s: Record<string, any> = {
    // structure
    year: 31536000,
    month: 2592000,
    week: 604800, // uncomment row to ignore
    day: 86400, // feel free to add your own row
    hour: 3600,
    minute: 60,
    second: 1,
  };

  Object.keys(s).forEach(function (key) {
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
  console.log(r);
  return r;
}

// function timeConversion(millisec) {

//   var seconds = (millisec / 1000).toFixed(1);

//   var minutes = (millisec / (1000 * 60)).toFixed(1);

//   var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

//   var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

//   if (seconds < 60) {
//       return seconds + " Sec";
//   } else if (minutes < 60) {
//       return minutes + " Min";
//   } else if (hours < 24) {
//       return hours + " Hrs";
//   } else {
//       return days + " Days"
//   }
// }
