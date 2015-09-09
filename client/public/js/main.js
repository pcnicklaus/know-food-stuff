$(document).on('ready', function() {
  // get all penguins on DOM load
  getRecipes();
});

// handle form submission
$('#recipe-inputs').on('submit', function(e){
  e.preventDefault();
  // clear message
  $('#message').html('');
  // create payload on form submit
  var payload = {
    name: $('#recipe-name').val(),
    type:$('#recipe-type').val(),
    time: $('#recipe-time').val(),
    notes: $('#recipe-notes').val()
  };
  console.log(payload);
  // send post request to server
  $.post('/recipes', payload, function(data) {
    // append 'Added' to DOM
    $('#message').html('Added');
    // get all recipes
    getRecipes();
  });
});


function getRecipes(){
  $.get('/recipes', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>'+
          '<td><a href="#">'+data[i].name+'</a></td>'+
          '<td>'+data[i].type+'</td>'+
          '<td>'+data[i].time+'</td>'+
          '<td>'+data[i].notes+'</td>'
      );
    }
  });
}
