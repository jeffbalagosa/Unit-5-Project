// For Exceeds.  "Project uses original JavaScript or jQuery code to implement search box functionality instead of a plugin."  Lots of Frankenstein codes from internet searches.
$('#pic-search').keyup(function () {
  const val = $.trim(this.value);
  console.log(val);
  if (val === '') $('img').show();
  else {
    $('img').hide();
    $(`img[alt*='${val.toLowerCase()}']`).show();
  }
});
