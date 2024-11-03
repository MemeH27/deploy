export const contenido = {
    title: "Mi Portafolio",
    description: "Bienvenido a mi portafolio, donde muestro mis proyectos y habilidades.",
    currentYear: new Date().getFullYear(),
    mensaje: "Con 20 años y actualmente cursando la carrera de Ingeniería en Sistemas en la Universidad Católica de Honduras, me apasiona el mundo del diseño gráfico. Mi enfoque está en crear piezas visuales para redes sociales que no solo llamen la atención, sino que realmente conecten con la audiencia. Busco transmitir ideas y emociones a través del arte digital, fusionando creatividad y estrategia en cada proyecto."
};

export const generarContextoDePagina = () => {
    return {
        contenido,
    };
};