const wordList = [
    {
        word: "guitarra",
        hint: "Um instrumento musical com cordas."
    },
    {
        word: "oxigênio",
        hint: "Um gás incolor e inodoro essencial para a vida."
    },
    {
        word: "montanha",
        hint: "Uma grande elevação natural da superfície da Terra."
    },
    {
        word: "pintura",
        hint: "Uma forma de arte que usa cores em uma superfície para criar imagens ou expressão."
    },
    {
        word: "astronomia",
        hint: "O estudo científico de objetos e fenômenos celestes."
    },
    {
        word: "futebol",
        hint: "Um esporte popular jogado com uma bola esférica."
    },
    {
        word: "chocolate",
        hint: "Um doce feito de grãos de cacau."
    },
    {
        word: "borboleta",
        hint: "Um inseto com asas coloridas e corpo delgado."
    },
    {
        word: "história",
        hint: "O estudo de eventos passados e da civilização humana."
    },
    {
        word: "pizza",
        hint: "Um prato salgado que consiste em uma base redonda e achatada com coberturas."
    },
    {
        word: "jazz",
        hint: "Um gênero de música caracterizado pela improvisação e sincopação."
    },
    {
        word: "câmera",
        hint: "Um dispositivo usado para capturar e gravar imagens ou vídeos."
    },
    {
        word: "diamante",
        hint: "Uma pedra preciosa conhecida por seu brilho e dureza."
    },
    {
        word: "aventura",
        hint: "Uma experiência emocionante ou ousada."
    },
    {
        word: "ciência",
        hint: "O estudo sistemático da estrutura e comportamento do mundo físico e natural."
    },
    {
        word: "bicicleta",
        hint: "Um veículo movido por força humana com duas rodas."
    },
    {
        word: "pôr do sol",
        hint: "O desaparecimento diário do sol abaixo do horizonte."
    },
    {
        word: "café",
        hint: "Uma bebida popular com cafeína feita de grãos de café torrados."
    },
    {
        word: "dança",
        hint: "Um movimento rítmico do corpo, muitas vezes realizado com música."
    },
    {
        word: "galáxia",
        hint: "Um vasto sistema de estrelas, gás e poeira mantidos juntos pela gravidade."
    },
    {
        word: "orquestra",
        hint: "Um grande conjunto de músicos tocando vários instrumentos."
    },
    {
        word: "vulcão",
        hint: "Uma montanha ou colina com uma abertura através da qual lava, fragmentos de rocha, vapor quente e gás são ejetados."
    },
    {
        word: "romance",
        hint: "Uma obra longa de ficção, tipicamente com um enredo complexo e personagens."
    },
    {
        word: "escultura",
        hint: "Uma forma de arte tridimensional criada moldando ou combinando materiais."
    },
    {
        word: "sinfonia",
        hint: "Uma longa composição musical para orquestra completa, tipicamente em vários movimentos."
    },
    {
        word: "arquitetura",
        hint: "A arte e a ciência de projetar e construir edifícios."
    },
    {
        word: "balé",
        hint: "Uma forma de dança clássica caracterizada por movimentos precisos e graciosos."
    },
    {
        word: "astronauta",
        hint: "Uma pessoa treinada para viajar e trabalhar no espaço."
    },
    {
        word: "cachoeira",
        hint: "Uma queda de água caindo de uma altura."
    },
    {
        word: "tecnologia",
        hint: "A aplicação do conhecimento científico para fins práticos."
    },
    {
        word: "arco-íris",
        hint: "Um fenômeno meteorológico causado pela reflexão, refração e dispersão da luz."
    },
    {
        word: "universo",
        hint: "Toda a matéria, espaço e tempo existentes como um todo."
    },
    {
        word: "piano",
        hint: "Um instrumento musical tocado ao pressionar teclas que fazem martelos baterem em cordas."
    },
    {
        word: "férias",
        hint: "Um período de tempo dedicado ao prazer, descanso ou relaxamento."
    },
    {
        word: "floresta tropical",
        hint: "Uma floresta densa caracterizada por alta pluviosidade e biodiversidade."
    },
    {
        word: "teatro",
        hint: "Um edifício ou área ao ar livre onde peças, filmes ou outras performances são encenadas."
    },
    {
        word: "telefone",
        hint: "Um dispositivo usado para transmitir som a longas distâncias."
    },
    {
        word: "linguagem",
        hint: "Um sistema de comunicação composto por palavras, gestos e sintaxe."
    },
    {
        word: "deserto",
        hint: "Uma terra árida ou estéril com pouca ou nenhuma precipitação."
    },
    {
        word: "girassol",
        hint: "Uma planta alta com uma grande cabeça de flor amarela."
    },
    {
        word: "fantasia",
        hint: "Um gênero de ficção imaginativa envolvendo magia e elementos sobrenaturais."
    },
    {
        word: "telescópio",
        hint: "Um instrumento óptico usado para ver objetos distantes no espaço."
    },
    {
        word: "brisa",
        hint: "Um vento suave."
    },
    {
        word: "oásis",
        hint: "Um ponto fértil no deserto onde se encontra água."
    },
    {
        word: "fotografia",
        hint: "A arte, processo ou prática de criar imagens registrando luz ou outras radiações eletromagnéticas."
    },
    {
        word: "safári",
        hint: "Uma expedição ou jornada, tipicamente para observar a vida selvagem em seu habitat natural."
    },
    {
        word: "planeta",
        hint: "Um corpo celeste que orbita uma estrela e não produz luz própria."
    },
    {
        word: "rio",
        hint: "Um grande fluxo natural de água que flui em um canal para o mar, um lago ou outro fluxo."
    },
    {
        word: "tropical",
        hint: "Relativo ou situado na região entre o Trópico de Câncer e o Trópico de Capricórnio."
    },
    {
        word: "misterioso",
        hint: "Difícil ou impossível de entender, explicar ou identificar."
    },
    {
        word: "enigma",
        hint: "Algo que é misterioso, intrigante ou difícil de entender."
    },
    {
        word: "paradoxo",
        hint: "Uma declaração ou situação que se contradiz ou desafia a intuição."
    },
    {
        word: "quebra-cabeça",
        hint: "Um jogo, brinquedo ou problema projetado para testar a engenhosidade ou conhecimento."
    },
    {
        word: "sussurrar",
        hint: "Falar muito suavemente ou discretamente, muitas vezes de maneira secreta."
    },
    {
        word: "sombra",
        hint: "Uma área ou forma escura produzida por um objeto bloqueando a luz."
    },
    {
        word: "segredo",
        hint: "Algo mantido oculto ou desconhecido para outros."
    },
    {
        word: "curiosidade",
        hint: "Um forte desejo de saber ou aprender algo."
    },
    {
        word: "imprevisível",
        hint: "Não pode ser previsto ou conhecido com antecedência; incerto."
    },
    {
        word: "obfuscate",
        hint: "Confundir ou desorientar alguém; tornar algo obscuro ou difícil de entender."
    },
    {
        word: "revelar",
        hint: "Tornar conhecido ou divulgar algo anteriormente secreto ou desconhecido."
    },
    {
        word: "ilusão",
        hint: "Uma percepção ou crença falsa; uma aparência ou impressão enganosa."
    },
    {
        word: "luz da lua",
        hint: "A luz da lua."
    },
    {
        word: "vibrante",
        hint: "Cheio de energia, brilho e vida."
    },
    {
        word: "nostalgia",
        hint: "Um anseio sentimental ou afeto saudoso pelo passado."
    },
    {
        word: "brilhante",
        hint: "Excepcionalmente inteligente, talentoso ou impressionante."
    }
];
