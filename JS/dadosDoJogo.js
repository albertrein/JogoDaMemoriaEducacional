const dadosDoJogo = {
	"info":[
		{
			"id": 0,
			"img": "media/allan.png",
			"audio": "media/audios/PollingPT1.mp3",
			"text": "Que a técnica de Polling é uma das formas mais simples do E/S se comunicar com o processador. Todo o dispositivo de entrada ou saída possui uma flag associada, onde o processador (CPU) verifica está flag periodicamente. O problema desta técnica é a perda de tempo de CPU. Uma analogia a este método é a de um professor perguntando continuamente a cada aluno de uma turma, um após o outro, se precisa de ajuda."
		},
		{
			"id": 1,
			"img": "media/billgates.png",
			"audio": "media/audios/PollingPT2.mp3",
			"text": "Que a técnica de Polling é quando o processador (CPU) realiza uma busca por flags nos dispositivos de entrada e saída sequencialmente, estes dispositivos possuem um prioridade de atendimento, o que pode causar starvation (ou morrer de fome, nome dado para quem não recebe tempo de CPU) o que pode levar alguns problemas."
		},
		{
			"id": 2,
			"img": "media/hamilton.png",
			"audio": "media/audios/interrupcaoPT1.mp3",
			"text": "Que a interrupção ou interjeição é uma técnica que sinaliza o processador (CPU) a ocorrência de algum evento de dispositivos de E/S. Ex.: Clique mouse, teclado, interface de rede. Todos os dispositivos estão conectados em um vetor de interrupções."
		},
		{
			"id": 3,
			"img": "media/jobs.png",
			"audio": "media/audios/interrupcaoPT2.mp3",
			"text": "Que a técnica de interrupção ou interjeição é uma forma otimiza da técnica de Polling, através de um vetor de interrupções o processador (CPU) não precisa estar verificando periodicamente os dispositivos de E/S, quando há uma ocorrência de uma interrupção no vetor ela força uma mudança no fluxo de controle, que trânsfere para uma rotina de tratamento da interrupção requisitada atualmente. O SO não sabe qual o ponto do fluxo de instruções a interrupção ocorrerá, pois os eventos são ocasionados assincronamente."
		},
		{
			"id": 4,
			"img": "media/linus.png",
			"audio": "media/audios/HDD.mp3",
			"text": "Que um exemplo de dispositivo de armazenamento é: HDD (Hard Disk Driver) dispositivo utilizado nos computadores para armazenar dados mesmo depois do desligamento do sistema, ele possui entradas e saídas para troca de dados."
		},
		{
			"id": 5,
			"img": "media/timberners.png",
			"audio": "media/audios/monitorVideo.mp3",
			"text": "Que um exemplo de dispositivo de saída é: monitor de vídeo, o sistema gera uma imagem para informações processadas, para que o usuário possa interagir, essa imagem é enviada para um receptor de vídeo."
		},
		{
			"id": 6,
			"img": "media/zucke.png",
			"audio": "media/audios/mouse.mp3",
			"text": "Que um exemplo de dispositivo de entrada é: Mouse, é um dispositivo com um leitor óptico que gera infomações de posição em um plano para dar à ilusão de controle ao usuário."
		}
	]
}