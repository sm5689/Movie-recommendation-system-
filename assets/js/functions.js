"use strict";
/*

############################################## FOR Watchlist ########################################### 

*/
// Selecting the elements
const modal = document.getElementById("modal");
const btnCloseModal = document.getElementById("close-modal");
const btnsOpenModal = document.getElementById("add-title");
// to store the data added to wishlist in the temp_database (array)
let temp_database = [];

// to store the data(name of the show) that is marked as watched in temp_database_to_remove
let temp_database_to_remove = [];

// temp_Data_after_wateched stores name of the movies/shows/anime that are watched and their ratings which is to be used for
// recommendation
let temp_database_after_watched = [];

// event occurs after
function rate_and_remove1(e) {
  // console.log("rate_and_remove");
  let to_rate_and_remove_html =
    e.parentNode.parentNode.parentNode.parentNode.innerHTML;

  let to_rate_and_remove = e.parentNode.parentNode.parentNode.parentNode;

  let extract_image_url = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf('<img src="') + 10,
    to_rate_and_remove_html.lastIndexOf('g">')
  );

  extract_image_url + "g";

  to_rate_and_remove_html = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf("<h2>") + 4,
    to_rate_and_remove_html.lastIndexOf("</h2>")
  );

  for (let i = 0; i < temp_database_to_remove.length; i++) {
    if (to_rate_and_remove_html == temp_database[i][0]) {
      temp_database.splice(i, 1);
      // console.log(temp_database);
    }
    if (to_rate_and_remove_html == temp_database_to_remove[i]) {
      temp_database_to_remove.splice(i, 1);
    }
  }

  // console.log(5);
  temp_database_after_watched.push([
    to_rate_and_remove_html,
    extract_image_url,
    1,
  ]);

  to_rate_and_remove.remove();
  console.log(temp_database_after_watched);

  if (temp_database.length < 5) {
    $(".grid-container").css({
      width: `${25 * temp_database.length}` + "%",
    });
  }

  tracklist();
}

function rate_and_remove2(e) {
  // console.log("rate_and_remove");
  let to_rate_and_remove_html =
    e.parentNode.parentNode.parentNode.parentNode.innerHTML;

  let to_rate_and_remove = e.parentNode.parentNode.parentNode.parentNode;

  let extract_image_url = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf('<img src="') + 10,
    to_rate_and_remove_html.lastIndexOf('g">')
  );

  extract_image_url + "g";

  to_rate_and_remove_html = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf("<h2>") + 4,
    to_rate_and_remove_html.lastIndexOf("</h2>")
  );

  for (let i = 0; i < temp_database_to_remove.length; i++) {
    if (to_rate_and_remove_html == temp_database[i][0]) {
      temp_database.splice(i, 1);
      // console.log(temp_database);
    }
    if (to_rate_and_remove_html == temp_database_to_remove[i]) {
      temp_database_to_remove.splice(i, 1);
    }
  }

  // console.log(5);
  temp_database_after_watched.push([
    to_rate_and_remove_html,
    extract_image_url,
    2,
  ]);

  to_rate_and_remove.remove();
  console.log(temp_database_after_watched);

  if (temp_database.length < 5) {
    $(".grid-container").css({
      width: `${25 * temp_database.length}` + "%",
    });
  }

  tracklist();
}

function rate_and_remove3(e) {
  // console.log("rate_and_remove");

  let to_rate_and_remove_html =
    e.parentNode.parentNode.parentNode.parentNode.innerHTML;

  let to_rate_and_remove = e.parentNode.parentNode.parentNode.parentNode;

  let extract_image_url = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf('<img src="') + 10,
    to_rate_and_remove_html.lastIndexOf('g">')
  );

  extract_image_url + "g";
  to_rate_and_remove_html = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf("<h2>") + 4,
    to_rate_and_remove_html.lastIndexOf("</h2>")
  );

  for (let i = 0; i < temp_database_to_remove.length; i++) {
    if (to_rate_and_remove_html == temp_database[i][0]) {
      temp_database.splice(i, 1);
      // console.log(temp_database);
    }
    if (to_rate_and_remove_html == temp_database_to_remove[i]) {
      temp_database_to_remove.splice(i, 1);
    }
  }
  // console.log(5);

  temp_database_after_watched.push([
    to_rate_and_remove_html,
    extract_image_url,
    3,
  ]);

  to_rate_and_remove.remove();
  console.log(temp_database_after_watched);

  if (temp_database.length < 5) {
    $(".grid-container").css({
      width: `${25 * temp_database.length}` + "%",
    });
  }

  tracklist();
}

