
import {cross,homeNsearch} from "./components/cross.js";

document.getElementById('search').addEventListener('click',searchFunction);

function searchFunction(){
    document.getElementById('home').innerHTML="";
    document.getElementById('navbardiv').innerHTML=cross();

    document.getElementById('cross').addEventListener('click',crossFunction);
}

function crossFunction(){
    document.getElementById('navbarSupportedContent-7').innerHTML=homeNsearch();

    document.getElementById('search').addEventListener('click',searchFunction);
}


