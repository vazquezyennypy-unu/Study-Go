/* ==========================================================================
           1. KIRA NATIVE SVG GRAPHICS ENGINE
           Generates dynamic vector mascot representations for various expressions.
           ========================================================================== */
        
        function renderKiraSVG(expression = 'greeting', accessory = 'none') {
            // Colors from StudyGo Brand Palette
            const cPurple = "#6C5CE7";
            const cLavender = "#A29BFE";
            const cSky = "#74B9FF";
            const cWhite = "#FFFFFF";
            const cDark = "#2D3436";
            const cPink = "#FD79A8";
            const cMint = "#00B894";

            // Expression Eyes & Mouth Features
            let eyesSVG = '';
            let mouthSVG = '';
            let armsSVG = '';
            let accessorySVG = '';

            switch (expression) {
                case 'greeting':
                    // Happy big eyes, open smile, arm waving
                    eyesSVG = `
                        <ellipse cx="38" cy="48" rx="4.5" ry="6" fill="${cDark}" />
                        <ellipse cx="62" cy="48" rx="4.5" ry="6" fill="${cDark}" />
                        <circle cx="36.5" cy="46" r="1.8" fill="${cWhite}" />
                        <circle cx="60.5" cy="46" r="1.8" fill="${cWhite}" />
                    `;
                    mouthSVG = `<path d="M 44 58 Q 50 65 56 58" fill="none" stroke="${cDark}" stroke-width="2.5" stroke-linecap="round" />`;
                    armsSVG = `
                        <path d="M 22 55 Q 12 45 10 32" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <circle cx="10" cy="32" r="3" fill="${cLavender}" />
                        <path d="M 78 55 Q 86 60 88 66" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                    `;
                    break;

                case 'explaining':
                    // Focused eyes, open talking mouth, holding book/pointer
                    eyesSVG = `
                        <ellipse cx="38" cy="48" rx="4" ry="5.5" fill="${cDark}" />
                        <ellipse cx="62" cy="48" rx="4" ry="5.5" fill="${cDark}" />
                        <circle cx="36.5" cy="46" r="1.5" fill="${cWhite}" />
                        <circle cx="60.5" cy="46" r="1.5" fill="${cWhite}" />
                    `;
                    mouthSVG = `<path d="M 45 57 Q 50 63 55 57 Z" fill="${cDark}" />`;
                    armsSVG = `
                        <path d="M 22 55 Q 15 62 10 65" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <path d="M 78 55 Q 85 45 92 42" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                    `;
                    accessorySVG = `
                        <!-- Mini Magic Pointer/Star -->
                        <line x1="85" y1="48" x2="96" y2="35" stroke="${cPurple}" stroke-width="2.5" stroke-linecap="round" />
                        <polygon points="96,31 98,35 102,36 99,39 100,43 96,41 92,43 93,39 90,36 94,35" fill="${cMint}" />
                    `;
                    break;

                case 'thinking':
                    // Looking up eyes, curious small mouth, floating thought bubble
                    eyesSVG = `
                        <ellipse cx="38" cy="44" rx="4" ry="5" fill="${cDark}" />
                        <ellipse cx="62" cy="44" rx="4" ry="5" fill="${cDark}" />
                        <circle cx="38" cy="42" r="1.5" fill="${cWhite}" />
                        <circle cx="62" cy="42" r="1.5" fill="${cWhite}" />
                    `;
                    mouthSVG = `<path d="M 47 59 Q 50 57 53 59" fill="none" stroke="${cDark}" stroke-width="2.5" stroke-linecap="round" />`;
                    armsSVG = `
                        <path d="M 22 55 Q 30 60 35 58" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <path d="M 78 55 Q 86 62 88 68" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                    `;
                    accessorySVG = `
                        <!-- Thought bubbles -->
                        <circle cx="78" cy="30" r="3" fill="${cSky}" opacity="0.7" />
                        <circle cx="86" cy="22" r="5" fill="${cSky}" opacity="0.8" />
                        <circle cx="95" cy="14" r="7" fill="${cSky}" />
                    `;
                    break;

                case 'celebrating':
                    // Joyful closed eyes (^ ^), wide happy mouth, confetti stars
                    eyesSVG = `
                        <path d="M 33 48 Q 38 42 43 48" fill="none" stroke="${cDark}" stroke-width="3" stroke-linecap="round" />
                        <path d="M 57 48 Q 62 42 67 48" fill="none" stroke="${cDark}" stroke-width="3" stroke-linecap="round" />
                    `;
                    mouthSVG = `<path d="M 42 56 Q 50 67 58 56 Z" fill="${cPink}" />`;
                    armsSVG = `
                        <path d="M 22 53 Q 12 40 10 30" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <path d="M 78 53 Q 88 40 90 30" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                    `;
                    accessorySVG = `
                        <!-- Confetti -->
                        <circle cx="15" cy="20" r="2.5" fill="${cMint}" />
                        <circle cx="85" cy="20" r="2.5" fill="${cSky}" />
                        <polygon points="25,15 27,18 30,18 28,21 29,24 25,22 21,24 22,21 20,18 23,18" fill="${cPink}" transform="scale(0.6) translate(10, -10)" />
                        <polygon points="75,15 77,18 80,18 78,21 79,24 75,22 71,24 72,21 70,18 73,18" fill="${cLavender}" transform="scale(0.6) translate(80, -10)" />
                    `;
                    break;

                case 'encouraging':
                    // Determined happy eyes, blushing, stars in cheeks
                    eyesSVG = `
                        <ellipse cx="38" cy="48" rx="4" ry="5.5" fill="${cDark}" />
                        <ellipse cx="62" cy="48" rx="4" ry="5.5" fill="${cDark}" />
                        <circle cx="37" cy="46" r="1.8" fill="${cWhite}" />
                        <circle cx="61" cy="46" r="1.8" fill="${cWhite}" />
                    `;
                    mouthSVG = `<path d="M 44 57 Q 50 62 56 57" fill="none" stroke="${cDark}" stroke-width="2.5" stroke-linecap="round" />`;
                    armsSVG = `
                        <path d="M 22 55 Q 30 50 32 45" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <path d="M 78 55 Q 70 50 68 45" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                    `;
                    break;

                case 'pointing':
                default:
                    // Pointing right
                    eyesSVG = `
                        <ellipse cx="38" cy="48" rx="4.5" ry="6" fill="${cDark}" />
                        <ellipse cx="62" cy="48" rx="4.5" ry="6" fill="${cDark}" />
                        <circle cx="39.5" cy="46" r="1.8" fill="${cWhite}" />
                        <circle cx="63.5" cy="46" r="1.8" fill="${cWhite}" />
                    `;
                    mouthSVG = `<path d="M 45 58 Q 50 62 55 58" fill="none" stroke="${cDark}" stroke-width="2.5" stroke-linecap="round" />`;
                    armsSVG = `
                        <path d="M 22 55 Q 15 62 12 66" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <path d="M 78 55 L 96 55" fill="none" stroke="${cLavender}" stroke-width="4.5" stroke-linecap="round" />
                        <circle cx="96" cy="55" r="2.5" fill="${cLavender}" />
                    `;
                    break;
            }

            return `
                <svg viewBox="0 0 100 100" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="kiraGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="${cSky}" stop-opacity="0.4"/>
                            <stop offset="100%" stop-color="${cLavender}" stop-opacity="0"/>
                        </radialGradient>
                        <linearGradient id="kiraBody" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#FFFFFF"/>
                            <stop offset="50%" stop-color="#F1F0FF"/>
                            <stop offset="100%" stop-color="${cLavender}"/>
                        </linearGradient>
                    </defs>

                    <!-- Outer Soft Aura Glow -->
                    <circle cx="50" cy="52" r="42" fill="url(#kiraGlow)" />

                    <!-- Floating Antenna with Glowing Orb -->
                    <path d="M 50 25 Q 50 15 50 10" fill="none" stroke="${cLavender}" stroke-width="2.5" stroke-linecap="round" />
                    <circle cx="50" cy="9" r="5" fill="${cSky}" class="orb-glow" />
                    <circle cx="48.5" cy="7.5" r="1.5" fill="${cWhite}" />

                    <!-- Main Cute Droplet/Star Body -->
                    <path d="M 50 22 
                             C 68 22, 82 36, 80 56 
                             C 78 74, 65 84, 50 84 
                             C 35 84, 22 74, 20 56 
                             C 18 36, 32 22, 50 22 Z" 
                          fill="url(#kiraBody)" 
                          stroke="${cLavender}" 
                          stroke-width="1.5" />

                    <!-- Cheeks Blush -->
                    <ellipse cx="30" cy="54" rx="5" ry="3" fill="${cPink}" opacity="0.5" />
                    <ellipse cx="70" cy="54" rx="5" ry="3" fill="${cPink}" opacity="0.5" />

                    <!-- Arms -->
                    ${armsSVG}

                    <!-- Eyes & Mouth Expressions -->
                    ${eyesSVG}
                    ${mouthSVG}

                    <!-- Accessory (if any) -->
                    ${accessorySVG}
                </svg>
            `;
        }

        /* Update all mascot containers across the UI */
        function refreshAllKiraSVGs() {
            document.getElementById('hero-kira-svg').innerHTML = renderKiraSVG('greeting');
            document.getElementById('banner-kira-svg').innerHTML = renderKiraSVG('encouraging');
            document.getElementById('quiz-kira-svg').innerHTML = renderKiraSVG('thinking');
            document.getElementById('pomodoro-kira-svg').innerHTML = renderKiraSVG('explaining');
            document.getElementById('flashcards-kira-svg').innerHTML = renderKiraSVG('pointing');
            document.getElementById('planner-kira-svg').innerHTML = renderKiraSVG('encouraging');
            document.getElementById('notes-kira-svg').innerHTML = renderKiraSVG('explaining');
            document.getElementById('qa-hero-kira-svg').innerHTML = renderKiraSVG('greeting');
            document.getElementById('chat-header-kira-svg').innerHTML = renderKiraSVG('explaining');
            document.getElementById('widget-kira-svg').innerHTML = renderKiraSVG('greeting');
            document.getElementById('modal-kira-exercise-svg').innerHTML = renderKiraSVG('explaining');
        }

        /* ==========================================================================
           2. STATE MANAGEMENT & USER PROGRESS
           ========================================================================== */
        let state = {
            xp: 150,
            level: 1,
            activeTab: 'home',
            completedMissions: [],
            flashcards: [
                { front: "¿Qué es la Recuperación Activa (Active Recall)?", back: "Es la práctica de intentar recordar información activamente desde tu memoria sin mirar las notas." },
                { front: "¿En qué consiste la Técnica Pomodoro?", back: "Dividir el estudio en bloques concentrados de 25 minutos separados por descansos breves de 5 minutos." },
                { front: "¿Qué busca el Método Feynman?", back: "Explicar un concepto complejo utilizando palabras muy sencillas, como si le enseñaras a un niño." }
            ],
            currentCardIndex: 0,
            pomodoro: {
                timeLeft: 25 * 60,
                totalTime: 25 * 60,
                isRunning: false,
                interval: null,
                mode: 'work' // 'work' or 'break'
            },
            plannerTasks: [
                { id: 1, title: "Leer el resumen del Tema 1", done: true },
                { id: 2, title: "Crear 3 flashcards clave", done: false },
                { id: 3, title: "Explicar el tema en voz alta", done: false }
            ]
        };

        /* Add XP and Level up */
        function addXP(amount, reason = "") {
            state.xp += amount;
            const newLevel = Math.floor(state.xp / 100) + 1;
            
            if (newLevel > state.level) {
                state.level = newLevel;
                triggerKiraCelebration(`¡Felicidades! Has subido al Nivel ${state.level}. ¡Sigue así!`);
            } else if (reason) {
                showKiraTip(`¡+${amount} XP! ${reason}`);
            }

            document.getElementById('user-xp').innerText = `${state.xp} XP`;
            document.getElementById('user-level').innerText = state.level;
            updateMissionsUI();
        }

        /* ==========================================================================
           3. NAVIGATION & TABS SYSTEM
           ========================================================================== */
        function switchTab(tabId) {
            state.activeTab = tabId;

            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            
            // Remove active style from header buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-50', 'text-brand-purple');
                btn.classList.add('text-gray-600');
            });

            // Show selected tab
            const targetTab = document.getElementById(`tab-${tabId}`);
            if (targetTab) targetTab.classList.remove('hidden');

            // Highlight header button
            const activeNav = document.getElementById(`nav-${tabId}`);
            if (activeNav) {
                activeNav.classList.add('active', 'bg-indigo-50', 'text-brand-purple');
                activeNav.classList.remove('text-gray-600');
            }

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');

            // Update Kira Widget message per tab context
            updateKiraContextualWidget(tabId);
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        /* Contextual floating widget tips */
        function updateKiraContextualWidget(tabId) {
            const bubbleText = document.getElementById('kira-bubble-text');
            const widgetSVG = document.getElementById('widget-kira-svg');

            switch (tabId) {
                case 'home':
                    bubbleText.innerHTML = "¡Hola! Explora el Test de Métodos para descubrir tu estilo ideal o empieza un Pomodoro directo.";
                    widgetSVG.innerHTML = renderKiraSVG('greeting');
                    break;
                case 'test':
                    bubbleText.innerHTML = "Responde sinceramente a estas preguntas. ¡No hay respuestas correctas o incorrectas!";
                    widgetSVG.innerHTML = renderKiraSVG('thinking');
                    break;
                case 'library':
                    bubbleText.innerHTML = "Aquí encontrarás técnicas fundamentadas. Haz clic en cualquiera para probar un miniejercicio conmigo.";
                    widgetSVG.innerHTML = renderKiraSVG('explaining');
                    break;
                case 'tools':
                    bubbleText.innerHTML = "¡Usa mis herramientas! El temporizador y las tarjetas son perfectos para repasar rápido.";
                    widgetSVG.innerHTML = renderKiraSVG('pointing');
                    break;
                case 'kira':
                    bubbleText.innerHTML = "Selecciona una pregunta frecuente o escribe tu duda en el chat para ayudarte.";
                    widgetSVG.innerHTML = renderKiraSVG('encouraging');
                    break;
                case 'missions':
                    bubbleText.innerHTML = "¡Mira cuánta experiencia has acumulado! Completa actividades para subir de nivel.";
                    widgetSVG.innerHTML = renderKiraSVG('celebrating');
                    break;
            }
        }

        function toggleKiraBubble() {
            const bubble = document.getElementById('kira-bubble');
            bubble.classList.toggle('scale-0');
            bubble.classList.toggle('opacity-0');
        }

        function onKiraWidgetClick() {
            const bubble = document.getElementById('kira-bubble');
            if (bubble.classList.contains('scale-0') || bubble.classList.contains('opacity-0')) {
                bubble.classList.remove('scale-0', 'opacity-0');
            } else {
                switchTab('kira');
            }
        }

        function showKiraTip(text) {
            const bubbleText = document.getElementById('kira-bubble-text');
            bubbleText.innerHTML = text;
            const bubble = document.getElementById('kira-bubble');
            bubble.classList.remove('scale-0', 'opacity-0');
        }

        function triggerKiraCelebration(text) {
            document.getElementById('widget-kira-svg').innerHTML = renderKiraSVG('celebrating');
            showKiraTip(text);
            setTimeout(() => {
                document.getElementById('widget-kira-svg').innerHTML = renderKiraSVG('greeting');
            }, 6000);
        }

        /* ==========================================================================
           4. QUIZ / DIAGNOSTIC ENGINE
           ========================================================================== */
        const quizData = [
            {
                q: "1. ¿Qué suele ocurrir cuando te sientas a estudiar durante más de una hora?",
                options: [
                    { text: "Me distraigo con el teléfono o pierdo la concentración rápido.", trait: "pomodoro" },
                    { text: "Siento que leo muchas páginas pero luego no recuerdo los detalles.", trait: "recall" },
                    { text: "Se me acumula demasiado contenido y me cuesta organizarlo.", trait: "planner" },
                    { text: "Entiendo la teoría, pero me trabo cuando aplico ejercicios.", trait: "feynman" }
                ]
            },
            {
                q: "2. ¿Cómo compruebas que realmente te has aprendido un tema?",
                options: [
                    { text: "Releo mis apuntes varias veces hasta que me suenan familiares.", trait: "recall" },
                    { text: "Intento explicárselo a alguien más con mis propias palabras.", trait: "feynman" },
                    { text: "Hago tarjetas con preguntas o autoevaluaciones.", trait: "cards" },
                    { text: "Resuelvo ejercicios prácticos o exámenes pasados.", trait: "practice" }
                ]
            },
            {
                q: "3. ¿Cuál es tu mayor reto al preparar un examen importante?",
                options: [
                    { text: "Gestionar el tiempo y evitar dejar todo para la última noche.", trait: "pomodoro" },
                    { text: "Retener la información a largo plazo sin olvidarla a los dos días.", trait: "spaced" },
                    { text: "Estructurar temas muy largos y complejos.", trait: "maps" },
                    { text: "Saber por dónde empezar a estudiar.", trait: "planner" }
                ]
            },
            {
                q: "4. ¿Qué tipo de recurso te resulta más amigable y claro?",
                options: [
                    { text: "Esquemas visuales, mapas y diagramas de colores.", trait: "maps" },
                    { text: "Listas breves de tareas y bloques definidos de tiempo.", trait: "pomodoro" },
                    { text: "Preguntas tipo test y tarjetas de memorización.", trait: "cards" },
                    { text: "Explicaciones paso a paso con ejemplos cotidianos.", trait: "feynman" }
                ]
            }
        ];

        let quizCurrentStep = 0;
        let quizAnswers = [];

        function renderQuizStep() {
            const container = document.getElementById('quiz-questions-container');
            const step = quizData[quizCurrentStep];

            document.getElementById('quiz-step-indicator').innerText = `Pregunta ${quizCurrentStep + 1} de ${quizData.length}`;
            document.getElementById('quiz-progress-bar').style.width = `${((quizCurrentStep + 1) / quizData.length) * 100}%`;

            container.innerHTML = `
                <h3 class="font-bold text-gray-800 text-base sm:text-lg mb-4">${step.q}</h3>
                <div class="space-y-3">
                    ${step.options.map((opt, idx) => `
                        <button onclick="selectQuizOption('${opt.trait}')" class="w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-brand-purple hover:bg-purple-50/50 transition-all text-xs sm:text-sm font-medium text-gray-700 flex items-center justify-between group">
                            <span>${opt.text}</span>
                            <i class="fa-solid fa-chevron-right text-gray-300 group-hover:text-brand-purple transition-all"></i>
                        </button>
                    `).join('')}
                </div>
            `;
        }

        function selectQuizOption(trait) {
            quizAnswers.push(trait);
            quizCurrentStep++;

            if (quizCurrentStep < quizData.length) {
                renderQuizStep();
            } else {
                finishQuiz();
            }
        }

        function finishQuiz() {
            document.getElementById('quiz-questions-container').classList.add('hidden');
            document.getElementById('quiz-results-container').classList.remove('hidden');

            // Basic recommendation logic based on traits
            const recsList = document.getElementById('quiz-recommendations-list');
            recsList.innerHTML = `
                <div class="bg-purple-50 p-4 rounded-2xl border border-purple-100 space-y-2">
                    <div class="flex items-center gap-2 text-brand-purple font-bold text-xs">
                        <i class="fa-solid fa-stopwatch"></i> Técnica Pomodoro
                    </div>
                    <p class="text-xs text-gray-600">Ideal para mantener tu enfoque en bloques de 25 min sin agobiarte.</p>
                    <button onclick="switchTab('library'); openMethodDetail('pomodoro');" class="text-xs font-bold text-brand-purple hover:underline">Ver método →</button>
                </div>
                <div class="bg-sky-50 p-4 rounded-2xl border border-sky-100 space-y-2">
                    <div class="flex items-center gap-2 text-brand-sky font-bold text-xs">
                        <i class="fa-solid fa-brain"></i> Recuperación Activa
                    </div>
                    <p class="text-xs text-gray-600">Fortalece tus recuerdos mediante preguntas directas y flashcards.</p>
                    <button onclick="switchTab('library'); openMethodDetail('recall');" class="text-xs font-bold text-brand-sky hover:underline">Ver método →</button>
                </div>
            `;

            document.getElementById('quiz-kira-svg').innerHTML = renderKiraSVG('celebrating');
            addXP(30, "¡Test de hábitos completado!");
            checkMissionProgress('mission_test');
        }

        function resetQuiz() {
            quizCurrentStep = 0;
            quizAnswers = [];
            document.getElementById('quiz-results-container').classList.add('hidden');
            document.getElementById('quiz-questions-container').classList.remove('hidden');
            renderQuizStep();
        }

        /*
        /* ==========================================================================
           5. STUDY METHODS LIBRARY & INTERACTIVE EXERCISES
           ========================================================================== */
        const studyMethodsData = [
            {
                id: 'pomodoro',
                title: 'Técnica Pomodoro',
                category: 'Gestión de Tiempo',
                icon: 'fa-stopwatch',
                color: 'purple',
                what: 'Método de gestión del tiempo que divide el trabajo en intervalos de 25 minutos (llamados "pomodoros") separados por breves descansos de 5 minutos.',
                steps: [
                    'Elige la tarea que vas a realizar.',
                    'Ajusta el temporizador a 25 minutos.',
                    'Trabaja de forma concentrada hasta que suene la alarma.',
                    'Toma un descanso corto de 5 minutos.',
                    'Cada 4 pomodoros, toma un descanso más largo (15-30 min).'
                ],
                example: 'Si tienes que estudiar 2 capítulos de Biología, no intentes hacerlo de corrido. Haz 2 bloques de 25 min con 5 min de estiramiento en medio.',
                exercisePrompt: 'Prueba un mini-pomodoro de demostración de 10 segundos para sentir la transición.'
            },
            {
                id: 'recall',
                title: 'Recuperación Activa (Active Recall)',
                category: 'Memorización',
                icon: 'fa-brain',
                color: 'sky',
                what: 'Consiste en estimular activamente la memoria durante el proceso de aprendizaje al forzarte a recordar la respuesta sin mirar el material.',
                steps: [
                    'Lee una sección corta de tu libro o apuntes.',
                    'Cierra el cuaderno por completo.',
                    'Intenta escribir o decir en voz alta 3 ideas principales de memoria.',
                    'Abre el cuaderno y verifica qué omitiste.'
                ],
                example: 'En lugar de re-leer el tema de Historia 3 veces, léelo una vez y luego hazte preguntas sin mirar la hoja.',
                exercisePrompt: 'Ejercicio de memoria rápida: Lee estas 3 palabras [Manzana, Planeta, Fotosíntesis]. Haz clic en "Ocultar" e intentalas recordar.'
            },
            {
                id: 'feynman',
                title: 'Método Feynman',
                category: 'Comprensión',
                icon: 'fa-comments',
                color: 'emerald',
                what: 'Técnica de aprendizaje que consiste en explicar un concepto con tus propias palabras y un lenguaje tan simple que un niño de 10 años pueda entenderlo.',
                steps: [
                    'Selecciona el concepto difícil.',
                    'Escribe una explicación en una hoja sin usar tecnicismos.',
                    'Identifica las lagunas donde te trabas.',
                    'Vuelve a la fuente original para simplificar esa parte.'
                ],
                example: 'Para explicar "Gravedad", en lugar de hablar de curvatura espacio-temporal, di que es el "tirón invisible" que atrae los objetos hacia la Tierra.',
                exercisePrompt: 'Explica con tus palabras qué es la gravedad en un renglón.'
            },
            {
                id: 'spaced',
                title: 'Repetición Espaciada',
                category: 'Retención',
                icon: 'fa-calendar-days',
                color: 'amber',
                what: 'Estrategia de repaso en intervalos de tiempo cada vez mayores para combatir la curva del olvido.',
                steps: [
                    'Repasa el tema hoy (Día 1).',
                    'Vuelve a repasarlo en 2 días (Día 3).',
                    'Repásalo nuevamente en 1 semana (Día 10).',
                    'Realiza un último repaso en 1 mes.'
                ],
                example: 'Usar aplicaciones o mazos de flashcards donde las tarjetas difíciles vuelven mañana y las fáciles en 5 días.',
                exercisePrompt: 'Organiza tu calendario de repasos rápido.'
            },
            {
                id: 'maps',
                title: 'Mapas Conceptuales',
                category: 'Organización Visual',
                icon: 'fa-diagram-project',
                color: 'pink',
                what: 'Diagramas que representan relaciones entre conceptos organizados jerárquicamente.',
                steps: [
                    'Identifica el tema central en el medio.',
                    'Trae las ideas secundarias en ramas.',
                    'Conecta conceptos con palabras de enlace (ej: "produce", "causa").'
                ],
                example: 'Célula -> contiene -> Núcleo -> guarda -> ADN.',
                exercisePrompt: 'Identifica la palabra de enlace correcta.'
            },
            {
                id: 'practice',
                title: 'Práctica Mediante Ejercicios',
                category: 'Evaluación',
                icon: 'fa-pen-ruler',
                color: 'indigo',
                what: 'Resolver simulacros de exámen o problemas prácticos para habituar al cerebro a la resolución activa.',
                steps: [
                    'Consigue modelos de exámenes pasados.',
                    'Resuélvelos sin mirar la solución.',
                    'Analiza detenidamente tus errores.'
                ],
                example: 'Resolver 10 problemas de matemáticas por tu cuenta antes del examen.',
                exercisePrompt: 'Resuelve un miniproblema de lógica.'
            }
        ];

        function renderMethodsGrid() {
            const grid = document.getElementById('methods-grid');
            grid.innerHTML = studyMethodsData.map(m => `
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div class="space-y-3">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-purple flex items-center justify-center text-xl font-bold">
                            <i class="fa-solid ${m.icon}"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-brand-purple bg-purple-50 px-2.5 py-1 rounded-full">${m.category}</span>
                        <h3 class="font-bold text-gray-800 text-lg">${m.title}</h3>
                        <p class="text-xs text-gray-500 line-clamp-3">${m.what}</p>
                    </div>
                    <button onclick="openMethodDetail('${m.id}')" class="w-full py-2.5 bg-gray-50 hover:bg-brand-purple hover:text-white font-bold rounded-xl text-xs text-gray-700 transition-all text-center">
                        Explorar e Interactuar →
                    </button>
                </div>
            `).join('');
        }

        function openMethodDetail(methodId) {
            const method = studyMethodsData.find(m => m.id === methodId);
            if (!method) return;

            document.getElementById('modal-method-title').innerText = method.title;
            document.getElementById('modal-method-category').innerText = method.category;
            document.getElementById('modal-method-what').innerText = method.what;
            document.getElementById('modal-method-example').innerText = method.example;
            document.getElementById('modal-method-icon').innerHTML = `<i class="fa-solid ${method.icon}"></i>`;

            const stepsContainer = document.getElementById('modal-method-steps');
            stepsContainer.innerHTML = method.steps.map(s => `<li>${s}</li>`).join('');

            // Interactive Exercise Zone
            const zone = document.getElementById('modal-exercise-interactive-zone');
            if (method.id === 'recall') {
                zone.innerHTML = `
                    <div class="space-y-3 text-center">
                        <p id="recall-words" class="font-bold text-sm text-brand-purple bg-purple-100 p-2 rounded-xl">Manzana • Planeta • Fotosíntesis</p>
                        <button onclick="toggleRecallHide()" id="recall-btn" class="px-3 py-1.5 bg-brand-purple text-white rounded-lg text-xs font-bold">
                            Ocultar Palabras
                        </button>
                        <div id="recall-input-box" class="hidden space-y-2 pt-2">
                            <input type="text" id="recall-user-input" placeholder="Escribe las 3 palabras separadas por coma..." class="w-full text-xs border p-2 rounded-lg">
                            <button onclick="checkRecallAnswer()" class="px-3 py-1 bg-brand-mint text-white rounded-lg text-xs font-bold">Verificar</button>
                        </div>
                    </div>
                `;
            } else if (method.id === 'pomodoro') {
                zone.innerHTML = `
                    <div class="text-center space-y-2">
                        <p class="text-xs">Haz clic abajo para iniciar un mini-temporizador de prueba de 5 segundos con Kira.</p>
                        <button onclick="startMiniPomodoroDemo()" class="px-4 py-2 bg-brand-purple text-white rounded-xl font-bold text-xs">
                            Probar Mini-Timer
                        </button>
                        <div id="mini-pomo-timer" class="font-mono font-bold text-lg text-brand-purple hidden">00:05</div>
                    </div>
                `;
            } else {
                zone.innerHTML = `
                    <div class="text-center space-y-2">
                        <p class="text-xs">${method.exercisePrompt}</p>
                        <button onclick="triggerKiraCelebration('¡Excelente intento! La práctica constante hace al maestro.')" class="px-4 py-2 bg-brand-purple text-white rounded-xl font-bold text-xs">
                            Completar Ejercicio
                        </button>
                    </div>
                `;
            }

            document.getElementById('method-modal').classList.remove('hidden');
        }

        function closeMethodModal() {
            document.getElementById('method-modal').classList.add('hidden');
        }

        /* Interactive Recall Exercise inside Modal */
        function toggleRecallHide() {
            const words = document.getElementById('recall-words');
            const btn = document.getElementById('recall-btn');
            const inputBox = document.getElementById('recall-input-box');

            if (words.classList.contains('hidden')) {
                words.classList.remove('hidden');
                btn.innerText = "Ocultar Palabras";
                inputBox.classList.add('hidden');
            } else {
                words.classList.add('hidden');
                btn.innerText = "Mostrar Palabras";
                inputBox.classList.remove('hidden');
            }
        }

        function checkRecallAnswer() {
            const val = document.getElementById('recall-user-input').value.toLowerCase();
            if (val.includes('manzana') && val.includes('planeta') && val.includes('fotosíntesis')) {
                alert('¡Increíble memoria! Has recordado las 3 palabras correctamente.');
                addXP(20, "¡Miniejercicio de memoria completado!");
            } else {
                alert('¡Casi! Revisa las palabras e inténtalo de nuevo.');
            }
        }

        function startMiniPomodoroDemo() {
            const timerEl = document.getElementById('mini-pomo-timer');
            timerEl.classList.remove('hidden');
            let count = 5;
            timerEl.innerText = `00:0${count}`;
            
            const interval = setInterval(() => {
                count--;
                timerEl.innerText = `00:0${count}`;
                if (count <= 0) {
                    clearInterval(interval);
                    timerEl.innerText = "¡Tiempo! ¡Descanso!";
                    triggerKiraCelebration("¡Así funciona el Pomodoro! Alternar trabajo y descanso.");
                }
            }, 1000);
        }

        /*
        /* ==========================================================================
           6. TOOLS SUITE (Pomodoro, Flashcards, Planner, Notes)
           ========================================================================== */
        
        /* Tool Sub-tab Selection */
        function selectToolTab(tool) {
            document.querySelectorAll('.tool-pane').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.tool-subtab').forEach(btn => {
                btn.classList.remove('active', 'bg-brand-purple', 'text-white');
                btn.classList.add('text-gray-600');
            });

            document.getElementById(`tool-content-${tool}`).classList.remove('hidden');
            const activeBtn = document.getElementById(`tool-btn-${tool}`);
            if (activeBtn) {
                activeBtn.classList.add('active', 'bg-brand-purple', 'text-white');
                activeBtn.classList.remove('text-gray-600');
            }
        }

        /* --- POMODORO TIMER LOGIC --- */
        function updateTimerDisplay() {
            const mins = Math.floor(state.pomodoro.timeLeft / 60);
            const secs = state.pomodoro.timeLeft % 60;
            document.getElementById('timer-display').innerText = 
                `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function toggleTimer() {
            const btn = document.getElementById('timer-start-btn');
            if (state.pomodoro.isRunning) {
                // Pause
                clearInterval(state.pomodoro.interval);
                state.pomodoro.isRunning = false;
                btn.innerHTML = `<i class="fa-solid fa-play"></i> Reanudar`;
                document.getElementById('pomodoro-kira-msg').innerText = '"Temporizador en pausa. Tómate un respiro y volvemos cuando quieras."';
            } else {
                // Start
                state.pomodoro.isRunning = true;
                btn.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar`;
                document.getElementById('pomodoro-kira-msg').innerText = '"¡Excelente! Modulo de concentración activado. ¡A estudiar!"';
                
                state.pomodoro.interval = setInterval(() => {
                    if (state.pomodoro.timeLeft > 0) {
                        state.pomodoro.timeLeft--;
                        updateTimerDisplay();
                    } else {
                        clearInterval(state.pomodoro.interval);
                        state.pomodoro.isRunning = false;
                        btn.innerHTML = `<i class="fa-solid fa-play"></i> Iniciar`;
                        
                        if (state.pomodoro.mode === 'work') {
                            triggerKiraCelebration("¡Sesión Pomodoro completada! Te has ganado un descanso de 5 minutos.");
                            addXP(50, "¡Sesión Pomodoro completada!");
                            checkMissionProgress('mission_pomo');
                            setPomodoroMode('break');
                        } else {
                            triggerKiraCelebration("¡Descanso terminado! ¿Listos para otro bloque?");
                            setPomodoroMode('work');
                        }
                    }
                }, 1000);
            }
        }

        function resetTimer() {
            clearInterval(state.pomodoro.interval);
            state.pomodoro.isRunning = false;
            state.pomodoro.timeLeft = state.pomodoro.totalTime;
            document.getElementById('timer-start-btn').innerHTML = `<i class="fa-solid fa-play"></i> Iniciar`;
            updateTimerDisplay();
        }

        function setPomodoroMode(mode) {
            state.pomodoro.mode = mode;
            document.getElementById('pomo-mode-work').classList.toggle('bg-white', mode === 'work');
            document.getElementById('pomo-mode-work').classList.toggle('shadow', mode === 'work');
            document.getElementById('pomo-mode-work').classList.toggle('text-brand-purple', mode === 'work');

            document.getElementById('pomo-mode-break').classList.toggle('bg-white', mode === 'break');
            document.getElementById('pomo-mode-break').classList.toggle('shadow', mode === 'break');
            document.getElementById('pomo-mode-break').classList.toggle('text-brand-purple', mode === 'break');

            if (mode === 'work') {
                state.pomodoro.totalTime = 25 * 60;
            } else {
                state.pomodoro.totalTime = 5 * 60;
            }
            resetTimer();
        }

        function startPomodoroDirect(mins) {
            selectToolTab('pomodoro');
            state.pomodoro.totalTime = mins * 60;
            state.pomodoro.timeLeft = mins * 60;
            resetTimer();
            toggleTimer();
        }

        /* --- FLASHCARDS LOGIC --- */
        function renderCurrentCard() {
            const cardCount = state.flashcards.length;
            document.getElementById('cards-count-badge').innerText = `${cardCount} Tarjetas`;
            
            if (cardCount === 0) {
                document.getElementById('card-front-text').innerText = "No hay tarjetas guardadas.";
                document.getElementById('card-back-text').innerText = "Haz clic en 'Nueva Tarjeta' para agregar una.";
                document.getElementById('card-index-indicator').innerText = `0 / 0`;
                return;
            }

            const card = state.flashcards[state.currentCardIndex];
            document.getElementById('card-front-text').innerText = card.front;
            document.getElementById('card-back-text').innerText = card.back;
            document.getElementById('card-index-indicator').innerText = `${state.currentCardIndex + 1} / ${cardCount}`;

            // Reset flip state
            document.getElementById('card-inner-element').classList.remove('rotate-y-180');
        }

        function flipCurrentCard() {
            document.getElementById('card-inner-element').classList.toggle('rotate-y-180');
        }

        function nextCard() {
            if (state.flashcards.length === 0) return;
            state.currentCardIndex = (state.currentCardIndex + 1) % state.flashcards.length;
            renderCurrentCard();
        }

        function prevCard() {
            if (state.flashcards.length === 0) return;
            state.currentCardIndex = (state.currentCardIndex - 1 + state.flashcards.length) % state.flashcards.length;
            renderCurrentCard();
        }

        function openNewCardModal() {
            document.getElementById('new-card-modal').classList.remove('hidden');
        }

        function closeNewCardModal() {
            document.getElementById('new-card-modal').classList.add('hidden');
        }

        function saveNewCard() {
            const front = document.getElementById('new-card-front').value.trim();
            const back = document.getElementById('new-card-back').value.trim();

            if (!front || !back) {
                alert("Por favor completa tanto la pregunta como la respuesta.");
                return;
            }

            state.flashcards.push({ front, back });
            state.currentCardIndex = state.flashcards.length - 1;
            
            document.getElementById('new-card-front').value = '';
            document.getElementById('new-card-back').value = '';
            closeNewCardModal();
            renderCurrentCard();
            
            addXP(25, "¡Nueva tarjeta creada!");
            checkMissionProgress('mission_card');
        }

        /* --- PLANNER LOGIC --- */
        function renderPlannerTasks() {
            const list = document.getElementById('planner-tasks-list');
            list.innerHTML = state.plannerTasks.map(t => `
                <div class="flex items-center justify-between p-3 rounded-xl border ${t.done ? 'bg-gray-50 border-gray-200 opacity-65' : 'bg-white border-gray-200'}">
                    <div class="flex items-center gap-3">
                        <input type="checkbox" ${t.done ? 'checked' : ''} onchange="togglePlannerTask(${t.id})" class="w-4 h-4 text-brand-purple rounded focus:ring-brand-purple cursor-pointer">
                        <span class="text-xs font-medium ${t.done ? 'line-through text-gray-400' : 'text-gray-700'}">${t.title}</span>
                    </div>
                    <button onclick="deletePlannerTask(${t.id})" class="text-gray-300 hover:text-red-500 text-xs">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }

        function addPlannerTask() {
            const input = document.getElementById('planner-input');
            const title = input.value.trim();
            if (!title) return;

            state.plannerTasks.push({ id: Date.now(), title, done: false });
            input.value = '';
            renderPlannerTasks();
            addXP(10, "¡Tarea agregada a tu plan!");
        }

        function togglePlannerTask(id) {
            const task = state.plannerTasks.find(t => t.id === id);
            if (task) {
                task.done = !task.done;
                renderPlannerTasks();
                if (task.done) {
                    addXP(15, "¡Paso de tarea completado!");
                }
            }
        }

        function deletePlannerTask(id) {
            state.plannerTasks = state.plannerTasks.filter(t => t.id !== id);
            renderPlannerTasks();
        }

        /* --- NOTES LOGIC --- */
        function saveNotes() {
            const title = document.getElementById('note-title').value.trim();
            if (!title) {
                alert("Asigna un título a tus notas antes de guardar.");
                return;
            }
            triggerKiraCelebration("¡Tus notas guiadas han sido guardadas con éxito!");
            addXP(20, "¡Estructuraste tus notas!");
        }

        function clearNotes() {
            document.getElementById('note-title').value = '';
            document.getElementById('note-keywords').value = '';
            document.getElementById('note-details').value = '';
            document.getElementById('note-summary').value = '';
        }

        /*
        ==========================================================================
           7. QA ASSISTANT & CHAT SYSTEM (Prepared for future backend AI API)
           ========================================================================== */
        const predefinedQA = [
            {
                q: "¿Cómo evito distraerme con el teléfono?",
                a: "Prueba la regla de 'Out of Sight'. Deja el teléfono en otra habitación durante tu bloque Pomodoro. Si lo necesitas para estudiar, activa el modo 'No Molestar'.",
                expression: 'explaining'
            },
            {
                q: "¿Qué hago si me siento abrumado antes de un examen?",
                a: "Inhala durante 4 segundos y exhala despacio. Luego, toma el tema grande y usa el Planificador para dividirlo en 3 tareas diminutas. Empieza solo por la primera.",
                expression: 'encouraging'
            },
            {
                q: "¿Es mejor estudiar de noche o de mañana?",
                a: "Depende de tu ritmo circadiano. Lo más importante no es la hora, sino estudiar cuando tu mente esté descansada y evitar restar horas de sueño.",
                expression: 'thinking'
            },
            {
                q: "¿Cómo sé si ya me aprendí bien un tema?",
                a: "¡Usa el Método Feynman! Intenta explicárselo a alguien en voz alta sin mirar apuntes. Si te trabas en algún punto, ese es el lugar exacto que debes repasar.",
                expression: 'pointing'
            }
        ];

        function renderQAButtons() {
            const container = document.getElementById('faq-buttons-container');
            container.innerHTML = predefinedQA.map((qa, idx) => `
                <button onclick="askPredefinedQA(${idx})" class="w-full text-left p-3 rounded-2xl bg-white border border-gray-200 hover:border-brand-purple hover:bg-purple-50/50 transition-all text-xs font-medium text-gray-700">
                    <i class="fa-solid fa-circle-question text-brand-purple mr-1.5"></i> ${qa.q}
                </button>
            `).join('');
        }

        function askPredefinedQA(index) {
            const qa = predefinedQA[index];
            appendChatMessage('user', qa.q);
            
            setTimeout(() => {
                appendChatMessage('kira', qa.a, qa.expression);
            }, 400);
        }

        function appendChatMessage(sender, text, expression = 'greeting') {
            const chatMessages = document.getElementById('chat-messages');
            
            if (sender === 'user') {
                chatMessages.innerHTML += `
                    <div class="flex justify-end">
                        <div class="bg-brand-purple text-white p-3.5 rounded-2xl rounded-tr-none text-xs max-w-xs sm:max-w-md shadow-sm">
                            ${text}
                        </div>
                    </div>
                `;
            } else {
                chatMessages.innerHTML += `
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-50 p-1 shrink-0">
                            ${renderKiraSVG(expression)}
                        </div>
                        <div class="bg-indigo-50/80 text-gray-800 p-3.5 rounded-2xl rounded-tl-none text-xs max-w-xs sm:max-w-md border border-indigo-100 shadow-sm leading-relaxed">
                            ${text}
                        </div>
                    </div>
                `;
            }
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        /* Handler for user input chat (AI Ready Function) */
        function handleUserChatSubmit(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            if (!text) return;

            appendChatMessage('user', text);
            input.value = '';

            // Simulated intelligent response (Ready to hook `askKiraAI(prompt)` backend)
            setTimeout(() => {
                askKiraAI(text).then(reply => {
                    appendChatMessage('kira', reply.text, reply.expression);
                });
            }, 600);
        }

        /**
         * Modular function for backend AI integration.
         * In the future, this function can send `prompt` to an API endpoint safely.
         */
        async function askKiraAI(prompt) {
            const lower = prompt.toLowerCase();
            
            if (lower.includes('memoria') || lower.includes('olvido') || lower.includes('recordar')) {
                return {
                    text: "Para memorizar mejor, no releas pasivamente. Utiliza la **Recuperación Activa** creando flashcards o autoevaluándote.",
                    expression: 'pointing'
                };
            } else if (lower.includes('pomodoro') || lower.includes('tiempo') || lower.includes('reloj')) {
                return {
                    text: "El tiempo es tu aliado. Prueba trabajar en bloques de 25 min con la herramienta Pomodoro de nuestra pestaña Herramientas.",
                    expression: 'explaining'
                };
            } else {
                return {
                    text: `¡Esa es una gran pregunta sobre "${prompt}"! Para aprenderlo mejor, intenta descomponerlo en ideas principales en el bloc de Notas Guiadas.`,
                    expression: 'encouraging'
                };
            }
        }

        /*
        /* ==========================================================================
           8. GAMIFIED MISSIONS & REAL FEEDBACK ENGINE
           ========================================================================== */
        const missionsData = [
            {
                id: 'mission_test',
                title: 'Descubre tu Estilo',
                desc: 'Completa el Test de Métodos de Estudio para conocer tu perfil.',
                reward: 30,
                icon: 'fa-clipboard-question',
                actionTab: 'test'
            },
            {
                id: 'mission_pomo',
                title: 'Enfoque Total',
                desc: 'Completa tu primera sesión Pomodoro de 15 o 25 minutos.',
                reward: 50,
                icon: 'fa-stopwatch',
                actionTab: 'tools'
            },
            {
                id: 'mission_card',
                title: 'Creador de Flashcards',
                desc: 'Agrega al menos una tarjeta nueva a tu mazo de estudio.',
                reward: 25,
                icon: 'fa-layer-group',
                actionTab: 'tools'
            }
        ];

        function updateMissionsUI() {
            const grid = document.getElementById('missions-grid');
            grid.innerHTML = missionsData.map(m => {
                const isCompleted = state.completedMissions.includes(m.id);
                return `
                    <div class="bg-white p-5 rounded-2xl border ${isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-gray-100'} shadow-sm flex flex-col justify-between space-y-3">
                        <div class="flex items-start justify-between">
                            <div class="w-10 h-10 rounded-xl ${isCompleted ? 'bg-emerald-100 text-brand-mint' : 'bg-indigo-50 text-brand-purple'} flex items-center justify-center font-bold">
                                <i class="fa-solid ${m.icon}"></i>
                            </div>
                            <span class="text-xs font-extrabold ${isCompleted ? 'text-brand-mint bg-emerald-100' : 'text-amber-600 bg-amber-50'} px-2.5 py-1 rounded-full">
                                ${isCompleted ? 'Completado ✓' : `+${m.reward} XP`}
                            </span>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 text-sm">${m.title}</h4>
                            <p class="text-xs text-gray-500 mt-1">${m.desc}</p>
                        </div>
                        ${!isCompleted ? `
                            <button onclick="switchTab('${m.actionTab}')" class="w-full py-2 bg-indigo-50 hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-xl text-xs transition-all">
                                Ir a realizar →
                            </button>
                        ` : `
                            <div class="text-xs font-semibold text-brand-mint flex items-center gap-1">
                                <i class="fa-solid fa-circle-check"></i> ¡Misión registrada!
                            </div>
                        `}
                    </div>
                `;
            }).join('');

            // Update level title in missions screen
            document.getElementById('missions-level-title').innerText = `Nivel ${state.level} - ${getLevelTitle(state.level)}`;
        }

        function getLevelTitle(level) {
            if (level === 1) return "Explorador";
            if (level === 2) return "Aprendiz Constante";
            if (level === 3) return "Estratega del Estudio";
            return "Maestro del Aprendizaje";
        }

        function checkMissionProgress(missionId) {
            if (!state.completedMissions.includes(missionId)) {
                state.completedMissions.push(missionId);
                const mission = missionsData.find(m => m.id === missionId);
                if (mission) {
                    triggerKiraCelebration(`¡Misión completada: "${mission.title}"! Ganaste +${mission.reward} XP.`);
                }
                updateMissionsUI();

                // Update home daily goal progress
                document.getElementById('daily-mission-progress').style.width = '100%';
            }
        }

        /* ==========================================================================
           9. INITIALIZATION ON WINDOW LOAD
           ========================================================================== */
        window.onload = function() {
            refreshAllKiraSVGs();
            renderQuizStep();
            renderMethodsGrid();
            renderCurrentCard();
            renderPlannerTasks();
            renderQAButtons();
            updateMissionsUI();
            updateTimerDisplay();

            // Initial Welcome Message from Kira
            setTimeout(() => {
                showKiraTip("¡Hola! Soy Kira. Explora las secciones o haz el test para comenzar tu aventura.");
            }, 800);
        };