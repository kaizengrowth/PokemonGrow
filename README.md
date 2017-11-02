# PokemonGrow
Project #2 (General Assembly Web Development Intensive) -- a web pomodoro app integrated with Fitbit API that helps you ingrain good habits and master new skills. With each half-hour you spend practicing your skill, you can watch your pocket pokemon grow and evolve!

Think: tamagotchi crossed with a pomodoro timer and skills tracker!



## /// === **Wireframes and User Stories** === ///

Here were the original wireframes I used when conceptualizing this app and its data model.

![Wireframes](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/wireframes/wireframe.jpg "Wireframe")

![Data Model, Game Logic](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/wireframes/data_model.jpg "Data Model, Game Logic")

### User stories:

  1. User can create a login account.
  2. User can login with valid authentication details, and her password is encrypted on the server.
  3. Once logged in, user can add practices / learning goals (pokemon) to her "backpack" by naming the skill.
  4. User can see all her pokemon in her Pokedex.
  5. User can use the Pokeball to time a pomodoro worth of practice in her chosen skill.
  6. User can access the Pokemon app on the Fitbit.
  7. User's Fitbit can access data in JSON formatted from the deployed pokemon app.
  8. Pomodoro game logic - user's pokemon gains XP points and "evolves" as user practices skill. 
  9. Habit streaks - user's pokemon increase in hunger every day since creation date, and the hunger can be assuaged with pomodoros.
  10. Pocket pokemon - user's pokemon animates happily on the Fitbit app like an old school Tamagotchi.
 
### Future user stories:
  11. Geolocation is tracked on Fitbit with analytics dashboard on the locations and times when user is most productive.
  12. Analytics dashboard of practice times, habit streaks, and productivity.
  13. Fitbit exercise is logged directly into the app.


* Plan to fix or add (7-13)


## /// === **Technologies & API's** === ///

I am really excited to have the chance to play around with the open source Fitbit Studio! Within Fitbit, there is a communication API and a messaging API that uses web sockets, and can be used to fetch data from the Pokemon Pomodoro web server. I formatted the response in my user-controller so that it can display JSON data, but am not able to get the Fitbit to display this data in the time frame allowed for this project.

![Fitbit Load Screen](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/myfitbitapp_loadscreen.jpg "Fitbit App Load Screen")

In addition to Express routes and the Node modules we have explored in class, I am also using MomentJS to parse StartDate. I've played around with the Pokemon public API to randomly generate pokemon, but decided to instead constrain my database to a limited number of preselected pokemon.

![Fitbit Pomodoro Timer](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/fitbitapp_spinningtimer.jpg "Fitbit Spinning Pomodoro TImer")


## /// === ** Favorite Code Snippet ** === ///

There are lots of little snippets that I enjoyed putting together, but here's a simple pomodoro countdown function in Javascript:

```javascript

let minutes = 25;
let seconds = minutes * 60;
let pomodoros = 0;
let shortbreaks = 0;
let longbreaks = 0;
let isPomodoro = true;

function displayTime(seconds) {
    let displayMinutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;

    if (displayMinutes < 10) {
        displayMinutes = "0" + displayMinutes;
    }

    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }

    $("#time").text(displayMinutes + ":" + displaySeconds);
}

function timeOut() {
    alert("Time out!");
    clearInterval(countDown);
    addPoints();
};

$(document).ready(function() {
  let countDown = setInterval(function() {
        displayTime(seconds);
        seconds--;
        if (seconds === 0) {
            return timeOut();
        }
    }, 1000);
});

```



## /// === **How-to-use instructions** === ///

You can download this file on Github, install dependencies in node, and run the app with npm; or use the current deployed version of the app, here:
https://immense-springs-58058.herokuapp.com

The game is created to encourage users to practice skills or master habits that require a lot of time commitment over an extended period of time! This app is especially designed for kids who may need to spend a certain number of hours per week on a particular subject. Nostalgic for the old school pomodoros, my goal was to create a digital pet on a Fitbit watch that would bounce around and grow as the user logs more "practice time" into the pomodoro timer. 

According to Malcolm Gladwell's (oft-disputed) evangelism on ninja skill mastery -- it takes about 10,000 hours to truly "master" any skill. My plan is to spend at least another tenth of that amount mastering the Fitbit API and launching a full version of this app in the future to the Fitbit app-store.



## /// === **Screenshots for Mobile Responsive Version of Web App** === ///

### Index Home Screen

![Index Home Screen](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/Index.png "Index Home Screen")

---



### Show All User's Pokemon Screen

![Show All User's Pokemon Screen](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/ShowAllPokemonByUser.png "Show All Users' Pokemon")

---



### Show One Pokemon's Stats Screen

![Show One Pokemon's Stats](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/ShowOnePokemon.png "Show One Pokemon's Stats")

---



### Pomodoro Timer with 60-second Spinning Pokeball Clock

![Pomodoro Timer Spinning Ball](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/Pomodoro.png "Pomodoro Timer Spinning Ball")

---



### Create New Pokemon

![Create New Pokemon](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/CreateNewPokemon.png "Create New Pokemon")
