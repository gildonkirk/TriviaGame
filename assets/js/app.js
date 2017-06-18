var questionArray = [
	{
		question: "What is the name of Theon Greyjoy's ship?",
		answerRight: 'Sea Bitch',
		answer2: 'Fury',
		answer3: 'Iron Maiden',
		answer4: 'Black Betha',
		urlRight: 'https://media.giphy.com/media/QaykXJIeVu1Yk/giphy.gif',
		urlWrong: 'https://media.giphy.com/media/hvAOUwrk4SnV6/giphy.gif'
	},
	{
		question: 'Whose sigil is two towers with an arch connecting them?',
		answerRight: 'House Frey',
		answer2: 'House Bolton',
		answer3: 'House Arryn',
		answer4: 'House Martel'
	},
	{
		question: 'Why does Ygritte say Mance Rayder will want to talk to Jon Snow?',
		answerRight: "Because of Jon's Stark blood",
		answer2: 'Because Jon is a crow',
		answer3: 'Because Jon killed Qhorin Halfhand',
		answer4: 'Because Jon is a fellow deserter'
	},
	{
		question: "What does Daenerys Targaryen catapult across Meereen's walls?",
		answerRight: 'Broken chains',
		answer2: 'Slave collars',
		answer3: 'Hands',
		answer4: 'Heads'
	},
	{
		question: "Who killed Beric Dondarrion first?",
		answerRight: "The Mountain",
		answer2: 'The Hound',
		answer3: 'Jaime Lannister',
		answer4: 'Roose Bolton'
	},
	{
		question: "What are House Lannister's words?",
		answerRight: "Hear me roar!",
		answer2: 'A Lannister always pays his debts',
		answer3: 'Ours be the glory',
		answer4: 'Righteous in wrath'
	},
	{
		question: "What is Sansa Stark's favorite treat?",
		answerRight: "Lemon Cakes",
		answer2: 'Lamprey pie',
		answer3: 'Berry tarts',
		answer4: 'Tyroshi pears'
	},
	{
		question: "What is the name of Joffrey's Valyrian steel blade?",
		answerRight: "Widow's Wail",
		answer2: 'Heart Eater',
		answer3: "Lion's Tooth",
		answer4: 'Dark Sister'
	},
	{
		question: "What are House Greyjoy's Words?",
		answerRight: "We do not sow",
		answer2: 'We remember',
		answer3: "We guard the way",
		answer4: 'We pay the iron price'
	},
	{
		question: "Who is Bran Stark named after?",
		answerRight: "His Uncle",
		answer2: 'His Grandfather',
		answer3: "His Father",
		answer4: 'His Great-Grandfather'
	},
	{
		question: "What animal is the Baelish House Sigil?",
		answerRight: "Mockingbird",
		answer2: 'Hawk',
		answer3: "Fox",
		answer4: 'Snake'
	},
	{
		question: "Who has never been named to the small council?",
		answerRight: "Olenna Tyrell",
		answer2: 'Renly Baratheon',
		answer3: "Mace Tyrell",
		answer4: 'Cersei Lanister'
	},
	{
		question: "Who killed Jon Arryn?",
		answerRight: "Lysa Arryn",
		answer2: 'Cersei Lannister',
		answer3: "Petyr Baelish",
		answer4: 'Jaime Lannister'
	},
	{
		question: "How many Sand Snakes are there",
		answerRight: "8",
		answer2: '7',
		answer3: "3",
		answer4: '5'
	},
	{
		question: "Who has not competed in trial by combat?",
		answerRight: "Jaime Lannister",
		answer2: 'The Hound',
		answer3: "Bronn",
		answer4: 'Oberyn Martel'
	},
	{
		question: "Where is Varys originally from",
		answerRight: "Lys",
		answer2: 'Myr',
		answer3: "Pentos",
		answer4: 'Bravos'
	},
	{
		question: "What mythical creature, sent by the warlocks of Qarth, almost kills Daenerys",
		answerRight: "Manticore",
		answer2: 'Wight',
		answer3: "Giant",
		answer4: 'Harpy'
	},
	{
		question: 'Who says, "Of all the ways I would kill you, poison would be the last"?',
		answerRight: "Mance Rayder",
		answer2: 'Cersei Lannister',
		answer3: "Tyrion Lannister",
		answer4: 'Walder Frey'
	},
	{
		question: 'Who says, "What do you know about fear? Fear is for the winter"?',
		answerRight: "Old Nan",
		answer2: 'Mance Rayder',
		answer3: "Greatjon Umber",
		answer4: 'Tormund Giantsbane'
	},
	{
		question: "What family member does the Red Viper seek vengence for?",
		answerRight: "Sister",
		answer2: 'Daughter',
		answer3: "Mother",
		answer4: 'Wife'
	},
];

