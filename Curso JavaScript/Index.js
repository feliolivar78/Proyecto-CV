
let pc1 = {
    nombre: "felipePC",
    procesador: "amd ryzen 5 1600",
    ram: "8GB",
    espacio: "1.5TB"
};
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
         el procesador es: ${procesador} <br>
         el ram es: ${ram} <br>
         el espacio es: ${espacio}`;
document.write(frase);