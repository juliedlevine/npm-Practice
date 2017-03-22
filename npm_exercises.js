var marked = require('marked');
var chalksay = require('chalksay');
var _ = require('lodash');
var cheerio = require('cheerio');
var request = require('request');

// MARKED
// console.log(marked('I am using __markdown__.'));


// LODASH
var myArray = [1, 2, 3, 4, 5, 6, 7];
var shuffled = _.shuffle(myArray);
var sum = _.sum(myArray);
var largest = _.max(myArray);
// console.log('Shuffled array: ' + shuffled);
// console.log('Sum of all numbers in array: ' + sum);
// console.log('Largest number in this array is: ' + largest);


// CHEERIO
var options = {
   url: 'https://www.npmjs.com/'
};
request.get(options, function(err, response, pageData) {
    if (err) {
        console.log(err.message);
        return;
    }

    var $ = cheerio.load(pageData);
    var frequentlyUsed = [];
    $('#pane-frequently-installed h3 a').map(function() {
        frequentlyUsed.push($(this).text());
    });
    // console.log(frequentlyUsed);
}); // End get request


// CHALKSAY
chalksay.cyan('Hello Im light blue.');
chalksay.magenta('Hi, Im pink.');
chalksay.green('Hey, Im purple.');
