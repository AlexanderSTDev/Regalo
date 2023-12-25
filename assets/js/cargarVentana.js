const presioname = document.getElementById('presioname');
const section = document.getElementById('contenedor');

presioname.addEventListener('click', () => {
    const nuevoContenedor = document.createElement('div');
    const plantilla = `
    <form action="" class="flex flex-col gap-5 bg-[#f1f1f1]">
            <label for="" class="">¿Cuál ha sido tu recuerdo favorito de nuestro primer año juntos?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <label for="">¿Cómo crees que hemos crecido como pareja desde que comenzamos nuestra relación?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <label for="">¿Cuál es tu parte favorita de estar en una relación conmigo?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <label for="">¿Hay alguna meta o sueño que tengamos como pareja que te emocione alcanzar en el próximo
                año?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <label for="">¿Qué es lo que más valoras de nuestra relación?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <label for="">¿Hay algo que te gustaría hacer juntos en el próximo año para fortalecer nuestra
                conexión?</label>
            <input type="text" name="" id="" placeholder="Cuál es tu respuesta"
                class="p-2 outline-none rounded-lg border-2 border-black">

            <input type="submit" value="Enviar" class="bg-black text-white font-bold py-2 px-4 rounded w-1/2 mx-auto">
        </form>
    `;

    nuevoContenedor.innerHTML = plantilla;

    section.append(nuevoContenedor);

    presioname.classList.add('hidden');

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        presioname.classList.remove('hidden');

        crearVentana();
    });

    const crearVentana = () => {
        const ventana = document.createElement('div');
        const plantilla = `
        <div class="w-[90%] font-sans h-[80vh] mx-auto mt-20 p-3 grid gap-3 bg-white rounded-md shadow-lg relative">
            <i id="cerrar" class="bx bx-x absolute bx-md top-3 right-3 text-3xl cursor-pointer"></i>
            <h3 class="text-3xl mt-10 font-bold">Feliz Aniversario.</h3>
            <p>La verdad es que me está encantando mucho lo que estamos teniendo hasta ahora y felicidades jajaja espero te este gustando esto.</p>
            <div class="w-full mx-auto flex gap-2 place-content-center">
                <p>Te amo con todo mi ser y agradezco tu cariño por estar conmigo y mucho más.</p>
                <img src="./assets/img/fotos/img1.jpeg" alt="" class="w-[35%]">
            </div>
        </div>
        `;
        ventana.classList.add('cargar-ventana');
        ventana.innerHTML = plantilla;

        section.append(ventana);

        const cerrar = document.getElementById('cerrar');

        cerrar.addEventListener('click', () => {
            section.removeChild(ventana);
        });
    }
});