$(document).ready(function(){
    $('header button').click(function (e) { 
        e.preventDefault();
        $('form').slideDown();
    });

    $('#Canselar').click(function (e) { 
        e.preventDefault();
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const url = $('#url-imagem').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${url}" />`).appendTo(novoItem);
        $(`
            <div class="imagem">
                <a href="${url}" title="Ver imagem completa" target="_blank">Ver imagem completa</a>
            </div> 
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url-imagem').val('');
    })
})