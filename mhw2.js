function clickBarraRicerca() {
    console.log("Barra ricerca cliccata!");
  }
  const buttom = document.querySelector('input');
  buttom.addEventListener('click', clickBarraRicerca);

  function SezioneSerie(event) {
    const mostraSerie = event.currentTarget;
    const iconaSerie = mostraSerie.querySelector('img');
    const siClick = document.querySelector('#pulsante_giù_serie');

    const chiudiFilm = document.querySelector('#pulsante_giù_film'); 
    chiudiFilm.classList.add('hidden2');
  
    const iconaFilm = document.querySelector('.bottone_film img');
    iconaFilm.src = 'freccia_giù.png';
  
    const chiudGeneri = document.querySelector('#pulsante_giù_generi');
    chiudGeneri.classList.add('hidden3');
  
    const iconaGeneri = document.querySelector('.bottone_generi img');
    iconaGeneri.src = 'freccia_giù.png';
  
    const chiudiLingue = document.querySelector('#lingue');
    chiudiLingue.classList.add('hidden4');
  
    const iconaLingue = document.querySelector('#lingua img');
    iconaLingue.src = 'freccia_giù.png';

    const menuAperto = !siClick.classList.contains('hidden1'); 
    
    if (menuAperto) {
      siClick.classList.add('hidden1');
      console.log("Menu serie chiuso");
      iconaSerie.src='freccia_giù.png';

    } else {
      siClick.classList.remove('hidden1');
      console.log("Menu serie aperto");
      iconaSerie.src='freccia_su.png'
    }
   }
  const mostraSerie = document.querySelector('.dropdown_serie');
  mostraSerie.addEventListener('click',SezioneSerie);

  function SezioneFilm(event){ 
    const mostraFilm = event.currentTarget;
    const iconaFilm = mostraFilm.querySelector('img');
    const siClick = document.querySelector('#pulsante_giù_film');

    const chiudiSerie = document.querySelector('#pulsante_giù_serie'); 
    chiudiSerie.classList.add('hidden1');
  
    const iconaSerie = document.querySelector('.bottone_serie img');
    iconaSerie.src = 'freccia_giù.png';
  
    const chiudGeneri = document.querySelector('#pulsante_giù_generi');
    chiudGeneri.classList.add('hidden3');
  
    const iconaGeneri = document.querySelector('.bottone_generi img');
    iconaGeneri.src = 'freccia_giù.png';
  
    const chiudiLingue = document.querySelector('#lingue');
    chiudiLingue.classList.add('hidden4');
  
    const iconaLingue = document.querySelector('#lingua img');
    iconaLingue.src = 'freccia_giù.png';

    const menuAperto = !siClick.classList.contains('hidden2'); 

    if (menuAperto) {
      siClick.classList.add('hidden2');
      console.log("Menu film chiuso");
      iconaFilm.src='freccia_giù.png';
    } else {
      siClick.classList.remove('hidden2');
      console.log("Menu film aperto");
      iconaFilm.src='freccia_su.png';
    }
   }

  const mostraFilm = document.querySelector('.dropdown_film');
  mostraFilm.addEventListener('click',SezioneFilm);
  

  function SezioneGeneri(event){ 
    const mostraGeneri = event.currentTarget;
    const iconaGeneri = mostraGeneri.querySelector('img');
    const siClick = document.querySelector('#pulsante_giù_generi');

    const chiudiSerie = document.querySelector('#pulsante_giù_serie'); 
    chiudiSerie.classList.add('hidden1');
  
    const iconaSerie = document.querySelector('.bottone_serie img');
    iconaSerie.src = 'freccia_giù.png';
  
    const chiudiFilm = document.querySelector('#pulsante_giù_film');
    chiudiFilm.classList.add('hidden2');
  
    const iconaFilm = document.querySelector('.bottone_film img');
    iconaFilm.src = 'freccia_giù.png';
  
    const chiudiLingue = document.querySelector('#lingue');
    chiudiLingue.classList.add('hidden4');
  
    const iconaLingue = document.querySelector('#lingua img');
    iconaLingue.src = 'freccia_giù.png';

    const menuAperto = !siClick.classList.contains('hidden3'); 

    if (menuAperto) {
      siClick.classList.add('hidden3');
      console.log("Menu generi chiuso");
      iconaGeneri.src='freccia_giù.png';

    } else {
      siClick.classList.remove('hidden3');
      console.log("Menu generi aperto");
      iconaGeneri.src='freccia_su.png';
    }  
   }

  const mostraGeneri = document.querySelector('.dropdown_generi');
  mostraGeneri.addEventListener('click',SezioneGeneri);

  const chiudiSerie = document.querySelector('#pulsante_giù_serie'); 
  chiudiSerie.classList.add('hidden1');

  function apriLingue(event){
    const mostraLingue = event.currentTarget;
    const iconaLingue= mostraLingue.querySelector('img');
    const siClick = document.querySelector('#lingue');

    const chiudiSerie = document.querySelector('#pulsante_giù_serie'); 
    chiudiSerie.classList.add('hidden1');
  
    const iconaSerie = document.querySelector('.bottone_serie img');
    iconaSerie.src = 'freccia_giù.png';
  
    const chiudiFilm = document.querySelector('#pulsante_giù_film');
    chiudiFilm.classList.add('hidden2');
  
    const iconaFilm = document.querySelector('.bottone_film img');
    iconaFilm.src = 'freccia_giù.png';
  
    const chiudGeneri = document.querySelector('#pulsante_giù_generi');
    chiudGeneri.classList.add('hidden3');

    const iconaGeneri = document.querySelector('.bottone_generi img');
    iconaGeneri.src = 'freccia_giù.png';
  
    const menuAperto = !siClick.classList.contains('hidden4'); 
    
    if (menuAperto) {
      siClick.classList.add('hidden4');
      console.log("Menu lingue chiuso");
      iconaLingue.src='freccia_giù.png';

    } else {
      siClick.classList.remove('hidden4');
      console.log("Menu lingue aperto");
      iconaLingue.src='freccia_su.png';
    }

  }
  const mostraLingue = document.querySelector('.dropdown_lingua');
  mostraLingue.addEventListener('click',apriLingue);

