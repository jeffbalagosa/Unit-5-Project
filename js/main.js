$('#pic-search').on('keyup', function () {
  const value = $(this).val().toLowerCase();
  $('#thumbnails *').filter(function () {
    $(this).toggle($(this.text().toLowerCase().indexOf(value) > -1);
  });
});
