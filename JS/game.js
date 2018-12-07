//Imprime qualquer coisa.
let l = function(variableToPrint){
	console.log(variableToPrint);
}

//URL da imagem default
const urlImgDefaultBackground = "media/default.jpg";

function ambiente(){
	function criaTabuleiro(){
		function clonaVetor(){ //Duplica o array
			let tamanhoVetor = dadosDoJogo.info.length;
			let duplicador = dadosDoJogo.info.length;
			for(i = 0; i < tamanhoVetor; i++){
				dadosDoJogo.info[duplicador] = dadosDoJogo.info[i];
				duplicador++;
			}
		}		
		clonaVetor();

		function randomizaTabuleiro(){
			let tam = dadosDoJogo.info.length;
			for (let i = 0; i < 1000; i++){
				let rand1 = Math.floor(Math.random() * tam);
				let rand2 = Math.floor(Math.random() * tam);

				let auxiliar = dadosDoJogo.info[rand1];
				dadosDoJogo.info[rand1] = dadosDoJogo.info[rand2];
				dadosDoJogo.info[rand2] = auxiliar;

			}
		}
		randomizaTabuleiro();
    }

	criaTabuleiro(); //Cria o vetor duplicado e randomizado

	let divJogo = document.querySelector('.jogo');
			
	for(i = 0; i < dadosDoJogo.info.length; i++){
		let objectLink = document.createElement("a");
		objectLink.id = dadosDoJogo.info[i].id;
		objectLink.onclick = function(){
			movimentoJogador(this);
		}
		objectLink.className = i;
		let imgBlock = document.createElement("img");
		//imgBlock.src = dadosDoJogo.info[i].img;
		imgBlock.src = urlImgDefaultBackground;

		objectLink.appendChild(imgBlock);
		divJogo.appendChild(objectLink);

	}
}//fim ambiente

ambiente();


let jogada1 = null, jogada2 = null, endOfGame = 0;		
function movimentoJogador(elemento){
	if(jogada1 == null){
		jogada1 = elemento;
		jogada1.childNodes[0].src = dadosDoJogo.info[jogada1.className].img;
		return;
	}else{
		jogada2 = elemento;				
		jogada2.childNodes[0].src = dadosDoJogo.info[jogada2.className].img;				
	}

			
	setTimeout(function(){
		handlerDOM();				
	},700);
}

function handlerDOM(){
	if(jogada1.id == jogada2.id){
		if(jogada1.className != jogada2.className){
			l("Você conseguiu.");
			jogada1.style.opacity = 0.5;
			jogada1.onclick = null;
			jogada2.style.opacity = 0.5;
			jogada2.onclick = null;
					

			l(dadosDoJogo.info[jogada1.className].text);
			showModal(dadosDoJogo.info[jogada1.className].text, dadosDoJogo.info[jogada1.className].audio);//executa modal com texto e audio

			endOfGame++;
			if(endOfGame == (dadosDoJogo.info.length/2)){ //Fim do jogo
				alert("Parabéns, você concluiu sua maratona de estudos!");
			}

		}else{
			// jogada1.style.opacity = 1.0;
			jogada1.childNodes[0].src = urlImgDefaultBackground;
			jogada2.childNodes[0].src = urlImgDefaultBackground;					
		}
		jogada1 = null;
		jogada2 = null;
	}else{
		l("Tente Novamente.");
		jogada1.childNodes[0].src = urlImgDefaultBackground;
		jogada2.childNodes[0].src = urlImgDefaultBackground;
		jogada1 = null;
		jogada2 = null;
	}
}
		

function showModal(text,audioURL){
	document.querySelector('.modal').style.display = "block";
	document.querySelector('p#text').innerText = text;
	document.querySelector('.audioBtn').onclick = function(){
		new Audio(audioURL).play();
	}
}
function closeModal(){
	document.querySelector('.modal').style.display = "none";
}