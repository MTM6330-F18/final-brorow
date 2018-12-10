function switchCarousel(id) {
  document.getElementById("carousel1").classList.remove('active')
  document.getElementById("carousel2").classList.remove('active')
  document.getElementById("carousel3").classList.remove('active')
  var temp = document.getElementById("carousel" + id)
  temp.classList.add('active')
};
