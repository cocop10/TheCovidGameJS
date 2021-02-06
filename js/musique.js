
/*---------------------------Lire la musique------------------------------*/
function changerMusique(m){
    if(musiqueCourante){
        musiqueCourante.stop();
    }
    musiqueCourante = m;
    musiqueCourante.play();
}
