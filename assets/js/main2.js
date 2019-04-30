$(function () {
    var regexName = /^[A-Za-zéÉàÀîÎçÇëËïêÊèÈ]+([-]?[A-Za-zéÉàÀîÎçÇëËïêÊèÈ])*$/;
    var regexPhone = /^0[67][0-9]{8}$/;
    var regexMail = /^[a-zA-Z][a-zA-Z0-9]+([_.-]?[a-zA-Z0-9]+)@[a-zA-Z]+.[a-zA-Z]{2,5}$/;

    $('form').submit(function (event) {
        var name = $('#Name').val();
        var firstname = $('#firstName').val();
        var mail = $('#Email').val();
        var phone = $('#number').val();
        $('small').remove();
        //////////////// NAME //////////////////////////////////////////////////////
        if (name == '') {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Ce champs est obligatoire');
            $('#Name').after(small);
        }
        else if (!regexName.test(name)) {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Nom Invalide !');
            $('#Name').after(small);
        }
        event.preventDefault();
        ////////////////// FIRST NAME //////////////////////////////////////////////
        if (firstname == '') {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Ce champs est obligatoire');
            $('#firstName').after(small);
        }
        else if (!regexName.test(first)) {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Prenom Invalide !');
            $('#firstName').after(small);
        }
        event.preventDefault();

        ////////////////// EMAIL //////////////////////////////////////////////
        if (mail == '') {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Ce champs est obligatoire');
            $('#Email').after(small);
        }
        else if (!regexMail.test(mail)) {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Email invalide !')  ;
            $('#Email').after(small);
        }
        event.preventDefault();

        ////////////////// PHONE //////////////////////////////////////////////
        if (phone == '') {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Ce champs est obligatoire');
            $('#number').after(small);
        }
        else if (!regexPhone.test(phone)) {
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Numéro de téléphone invalide !');
            $('#number').after(small);
        }
        event.preventDefault();
/////////////////// Il faut ajouter un message quand j'envoie les donnees correctes, pour dire 
//alert('Vos informations ont bien été enregistrées. Merci.');

    })
    });
