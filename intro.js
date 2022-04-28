
//Creamos un constructor para armar los personajes de los mich

class MichPlayer {
    constructor ( nombre, mensaje,){
        this.nombre = nombre;
        this.mensaje = mensaje;
        
    }

}

const Mich1 = {
    nombre: "Chicho",
    mensaje: "Me gustan los mimitos, me das mimitos?",
}

const Mich2 = {
    nombre: "Nino",
    mensaje: "Dame pollito humane.",
}

const Mich3 = {
    nombre: "Gucho",
    mensaje: "HOLA KARENNNNNNNNNN DAME POLLITO POLLITO POLLITO",
}

let boton1 = document.querySelector("choosebutton1");

    boton1.addEventListener("click", () => {
      let Mich1sound = document.createElement("mich1")
      Mich1sound.setAttribute("src", "sonido/mich1.mp3")
      Mich1sound.play()
    })

let boton2 = document.querySelector("choosebutton2");

    boton2.addEventListener("click", () => {
      let Mich2sound = document.createElement("mich2")
      Mich2sound.setAttribute("src", "sonido/mich2.mp3")
      Mich2sound.play()
    })

let boton3 = document.querySelector("choosebutton3");

    boton3.addEventListener("click", () => {
      let Mich3sound = document.createElement("mich3")
      Mich3sound.setAttribute("src", "sonido/mich3.mp3")
      Mich3sound.play()
    })
