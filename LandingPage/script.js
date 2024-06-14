
const togglebtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtnIcon.onclick = function () {

  dropDownMenu.classList.toggle('open')
  const isopen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isopen
    ? 'fa-light fa-x'
    : 'fa-solid fa-bars'

}
