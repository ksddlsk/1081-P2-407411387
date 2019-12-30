function change(index) {
  const p = document.getElementById('section');
  p.style.backgroundColor = 'azure';
  switch (index) {
    case 1:
      p.innerHTML = "<iframe width=100% height=100% src='./tku/w01/intro.html' >";
      break;

    case 2:
      p.innerHTML = "<iframe width=100% height=100% src='./tku/w01/pokemon.html' >";
      break;

    case 3:
      p.innerHTML =
        "<iframe width=100% height=100% src='./tku/w02/imageGallery.html' >";
      break;

    case 4:
      p.innerHTML = "<iframe width=100% height=100% src='./tku/w02/blogtku.html' >";
      break;

    case 5:
      p.innerHTML = "<iframe width=100% height=100% src='./tku/w03/div.html' >";
      break;

    case 6:
      p.innerHTML = "<iframe width=100% height=100% src='./tku/w04/tku60.html' >";
      break;
  }
}
