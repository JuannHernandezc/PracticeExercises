//Algorithm that print the number 0 to 100 
//Si quiere ejecutar este codigo puede hacerlo via web de la siguiente forma:
//1) Ingrese al siguiente link: https://paiza.io/es/languages/javascript
//2) Haga Clik en el boton Nuevo Codigo
//3) Copie y pegue el codigo y podra ver el resultado.
//4) Asegurarse que se tenga una palabra que sea de la lista en el siguiente metodo :  createListPokemon('remoraid');
const namesPokemonString =
  "audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask";
const namesPokemonArray = namesPokemonString.split(" ");

let arraySolution = [];
let namesPokemonCopy = [...namesPokemonArray];

//Metodo para la primera letra del elemento siguiente del arreglo Final
const chooseFirstLetter = (letter, names) => {
  return (namewithFirstLetter = names.filter((item) =>
    item.startsWith(letter)
  ));
};

//Metodo para encontrar la ultima palabra del arreglo solucion
const chooseLastLetter = () => {
  for (let index in arraySolution) {
    if (index == arraySolution.length - 1) {
      const lastLetter = arraySolution[index].charAt(
        arraySolution[index].length - 1
      );
      return lastLetter;
    }
  }
};
const deleteElement = (nameFilter) => {
  //Eliminacion del elemento en el array
  namesPokemonCopy.forEach((item, index) => {
    if (nameFilter === item) {
      namesPokemonCopy.splice(index, 1);
      console.log(`Elemento eliminado: ${item}`);
    }
  });
//   console.log(namesPokemonCopy.length);
};
//Metodo para agregar elementos al array Final
const addNamesPokemon = () => {
  let i = 0;
  while (i < namesPokemonCopy.length) {
    console.log("----------------------------");
    const lastLetter = chooseLastLetter();
    const namePokemonFilter = chooseFirstLetter(lastLetter, namesPokemonCopy);
    if(!namePokemonFilter.length){
        console.log(`No se ha encontrado otra palabra que empiece por la letra ${lastLetter}`);
        console.log('Se ha terminado la secuencia con las siguientes palabras en la lista: ');
        arraySolution.forEach(item => console.log(item));
        return arraySolution;
    }else{
        console.log(`Array Filtrado por la letra ${lastLetter}:`, namePokemonFilter);
        arraySolution.push(namePokemonFilter[0]);
        console.log("Nuevo elemento agregado al array:", arraySolution);
        deleteElement(namePokemonFilter[0]);
    }
  }
};
const createListPokemon = (word) => {
  if (namesPokemonCopy.includes(word) && !arraySolution.length) {
    arraySolution.push(word);
    deleteElement(word);
    addNamesPokemon();
  } else {
    console.log("Palabra no encontrada");
  }
};

createListPokemon('remoraid');

// Programado por : Juan Nicolas Hernandez Chavez - email: hernandezchavezjuannicolas@gmail.com