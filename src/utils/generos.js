const generos = [
  {
    id: "romance",
    nombre: "Romance",
    destacado: {
      titulo: "HeartStopper",
      autor: "Por Alice Oseman",
      imagen: `${import.meta.env.BASE_URL}imagenes/PortadaHeartStopper.jpeg`
    }
  },
  {
    id: "psicología",
    nombre: "Psicología",
    destacado: {
      titulo: "Psicopatologia de la vida cotidiana",
      autor: "Por Sigmund Freud",
      imagen: `${import.meta.env.BASE_URL}imagenes/PortadaCotidiana.gif`
    }
  },
  {
    id: "terror",
    nombre: "Terror",
    destacado: {
      titulo: "El instituto",
      autor: "Por Stephen King",
      imagen: `${import.meta.env.BASE_URL}imagenes/PortadaInstituto.jpeg`
    }
  },
  {
    id: "cienciaficción",
    nombre: "Ciencia Ficción",
    destacado: {
      titulo: "El problema de los 3 cuerpos",
      autor: "Por Cixin Liu",
      imagen: `${import.meta.env.BASE_URL}imagenes/Portada3Cuerpos.jpeg`
    }
  }
];

export default generos;
