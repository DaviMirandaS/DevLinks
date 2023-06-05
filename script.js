function toggleMode() {
  const html = document.documentElement

  //Mesma função que o toggle, mas está em condicional.

  /*if(html.classList.contains('light')){

    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }*/

  html.classList.toggle('light')
}