// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready( function(){

	
	$('#answer1').on("click", function(){
		var year_answer = $('#year').text();
		var year_movie = $('#year1').text();
		if (year_answer === year_movie ){
           win();
       } else {
           lose();
       }

		var $playerScore = parseInt($('score-max').text());
		var $maxScore = parseInt($('player-score').text());
		if ($maxScore < $playerScore) {
			modify_max_score;
		}
	});

	$('#answer2').on("click", function(){
		var year_answer = $('#year').text();
		var year_movie = $('#year2').text();
		if (year_answer === year_movie ){
           win();
       } else {
           lose();
       }
	});

	$('#answer3').on("click", function(){
		var year_answer = $('#year').text();
		var year_movie = $('#year3').text();
		if (year_answer === year_movie ){
           win();
       } else {
           lose();
       }
	});

	$('#answer4').on("click", function(){
		var year_answer = $('#year').text();
		var year_movie = $('#year4').text();
		if (year_answer === year_movie ){
           win();
       } else {
           lose();
       }
	});

	$('#answer5').on("click", function(){
		var year_answer = $('#year').text();
		var year_movie = $('#year5').text();
		if (year_answer === year_movie ){
           win();
       } else {
           lose();
       }
	});

	$('#button-criterion').on("click", function(){
	});

	function win(){
       alert('Has acertado!!!');
       modify_score;
       location.reload();
   };

   function lose(){
       alert('La cagaste!!!');
       score_null;
       location.reload();
   }

	function modify_score(){
		var $playerScore = parseInt($('score-max').text())+1;
		var $maxScore = parseInt($('player-score').text());
		var $newScores = {score: $playerScore, max_score: $maxScore }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/questions",
            data: $newScores,
            success: function(response){populate_score(response)},
            error: function(){alert("Success: false");},
            dataType: "json",
        });
    };

	function score_null(){
		var $playerScore = 0;
		var $maxScore = parseInt($('player-score').text());
		var $newScores = {score: $playerScore, max_score: $maxScore }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/questions",
            data: $newScores,
            success: function(response){populate_score(response)},
            error: function(){alert("Success: false");},
            dataType: "json",
        });
    };

	function populate_score(items){
		$('#player-score').empty();
		$('#player-score').append(items[i].score);
	};


	function modify_max_score(){
		var $playerScore = parseInt($('score-max').text());
		var $maxScore = $playerScore;
		var $newScores = {score: $playerScore, max_score: $maxScore }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/questions",
            data: $newScores,
            success: function(response){ populate_max_score(response)},
            error: function(){alert("Success: false");},
            dataType: "json",
        });
    };

	function populate_score(items){
		$('#score-max').empty();
		$('#score-max').append(items[i].max_score);
	};

});