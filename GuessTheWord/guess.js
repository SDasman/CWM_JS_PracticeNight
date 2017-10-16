window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var guesses = [];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("scategory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Category
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "The Chosen Category Is:  TV";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The Chosen Category Is:  Movies";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The Chosen Category Is:  State Capitals";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      } else if (counter + space + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  // var animate = function () {
  //   var drawMe = lives ;
  //   drawArray[drawMe]();
  // }


   // Hangman
//   canvas =  function(){
//
//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
//
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
//
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
//
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke();
// }
//
//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
//
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
//
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
//
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
//
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
//
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
//
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
//
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
//
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
//
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        // animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["breaking-bad", "house-of-cards", "the-walking-dead", "the-x-files"],
        ["alien", "pulp-fiction", "the-matrix", "finding-nemo", "jaws"],
        ["santa-fe", "albany", "austin", "dover", "sacramento"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    // canvas();
  }

  play();

  // Hint

    hint.onclick = function() {

      hints = [
        ["Chemistry teacher gets roped into being a crime underlord", "Kevin Spacey plays a ruthless politician, drama", "Survivors of zombie apocalypse make their way", "Spooky sci-fi FBI show staring two very opposite characters"],
        ["Science-Fiction horror film", "Classic Tarrentino gangster story", "Neo gets unplugged from this", "Anamated Fish", "Giant great white shark"],
        ["New Mexico", "New York", "Texas", "Delaware", "California"]
    ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    // context.clearRect(0, 0, 400, 400);
    play();
  }
}
