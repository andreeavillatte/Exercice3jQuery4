// Quand le document est ready
$(function () {
    // Faire de la validation de formulaire ///////////////////////////::
    // lorsque le formulaire va etre soumis
    $('form').submit(function (event) {
        //on recupere toutes las inputs; je les mets dans une seule variable
        // on va creer comme "query selecteur all"
        var inputs = $('input');
                $('small').remove();
        // on va parcourir ce tableau pour traiter chaque colonne du tableau
        // cette methode (.each) permet de parcourir mon tableau
        $.each(inputs, function () {
            let input = this;
            // on verifie que nos champs respectent les contraintes ( requires, maxlength, etc.) qu'on a defini dans notre HTML
            if (!input.validity.valid) {
                var small = $('<small></small>');
                small.addClass('alert alert-danger');
                small.text(input.validationMessage);
                $(input).after(small);
            };
            event.preventDefault();
        });
    });
})