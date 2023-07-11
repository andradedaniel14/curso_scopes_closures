//Block scope
function prueba(){
    if (true){
        var variable = 90
        let variable_1 = 88
        console.log(variable_1)
    }
    console.log(variable)
    console.log(variable_1)
}

prueba()