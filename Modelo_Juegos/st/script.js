const storyText = document.getElementById('story-text');
const optionsContainer = document.getElementById('options');

let currentScene = 0;

const story = [
    {
        text: "Eres el gran caballero el nervio y te han encomendado una mision que ir a rescatar a una princesa llamada Inesota de la familia la Osa yendo a mitad de camino te encuentras una bifurcacion en el camino tendras que elegir que camino tomar",
        options: [
            { text: "Seguir el camino de la izquierda", nextScene: 1 },
            { text: "Tomar el camino de la derecha", nextScene: 2 }
        ]
    },
    {
        text: "El camino de la izquierda te lleva a un lugar extraño llamado la Florida donde puedes ver que hay bandas de bandidos con unas mascotas que antes eran animales salvajes !JABALIS¡ ¿que haces continuar el camino y explorar la Florida o dar media vuelta y ser un cagao?",
        options: [
            { text: "Explorar el pueblucho de la Florida", nextScene: 3 },
            { text: "Soy un cagao y vuelvo", nextScene: 0 }
        ]
    },
    {
        text: "El camino de la derecha te lleva a un campo donde ves un cartel que pone que ese campo se llama EL TEMPLO y te da un flashback de una vida pasada de una batalla en ese campo donde hubo un empate entre el REY CLAUDIO y su mayor enemigo EL REY DE LOS PRADOS ¿que haras volver a atras o investigar el porque de ese recuerdo?",
        options: [
            { text: "Explorar el Templo y investigar", nextScene: 4 },
            { text: "Volver a atras oliendo un poco a kk", nextScene: 0 }
        ]
    },
    {
        text: "Dentro del pueblucho de la florida encuentras dos pistas de la princesa Inesota la primera cosa que viste fue sangre al lado de un vestido de alta costura y la segunda fue una taberna en la que no parabas de escuchar gritos de una mujer",
        options: [
            { text: "Seguir el rastro de sangre del vestido", nextScene: 5 },
            { text: "entrar a la taberma con espada en mano", nextScene: 6 }
        ]
    },
    {
        text: "En el pueblo, conoces a un hombre de una etnia algo sospechosa (les gusta mucho el flamenco) qur te ofrece inhalar un poco de sus hierbas magicas ¿aceptas??",
        options: [
            { text: "Si", nextScene: 7 },
            { text: "VAAAAAAAAAA RULATELOOOOOOOO", nextScene: 8 }
        ]
    },
    {
        text: "Llegas a un lugar oscuro pero encuentras a la sirvienta de la princesa de la que no sabias ni que existia la encuentras degollada y ahogada en vino pero tiene un anillo de oro que llama la atencion.",
        options: [
            { text: "Recoger el tesoro (has robado a una muerta)", nextScene: 9 }
        ]
    },
    
    { text: "depues de tremenda pipa de la paz vendrian los primos del dudoso individuo de una etnia no fiable y te apalarian", options: [
        { text: "moriste", nextScene: 0 },
    ]},
];

function showScene(sceneIndex) {
    const currentSceneData = story[sceneIndex];
    storyText.textContent = currentSceneData.text;
    optionsContainer.innerHTML = '';

    currentSceneData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            currentScene = option.nextScene;
            showScene(currentScene);
        });
        optionsContainer.appendChild(button);
    });
}


showScene(currentScene);
