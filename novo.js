const form = document.querySelector("form");
const resp = document.querySelector("#inNa");
const resp2 = document.querySelector("#inEx");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let continuar;

    do {
        // Solicitando o nome e a experiência do herói
        const nomeHeroi = form.nameHero.value;
        const experiencia = Number(form.exPe.value);

        // Função para determinar o nível do herói com base na experiência
        function determinarNivel(experiencia) {
            if (experiencia < 1000) {
                return "Ferro";
            } else if (experiencia <= 2000) {
                return "Bronze";
            } else if (experiencia <= 5000) {
                return "Prata";
            } else if (experiencia <= 7000) {
                return "Ouro";
            } else if (experiencia <= 8000) {
                return "Platina";
            } else if (experiencia <= 9000) {
                return "Ascendente";
            } else if (experiencia <= 10000) {
                return "Imortal";
            } else {
                return "Radiante";
            }
        }

        // Determinando o nível do herói
        const nivel = determinarNivel(experiencia);

        // Exibindo o resultado
        resp.innerText = nomeHeroi;
        resp2.innerText = nivel;

     
        
            // Limpa os campos do formulário para nova entrada
            form.nameHero.value = '';
            form.exPe.value = '';
        
    } while (continuar);
});
