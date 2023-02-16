const btn =document.getElementById(does-not-exist);
console.log(btn);
if (btn){
    btn.addEventListener('click',(){
      alert('You clicked the button');
    });

}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
  
    if (username === '' || password === '') {
      alert('Username and password are required.');
      return;
    }
  
    if (username === 'admin' && password === 'password') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Incorrect username or password.');
    }
  });