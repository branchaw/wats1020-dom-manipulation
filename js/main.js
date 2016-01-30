//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    
    // Created a function to listen for clicks on the "login" button. On click of the login button form slides up.

     $('#login').on('click', function() {
        $('.navbar-form').slideUp(400);
        $('.navbar-collapse').find('.user-info').delay(100).slideDown(500);       
      });
  
  //Created another function on click of logout button to bring back the login form.
  
      $('#logout').on('click', function() {
        $('.navbar-collapse').find('.user-info').hide();
        $('.navbar-form').slideDown(500);
      });
      
  
    // Created a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.

    $('.view-details').on('click', function(event){
      console.log(event);
      var targetElement = event.target;
      var container = targetElement.parentElement.parentElement;
      $(container).find('.details').each(function(index, el){
        if ($(el).is(':visible')){
          $(el).fadeOut();
          targetElement.innerText = "View Details"
        } else {
          $(el).fadeIn();
          targetElement.innerText = "Hide Details"
        }
      });
    });
  
    // Created a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
   
    var updateBars = function(voteCounts) {
    var greatBar=$('.great-progress');
    var greatestBar=$('.greatest-progress');
    var greatWidth=voteCounts.great/voteCounts.total;
    var greatestWidth=voteCounts.greatest/voteCounts.total;
    greatBar.css('width', greatWidth*100 + '%');
    greatestBar.css('width', greatestWidth*100 + '%');
  }
   
  $('.vote').on('click', function(event) {
      var button=$(event.target);
      if(button.data('vote') == 'great') {
        voteCounts.great += 1; 
      } else if(button.data('vote') == 'greatest') {
          voteCounts.greatest += 1;
        }
        voteCounts.total +=1;
        updateBars(voteCounts);
    
    });  
  

});
