const avança = documnet.querySelectorALL('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAtribute(date-proximo);

        atual. classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})