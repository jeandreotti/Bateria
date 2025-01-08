
document.body.addEventListener('keyup', (event) =>{
    console.log(`Tecla pressionada: ${event.key}`);//Tecla pressionada: a
    console.log(event.code.toLowerCase());//keya, mostra qual tecla foi apertada, com todas letras minúsculas
    playSound(event.code.toLowerCase());
});

document.querySelector('.songPlayer').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    console.log(song);//vai ler o que foi digitado

    if(song !== ''){//se foi digitado algo
        let songArray = song.split('');// pegou o que foi digitado, e gerou um array de string
        console.log(songArray);//(6) ['d', 'd', ' ', 'f', 'f', 'f']
        playcomposition(songArray);//criou outra função para organizar o código 
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);//busca qual id é da tecla apertada

    let keyElement = document.querySelector(`div[data-key='${sound}']`)

    if (audioElement) { //se a tecla existir toque
        audioElement.currentTime = 0; //se aperta a tecla o som encerra e toca novamente, para não esperar terminar o som para tocar novamente
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');//cria a classe .active para ficar pintado de amarelo

        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 300); // depois de 0,3s apaga a class .active para sumir o amarelo
    }
};

function playcomposition(songArray){
    let wait = 0;

    for (let songItem of songArray){//vai percorrer cada digitado do songArray
        setTimeout(() => { //para demorar 0,25s a cada loop
            playSound(`key${songItem.toLowerCase()}`)//vai tocar o que executou
        }, wait);

        wait += 250;
        
    }
}


var buttons = document.querySelectorAll('.key');

buttons.forEach((btn) => {
    
    btn.addEventListener('click' , (e) => { 
        
        const value1 = e.target.innerText;

        switch (value1){

            case 'Q':
                let audioElementQ = document.querySelector('#s_keyq');
                audioElementQ.play()
                audioElementQ.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'W':
                let audioElementW = document.querySelector('#s_keyw');
                audioElementW.play()
                audioElementW.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'E':
                let audioElementE = document.querySelector('#s_keye');
                audioElementE.play()
                audioElementE.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'A':
                let audioElementA = document.querySelector('#s_keya');
                audioElementA.play()
                audioElementA.currentTime = 0; 
                btn.classList.add('active')

                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'S':
                let audioElementS = document.querySelector('#s_keys');
                audioElementS.play()
                audioElementS.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'D':
                let audioElementD = document.querySelector('#s_keyd');
                audioElementD.play()
                audioElementD.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'Z':
                let audioElementZ = document.querySelector('#s_keyz');
                audioElementZ.play()
                audioElementZ.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'X':
                let audioElementX = document.querySelector('#s_keyx');
                audioElementX.play()
                audioElementX.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;
                
            case 'C':
                let audioElementC = document.querySelector('#s_keyc');
                audioElementC.play()
                audioElementC.currentTime = 0; 
                btn.classList.add('active')
    
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;
        }
    })
})