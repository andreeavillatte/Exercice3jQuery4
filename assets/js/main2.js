$(function () {
  var regexName = /^[A-Za-z]+(([- ]?)[A-Za-z])*$/;
  var regexMail = /^[a-zA-Z][a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)@[a-z][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/;
  var regexPhone = /^0[67][0-9]{8}/;
  var regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  $('form').submit(function (event) {
    var name = $('#Name').val();
    var firstname = $('#firstName').val();
    var mail = $('#Email').val();
    var phone = $('#number').val();
    $('small').remove();
    ////////////////////////////// NAME /////////////////////////////////
    if (name == '') {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champs est obligatoire');
      $('#Name').after(small);
    }
    else if (!regexName.test(name)) {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Attention, votre nom ne doit contenir que des lettres sans accents et des tirets.');
      $('#Name').after(small);
    }
    event.preventDefault();
    ////////////////////////////// firstNAME /////////////////////////////////
    if (firstname == '') {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champs est obligatoire');
      $('#firstName').after(small);
    }
    else if (!regexName.test(firstname)) {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Attention, votre prenom ne doit contenir que des lettres sans accents et des tirets.');
      $('#firstName').after(small);
    }
    event.preventDefault();
    ////////////////////////////// Mail /////////////////////////////////
    if (mail == '') {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champs est obligatoire');
      $('#Email').after(small);
    }
    else if (!regexMail.test(mail)) {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Attention, votre adresse mail n\'est pas valide.');
      $('#Email').after(small);
    }
    event.preventDefault();
    ////////////////////////////// Phone /////////////////////////////////
    if (phone == '') {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champs est obligatoire');
      $('#number').after(small);
    }
    else if (!regexPhone.test(phone)) {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Attention, votre numéro de téléphone ne doit contenir que 10 chiffres.');
      $('#number').after(small);
    }
    event.preventDefault();

  })

});
// $('form').validate();
// $('form').removeAttr('novalidate');
// alert('jhjhbhjgj');