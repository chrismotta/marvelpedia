// exportar como default
export default function Test(titulo = "Sin titulo", fontSize = "18px") {
  // si la funcion devuelve algo que se puede renderizar,
  // es un Componente (modulo de renderizacion)
  // y siempre tienen un return seguido de un string (podria ser html)
  return `<h2 style='font-size: ${fontSize}'>Renderizando componente: ${titulo}</h2>`;
}

// exportar como elemento
export function testChild() {
  console.log("test child");
}
export function testChild2() {
  console.log("test child 2");
}
export function testChild3() {
  console.log("test child 3");
}
