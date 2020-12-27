import Test, { testChild, testChild2, testChild3 } from "./components/test.js";

const testContainer = document.querySelector("#test-container");
// testContainer.innerHTML = Test("TESTEANDO", "10px");

// testChild();
// testChild2();
// testChild3();
// test();

function devolverNombre() {
  let nombre = "leon";

  // side effect
  console.log("--->", nombre);

  // retorno de la funcion
  return nombre;
}
// testContainer.innerHTML = devolverNombre();

// ejemplo de funcion con return boolean
function liked() {
  return false;
}

if (liked()) {
  testContainer.innerHTML = "tiene like";
} else {
  testContainer.innerHTML = "no tiene like";
}
