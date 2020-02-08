alert("click on the images to see what happens!")
function showLeftPanel()
{
  var leftDetail=document.getElementById('left-detail');
  leftDetail.style.marginLeft='0';

  var leftProfile=document.getElementById('left-profile');
  leftProfile.style.minWidth='20vw';

  var leftImage=document.getElementById('left-image');
  leftImage.style.transform='translateY(40vh) scale(0.8)';

  document.getElementById('left-name').style.opacity='0';

  document.getElementById('left-post').style.opacity='0';

  var leftArrow=document.getElementById('left-arrow');
  leftArrow.style.visibility='visible';
  leftArrow.style.transform='translateY(-25vh)';
}

function showRightPanel()
{
  var rightDetail=document.getElementById('right-detail');
  document.getElementById('left-profile').style.marginLeft='-50vw';
  rightDetail.style.marginRight='0';

  var rightProfile=document.getElementById('right-profile');
  rightProfile.style.minWidth='20vw';

  var rightImage=document.getElementById('right-image');
  rightImage.style.transform='translateY(40vh) scale(0.8)';

  document.getElementById('right-name').style.opacity='0';

  document.getElementById('right-post').style.opacity='0';

  var rightArrow=document.getElementById('right-arrow');
  rightArrow.style.visibility='visible';
  rightArrow.style.transform='translateY(-25vh)';
}


function closeLeftPanel()
{
  var leftDetail=document.getElementById('left-detail');
  leftDetail.style.marginLeft='-80vw';

  var leftProfile=document.getElementById('left-profile');
  leftProfile.style.minWidth='50vw';

  var leftImage=document.getElementById('left-image');
  leftImage.style.transform='translateY(0vh) scale(1.0)';

  document.getElementById('left-name').style.opacity='1';

  document.getElementById('left-post').style.opacity='1';

  var leftArrow=document.getElementById('left-arrow');
  leftArrow.style.visibility='hidden';
  leftArrow.style.transform='translateY(0vh)';
}


function closeRightPanel()
{
  var rightDetail=document.getElementById('right-detail');
  document.getElementById('left-profile').style.marginLeft='0';
  rightDetail.style.marginRight='-80vw';

  var rightProfile=document.getElementById('right-profile');
  rightProfile.style.minWidth='50vw';

  var rightImage=document.getElementById('right-image');
  rightImage.style.transform='translateY(0vh) scale(1.0)';

  document.getElementById('right-name').style.opacity='1';

  document.getElementById('right-post').style.opacity='1';

  var rightArrow=document.getElementById('right-arrow');
  rightArrow.style.visibility='hidden';
  rightArrow.style.transform='translateY(0vh)';
}
