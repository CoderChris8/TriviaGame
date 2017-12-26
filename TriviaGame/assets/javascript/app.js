// Global Variables
//==============================================================================

var time = 20;
var questions = 
    {
      q1: ['What does DOM stand for?'],
      answers1:[{a:'b',
                 c:'d',
                 e:'f'
               }],
      q2: ['What does console.log do?'],
      answers2:[{a:'b2',
                 c:'d2',
                 e:'f2'
               }]
    }
var correctAnswers;
var wrongAnswers;
var intervalId;

// Functions
//===============================================================================
console.log(questions.answers[0].a);
function startGame()
{
  
}

function gamePlay()
{
  $('startBtn').on('click',function()
  {
    //removes all buttons with the class startbtn
   $('button').remove('startBtn');
  timeCount();
  });
}
function timeCount()
{
  setInterval(function(){
                          time--;
                          console.log(time);
                        },1000);
  $('btnContainer').append('<div class=timeRem">' = 'Time Remaining: ' + time + '</div>');
}

//Main
//====================================================================================================

gamePlay();