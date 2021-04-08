/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		emailArray: [], //array dove inserire email generate
		lunghezza: 10 //numero email da generare
	},
	methods: {
		generate: function (numero) {
			for (let i = 0; i < numero ; i++) {
				this.emailArray = []; //svuoto array
				$('#lista').html(''); //svuoto prima lista
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then( (risposta) => {
						$('#lista').append(`<li>${risposta.data.response}</li>`) //appendo in modo sincrono le mail
						this.emailArray.push(risposta.data.response); //pusho in modo sincrono in array
					});
			}
		}
	}
});