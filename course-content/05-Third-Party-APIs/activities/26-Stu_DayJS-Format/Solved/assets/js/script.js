// Use Day.js to format the following variables:

// 1. What is your graduation date in the following format: Jan 1, 1999?
// 🔑 The first two questions require us to format a given date. 
// We parse the date that needs to be reformatted and then specify how we want to display the date. We could've used any date for the graduation date. The code will look something like the following example:
var gradDate = dayjs('2023-03-32').format('MMM D, YYYY');
$('#1a').text(gradDate);

// bonus: 
$("#1a").append("<br/>Days Remaining: " + dayjs('2023-03-16', 'MM/DD/YYYY').diff(dayjs(), 'days'))//how many days left from today
$("#1a").append("<br/>Days From Start to End: " + dayjs("03/16/2023", 'MM/DD/YYYY').diff(dayjs('2022-12-12', 'MM/DD/YYYY'), 'days'));//days from start to end
$("#1a").append("<br/>Days Since start: " + dayjs().diff(dayjs('2022-12-12', 'MM/DD/YYYY'), 'days'));//days from start to end


// 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);

// 3. What is the current time in the format: hours:minutes:seconds
//🔑 The next questions require us to format the current date and time. 
// We use dayjs() for the current date and time, then specify how we want to display it:
var time = dayjs().format('hh:mm:ss');
$('#3a').text(time);

// 4. What is the current Unix timestamp?
// Parse the Unix timestamp and convert it to date and time:

// What is Unix time?
// Unix time is a date and time representation widely used in computing. 
// It measures time by the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, the beginning of the Unix epoch
var unix = dayjs().unix();
$('#4a').text(unix);

// 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a');
$('#5a').text(unixFormat);

// 6. What is the difference in days between May 4, 2027 and today?
var targetDay = dayjs('2027-05-04');
var today = dayjs();
var days = targetDay.diff(today, 'day');
$('#6a').text(days);
