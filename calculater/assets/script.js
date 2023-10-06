
 let screen=document.querySelector(".screen");
 let buttons=document.querySelectorAll(".button");

 let calculation =[]
 let Calculation

function calculate(button){
    // console.log(button)
    const value = button.textContent
    if(value === "C"){
        console.log(Calculation)
        calculation = []
        screen.textContent = ''
    }else if (value==="="){
        screen.textContent = eval(Calculation)

    }else {
        calculation.push(value)
        Calculation = calculation.join('')
        screen.textContent = Calculation
    }


    
      }
buttons.forEach(button =>

    button.addEventListener("click" ,() => calculate(button)))



       