var timer = 30;
var countDisplay = setInterval(countdown, 1000);
var play = false;
var questionCounter = 0;
var ul = document.querySelector('ul');
var rightCounter = 0;
var numberOfQuestions = questionArray.length;

$(document).on('click', '.nextQuestion', game)

function countdown(){
	if (play === true){
		timer --; 
		$('#timer').text(timer);
		if (timer <= 0){
		timesUp()
		}
	} else {
		timer = 30
	};
};

function game(){			
	$('.nextQuestion').remove();
	$('#question').append(questionArray[questionCounter].question).addClass('currentQuestion');

	$('#answer1').append('<button class="answerRight answer btn btn-warning">' + questionArray[questionCounter].answerRight + '</button>');
	$('#answer2').append('<button class="answer2 answer btn btn-warning">' + questionArray[questionCounter].answer2 + '</button>');
	$('#answer3').append('<button class="answer3 answer btn btn-warning">' + questionArray[questionCounter].answer3 + '</button>');
	$('#answer4').append('<button class="answer4 answer btn btn-warning">' + questionArray[questionCounter].answer4 + '</button>');
	// Randomizes order of buttons
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	};
	play = true;
	$('.correct').text('');
	$('.gif').remove();	
};

function gameOver(){
	questionCounter ++;
	if (questionCounter >= numberOfQuestions){
		$('#questionWrapper').prepend('<h1 class="scoreboard">' + 'Score: ' + rightCounter + '/' + numberOfQuestions + '</h1>');
		$('.nextQuestion').text('Restart');
		$('.nextQuestion').addClass('restart');
		$('.restart').removeClass('nextQuestion');
	};
};


function timesUp(){
	play = false;
	$('.answer').remove();
	$('.currentQuestion').text('');
	gifPageWrong();
	$('#questionWrapper').prepend('<h1 class="correct">' + "Time's Up! Answer: " + questionArray[questionCounter].answerRight + '</h1>');
	nextQuestion();
	gameOver();
}


$(document).on('click', '.answer', function(){
	play = false;
	$('.answer').remove();
	$('.currentQuestion').text('');
	if ($(this).hasClass('answerRight')){
		gifPageRight();
		$('#questionWrapper').prepend('<h1 class="correct">' + 'Correct!' + '</h1>');			
		rightCounter ++;			
		nextQuestion();
	} else {
		gifPageWrong();
		$('#questionWrapper').prepend('<h1 class="correct">' + 'Incorrect! Answer: ' + questionArray[questionCounter].answerRight + '</h1>');
		nextQuestion();
	};
	gameOver()
});

function gifPageRight(){
	$('#questionWrapper').prepend('<img class= "gif" src=' + questionArray[questionCounter].urlRight + '>')
};

function gifPageWrong(){
	$('#questionWrapper').prepend('<img class= "gif" src=' + questionArray[questionCounter].urlWrong + '>')
};

function nextQuestion(){
	$('#timer').text('');
	$('#questionWrapper').append('<button class="nextQuestion btn btn-warning">' + 'Next' +'</button>')
};

$(document).on('click', '.restart', function(){
	rightCounter = 0;
	questionCounter = 0;
	$('.scoreboard').remove();
	$('.restart').remove();
	game();
});
