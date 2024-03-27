let equation="";

function handleGetValue(num){
    equation+=num;
    document.getElementById('display').value=equation

    console.log(equation)
}

function clearValue(){
    equation="";
    document.getElementById('display').value=equation
}

function cutValue(){
    let tempEquation=equation.slice(0,equation.length-1);
    equation=tempEquation;
    document.getElementById('display').value=equation

    console.log(equation)
}


function getResult() {
    try {
        let ans = eval(equation);
        
        document.getElementById('display').value = ans;
        equation = "";
    } catch (error) {
        document.getElementById('display').value = "Error";

        equation = "";
    }
}


