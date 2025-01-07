Hello My name is Kikani Pushkar.
I am currently pursuing my Diploma in Computer Engineering at VPMP Polytechnic.
This is Typing Speed Test App made by me using JS.

<h2>Typing Speed Test Game</h2>
This is a simple typing speed test game created using HTML, CSS, and JavaScript. The game challenges users to type a random paragraph within a given time limit (60 seconds) while tracking key performance metrics such as WPM (words per minute), CPM (characters per minute), and mistakes.

<h2>Features</h2>
<b>Timer: </b> <br>
60 seconds countdown.<br><br>

<b>Words Per Minute (WPM):</b> <br>
Tracks the typing speed of the user in real-time.<br>

<b>Characters Per Minute (CPM):</b> <br>
Tracks the number of characters typed in real-time.<br>

<b>Mistakes:</b> <br>
Counts and displays the number of mistakes made during the typing session. <br>

<b>Try Again:</b> <br>
Allows users to restart the test with a new random paragraph. <br>

<h2>Files Overview</h2>
<b>typing.html:</b> <br>
The main HTML file that contains the structure and layout of the game.<br><br>

<b>typing.css:</b> <br>
The stylesheet for the game's design and layout.<br>

<b>paragraph.js:</b> <br>
This JavaScript file contains an array of paragraphs that the user must type.<br>

<b>typing.js:</b> <br>
The JavaScript file responsible for the game logic (timer, user input, error checking, etc.).<br>

<h2>Game Logic</h2>
1) The user has 60 seconds to type as much of the given paragraph as possible. <br>
2) For each correct character typed, the text is highlighted green. <br>
3) For each incorrect character typed, it is highlighted in red, and the mistake count increases. <br>
4) After the time is up, the game stops, and the user can view their final results (WPM, CPM, and Mistakes). <br>
5) The WPM calculation is based on the number of correctly typed characters divided by 5 (since a word is considered to be 5 characters) and adjusted for the remaining time.
