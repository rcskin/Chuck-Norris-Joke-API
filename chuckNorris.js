//Create chuck norris jokes fetch
let items = [];

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((result) => {
    items = result;
    //put joke value into innerHTML of div element
    document.getElementById("joke").innerHTML = items.value;
  }),
  (error) => {
    console.log(error);
  };

/* Note to reviewer:
  I used the task notes and revisiting my pokemon API fetch code to help me with this task.
  I also used Prettier to format this document. */
