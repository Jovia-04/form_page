 function test() {
      if (document.getElementById('name').value === '') {
        document.getElementById('error').innerHTML = "Please enter your name";
      } else if (document.getElementById('email').value === '') {
        document.getElementById('error').innerHTML = "Please enter your email";
      } else if (document.getElementById('message').value === '') {
        document.getElementById('error').innerHTML = "Please enter your message";
      } else {
        document.getElementById('error').innerHTML = "";
        document.getElementById('formregist').submit(); 
      }
    }
  