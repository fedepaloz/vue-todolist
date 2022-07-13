/* Descrizione:
Rifare l'esercizio della to do list, seguendo le istruzioni nelle milestone.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
Mi raccomando: nel vostro array originale mettete almeno un task con done: true
e uno con done: false
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */





const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        todos: [
            {
                text: "fare spesa",
                done: true
            },
            {
                text: "esercizio",
                done: false
            },
            {
                text: "visita medico",
                done: false
            },
            {
                text: "comprare calzini",
                done: true
            },
            {
                text: "ritirare pacco",
                done: false
            },
        ]
    },


    methods: {
        deleteTask(i) {
            this.todos.splice(i, 1)
        },
        addTask() {
            this.todos.push(this.newTask)

        }
    },
})


