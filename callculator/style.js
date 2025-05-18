 document.addEventListener('DOMContentLoaded', function() {
      const customAlert = document.getElementById('customAlert');
      const alertClose = document.getElementById('alertClose');
      setTimeout(() => {
        customAlert.classList.add('show');
      }, 500);
      setTimeout(() => {
        customAlert.style.animation = 'fadeOut 0.7s forwards';
        setTimeout(() => {
          customAlert.style.display = 'none';
        }, 700);
      }, 5000);
      alertClose.addEventListener('click', () => {
        customAlert.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
          customAlert.style.display = 'none';
        }, 500);
      });
    });
    let input = document.getElementById("input");
    let buttons = document.querySelectorAll("button");
    
    let string = "";
    let Arr = Array.from(buttons);
    Arr.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
          string = eval(string);
          input.value = string;
        } else if (e.target.innerHTML == "AC") {
          string = "";
          input.value = string;
        } else if(e.target.innerHTML == 'DEL'){
          string = string.substring(0, string.length-1);
          input.value = string;
        } else {
          string += e.target.innerHTML;
          input.value = string;
        }
      });
    });