//Closures sencillo
let contador = 1
function prueba(){
    contador += 1
    return contador
}

console.log(prueba())

//Closure avanzado
function miFuncion(){
    const var_1 = 0
    function miFuncionHija(){
        return console.log(var_1)
    }
    return miFuncionHija()
}
miFuncion()

//Creacion closure para sumar
function sumWithClosure(firstNum) {
    let num_1 = firstNum
    function sumSecond(secondNum) {
        let num_2 = secondNum
      if (secondNum) { //Al ser un vacio, JavaScript lo interpreta como un valor Falsy
        return num_1 + num_2
      } 
      else {
        return num_1
      }
    }
    return sumSecond
  }

console.log(sumWithClosure(2)())

//Ejemplo
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
  const myMoneyBox = moneyBox();
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);
  
  const moneyBoxAna = moneyBox();
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);