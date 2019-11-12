import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    $("#finalOutput").text("Hey");
  });
});
