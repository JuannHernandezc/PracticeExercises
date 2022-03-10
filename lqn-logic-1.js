//Algorithm that print the number 0 to 100 
//Si quiere ejecutar este codigo puede hacerlo via web de la siguiente forma:
//1) Ingrese al siguiente link: https://paiza.io/es/languages/javascript
//2) Haga Clik en el boton Nuevo Codigo
//3) Copie y pegue el codigo y podra ver el resultado.
for(let i = 0; i <= 100; i++){
    let stringNumber = `${i}`;
    if(i % 2 === 0 && i % 5 === 0) stringNumber += ' buzz bazz'
    else if(i % 2 === 0) stringNumber += ' buzz'
    else if(i % 5 === 0) stringNumber += ' bazz'
    console.log(stringNumber);
  }
  