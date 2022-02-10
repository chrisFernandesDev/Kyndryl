function pegaDados() {
    let nomes = document.getElementById('nomes').value;
    let separador = ', ';
    let caracteres = '-';
    let primeiroNome = "";
    let segundoNome = "";
    let sobrenome = "";
    let nomeSeparado = "";
    let primLetra = "";
    let primLetraSeg = "";
    let email = [];
    const dominio = "@company.com";
    let id = [];
    let contador = 0;
    let nomeEmail = [];

    nomes = removeCaracter(nomes, caracteres);
    let listaNomes = splitString(nomes, separador);

    separador = ' ';

    for (i = 0; i < listaNomes.length; ++i) {
        nomeSeparado = splitString(listaNomes[i], separador);

        primeiroNome = nomeSeparado[0];

        if (nomeSeparado.length > 2) {
            segundoNome = nomeSeparado[1];
            primLetraSeg = segundoNome.substring(0, 1);
        }
        sobrenome = nomeSeparado[nomeSeparado.length - 1];
        primLetra = primeiroNome.substring(0, 1);

        id[i] = gerarId(sobrenome, primLetra, primLetraSeg);

        email[i] = id[i];

        contador = validarDuplicidade(id[i], id);
        if (contador > 1) {
            email[i] = email[i] + contador;
        }

        email[i] = email[i] + dominio;

        nomeEmail[i] = " " + listaNomes[i] + " &#60;" + email[i]  + "&#62;";
        
        segundoNome = "";
        primLetraSeg = "";
    }
    document.getElementById('nomeEmail').innerHTML = nomeEmail;
}

function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

function removeCaracter(nomes, caracteres) {
    let result = nomes.replace(caracteres, "");
    return result;
}

function gerarId(sobrenome, primeiraLetra, segundaLetra) {
    let emailUser = "";

    if (segundaLetra == "") {
        emailUser = sobrenome + "." + primeiraLetra
    } else {
        emailUser = sobrenome + "." + primeiraLetra + "." + segundaLetra
    }
    return emailUser;
}

function validarDuplicidade(ID, listaID) {
    let count = 0;

    for (j = 0; j < listaID.length; ++j) {
        if (listaID[j] == ID) {
            count += 1;
        }
    }
    return count;
}

function limpar(){
    document.getElementById("nomes").value = " ";
    document.getElementById("nomeEmail").innerHTML = " ";
}