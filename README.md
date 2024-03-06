**Carosello Array di Oggetti**
===
## Consegna
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata o come il vostro già realizzato.
- **Milestone 0:**
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
- **Milestone 1:**
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
- **Milestone 2:**
Aggiungere il **ciclo infinito** del carosello.** Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
- **BONUS 1:**
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
- **BONUS 2:**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
- **BONUS 3:**
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## Svolgimento:
1. Resetto l'HTML
1. Prendo le sezioni dove devo inserire le mie immagini e successivamente le thumbnails.
1. formatto il mio HTML su js in modo ricorsivo grazie a un ciclo forEach
1. creo i pulsanti
1. creo un indice c con cui gestisco la posizione visualizzata 
1. do alla prima posizione dell'array 0 la classe 'active'
1. creo le mie addEventListener sulla logica del movimento avanti e indietro delle immagini

## BONUS:
1. creo un array per le posizioni delle thumbnails.
1. do un evento passandolo in modo ricorsivo tramite un ciclo forEach
1. e passo la logica del passaggio da un immagine all'altra tramite indici.

1. creo la funzione autoplay avendo una variabile booleana per la direzione.
1. di base va avanti
1. se premo il pulsante la direzione si inverte
1. per la logica dell'autoplay tolgo la classe active all'elemento corrente faccio i controlli per vedere se si arriva alla fine delle immagini o siamo all'inizio.
1. faccio i relativi incrementi o decrementi.
1. passo la classe active alla relativa immagine.
