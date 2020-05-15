$('#pic-search').keyup(function () {
  const val = $.trim(this.value);
  if (val === '') $('img').show();
  else {
    $('img').hide();
    $('img[alt*=' + val.toLowerCase() + ']').show();
    $('img[data-title*=' + val.toLowerCase() + ']').show();
  }
});
