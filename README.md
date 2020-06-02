# The Jungle Book Memory Game 
### Milestone Two project: Interactive Frontend Development – Code Institute
The Jungle Book Memory Game has been created for the pleasure and entertainment of all ages. This is a complete web browser-based card flip and match game to improve memory and concentration. 

## Demo
A demo of the game can be found [here](https://ktm28.github.io/JungleBook_Memory_Game/).

## UX
The game has been designed to be intuitive and user friendly within the boundary of my current coding skills and its design scope. It allows for user to find the matching pair for each card. The function of the game is to allow players to match two cards of the same character image to make a pair. The aim here is to find the matching pairs before the timer runs out. The game consists of three difficulty level. On matching pair on each level, the player automatically unlocks the next level. 

*	When the game loads a player is presented with the ‘Click to start the Game’ Overlay Page with a simple instruction text. When the player clicks the mouse the overlay page disappears and the game starts with a countdown timer and a background music. 
*	To play the game the player has to simply hover the mouse on the cards of their choice and click. There is a flip sound associated with each click.
*	If the player finds the matching pair for the given card a match sound plays to alert the player that the card has matched.
*	When all cards at a given level is matched within the timeframe the player unlocks next level.  
*	Before the start of the second and the final level a player is presented with the level-up overlay with a background sound associated with it. The player simply has to click on the Level-up overlay to continue playing.
*	When the player matches all card in the final level a victory overlay appears with winning text and a victory background music together with a button to replay the game.
*	Finally, If the player loses the game at any level a game-over overlay appears with a game-over background music and a button to re-start the game.


 `View Wireframe:` 
[Here]( https://github.com/KTM28/JungleBook_Memory_Game/blob/master/wireframes/memoryGame.png)

### User Stories
*  I would play the game to improve my memory and concentration
*  I would enjoy viewing and matching images from the all-time favourite story of my childhood the Jungle Book characters simultaneously listening to the original soundtrack.
* I like to hear sounds when making moves such as click on the cards.
* I would like to play the game in different sets of devices.
* I like playing game with different set of difficulty levels.
* I like being notified whether I have completed the level / lost the game or         won the game.  

 ## Features
### Existing Features

*	The game is fully responsive across various devices. 
*	User Intuitiveness and simplicity to navigate and find your way all across the page.   
*	Original Images from Jungle Book characters 
*	The Jungle Book soundtrack for background music, game-over music and         victory-music 
*	 Sound effect for card flip, card match and level up. 
*	Countdown timer and flip counter for each flip. 
*	Background sound mute and unmute button.
*          pointer cursor for overlay and cards.
*	Simple click to start overlay to start the game.
*	3D buttons for game-over or victory which refresh the page and leads to the game start overlay.   
*	level up overlay with click to continue. 
*	Automatic level up when player completes the current level.  



### Features left to implement
In the future, 
*  I would like to display total time and total flip taken by a player and some reward in the victory overlay
*  Add more levels to the game.
*  Separate background image for each Level.
*  Different background-music for each level.
*  Reset Game Button


## Technologies
1.	[HTML5]( https://en.wikipedia.org/wiki/HTML5) 
* Used as a mark-up language to create the skeleton of the webpage.

2.	[CSS3]( https://en.wikipedia.org/wiki/Cascading_Style_Sheets) 
* Used for styling the look of the webpage and media queries for responsiveness.
3.	[JavaScript]( https://en.wikipedia.org/wiki/JavaScript)  
* Used for the implementation of the all the functions in the game thus, making it interactive and alive.
4. [Cloudinary]( https://cloudinary.com/) 
 * Used to store and upload images.
5. [Favicon.io]( https://favicon.io/)
* To generate favicon for the site.



## Testing
* The testing of the HTML and CSS element was done using W3C Mark Validator.  
* The testing of the JavaScript was done using babeljs.io
* The website has been tested and runs in a various different browser such as Chrome, Edge, Safari and Firefox and is compatible. 
* Different screen sizes in Chrome/Edge/Firefox developer tool have been tested to ensure the website is also compatible with many popular responsive sizes.
* Manual testing of all the 38 functions created in JavaScript in the webpage was done through console system in the browser and by navigating and checking the elements, overlay page and buttons in the page all resulting in successful outcome.




## Deployment
*  The site was developed using VS Code IDE. 
*  This site is hosted using GitHub Pages, deployed directly from the master branch. 
*  The site will automatically update upon new commits to the master branch. 
*  To ensure the site to deploy correctly the landing page is appropriately named `index.html`.
*  To run locally, clone this repository to your choice of the editor by pasting `(git clone)` `https://github.com/KTM28/JungleBook_Memory_Game`   into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.
*  If the above method is not suitable one can also download the zip file containing the whole project by using green download button at the top of the GitHub page.


## Credits
### Code
* I’ve used JavaScript object-oriented programming concept learned from PortEXE Mix or Match card game found on [YouTube]( https://www.youtube.com/watch?v=3uuQ3g92oPQ);
* I’ve used solutions found in stack-overflow for local storage storing levels in the game.
* To duplicate cards in Array with three(…) dots spread operator method is taken from [codingame.com]( https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun)
* For 3D buttons [codepen.io]( https://codepen.io/FelipeMarcos/pen/tfhEg)

### Media
* The Images for the website are from
[Freepik]( www.freepik.com/free-photos-vectors/background) 
and [Here]( https://www.freepngimg.com/)
* Background audio, Victory audio, Game-over audio all downloaded from [HERE]( https://downloads.khinsider.com/)
*  Sounds effects for game were taken from [HERE]( https://freesound.org/browse/tags/game-sound/)






