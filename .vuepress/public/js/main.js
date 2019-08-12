(function ( $ ) {
    // obfuscate email
    $('.email').each(function() {
      email_text = $(this).html()+'@nastasiu.com';
      email_url = 'mailto:'+email_text+'?subject=Hello&amp;body=Hi there, my name is%20';
      $(this).attr('href',email_url).html(email_text);
  });
}(jQuery));