function rate_and_remove4(e) {
  // console.log("rate_and_remove");
  let to_rate_and_remove_html =
    e.parentNode.parentNode.parentNode.parentNode.innerHTML;

  let to_rate_and_remove = e.parentNode.parentNode.parentNode.parentNode;

  let extract_image_url = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf('<img src="') + 10,
    to_rate_and_remove_html.lastIndexOf('g">')
  );

  extract_image_url + "g";

  to_rate_and_remove_html = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf("<h2>") + 4,
    to_rate_and_remove_html.lastIndexOf("</h2>")
  );

  for (let i = 0; i < temp_database_to_remove.length; i++) {
    if (to_rate_and_remove_html == temp_database[i][0]) {
      temp_database.splice(i, 1);
      // console.log(temp_database);
    }
    if (to_rate_and_remove_html == temp_database_to_remove[i]) {
      temp_database_to_remove.splice(i, 1);
    }
  }

  // console.log(5);
  temp_database_after_watched.push([
    to_rate_and_remove_html,
    extract_image_url,
    4,
  ]);

  to_rate_and_remove.remove();
  console.log(temp_database_after_watched);

  if (temp_database.length < 5) {
    $(".grid-container").css({
      width: `${25 * temp_database.length}` + "%",
    });
  }

  tracklist();
}

function rate_and_remove5(e) {
  // console.log("rate_and_remove");
  let to_rate_and_remove_html =
    e.parentNode.parentNode.parentNode.parentNode.innerHTML;

  let to_rate_and_remove = e.parentNode.parentNode.parentNode.parentNode;

  let extract_image_url = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf('<img src="') + 10,
    to_rate_and_remove_html.lastIndexOf('g">')
  );

  extract_image_url + "g";

  to_rate_and_remove_html = to_rate_and_remove_html.substring(
    to_rate_and_remove_html.lastIndexOf("<h2>") + 4,
    to_rate_and_remove_html.lastIndexOf("</h2>")
  );

  for (let i = 0; i < temp_database_to_remove.length; i++) {
    if (to_rate_and_remove_html == temp_database[i][0]) {
      temp_database.splice(i, 1);
      // console.log(temp_database);
    }
    if (to_rate_and_remove_html == temp_database_to_remove[i]) {
      temp_database_to_remove.splice(i, 1);
    }
  }

  // console.log(5);
  temp_database_after_watched.push([
    to_rate_and_remove_html,
    extract_image_url,
    5,
  ]);

  to_rate_and_remove.remove();

  console.log(temp_database_after_watched);

  if (temp_database.length < 5) {
    $(".grid-container").css({
      width: `${25 * temp_database.length}` + "%",
    });
  }

  tracklist();
}

// to store the movies that are marked as watched a.k.a rated (out of 5)
let temp_watched_movies = [];

// to store the size of the api that we fetched in variable total_size and  log it to console
var total_size = 0;

// desicion to keep or remove the add to wish list button in modal window
let add_to_wishlist_remove = false;

