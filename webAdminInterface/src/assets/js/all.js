function _hoverOptionModule(element,option)
{
  let icons = element.querySelectorAll('i');
  if(option == 1)
  {
    icons.forEach(element =>
    {
        element.style.color = "#FF5722";
    });
  }
  else
  {
    icons.forEach(element =>
    {
          element.style.color = "white";
    });
  }
}

function _chooseToolOption(elementChoosen)
{
  let allButtons = document.querySelectorAll('.btn-link');

  allButtons.forEach( el =>{

    el.setAttribute('choosen','0');
  })
  elementChoosen.setAttribute('choosen',"1");
  _testIcon();
  _rotateIcon(elementChoosen.querySelector('i:nth-child(2)'),elementChoosen.getAttribute('state'));
}

function _rotateIcon(icon,state)
{
    if(state == "0")
    {
      icon.classList.remove('rotateOptionReverse');
      icon.classList.add('rotateOption');
      icon.parentElement.setAttribute('state','1');
    }
    else
    {
      icon.classList.remove('rotateOption');
      icon.classList.add('rotateOptionReverse');
      icon.parentElement.setAttribute('state','0');
    }
  }

function _testIcon()
{
  let allButtons = document.querySelectorAll('.btn-link');

  allButtons.forEach( el =>{

    let elementChoosenState = el.getAttribute('choosen');

    if(elementChoosenState == "0")
    {
      el.querySelector('i:nth-child(2)').classList = "fas fa-angle-right";
      el.setAttribute('state','0')
    }

  })

}
