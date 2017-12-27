// VARIABLES
        // ==========================================================================

        // The object questions for our quiz game.
        var questions = {
            q1: ["Who is the greatest Laker player of all-time?"],
            q2: ["How many championships did the Lakers win?"],
            q3: ["What is Magic Johnson's jersey number?"],
            q4: ["What is Kobe Bryant's jersey number?"],
            q5: ["Who did the Lakers play in the 2008 playoffs?"]
        };

        // We start the game with a score of 0.
        var score = 0;
        // Variable to hold the index of current question.
        var questionIndex = 0;
        // Array of questions.
        var questionArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

        // Function to render questions.
        function renderQuestion() {
            // If there are still more questions, render the next one.
            if (questionIndex <=(questionArray.length - 1)) {
                document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
            }
            // If there aren't, render the end game screen.
            else {
                document.querySelector("question").innerHTML = "Game Over";
                document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
            }
        }

        // Function that updates the score...
        function updateScore() {
            document.querySelector("#score").innerHTML = "Score: " + score;
        }
        
      // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
      renderQuestion();
      updateScore();

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // If there are no more questions, stop the function.
        if (questionIndex === questionsArray.length) {
          return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    }