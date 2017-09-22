var blackBoxs = document.getElementsByClassName('black');
var whiteBoxs = document.getElementsByClassName('white');

var eventTarget;
function checkRed(event)
{
  console.log("check");

  if (!eventTarget)
  {
    if (eventTarget.class=='black')
      eventTarget.style.backgroundColor='black';
    else
      eventTarget.style.backgroundColor='white';
  }

  eventTarget = event.currentTarget;
  event.currentTarget.style.backgroundColor = 'red';
}

for (var i = 0; i < blackBoxs.length; i++)
  blackBoxs[i].addEventListener('click', checkRed);
for (var i = 0; i < whiteBoxs.length; i++)
  whiteBoxs[i].addEventListener('click', checkRed);
