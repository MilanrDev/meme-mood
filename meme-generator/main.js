document.getElementById('enter').addEventListener('click', enter)



function enter(){
  console.log('hello');
let mood = document.getElementById('mood').value

if (mood == 'happy' || mood == 'swell' || mood == 'wonderful'){
    document.getElementById('img').innerHTML = "<img src = 'images/jay v.jpg'>";
    document.querySelector('h2').innerText = 'Keep on smiling sunshine!'
}
else if (mood == 'sad' || mood== 'meh'){
    document.getElementById('img').innerHTML = "<img src = 'images/sadboi.jpg'>"
    document.querySelector('h1').innerText = 'Meh! Sad backwards is das and das no good.'

  }
else if (mood == 'mad' || mood== 'unhappy'|| mood == 'furious'){
    document.getElementById('img').innerHTML = "<img src = 'images/mad.jpg'>"
    document.querySelector('h2').innerText = 'You wont like me when Im angry...'

  }else if (mood == 'sleepy' || mood== 'tired'){
      document.getElementById('img').innerHTML = "<img src = 'images/pooh.jpg'>"
      document.querySelector('h2').innerText = 'Go get some rest. You deserve it!'
}
else if (mood == 'sad' || mood== 'meh'){
    document.getElementById('img').innerHTML = "<img src = 'images/sadboi.jpg'>"
    document.querySelector('h2').innerText = 'Keep on smiling sunshine!'
}
else if (mood == 'sad' || mood== 'meh'){
    document.getElementById('img').innerHTML = "<img src = 'images/sadboi.jpg'>"
    document.querySelector('h2').innerText = 'Keep on smiling sunshine!'
}else if (mood == 'sad' || mood== 'meh'){
    document.getElementById('img').innerHTML = "<img src = 'images/sadboi.jpg'>"
    document.querySelector('h2').innerText = 'Keep on smiling sunshine!'
}
    }
