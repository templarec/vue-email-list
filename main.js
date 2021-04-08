/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		emailArray: [],
		lunghezza: 10
	},
	methods: {
		generate: function (numero) {
			for (let i = 0; i < numero ; i++) {
				this.emailArray = [];
				$('#lista').html('');
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then( (risposta) => {
						$('#lista').append(`<li>${risposta.data.response}</li>`)
						this.emailArray.push(risposta.data.response);
					});
			}
		}
	}
});