// Display Add title pop up and hide it when clicked on cross button
const openModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");

  // to make the submit button visible again once model window is clossed
  $("#submit").css({
    display: "inline",
  });

  // to clear the list presented to user to select the movie from is cleard
  // console.log(total_size);
  if (total_size > 0) {
    for (let i = 0; i < total_size; i++) {
      let to_remove = document
        .querySelector(".about")
        .querySelector(".container")
        .querySelector(".watchlist")
        .querySelector(".list");
      to_remove.remove();
    }
  }

  // if the requirement to remove the wishlist button and number field is met it will remove them
  if (add_to_wishlist_remove) {
    let remove_add_to_watchlist_input = document
      .querySelector(".about")
      .querySelector(".container")
      .querySelector(".watchlist")
      .querySelector(".pos");
    remove_add_to_watchlist_input.remove();

    let remove_add_to_watchlist = document
      .querySelector(".about")
      .querySelector(".container")
      .querySelector(".watchlist")
      .querySelector(".a_t_w");
    remove_add_to_watchlist.remove();
  }

  // will reset the size of the displayed movies to zero as all the listed movies are removed from the modal window
  total_size = 0;

  // will reset the condition for wishlist button and number field to be removed (false)
  add_to_wishlist_remove = false;
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  e.preventDefault();

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Getting the data via API
function getApi() {
  // to remove the button submit once add title button is pressed
  $("#submit").css({
    display: "none",
  });

  // to display the title passed from the text input into the console window
  const getTitle = document.getElementById("title").value;
  // console.log(getTitle);

  // api keys registered in the name of two team members... should be left commented used when one api runs out of daily limit.
  // nisarg api = https://imdb-api.com/en/API/SearchAll/k_8tcfd8ek/
  // sd api = https://imdb-api.com/en/API/SearchAll/k_ysik8czp/

  // JQuery to fetch the api content using the getTitle value that the user entered
  $(document).ready(function () {});
  $.ajax({
    method: "GET",
    url: "https://imdb-api.com/en/API/SearchAll/k_8tcfd8ek/" + getTitle,
    success: function (data) {
      // to store the size of the api that we fetched in variable total_size and  log it to console
      total_size = data.results.length;
      console.log(data);

      // to display the contents of the api to the user(movie list)
      for (var i = 0; i < total_size; i++) {
        const html = `
            <div class="list">
              <p class="items">(${i + 1})  ${data.results[i].title} 👉 ${
          data.results[i].description
        }</p>          
            </div>
            `;
        document
          .querySelector(".about")
          .querySelector(".container")
          .querySelector(".watchlist")
          .insertAdjacentHTML("beforeend", html);
      }

      // to display the add_to_wishlist button and number field at the bottom of the watchist container
      let input_field = `<input type="number" id="position" class="pos" name="quantity" min="1" max="5"><br/>
          <button id="add_to_wishlist" class="a_t_w">➕ Add To Wishlist</button>`;
      document
        .querySelector(".about")
        .querySelector(".container")
        .querySelector(".watchlist")
        .insertAdjacentHTML("beforeend", input_field);

      // to add the selected element from add title to wishlist
      document
        .getElementById("add_to_wishlist")
        .addEventListener("click", function () {
          let index = document.getElementById("position").value;
          get_movie(index);
        });

      // will specify that to remove the add to wish list button if cross button is pressed
      add_to_wishlist_remove = true;

      // event to be executed on button click (+ add to wish list)
      function get_movie(index) {
        // if the input field is left empty or started with 0 instead of 1 then it will default to 0
        if (index == "" || index == 0) {
          index = 1;
        }

        // initialize the db_size variable which stores the number of rows in the temp_database at the moment
        let db_size = 0;

        // increases the db_size by 1
        db_size += 1;

        // will store the recent data (which is the movie info that is clicked to add to wishlist) into the temp_database
        temp_database.push([
          data.results[index - 1].title,
          data.results[index - 1].image,
          data.results[index - 1].description,
        ]);

        // logs the data base to the console
        // console.log(temp_database);

        // will append the the recently added data to the html for the viewers to view the updated woshlist
        var html2 = `
          <div class="border">
            <div class="card">
              <div class="poster">
                <img src=${data.results[index - 1].image} />
              </div>
              <div class="details">
                <h2>${data.results[index - 1].title}</h2>
                <div class="rate">
                  <button class="rating 1_star" onclick="rate_and_remove1(this)">😪</button>
                  <button class="rating 2_star" onclick="rate_and_remove2(this)">🥱</button>
                  <button class="rating 3_star" onclick="rate_and_remove3(this)">😐</button>
                  <button class="rating 4_star" onclick="rate_and_remove4(this)">🙂</button>
                  <button class="rating 5_star" onclick="rate_and_remove5(this)">😄</button>
                </div>
              </div>
            </div>
          </div> 
          `;

        // for customizing the width of the wishlist-grid, for 1 it will be 25%, 2 - 50% ... and 4 onwards 100%
        if (temp_database.length < 5) {
          $(".grid-container").css({
            width: `${25 * temp_database.length}` + "%",
          });
          // console.log(`${25 * temp_database.length}` + "%");
        }
        document
          .querySelector(".about")
          .querySelector(".container")
          .querySelector(".grid-container")
          .insertAdjacentHTML("beforeend", html2);

        // will specify that to remove the add to wish list button and the number field if cross button is pressed
        add_to_wishlist_remove = true;
        temp_database_to_remove.push(
          temp_database[temp_database.length - 1][0]
        );
        // console.log(temp_database_to_remove);

        // to close the model window when the cross button is pressed
        closeModal();
      }
    },
  });
}

/*

############################################## FOR  tracklist ########################################## 

*/
function tracklist() {
  var html3 = `
          <div class="border">
            <div class="card">
              <div class="poster">
                <img
                  src=${
                    temp_database_after_watched[
                      temp_database_after_watched.length - 1
                    ][1]
                  }
                />
              </div>
              <div class="details">
                <h2>${
                  temp_database_after_watched[
                    temp_database_after_watched.length - 1
                  ][0]
                }</h2>
                <p>${"⭐".repeat(
                  temp_database_after_watched[
                    temp_database_after_watched.length - 1
                  ][2]
                )}</p>
              </div>
            </div>
          </div>
          `;

  // for customizing the width of the wishlist-grid, for 1 it will be 25%, 2 - 50% ... and 4 onwards 100%
  if (temp_database_after_watched.length < 5) {
    $(".grid-container2").css({
      width: `${25 * temp_database_after_watched.length}` + "%",
    });
  }
  document
    .querySelector(".resume")
    .querySelector(".container")
    .querySelector(".grid-container2")
    .insertAdjacentHTML("beforeend", html3);
}
