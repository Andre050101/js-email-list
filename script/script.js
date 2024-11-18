//Generazione Emails
function generaEmails() {

    //Dichiarazione listaMail
    const listaMail = document.getElementById("listaMail");
    listaMail.innerHTML = "";

    //Dichiarazione array promesse mail
    const promesseMail = [];

    //Creazione 10 promesse con api fornita
    for (let i = 0; i < 10; i++) {
        promesseMail.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
    }

    //Gestione promesse
    Promise.all(promesseMail)
        .then((responses) => {
            responses.forEach((response) => {
                const mail = response.data.response;
                const listItem = document.createElement("li");
                listItem.textContent = mail;
                listaMail.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Errore recuper mail:", error);
        });
}