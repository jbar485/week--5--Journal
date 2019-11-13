import { theJournal } from './journ';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const newArray = [];
    const title = $("#titleInput").val();
    const secrets = $("#diaryInput").val();
    newArray.push(secrets);
    console.log(title, secrets, newArray);
    $("#finalOutput").text(title + "\n" + secrets);
  });
});
