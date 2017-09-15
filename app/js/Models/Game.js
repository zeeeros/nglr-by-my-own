// Estado de la jugada actual
var game = {
	userResponses : [],
	userAttempts  : 0,
	status:  'gameing',
	activity: null,
	timer: 0
}

game.init = function(activity){
	this.activity = activity;
	this.timer    = this.activity.timeLimit;

	// Inicializamos el objeto game.userResponses con tantas respuestas vacias como tenga la pregunta
	var numRespuestas = activity.respuestas.length;
	for (var i = 0; i < numRespuestas; i++){
		this.userResponses.push({word: ""});
	}
}

game.clearAt = function(pos){
	this.userResponses[pos].word = "";
}

game.clear = function(){
	var numRespuestas = this.userResponses.length;

	for (var i = 0; i < numRespuestas; i++){
		this.userResponses[i].word = "";
	}
}

game.isValid = function(){
	var isOK = true;
	var numRespuestas = this.activity.respuestas.length;

	function getPosition(respuesta) { 
		return userResponses.nombre === 'cerezas';
	};

	for (var i = 0; i < numRespuestas; i++){
		if (this.activity.respuestas[i].word != this.userResponses[i].word){
			isOK = false;
			break;
		}
	}
	return isOK;
}

game.validate = function() {
	var isOK = this.isValid();

	this.userAttempts++;

	if (! isOK){
		if (this.userAttempts > this.activity.attempts){
			this.status = 'finished_KO';
		}
	} else {
		this.status = 'finished_OK';
	}
}

game.descrementTimer = function() {
	this.timer--;
	if (this.timer <= 0 ){
		this.status = 'finished_TIMEOUT';
	}
}

game.isActive = function() {
	return (this.status == 'gameing');
}
