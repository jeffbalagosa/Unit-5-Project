$('#pic-search').keyup(function () {
  const val = $.trim(this.value);
  console.log(val);
  if (val === '') $('img').show();
  else {
    $('img').hide();
    $(`img[alt*='${val.toLowerCase()}']`).show();
  }
});
