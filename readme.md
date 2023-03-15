<!-- Descrizione:
Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. -->



<!-- MILESTONE 1 -->
Step-1: struttura html lista (ul > li);
Step-2: collegare con vuejs il file html e il file javascript (createApp); all'interno di data() inserire un array (todo) formato da due proprietà (text, 'done' che comprenderà un valore booleano);
Step-3: con un ciclo stampare tutti gli elementi contenenti nell'array nell'html;
Step-4: condizione che se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

<!-- MILESTONE 2 -->
 Step-1: aggiungo una free icon (X) nell'elemento 'li';
 Step-2: creo un methods che cancellerà l'elemento al click sull'icona X,
 Step-3: attacco il comando vue @click all'icona che si collegerà a quella funzione;

 <!-- MILESTONE 3 -->
Step-1: inserisco un input prima della lista con tasto aggiungi;
Step-2: creo nuova variabile vuota dove andrà il nuovo Todo scritto in input e visualizzato nel DOM;