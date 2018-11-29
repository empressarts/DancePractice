const beginnerMoves = [
  'step around',
  'pirouette',
  'prayer slide',
  'fireman',
  'pike fireman',
  'front hook',
  'back hook',
  'fan kick',
  'chair',
  'pike chair',
  'carousel',
  'straight leg carousel',
  'pole squat',
  'pretzel',
  'cradle',
  'ballerina',
  'boomerang',
  'open boomerang',
  'mermaid',
  'basic climb',
  'cross knee sit',
  'superwoman',
  'wrist sit',
  'split seat',
  'ball sit',
  'corkscrew',
  'attitude spin',
  'pencil spin',
  'forward arm stand'
];

const intermediateMoves = [
  'crucifix',
  'belly slide dismount',
  'cross knee release',
  'handstand butterfly',
  'outside leg hang (gemini)',
  'crossed thigh hold',
  'butterfly',
  'double cross release',
  'catch',
  'cross ankle release',
  'inside leg hang (scorpio)',
  'closed scorpio',
  'side climb',
  'basic flag',
  'hip hold - ball',
  'hip hold - pike',
  'hip hold - straddle',
  'climb over - from gemini',
  'climb over - from crucifix',
  'star',
  'caterpillar climb',
  'shoulder mount dismount',
  'straddle invert',
  'bow and arrow',
  'pencil',
  'extended butterfly',
  'triangle pose',
  'advanced jamilla',
  'hero',
  'superman',
  'cupid',
  'aerial invert',
  'archer',
  'shoulder mount',
  'iguana',
  'marley',
  'scorpio handstand',
  'shoulder mount butterfly',
  'capital D',
  'cross ankle to forearm grip dismount',
  'crescent moon',
  'dove',
  'seated shoulder mount',
  'jade split',
  'brass monkey',
  'chopsticks',
];

const advancedMoves = [
  'ayesha',
  'inverted pike',
  'inverted jacknife',
  'flag invert to brass monkey',
  'eros',
  'lever down',
  'aerial advanced jamilla',
  'ballerina',
  'shoulder roll standing',
  'shoulder roll sitting',
  'closed knee hold',
  'open knee hold',
  'double knee hold',
  'handspring (various grips)',
  'prayer leg',
  'crab leg',
  'shoulder mount walk',
  'shoulder mount bounce',
  'recliner invert',
  'the Q',
  'banana splits',
  'hummingbird',
  'holly drop',
  'superman drop',
  'cross ankle to shoulder mount',
  'aerial shoulder mount',
  'air pirouette',
  'spin and snap',
  'meathook',
  'tick tock',
  'vixen roll',
  'iguana planche',
  'twisted grip handstand',
  'shoulder mount planche',
];

const collection = document.querySelector('.collection');

$('#chooseBtn').click(function(){
  clearResults();

  var selectedLevel = $('#level').val();
  var selectedNumber = $('#number').val();

  if (selectedLevel === 'beginner') {
      newArr = [];
      for(let i=1; i<=selectedNumber; i++) {
        let random = beginnerMoves[Math.floor(Math.random() * beginnerMoves.length)];
        newArr.push(random);
      }
      console.log(newArr);
     
      for(let i=0; i<newArr.length; i++) {
        //Create li element
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item list-group-item';
      //Create text node and append to li
      li.appendChild(document.createTextNode(newArr[i]));
      //Append li to ul
      collection.appendChild(li);
      }
    }
      
  if (selectedLevel === 'intermediate') {
        newArr = [];
        for(let i=1; i<=selectedNumber; i++) {
          let random = intermediateMoves[Math.floor(Math.random() * intermediateMoves.length)];
          newArr.push(random);
        }
        console.log(newArr);
       
        for(let i=0; i<newArr.length; i++) {
          //Create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item list-group-item';
        //Create text node and append to li
        li.appendChild(document.createTextNode(newArr[i]));
        //Append li to ul
        collection.appendChild(li);
        }
  }

  if (selectedLevel === 'advanced') {
    newArr = [];
    for(let i=1; i<=selectedNumber; i++) {
      let random = advancedMoves[Math.floor(Math.random() * advancedMoves.length)];
      newArr.push(random);
    }
    console.log(newArr);
   
    for(let i=0; i<newArr.length; i++) {
      //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item list-group-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(newArr[i]));
    //Append li to ul
    collection.appendChild(li);
    }
}
    
  
});

//Clear button
$('.clearBtn').click(function(){
  clearResults();
});

//Clear results
function clearResults() {
  collection.innerHTML = '';
}

