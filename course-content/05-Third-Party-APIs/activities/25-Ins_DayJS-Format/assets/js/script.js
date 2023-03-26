// Use Day.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
// First we need to create a day object for today. We will use this in all of the answers. 
// We can do so with the following code:
var today = dayjs();
// For the answer to the first question, we format the day object today to use MMM D, YYYY format:
// https://day.js.org/docs/en/display/format
$('#1a').text(today.format('MMM D, YYYY'));
// $('#1a').text(dayjs().format('MMM D, YYYY HH:mm:ss'));

// 2. What is the day of the week today?
// To escape characters, wrap them in square brackets (e.g. [MM]).
var dayWeek = today.format('[Today is] dddd');
$('#2a').text(dayWeek);

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14 2010, 3:25:50 pm.
// https://day.js.org/docs/en/display/format
var reformatDate = dayjs('2020-11-03').format('dddd, MMMM D YYYY, h:mm:ss a');
// var todayReformatted = today.format('dddd, MMMM D YYYY, h:mm:ss a');
$('#3a').text(reformatDate);
// $('#3a').text(todayReformatted);


// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// Dayjs' .diff() method does NOT include partial weeks in its calculation.
var beginningOfYear = dayjs('2022-01-01');
// https://day.js.org/docs/en/display/difference
var weekNum = today.diff(beginningOfYear, 'week');

// Check for odd week, then assign boolean to variable
var takeOut = weekNum % 2 === 1;
$('#4a').text(takeOut + ", because it's currently week " + weekNum);
