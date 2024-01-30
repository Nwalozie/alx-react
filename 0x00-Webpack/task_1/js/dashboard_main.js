import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter and display the count
const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

$(document).ready(function() {
  // Add elements to the body using jQuery
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind updateCounter function to button click using Lodash debounce
  $('#startButton').on('click', _.debounce(updateCounter, 1000)); // Debounce for 1000 milliseconds (1 second)
});