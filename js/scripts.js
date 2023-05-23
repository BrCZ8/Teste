function validarFormularioCadastro() {
    let idInput = document.getElementById('frm-id');
    let nomeInput = document.getElementById('frm-nome');
    let enderecoInput = document.getElementById('frm-endereco');    
    let cidadeInput = document.getElementById('frm-cidade');
    let ufInput = document.getElementById('frm-uf');
    let emailInput = document.getElementById('frm-email');
    let senhaInput = document.getElementById('frm-senha');
    let dataNasc = document.getElementById('frm-nascimento');
    let telefoneInput = document.getElementById('frm-telefone');
    let nomePetInput = document.getElementById('frm-nome-pet');
    let tipoInput = document.getElementById('frm-tipo');
    let idadeInput = document.getElementById('frm-idade');
    let divErro = document.querySelector('#mensagem-erro-cadastro');
    let divSucesso = document.getElementById('#mensagem-ok-cadastro');
    
    

    let id = idInput.value.trim();
    let nome = nomeInput.value.trim();
    let endereco = enderecoInput.value.trim();
    let cidade = cidadeInput.value.trim();
    let uf = ufInput.value.trim();
    let email = emailInput.value.trim();
    let senha = senhaInput.value.trim();
    let nascimento = dataNasc.value.trim();
    let telefone = telefoneInput.value.trim();
    let nomePet = nomePetInput.value.trim();
    let tipo = tipoInput.value.trim();
    let idade = idadeInput.value.trim();
    




    let mensagemErroId = 'O campo ID não pode estar vazio!';
    let mensagemErroId2 = 'O campo ID deve ser positivo!';
    let mensagemErroId3 = 'O campo ID deve possuir mais de um número!';

    let mensagemErroNome = 'O campo Nome Completo não pode estar vazio!';
    let mensagemErroNome2 = 'O campo Nome Completo deve possuir no mínimo 3 caracteres!';
    let mensagemErroNome3 = 'O campo Nome Completo deve possuir no máximo 100 caracteres!';
    let mensagemErroNome4 = 'O campo Nome Completo deve ser alfanumérico!';

    let mensagemErroEndereco = 'O campo Endereço não pode estar vazio!';
    let mensagemErroEndereco2 = 'O campo Endereço deve possuir no mínimo 3 caracteres!';
    let mensagemErroEndereco3 = 'O campo Endereço deve possuir no máximo 100 caracteres!';
    let mensagemErroEndereco4 = 'O campo Endereço deve ser alfanumérico!';

    let mensagemErroCidade = 'O campo Cidade não pode estar vazio!';
    let mensagemErroCidade2 = 'O campo Cidade deve possuir no mínimo 3 caracteres!';
    let mensagemErroCidade3 = 'O campo Cidade deve possuir no máximo 50 caracteres!';
    let mensagemErroCidade4 = 'O campo Endereço deve ser alfanumérico!';

    let mensagemErroUf = 'O campo UF não pode estar vazio!';
    let mensagemErroUf2 = 'O campo UF deve possuir no mínimo 2 caracteres!';
    let mensagemErroUf3 = 'O campo UF deve ser escrito em letras maiúsculas';

    let mensagemErroMail = 'O campo E-mail não pode estar vazio!';
    let mensagemErroMail2 = 'O campo E-mail deve possuir no mínimo 3 caracteres!';
    let mensagemErroMail3 = 'O campo E-mail deve possuir no máximo 100 caracteres!';
    let mensagemErroMail4 = 'O campo E-mail deve seguir o padrão "nome@dominio.com"!';

    let mensagemErroSenha = 'O campo Senha não pode estar vazio!';
    let mensagemErroSenha2 = 'O campo deve possuir no mínimo 8 caracteres!';
    let mensagemErroSenha3 = 'O campo deve possuir no máximo 30 caracteres!';
    let mensagemErroSenha4 = 'A senha deve ser forte! Dica: use letras maiúsculas, letras minúsculas, números e caracteres especiais!';

    let mensagemErroNasc = 'O campo Data de Nascimento não pode estar vazio!';
    let mensagemErroNasc2 = 'O campo não segue o padrão dd/mm/aaaa!';

    let mensagemErroTel = 'O campo Telefone não pode estar vazio!';
    let mensagemErroTel2 = 'O número inserido deve ser válido! Dica: siga esse padrão (XX) XXXXX-XXXX';

    let mensagemErroNomePet = 'O campo Nome do Pet não pode estar vazio!';
    let mensagemErroNomePet2 = 'O campo Nome do Pet deve possuir no mínimo 3 caracteres!';
    let mensagemErroNomePet3 = 'O campo Nome do Pet deve possuir no máximo 100 caracteres!';
    let mensagemErroNomePet4 = 'O campo Nome do Pet deve ser alfanumérico!';

    let mensagemErroTipo = 'O campo Tipo não pode estar vazio!';

    let mensagemErroIdade = 'O campo Idade não pode estar vazio!';




    if (id === '') {
        divErro.innerHTML = mensagemErroId;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (id < 0) {
        divErro.innerHTML = mensagemErroId2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let numerico = /\d{2}/;
    if (!numerico.test(id)) {
        divErro.innerHTML = mensagemErroId3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (nome === '') {
        divErro.innerHTML = mensagemErroNome;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nome < 3) {
        divErro.innerHTML = mensagemErroNome2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nome > 100) {
        divErro.innerHTML = mensagemErroNome3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let alfanumerico = /[A-Z}[a-z]/;
    if (!alfanumerico.test(nome)) {
        divErro.innerHTML = mensagemErroNome4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (endereco === '') {
        divErro.innerHTML = mensagemErroEndereco;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (endereco < 3) {
        divErro.innerHTML = mensagemErroEndereco2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (endereco > 100) {
        divErro.innerHTML = mensagemErroEndereco3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (!alfanumerico.test(endereco)) {
        divErro.innerHTML = mensagemErroEndereco4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (cidade === '') {
        divErro.innerHTML = mensagemErroCidade;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (cidade < 3) {
        divErro.innerHTML = mensagemErroCidade2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (cidade > 50) {
        divErro.innerHTML = mensagemErroCidade3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (!alfanumerico.test(cidade)) {
        divErro.innerHTML = mensagemErroCidade4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (uf === '') {
        divErro.innerHTML = mensagemErroUf;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (uf < 2) {
        divErro.innerHTML = mensagemErroUf2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    let maiusculas = /[A-Z]/;
    if (!maiusculas.test(uf)) {
        divErro.innerHTML = mensagemErroUf3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (email === '') {
        divErro.innerHTML = mensagemErroMail;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (email < 3) {
        divErro.innerHTML = mensagemErroMail2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    
    if (email > 100) {
        divErro.innerHTML = mensagemErroMail3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
    if (!padraoEmail.test(email)) {
        divErro.innerHTML = mensagemErroMail4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (senha === '') {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha < 8) {
        divErro.innerHTML = mensagemErroSenha2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha > 30) {
        divErro.innerHTML = mensagemErroSenha3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])$/;
    if (!padraoSenha.test(senha)) {
        divErro.innerHTML = mensagemErroSenha4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (nascimento === '') {
        divErro.innerHTML = mensagemErroNasc;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoData = /^(\d{2})(\d{2})(\d{4})$/;
    if (!padraoData.test(nascimento)) {
        divErro.innerHTML = mensagemErroNasc2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (telefone === '') {
        divErro.innerHTML = mensagemErroTel;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let telpadrao = /\(\d{2}\)\s\d{5}-\d{4}/;
    if (!telpadrao.test(telefone)) {
        divErro.innerHTML = mensagemErroTel2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (nomePet === '') {
        divErro.innerHTML = mensagemErroNomePet;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nomePet < 3) {
        divErro.innerHTML = mensagemErroNomePet2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nomePet > 100) {
        divErro.innerHTML = mensagemErroNomePet3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (!alfanumerico.test(nomePet)) {
        divErro.innerHTML = mensagemErroNomePet4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (tipo === '') {
        divErro.innerHTML = mensagemErroTipo;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (idade === '') {
        divErro.innerHTML = mensagemErroIdade;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


divErro.style.display = 'none';
divSucesso.innerHTML = 'Cadastro realizado com sucesso!'
divSucesso.style.display = 'block';

setTimeout(() => {
    divSucesso.style.display = 'none';
}, 3000);

return true;
}