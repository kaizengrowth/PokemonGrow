# "PokemonGrow"  
### General Assembly Web Development Intensive, Project 2

Train to be your very best with a Pokemon sidekick! This is a web pomodoro app integrated with Fitbit API that helps you ingrain good habits and master new skills. With each passing half-hour that you spend practicing your skill, you can watch your Pokemon grow and evolve!

Think: tamagotchi crossed with a pomodoro timer and skills tracker!

![Screenshots](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/screenshots/allScreens.jpg "Screenshots of My App")



## /// === **Technologies & API's** === ///

I am really excited to get the chance to play around with the open source Fitbit Studio! Within Fitbit, there is a communication API and a messaging API that uses web sockets, and can be used to fetch data from the Pokemon Pomodoro web server. I formatted the response in my user-controller so that it can display JSON data. While I am not able to get the Fitbit to display this data in the short time frame allowed for this project, I better understand the code and technologies involved, and will continue working towards building this functionality for a future project..

![Fitbit Load Screen](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/myfitbitapp_loadscreen.jpg "Fitbit App Load Screen")

In addition to Express routes and the Node modules we have explored in class, I used MomentJS to parse dates and timestamps. I played around with the Pokemon DB public API to randomly generate pokemon and connect them along pokemon evolution charts, but later decided instead to constrain my database to a limited number of preselected pokemon.

I used Heroku to deploy this web app with a PostgreSQL database. The server and routes were created with the Express application framework, on the Node.js Javascript runtime. Other dependencies include BcryptJS for hashing passwords and Passport for authentification, Morgan as a logger, Nodeman for monitoring changes on the server, jQuery for user interface interactions, and various Node modules. I used Adobe Photoshop, Illustrator, and some pure CSS to create image, vector svg's, the logo and splash screens on the web app and Fitbit.

![Fitbit Pomodoro Timer](https://github.com/kaizenagility/PokemonGrow/blob/master/wireframes/fitbitapp_spinningtimer.jpg "Fitbit Spinning Pomodoro TImer")




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



## /// === ** Favorite Code Snippet ** === ///

There are lots of little snippets that I enjoyed putting together, but here's a simple pomodoro countdown function in Javascript:

```javascript

let minutes = 25;
let seconds = minutes * 60;
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
    clearInterval(countDown);
    addPoints();
    alert("Time out!");
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



## /// === **How-to-use Instructions** === ///

You can download this file on Github, install dependencies in node, and run the app with npm; or use the current deployed version of the app, here:
https://immense-springs-58058.herokuapp.com

The game is created to encourage users to practice skills or master habits that require a lot of time commitment over an extended period of time! This app is especially designed for kids who may need to spend a certain number of hours per week on a particular subject. Nostalgic for the old school tamagatchi "digital pets", my goal is to create a Fitbit "pet" on your smartwatch that would bounce around and "grow" as you log more "practice time" into the pomodoro timer. 

According to Malcolm Gladwell's (oft-disputed) evangelism on ninja skill mastery -- it takes about 10,000 hours to truly "master" any skill. My plan is to spend at least another tenth of that amount mastering the Fitbit API and launching a full version of this app in the future to the Fitbit app-store.
