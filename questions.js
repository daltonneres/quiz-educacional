const questions = {
  geral: {
    easy: [
      {question: "Qual é a cor do céu?", options: ["Azul","Verde","Vermelho","Amarelo"], answer: "Azul"},
      {question: "Quantos dias tem uma semana?", options: ["5","6","7","8"], answer: "7"},
      {question: "Qual estação vem depois da primavera?", options: ["Verão","Outono","Inverno","Primavera"], answer: "Verão"},
      {question: "Qual é o maior planeta do Sistema Solar?", options: ["Terra","Marte","Júpiter","Saturno"], answer: "Júpiter"},
      {question: "Quantas letras tem o alfabeto?", options: ["24","25","26","27"], answer: "26"},
      {question: "Qual é o animal símbolo da Austrália?", options: ["Canguru","Leão","Elefante","Urso"], answer: "Canguru"},
      {question: "Qual fruta é conhecida como 'maçã do amor'?", options: ["Maçã","Tomate","Morango","Cereja"], answer: "Maçã"},
      {question: "Quantos continentes existem no mundo?", options: ["5","6","7","8"], answer: "7"},
      {question: "Qual é o oceano mais profundo?", options: ["Atlântico","Índico","Pacífico","Ártico"], answer: "Pacífico"},
      {question: "Em que país fica a Torre Eiffel?", options: ["Itália","França","Espanha","Alemanha"], answer: "França"}
    ],
    medium: [
      {question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis","José de Alencar","Clarice Lispector","Graciliano Ramos"], answer: "Machado de Assis"},
      {question: "Qual é a capital do Canadá?", options: ["Toronto","Montreal","Ottawa","Vancouver"], answer: "Ottawa"},
      {question: "Qual é o símbolo químico do ouro?", options: ["Au","Ag","Fe","G"], answer: "Au"},
      {question: "Quem pintou 'Guernica'?", options: ["Picasso","Van Gogh","Leonardo","Monet"], answer: "Picasso"},
      {question: "Qual é a língua mais falada no mundo?", options: ["Inglês","Mandarim","Espanhol","Hindi"], answer: "Mandarim"},
      {question: "Em que ano o homem pisou na Lua?", options: ["1965","1969","1971","1963"], answer: "1969"},
      {question: "Qual país tem a maior população do mundo?", options: ["Índia","EUA","China","Rússia"], answer: "China"},
      {question: "Quem escreveu 'O Pequeno Príncipe'?", options: ["Saint-Exupéry","J.K. Rowling","C.S. Lewis","Mark Twain"], answer: "Saint-Exupéry"},
      {question: "Qual é o país do samba e do carnaval?", options: ["Argentina","Brasil","Portugal","México"], answer: "Brasil"},
      {question: "Qual é o rio mais longo do mundo?", options: ["Nilo","Amazonas","Mississippi","Yangtzé"], answer: "Nilo"}
    ],
    hard: [
      {question: "Em que ano começou a Segunda Guerra Mundial?", options: ["1939","1941","1914","1945"], answer: "1939"},
      {question: "Quem foi o primeiro imperador do Japão?", options: ["Jimmu","Meiji","Hirohito","Akihito"], answer: "Jimmu"},
      {question: "Qual a fórmula molecular da água?", options: ["H2O","CO2","O2","NaCl"], answer: "H2O"},
      {question: "Qual tratado encerrou a Primeira Guerra Mundial?", options: ["Versalhes","Tordesilhas","Paris","Ghent"], answer: "Versalhes"},
      {question: "Qual é o país mais antigo do mundo?", options: ["Egito","China","Irã","Japão"], answer: "Irã"},
      {question: "Quem desenvolveu a teoria da relatividade?", options: ["Newton","Einstein","Galileu","Bohr"], answer: "Einstein"},
      {question: "Em que ano ocorreu a Revolução Francesa?", options: ["1789","1776","1812","1804"], answer: "1789"},
      {question: "Qual filósofo disse 'Penso, logo existo'?", options: ["Descartes","Platão","Aristóteles","Kant"], answer: "Descartes"},
      {question: "Qual foi a civilização que construiu Machu Picchu?", options: ["Astecas","Maias","Incas","Egípcios"], answer: "Incas"},
      {question: "Qual é o elemento químico com número atômico 79?", options: ["Ouro","Prata","Platina","Cobre"], answer: "Ouro"}
    ]
  },

  matematica: {
    easy: [
      {question: "Quanto é 5 + 3?", options: ["7","8","9","6"], answer: "8"},
      {question: "Quanto é 10 - 4?", options: ["6","7","5","4"], answer: "6"},
      {question: "Quanto é 3 x 4?", options: ["12","11","13","14"], answer: "12"},
      {question: "Quanto é 20 ÷ 4?", options: ["4","5","6","8"], answer: "5"},
      {question: "Qual é o valor de 2²?", options: ["2","4","8","6"], answer: "4"},
      {question: "Quanto é 15 + 5?", options: ["20","19","21","22"], answer: "20"},
      {question: "Quanto é 9 - 3?", options: ["5","6","7","8"], answer: "6"},
      {question: "Quanto é 6 x 2?", options: ["10","12","14","8"], answer: "12"},
      {question: "Quanto é 18 ÷ 3?", options: ["6","5","7","4"], answer: "6"},
      {question: "Qual é o valor de 3³?", options: ["9","27","18","21"], answer: "27"}
    ],
    medium: [
      {question: "Quanto é 12 x 8?", options: ["96","108","98","86"], answer: "96"},
      {question: "Qual é a raiz quadrada de 144?", options: ["12","14","16","10"], answer: "12"},
      {question: "Resolva: 25 + 36", options: ["61","60","62","63"], answer: "61"},
      {question: "Quanto é 81 ÷ 9?", options: ["9","8","10","7"], answer: "9"},
      {question: "Qual é 15% de 200?", options: ["25","30","35","40"], answer: "30"},
      {question: "Quanto é 7²?", options: ["42","49","36","56"], answer: "49"},
      {question: "Resolva: 14 x 6", options: ["84","86","80","76"], answer: "84"},
      {question: "Quanto é 120 ÷ 5?", options: ["20","24","25","22"], answer: "24"},
      {question: "Resolva: 50 + 75", options: ["125","120","130","135"], answer: "125"},
      {question: "Quanto é 9³?", options: ["729","512","656","700"], answer: "729"}
    ],
    hard: [
      {question: "Qual é a raiz cúbica de 512?", options: ["8","6","7","9"], answer: "8"},
      {question: "Resolva: 2x + 5 = 15, x = ?", options: ["4","5","6","7"], answer: "5"},
      {question: "Qual é o valor de π (aprox.)?", options: ["3,14","3,15","3,13","3,16"], answer: "3,14"},
      {question: "Resolva: 5² + 12² = ?", options: ["169","144","121","196"], answer: "169"},
      {question: "Quanto é 7! (fatorial)?", options: ["5040","720","120","4032"], answer: "5040"},
      {question: "Resolva: √625", options: ["25","24","30","20"], answer: "25"},
      {question: "Resolva: 2³ + 3³", options: ["35","27","35","29"], answer: "35"},
      {question: "Quanto é 1/2 + 1/4?", options: ["3/4","1/2","2/3","1/3"], answer: "3/4"},
      {question: "Qual é o resultado de 11 x 11?", options: ["121","111","131","101"], answer: "121"},
      {question: "Resolva: 2x² = 18, x = ?", options: ["3","4","5","6"], answer: "3"}
    ]
  },

  ingles: {
    easy: [
      {question: "How do you say 'cachorro' in English?", options: ["Dog","Cat","Bird","Fish"], answer: "Dog"},
      {question: "How do you say 'gato' in English?", options: ["Dog","Cat","Bird","Mouse"], answer: "Cat"},
      {question: "How do you say 'maçã' in English?", options: ["Apple","Orange","Banana","Grape"], answer: "Apple"},
      {question: "Translate: 'Olá'", options: ["Hello","Hi","Bye","Thanks"], answer: "Hello"},
      {question: "Translate: 'Obrigado'", options: ["Thank you","Welcome","Sorry","Please"], answer: "Thank you"},
      {question: "Translate: 'Bom dia'", options: ["Good morning","Good night","Good afternoon","Hello"], answer: "Good morning"},
      {question: "Translate: 'Boa noite'", options: ["Good night","Good day","Good evening","Hello"], answer: "Good night"},
      {question: "Translate: 'Eu estudo'", options: ["I study","I studied","I am studying","I will study"], answer: "I study"},
      {question: "Translate: 'Eu estou estudando'", options: ["I am studying","I study","I studied","I will study"], answer: "I am studying"},
      {question: "Translate: 'Eu comi'", options: ["I ate","I eat","I am eating","I will eat"], answer: "I ate"}
    ],
    medium: [
      {question: "What is the past of 'go'?", options: ["Went","Go","Gone","Going"], answer: "Went"},
      {question: "What is the plural of 'child'?", options: ["Childs","Children","Childes","Chilren"], answer: "Children"},
      {question: "Complete: I ___ to school every day.", options: ["go","goes","went","gone"], answer: "go"},
      {question: "Translate: 'Ela gosta de ler'", options: ["She likes to read","She liked read","She liking read","She reads"], answer: "She likes to read"},
      {question: "Complete: They ___ playing football now.", options: ["are","is","am","be"], answer: "are"},
      {question: "What is the comparative of 'good'?", options: ["Better","Gooder","Best","More good"], answer: "Better"},
      {question: "Translate: 'Nós estamos aprendendo inglês'", options: ["We are learning English","We learning English","We learns English","We are learn English"], answer: "We are learning English"},
      {question: "Complete: I have ___ my homework.", options: ["done","do","did","doing"], answer: "done"},
      {question: "Translate: 'Ele já foi embora'", options: ["He has already gone","He already gone","He has gone already","He is gone"], answer: "He has already gone"},
      {question: "What is the superlative of 'fast'?", options: ["Fastest","Faster","Most fast","More fast"], answer: "Fastest"}
    ],
    hard: [
      {question: "Choose the correct: If I ___ rich, I would travel the world.", options: ["were","was","am","be"], answer: "were"},
      {question: "Choose the correct: She wishes she ___ taller.", options: ["were","was","is","be"], answer: "were"},
      {question: "Choose the correct: I would rather you ___ here.", options: ["were","was","are","be"], answer: "were"},
      {question: "What is the past perfect of 'to eat'?", options: ["Had eaten","Have eaten","Eaten","Was eaten"], answer: "Had eaten"},
      {question: "Translate: 'Apesar da chuva, fomos à escola'", options: ["Despite the rain, we went to school","Although the rain, we went to school","Even the rain, we went to school","Despite of rain, we went to school"], answer: "Despite the rain, we went to school"},
      {question: "Choose the correct: If she ___ earlier, she wouldn't have missed the bus.", options: ["had left","left","leaves","leave"], answer: "had left"},
      {question: "Choose the correct: I wish I ___ more time.", options: ["had","have","has","having"], answer: "had"},
      {question: "Translate: 'Ele disse que estava cansado'", options: ["He said he was tired","He said he is tired","He said he had tired","He said he has tired"], answer: "He said he was tired"},
      {question: "Choose the correct: If I ___ known, I would have told you.", options: ["had","have","has","having"], answer: "had"},
      {question: "Translate: 'Ela aprendeu rápido'", options: ["She learned fast","She learn fast","She has learned fast","She had learned fast"], answer: "She learned fast"}
    ]
  },

  ciencias: {
    easy: [
      {question: "Qual é a função do coração?", options: ["Bombear sangue","Respirar","Filtrar","Produzir hormônios"], answer: "Bombear sangue"},
      {question: "Qual é o planeta mais próximo do Sol?", options: ["Mercúrio","Vênus","Terra","Marte"], answer: "Mercúrio"},
      {question: "Qual é a principal fonte de energia do Sol?", options: ["Fusão nuclear","Vento","Água","Geotérmica"], answer: "Fusão nuclear"},
      {question: "Qual animal bota ovos?", options: ["Canguru","Galinha","Cachorro","Cobra"], answer: "Galinha"},
      {question: "Qual gás respiramos?", options: ["Oxigênio","Nitrogênio","Dióxido de carbono","Hélio"], answer: "Oxigênio"},
      {question: "Qual é o estado da água em temperatura ambiente?", options: ["Líquido","Sólido","Gasoso","Plasma"], answer: "Líquido"},
      {question: "Qual é o órgão que filtra o sangue?", options: ["Rim","Fígado","Coração","Estômago"], answer: "Rim"},
      {question: "Qual é a unidade básica da vida?", options: ["Célula","Átomo","Molécula","Órgão"], answer: "Célula"},
      {question: "Qual é a camada mais externa da Terra?", options: ["Crosta","Manto","Núcleo","Litosfera"], answer: "Crosta"},
      {question: "Qual é o maior animal terrestre?", options: ["Elefante","Girafa","Leão","Hipopótamo"], answer: "Elefante"}
    ],
    medium: [
      {question: "Qual é o símbolo químico do ferro?", options: ["Fe","F","Fr","Fi"], answer: "Fe"},
      {question: "Qual é o principal componente do ar que respiramos?", options: ["Nitrogênio","Oxigênio","Dióxido de carbono","Hélio"], answer: "Nitrogênio"},
      {question: "Qual é a velocidade da luz (aprox.)?", options: ["300.000 km/s","150.000 km/s","1.000 km/s","3.000 km/s"], answer: "300.000 km/s"},
      {question: "Qual animal é conhecido como rei da selva?", options: ["Leão","Tigre","Elefante","Crocodilo"], answer: "Leão"},
      {question: "O que faz fotossíntese?", options: ["Plantas","Animais","Fungos","Bactérias"], answer: "Plantas"},
      {question: "Qual planeta é conhecido como planeta vermelho?", options: ["Marte","Júpiter","Vênus","Saturno"], answer: "Marte"},
      {question: "Qual órgão produz insulina?", options: ["Pâncreas","Fígado","Rim","Coração"], answer: "Pâncreas"},
      {question: "Qual é a camada da Terra onde ocorre o magma?", options: ["Manto","Crosta","Núcleo","Litosfera"], answer: "Manto"},
      {question: "Qual é a função dos pulmões?", options: ["Troca gasosa","Filtragem","Digestão","Circulação"], answer: "Troca gasosa"},
      {question: "Qual cientista formulou as leis do movimento?", options: ["Newton","Einstein","Galileu","Darwin"], answer: "Newton"}
    ],
    hard: [
      {question: "Qual é a velocidade do som no ar (aprox.)?", options: ["343 m/s","300 m/s","400 m/s","500 m/s"], answer: "343 m/s"},
      {question: "Qual a diferença entre massa e peso?", options: ["Massa não muda, peso muda","Peso não muda, massa muda","Ambos mudam","Nenhum muda"], answer: "Massa não muda, peso muda"},
      {question: "O que é DNA?", options: ["Material genético","Proteína","Célula","Molécula de água"], answer: "Material genético"},
      {question: "Qual gás é mais abundante na atmosfera?", options: ["Nitrogênio","Oxigênio","Dióxido de carbono","Hélio"], answer: "Nitrogênio"},
      {question: "Qual cientista desenvolveu a teoria da gravidade?", options: ["Newton","Einstein","Galileu","Kepler"], answer: "Newton"},
      {question: "Qual é o maior planeta do sistema solar?", options: ["Júpiter","Saturno","Terra","Marte"], answer: "Júpiter"},
      {question: "O que é fotossíntese?", options: ["Transformação de luz em energia química","Respiração","Digestão","Transpiração"], answer: "Transformação de luz em energia química"},
      {question: "Qual é o órgão mais pesado do corpo humano?", options: ["Fígado","Coração","Cérebro","Pulmão"], answer: "Fígado"},
      {question: "Qual cientista desenvolveu a teoria da relatividade?", options: ["Einstein","Newton","Galileu","Bohr"], answer: "Einstein"},
      {question: "O que é a camada de ozônio?", options: ["Proteção UV","Ar respirável","Terra","Magma"], answer: "Proteção UV"}
    ]
  },

  cultura: {
    easy: [
      {question: "Quem pintou a Mona Lisa?", options: ["Leonardo da Vinci","Van Gogh","Picasso","Michelangelo"], answer: "Leonardo da Vinci"},
      {question: "Qual é a capital da França?", options: ["Paris","Londres","Roma","Berlim"], answer: "Paris"},
      {question: "Qual é o instrumento musical de corda?", options: ["Violão","Bateria","Trompete","Piano"], answer: "Violão"},
      {question: "Quem é o autor de Harry Potter?", options: ["J.K. Rowling","Tolkien","Lewis","Rowling"], answer: "J.K. Rowling"},
      {question: "Qual é a capital do Brasil?", options: ["Brasília","Rio de Janeiro","São Paulo","Salvador"], answer: "Brasília"},
      {question: "Qual é o país do samba?", options: ["Brasil","Argentina","Portugal","México"], answer: "Brasil"},
      {question: "Quem escreveu 'Romeu e Julieta'?", options: ["Shakespeare","Cervantes","Goethe","Tolstói"], answer: "Shakespeare"},
      {question: "Qual é a maior rede social do mundo?", options: ["Facebook","Instagram","Twitter","TikTok"], answer: "Facebook"},
      {question: "Qual é o filme famoso sobre um bruxo jovem?", options: ["Harry Potter","Senhor dos Anéis","Percy Jackson","Crepúsculo"], answer: "Harry Potter"},
      {question: "Quem é conhecido como o Rei do Rock?", options: ["Elvis Presley","Michael Jackson","Freddie Mercury","Bob Dylan"], answer: "Elvis Presley"}
    ],
    medium: [
      {question: "Qual é o pintor do quadro 'A Noite Estrelada'?", options: ["Van Gogh","Picasso","Da Vinci","Monet"], answer: "Van Gogh"},
      {question: "Qual é o país da ópera de Puccini?", options: ["Itália","França","Alemanha","Austrália"], answer: "Itália"},
      {question: "Quem foi a primeira mulher a ganhar um Nobel?", options: ["Marie Curie","Rosalind Franklin","Ada Lovelace","Dorothy Hodgkin"], answer: "Marie Curie"},
      {question: "Qual é a capital do Japão?", options: ["Tóquio","Kyoto","Osaka","Hiroshima"], answer: "Tóquio"},
      {question: "Quem escreveu 'O Senhor dos Anéis'?", options: ["J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","George R.R. Martin"], answer: "J.R.R. Tolkien"},
      {question: "Qual país criou o sushi?", options: ["Japão","China","Coreia","Tailândia"], answer: "Japão"},
      {question: "Quem pintou 'O Grito'?", options: ["Munch","Picasso","Da Vinci","Van Gogh"], answer: "Munch"},
      {question: "Qual é o compositor de 'Quatro Estações'?", options: ["Vivaldi","Bach","Mozart","Beethoven"], answer: "Vivaldi"},
      {question: "Qual é o idioma oficial do Egito?", options: ["Árabe","Inglês","Francês","Hebraico"], answer: "Árabe"},
      {question: "Quem escreveu 'O Pequeno Príncipe'?", options: ["Saint-Exupéry","Tolkien","Rowling","Shakespeare"], answer: "Saint-Exupéry"}
    ],
    hard: [
      {question: "Quem compôs a 9ª Sinfonia?", options: ["Beethoven","Mozart","Bach","Chopin"], answer: "Beethoven"},
      {question: "Qual é o maior museu do mundo?", options: ["Louvre","Metropolitan","Hermitage","Prado"], answer: "Louvre"},
      {question: "Qual é a capital da Islândia?", options: ["Reykjavik","Oslo","Helsinque","Copenhague"], answer: "Reykjavik"},
      {question: "Quem foi o líder do movimento surrealista?", options: ["André Breton","Picasso","Dalí","Magritte"], answer: "André Breton"},
      {question: "Em que ano ocorreu a Revolução Russa?", options: ["1917","1905","1920","1914"], answer: "1917"},
      {question: "Quem escreveu 'Crime e Castigo'?", options: ["Dostoiévski","Tolstói","Kafka","Camus"], answer: "Dostoiévski"},
      {question: "Qual é o símbolo da música barroca?", options: ["Órgão","Piano","Flauta","Harpa"], answer: "Órgão"},
      {question: "Quem pintou 'A Persistência da Memória'?", options: ["Dalí","Picasso","Van Gogh","Monet"], answer: "Dalí"},
      {question: "Qual país inventou o papel?", options: ["China","Egito","Mesopotâmia","Grécia"], answer: "China"},
      {question: "Quem é considerado o pai da psicanálise?", options: ["Freud","Jung","Adler","Skinner"], answer: "Freud"}
    ]
},
  esportes: {
  easy: [
    {question: "Quantos jogadores há em um time de futebol?", options: ["9","10","11","12"], answer: "11"},
    {question: "Qual esporte é conhecido como 'rei dos esportes'?", options: ["Basquete","Futebol","Vôlei","Tênis"], answer: "Futebol"},
    {question: "Em qual país nasceu o basquete?", options: ["Brasil","EUA","França","Canadá"], answer: "EUA"},
    {question: "Qual esporte é praticado na quadra de vôlei?", options: ["Futebol","Vôlei","Basquete","Tênis"], answer: "Vôlei"},
    {question: "Quantos sets existem em uma partida de vôlei?", options: ["3","5","7","9"], answer: "5"},
    {question: "Qual esporte usa tacos e bolas pequenas?", options: ["Golfe","Beisebol","Futebol","Tênis"], answer: "Beisebol"},
    {question: "Qual país inventou o futebol?", options: ["Inglaterra","Brasil","Espanha","França"], answer: "Inglaterra"},
    {question: "Qual é a cor da bola oficial do basquete?", options: ["Branca","Laranja","Preta","Azul"], answer: "Laranja"},
    {question: "Qual esporte é jogado na piscina?", options: ["Natação","Vôlei","Futebol","Tênis"], answer: "Natação"},
    {question: "Quantos minutos tem uma partida de futebol profissional?", options: ["60","70","90","100"], answer: "90"}
  ],
  medium: [
    {question: "Qual atleta é conhecido como 'Pelé'?", options: ["Futebolista","Tenista","Nadador","Atleta de atletismo"], answer: "Futebolista"},
    {question: "Quantos pontos vale uma cesta de três no basquete?", options: ["2","3","1","4"], answer: "3"},
    {question: "Qual país ganhou a Copa do Mundo de 2018?", options: ["Brasil","França","Alemanha","Argentina"], answer: "França"},
    {question: "Quantas medalhas de ouro Michael Phelps ganhou nas Olimpíadas de 2008?", options: ["6","7","8","9"], answer: "8"},
    {question: "Qual é a distância de uma maratona oficial?", options: ["40 km","41 km","42 km","43 km"], answer: "42 km"},
    {question: "Qual jogador tem mais gols na história do futebol?", options: ["Messi","Cristiano Ronaldo","Pelé","Romário"], answer: "Cristiano Ronaldo"},
    {question: "Em que ano aconteceu a Copa do Mundo no Brasil?", options: ["2000","2006","2014","2018"], answer: "2014"},
    {question: "Qual esporte é praticado no Tour de France?", options: ["Futebol","Ciclismo","Atletismo","Natação"], answer: "Ciclismo"},
    {question: "O que é um 'touchdown'?", options: ["Gol no futebol americano","Ponto no basquete","Ponto no futebol americano","Gol no rugby"], answer: "Ponto no futebol americano"},
    {question: "Qual é o maior estádio de futebol do mundo?", options: ["Maracanã","Camp Nou","Azteca","Rungrado"], answer: "Rungrado"}
  ],
  hard: [
    {question: "Qual nadador é conhecido como 'Tubarão de Baltimore'?", options: ["Michael Phelps","Mark Spitz","Ryan Lochte","Ian Thorpe"], answer: "Michael Phelps"},
    {question: "Em que ano ocorreu a primeira Olimpíada moderna?", options: ["1896","1900","1924","1888"], answer: "1896"},
    {question: "Quem detém o recorde de mais gols em Copas do Mundo?", options: ["Miroslav Klose","Pelé","Ronaldo","Messi"], answer: "Miroslav Klose"},
    {question: "Quantos ouros Usain Bolt ganhou em Londres 2012?", options: ["2","3","4","5"], answer: "3"},
    {question: "Qual país sediou os Jogos Olímpicos de 1936?", options: ["EUA","Alemanha","França","Japão"], answer: "Alemanha"},
    {question: "Qual a pontuação máxima em um frame de boliche?", options: ["100","200","300","400"], answer: "300"},
    {question: "Quem é o maior medalhista olímpico da história?", options: ["Larisa Latynina","Michael Phelps","Mark Spitz","Paavo Nurmi"], answer: "Michael Phelps"},
    {question: "Quantos jogadores formam um time de rugby?", options: ["13","15","11","10"], answer: "15"},
    {question: "Qual esporte utiliza o termo 'slam dunk'?", options: ["Vôlei","Basquete","Futebol","Tênis"], answer: "Basquete"},
    {question: "Em que país nasceu o judô?", options: ["China","Japão","Coreia","Tailândia"], answer: "Japão"}
  ]
  },
  tecnologia: {
  easy: [
    {question: "O que significa 'CPU'?", options: ["Central Processing Unit","Computer Personal Unit","Central Program Unit","Computer Processing Unit"], answer: "Central Processing Unit"},
    {question: "O que é um mouse?", options: ["Dispositivo de entrada","Software","Memória","Monitor"], answer: "Dispositivo de entrada"},
    {question: "Qual empresa criou o Windows?", options: ["Apple","Microsoft","Google","IBM"], answer: "Microsoft"},
    {question: "O que significa 'HTML'?", options: ["Hyper Text Markup Language","High Text Markup Language","Hyperlink Text Markup Language","Hyper Tool Markup Language"], answer: "Hyper Text Markup Language"},
    {question: "O que é um smartphone?", options: ["Telefone inteligente","Computador de mesa","Tablet","Relógio digital"], answer: "Telefone inteligente"},
    {question: "Qual é a rede social mais usada?", options: ["Facebook","Twitter","Instagram","TikTok"], answer: "Facebook"},
    {question: "O que é Wi-Fi?", options: ["Rede sem fio","Cabo de internet","Software","Computador"], answer: "Rede sem fio"},
    {question: "O que significa USB?", options: ["Universal Serial Bus","Universal System Bus","Unified Serial Bus","Universal Service Bus"], answer: "Universal Serial Bus"},
    {question: "O que é um site?", options: ["Página na internet","Aplicativo","Programa","Hardware"], answer: "Página na internet"},
    {question: "O que é um app?", options: ["Aplicativo","Antivírus","Software de sistema","Página web"], answer: "Aplicativo"}
  ],
  medium: [
    {question: "O que é um algoritmo?", options: ["Conjunto de instruções","Programa de computador","Processador","Rede de dados"], answer: "Conjunto de instruções"},
    {question: "Qual linguagem é usada para estilizar páginas web?", options: ["CSS","HTML","Python","Java"], answer: "CSS"},
    {question: "O que significa 'AI' em tecnologia?", options: ["Artificial Intelligence","Automatic Interface","Advanced Internet","Automated Input"], answer: "Artificial Intelligence"},
    {question: "Qual é o principal componente de armazenamento do computador?", options: ["HD","CPU","RAM","GPU"], answer: "HD"},
    {question: "O que é open source?", options: ["Código aberto","Software pago","Aplicativo móvel","Rede social"], answer: "Código aberto"},
    {question: "Qual linguagem é usada para programação web?", options: ["JavaScript","C#","Fortran","COBOL"], answer: "JavaScript"},
    {question: "O que é cloud computing?", options: ["Computação em nuvem","Computador portátil","Memória RAM","Software local"], answer: "Computação em nuvem"},
    {question: "O que faz uma GPU?", options: ["Processa gráficos","Armazena dados","Controla teclado","Gerencia rede"], answer: "Processa gráficos"},
    {question: "Qual é o protocolo mais usado na web?", options: ["HTTP","FTP","SMTP","DNS"], answer: "HTTP"},
    {question: "O que significa IoT?", options: ["Internet of Things","Internet of Technology","Input of Things","Information on Technology"], answer: "Internet of Things"}
  ],
  hard: [
    {question: "O que é blockchain?", options: ["Registro distribuído","Banco online","Computador quântico","Aplicativo móvel"], answer: "Registro distribuído"},
    {question: "O que é machine learning?", options: ["Aprendizado de máquina","Rede social","Linguagem de programação","Memória RAM"], answer: "Aprendizado de máquina"},
    {question: "Qual a função de um servidor DNS?", options: ["Resolver nomes de domínio","Armazenar arquivos","Gerenciar CPU","Transmitir pacotes"], answer: "Resolver nomes de domínio"},
    {question: "O que é um sistema operacional?", options: ["Software que gerencia hardware e software","Aplicativo de rede","Memória do computador","Processador central"], answer: "Software que gerencia hardware e software"},
    {question: "O que significa 'API'?", options: ["Application Programming Interface","Automated Processing Input","Advanced Program Integration","Active Programming Interface"], answer: "Application Programming Interface"},
    {question: "O que é virtualização?", options: ["Executar múltiplos sistemas em um mesmo hardware","Criar sites","Armazenar arquivos","Gerenciar redes"], answer: "Executar múltiplos sistemas em um mesmo hardware"},
    {question: "Qual a função do protocolo TCP?", options: ["Garantir a entrega de pacotes","Gerenciar memória","Processar imagens","Controlar teclado"], answer: "Garantir a entrega de pacotes"},
    {question: "O que é um banco de dados relacional?", options: ["Armazena dados em tabelas","Software de antivírus","Memória do computador","Programa de redes"], answer: "Armazena dados em tabelas"},
    {question: "O que é realidade aumentada?", options: ["Mistura do real com digital","Computador portátil","Aplicativo web","Inteligência artificial"], answer: "Mistura do real com digital"},
    {question: "O que é IoT industrial?", options: ["Conexão de máquinas à internet","Rede social","Aplicativo móvel","Computador de mesa"], answer: "Conexão de máquinas à internet"}
  ]
},
geografia: {
  easy: [
    {question: "Qual é a capital do Brasil?", options: ["Brasília","Rio de Janeiro","São Paulo","Salvador"], answer: "Brasília"},
    {question: "Qual é o maior continente?", options: ["Ásia","América","África","Europa"], answer: "Ásia"},
    {question: "Qual é o oceano mais extenso?", options: ["Pacífico","Atlântico","Índico","Ártico"], answer: "Pacífico"},
    {question: "Qual país é conhecido como 'Terra do Sol Nascente'?", options: ["Japão","China","Coreia","Tailândia"], answer: "Japão"},
    {question: "Em qual continente fica o Egito?", options: ["África","Ásia","Europa","América"], answer: "África"},
    {question: "Qual rio atravessa o Egito?", options: ["Nilo","Amazonas","Mississippi","Danúbio"], answer: "Nilo"},
    {question: "Qual é a montanha mais alta do mundo?", options: ["Everest","K2","Mont Blanc","Aconcágua"], answer: "Everest"},
    {question: "Qual é a capital da França?", options: ["Paris","Londres","Roma","Berlim"], answer: "Paris"},
    {question: "Qual país tem mais habitantes?", options: ["China","Índia","EUA","Rússia"], answer: "China"},
    {question: "Qual é o maior deserto do mundo?", options: ["Sahara","Gobi","Kalahari","Atacama"], answer: "Sahara"}
  ],
  medium: [
    {question: "Qual país possui mais ilhas?", options: ["Suécia","Noruega","Finlândia","Canadá"], answer: "Suécia"},
    {question: "Quantos fusos horários existem na Rússia?", options: ["9","10","11","12"], answer: "11"},
    {question: "Qual é o maior lago de água doce?", options: ["Superior","Victoria","Baikal","Titicaca"], answer: "Superior"},
    {question: "Qual país tem o formato de bota?", options: ["Itália","Espanha","Portugal","Grécia"], answer: "Itália"},
    {question: "Qual é a capital da Austrália?", options: ["Sydney","Melbourne","Canberra","Perth"], answer: "Canberra"},
    {question: "Qual rio é mais longo da América do Sul?", options: ["Amazonas","Paraná","Orinoco","São Francisco"], answer: "Amazonas"},
    {question: "Qual país tem a maior floresta tropical?", options: ["Brasil","Congo","Indonésia","Peru"], answer: "Brasil"},
    {question: "Qual é a capital da Índia?", options: ["Nova Deli","Mumbai","Bangalore","Calcutá"], answer: "Nova Deli"},
    {question: "Qual país é conhecido pelos fjords?", options: ["Noruega","Islândia","Suécia","Finlândia"], answer: "Noruega"},
    {question: "Qual é o ponto mais baixo da Terra?", options: ["Mar Morto","Everest","K2","Vale da Morte"], answer: "Mar Morto"}
  ],
  hard: [
    {question: "Qual país tem mais vulcões ativos?", options: ["Indonésia","Japão","Itália","México"], answer: "Indonésia"},
    {question: "Qual é o maior arquipélago do mundo?", options: ["Indonésia","Filipinas","Maldivas","Japão"], answer: "Indonésia"},
    {question: "Quantos países existem na América do Sul?", options: ["12","13","14","15"], answer: "12"},
    {question: "Qual é o ponto mais alto da América do Sul?", options: ["Aconcágua","Huascarán","Ojos del Salado","Chimborazo"], answer: "Aconcágua"},
    {question: "Qual país tem mais fronteiras com outros países?", options: ["China","Rússia","Brasil","Alemanha"], answer: "China"},
    {question: "Qual é o país mais extenso do mundo?", options: ["Rússia","Canadá","China","EUA"], answer: "Rússia"},
    {question: "Qual é a capital do Canadá?", options: ["Toronto","Ottawa","Vancouver","Montreal"], answer: "Ottawa"},
    {question: "Quantos países existem no mundo?", options: ["193","195","197","200"], answer: "195"},
    {question: "Qual o país mais populoso da África?", options: ["Nigéria","Egito","África do Sul","Etiópia"], answer: "Nigéria"},
    {question: "Qual é o deserto mais seco do mundo?", options: ["Atacama","Sahara","Gobi","Kalahari"], answer: "Atacama"}
  ]
},
portugues: {
  easy: [
    {question: "Qual é a vogal da palavra 'casa'?", options: ["a","e","i","o"], answer: "a"},
    {question: "Quantas letras tem a palavra 'livro'?", options: ["4","5","6","7"], answer: "5"},
    {question: "Qual é o plural de 'flor'?", options: ["flores","flors","floris","floras"], answer: "flores"},
    {question: "Qual é a forma correta?", options: ["Menas","Menos","Menas","Menus"], answer: "Menos"},
    {question: "Qual é o antônimo de 'alto'?", options: ["baixo","grande","longo","curto"], answer: "baixo"},
    {question: "Qual é o gênero da palavra 'mesa'?", options: ["feminino","masculino","neutro","comum"], answer: "feminino"},
    {question: "Complete: Eu ___ feliz.", options: ["sou","é","são","está"], answer: "sou"},
    {question: "Qual é o plural de 'lápis'?", options: ["lápis","lápises","lápiseses","lápisos"], answer: "lápis"},
    {question: "Qual é a forma correta?", options: ["Haverão problemas","Haverá problemas","Haverão problema","Haverá problema"], answer: "Haverá problemas"},
    {question: "Qual é o antônimo de 'claro'?", options: ["escuro","limpo","alto","baixo"], answer: "escuro"}
  ],
  medium: [
    {question: "Qual é o plural de 'cidadão'?", options: ["cidadãos","cidadões","cidadães","cidadãoses"], answer: "cidadãos"},
    {question: "Qual é a forma correta?", options: ["Mau","Mal","Maus","Mais"], answer: "Mal"},
    {question: "O que é um advérbio?", options: ["Palavra que modifica verbo, adjetivo ou outro advérbio","Nome próprio","Artigo definido","Pronome"], answer: "Palavra que modifica verbo, adjetivo ou outro advérbio"},
    {question: "Qual é o antônimo de 'alegre'?", options: ["triste","feliz","animado","contente"], answer: "triste"},
    {question: "Qual é a forma correta?", options: ["Por que","Porque","Porquê","Por quê"], answer: "Por que"},
    {question: "Qual é a forma correta?", options: ["A gente fomos","A gente foi","A gente vão","A gente ia"], answer: "A gente foi"},
    {question: "O que é uma oração?", options: ["Conjunto de palavras com sentido completo","Palavra isolada","Frase sem verbo","Símbolo"], answer: "Conjunto de palavras com sentido completo"},
    {question: "Qual é o plural de 'pão'?", options: ["pães","pãos","pões","pãoses"], answer: "pães"},
    {question: "Qual é a forma correta?", options: ["Eu vi ele","Eu o vi","Eu vi-lo","Vi ele"], answer: "Eu o vi"},
    {question: "O que é um substantivo próprio?", options: ["Nome específico de pessoa, lugar ou coisa","Qualquer palavra","Verbo","Adjetivo"], answer: "Nome específico de pessoa, lugar ou coisa"}
  ],
  hard: [
    {question: "Qual é o correto: 'Se eu ___ você, faria diferente.'", options: ["fosse","fui","for","era"], answer: "fosse"},
    {question: "O que é uma figura de linguagem?", options: ["Recurso de estilo em texto ou fala","Regra gramatical","Ortografia","Pronome"], answer: "Recurso de estilo em texto ou fala"},
    {question: "Qual é o plural de 'cão'?", options: ["cães","cãos","cãoses","cãoses"], answer: "cães"},
    {question: "Qual é o correto: 'Ele fez ___ tarefa.'", options: ["a sua","à sua","as sua","à suas"], answer: "a sua"},
    {question: "O que é regência verbal?", options: ["Relação entre verbo e complemento","Forma verbal","Ortografia","Pronome"], answer: "Relação entre verbo e complemento"},
    {question: "Qual é o antônimo de 'vazio'?", options: ["cheio","ocioso","pleno","aberto"], answer: "cheio"},
    {question: "O que é concordância nominal?", options: ["Ajuste entre substantivo e adjetivo","Verbo e sujeito","Artigo e pronome","Advérbio e verbo"], answer: "Ajuste entre substantivo e adjetivo"},
    {question: "Qual é o plural de 'lápis' em contexto formal?", options: ["lápis","lápises","lápisos","lápiseses"], answer: "lápis"},
    {question: "O que é crase?", options: ["Fusão de preposição + artigo","Uso de vírgula","Concordância verbal","Plural de substantivo"], answer: "Fusão de preposição + artigo"},
    {question: "Complete: Embora ele ___ cansado, continuou a estudar.", options: ["estivesse","estava","esteve","foi"], answer: "estivesse"}
  ]
},
historia: {
  easy: [
    {question: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas","Deodoro da Fonseca","Juscelino Kubitschek","Dom Pedro II"], answer: "Deodoro da Fonseca"},
    {question: "Em que ano o Brasil foi descoberto?", options: ["1500","1492","1600","1550"], answer: "1500"},
    {question: "Quem liderou a Independência do Brasil?", options: ["Dom Pedro I","Dom Pedro II","Getúlio Vargas","José Bonifácio"], answer: "Dom Pedro I"},
    {question: "Qual foi a revolução de 1789?", options: ["Revolução Francesa","Revolução Industrial","Revolução Russa","Revolução Americana"], answer: "Revolução Francesa"},
    {question: "Quem descobriu a América?", options: ["Cristóvão Colombo","Pedro Álvares Cabral","Vasco da Gama","Americo Vespúcio"], answer: "Cristóvão Colombo"},
    {question: "Qual era o império de Napoleão?", options: ["França","Inglaterra","Espanha","Portugal"], answer: "França"},
    {question: "Em que século ocorreu a Revolução Industrial?", options: ["18","17","19","16"], answer: "18"},
    {question: "Quem foi o líder da Revolução Cubana?", options: ["Fidel Castro","Che Guevara","Hugo Chávez","Raúl Castro"], answer: "Fidel Castro"},
    {question: "Qual guerra terminou em 1945?", options: ["Segunda Guerra Mundial","Primeira Guerra Mundial","Guerra do Vietnã","Guerra Fria"], answer: "Segunda Guerra Mundial"},
    {question: "Quem foi Mahatma Gandhi?", options: ["Líder pacifista da Índia","Presidente dos EUA","Imperador do Japão","Explorador espanhol"], answer: "Líder pacifista da Índia"}
  ],
  medium: [
    {question: "Qual tratado encerrou a Primeira Guerra Mundial?", options: ["Versalhes","Tordesilhas","Paris","Ghent"], answer: "Versalhes"},
    {question: "Quem foi o responsável pela unificação da Alemanha?", options: ["Otto von Bismarck","Napoleão","Hitler","Kaiser Wilhelm"], answer: "Otto von Bismarck"},
    {question: "Em que ano ocorreu a Revolução Russa?", options: ["1917","1905","1920","1914"], answer: "1917"},
    {question: "Quem foi o último imperador do Brasil?", options: ["Dom Pedro II","Dom Pedro I","Getúlio Vargas","Juscelino Kubitschek"], answer: "Dom Pedro II"},
    {question: "Qual civilização construiu as pirâmides do Egito?", options: ["Egípcios","Maias","Incas","Gregos"], answer: "Egípcios"},
    {question: "Qual evento marcou o início da Idade Moderna?", options: ["Descobrimento da América","Queda do Império Romano","Revolução Industrial","Revolução Francesa"], answer: "Descobrimento da América"},
    {question: "Quem foi Winston Churchill?", options: ["Primeiro-ministro britânico na Segunda Guerra","Presidente dos EUA","Imperador do Japão","Explorador"], answer: "Primeiro-ministro britânico na Segunda Guerra"},
    {question: "Em que ano terminou a Guerra Fria?", options: ["1991","1989","1995","1985"], answer: "1991"},
    {question: "Quem liderou a Independência dos EUA?", options: ["George Washington","Thomas Jefferson","Abraham Lincoln","John Adams"], answer: "George Washington"},
    {question: "Qual foi o principal líder do fascismo na Itália?", options: ["Benito Mussolini","Adolf Hitler","Joseph Stalin","Vladimir Lenin"], answer: "Benito Mussolini"}
  ],
  hard: [
    {question: "Qual tratado dividiu o mundo entre Espanha e Portugal?", options: ["Tordesilhas","Versalhes","Ghent","Paris"], answer: "Tordesilhas"},
    {question: "Quem foi o último czar da Rússia?", options: ["Nicolae II","Lenin","Stalin","Pedro I"], answer: "Nicolae II"},
    {question: "Em que ano caiu o Império Romano do Ocidente?", options: ["476","410","500","395"], answer: "476"},
    {question: "Quem foi o imperador romano durante o nascimento de Cristo?", options: ["Augusto","Nero","César","Constantino"], answer: "Augusto"},
    {question: "Qual foi a principal causa da Primeira Guerra Mundial?", options: ["Assassinato do arquiduque Francisco Ferdinando","Revolução Industrial","Colonização da África","Queda do Império Romano"], answer: "Assassinato do arquiduque Francisco Ferdinando"},
    {question: "Quem liderou a Revolução Francesa?", options: ["Robespierre","Napoleão","Luis XVI","Marat"], answer: "Robespierre"},
    {question: "O que foi o Tratado de Westfália?", options: ["Paz que encerrou a Guerra dos 30 anos","Tratado de fronteira da Alemanha","Tratado de independência dos EUA","Aliança na Primeira Guerra Mundial"], answer: "Paz que encerrou a Guerra dos 30 anos"},
    {question: "Quem foi o fundador do Império Mongol?", options: ["Genghis Khan","Kublai Khan","Tamerlão","Hulagu Khan"], answer: "Genghis Khan"},
    {question: "Qual foi a dinastia chinesa que construiu a Grande Muralha?", options: ["Qin","Han","Ming","Tang"], answer: "Qin"},
    {question: "Em que ano caiu Constantinopla?", options: ["1453","1492","1402","1500"], answer: "1453"}
  ]
},
saude: {
  easy: [
    {question: "Qual vitamina é produzida pelo sol?", options: ["Vitamina D","Vitamina A","Vitamina C","Vitamina B12"], answer: "Vitamina D"},
    {question: "Quantos ossos tem o corpo humano adulto?", options: ["206","208","201","210"], answer: "206"},
    {question: "Qual órgão bombeia sangue pelo corpo?", options: ["Coração","Fígado","Rim","Pulmão"], answer: "Coração"}
  ],
  medium: [
    {question: "Qual é a função dos glóbulos brancos?", options: ["Defesa do corpo","Transporte de oxigênio","Produção de hormônios","Filtragem do sangue"], answer: "Defesa do corpo"},
    {question: "O que é hipertensão?", options: ["Pressão alta","Pressão baixa","Baixa glicose","Falta de vitaminas"], answer: "Pressão alta"},
    {question: "Qual nutriente é essencial para ossos fortes?", options: ["Cálcio","Ferro","Potássio","Magnésio"], answer: "Cálcio"}
  ],
  hard: [
    {question: "Qual é a principal função do fígado?", options: ["Desintoxicação do corpo","Produção de insulina","Filtrar oxigênio","Bombeamento de sangue"], answer: "Desintoxicação do corpo"},
    {question: "Qual é a doença causada pela falta de vitamina C?", options: ["Escorbuto","Anemia","Diabetes","Osteoporose"], answer: "Escorbuto"},
    {question: "O que é homeostase?", options: ["Equilíbrio interno do corpo","Crescimento muscular","Processo de digestão","Contração cardíaca"], answer: "Equilíbrio interno do corpo"}
  ]
},
gastronomia: {
  easy: [
    {question: "Qual é o ingrediente principal do pão?", options: ["Farinha","Arroz","Milho","Batata"], answer: "Farinha"},
    {question: "Qual fruta é usada no guacamole?", options: ["Abacate","Tomate","Maçã","Banana"], answer: "Abacate"},
    {question: "O sushi é típico de qual país?", options: ["Japão","China","Coreia","Tailândia"], answer: "Japão"}
  ],
  medium: [
    {question: "Qual tipo de massa é usada no spaghetti?", options: ["Trigo","Arroz","Milho","Aveia"], answer: "Trigo"},
    {question: "O que é fondue?", options: ["Prato com queijo ou chocolate derretido","Prato com arroz","Sopa francesa","Torta doce"], answer: "Prato com queijo ou chocolate derretido"},
    {question: "Qual é o principal ingrediente do hummus?", options: ["Grão-de-bico","Lentilha","Feijão","Ervilha"], answer: "Grão-de-bico"}
  ],
  hard: [
    {question: "Qual é a diferença entre confit e sous-vide?", options: ["Método de cozimento","Tipo de tempero","Ingrediente principal","Forma de apresentação"], answer: "Método de cozimento"},
    {question: "O que é um roux na culinária francesa?", options: ["Base de farinha e manteiga para molhos","Tipo de queijo","Corte de carne","Prato doce"], answer: "Base de farinha e manteiga para molhos"},
    {question: "Qual país é famoso pelo prato paella?", options: ["Espanha","Itália","França","Portugal"], answer: "Espanha"}
  ]
},
jogos: {
  easy: [
    {question: "Qual é o tabuleiro do xadrez?", options: ["8x8","10x10","6x6","12x12"], answer: "8x8"},
    {question: "Qual personagem é o mascote da Nintendo?", options: ["Mario","Sonic","Pikachu","Link"], answer: "Mario"},
    {question: "Quantos dados são usados no jogo de Monopoly?", options: ["2","1","3","4"], answer: "2"}
  ],
  medium: [
    {question: "Em que ano foi lançado o primeiro videogame?", options: ["1972","1980","1965","1978"], answer: "1972"},
    {question: "Qual é o objetivo do jogo League of Legends?", options: ["Destruir a base inimiga","Colecionar cartas","Marcar gols","Montar palavras"], answer: "Destruir a base inimiga"},
    {question: "Qual é o tabuleiro do jogo War?", options: ["Mapa-múndi","Tabuleiro de cidades","Tabuleiro de animais","Tabuleiro de números"], answer: "Mapa-múndi"}
  ],
  hard: [
    {question: "Quem venceu a primeira Copa do Mundo de videogame (FIFA e similares)?", options: ["Brasil","EUA","Alemanha","Coreia do Sul"], answer: "Brasil"},
    {question: "Qual é a mecânica principal de Dungeons & Dragons?", options: ["Role-playing","Corrida","Luta","Quebra-cabeça"], answer: "Role-playing"},
    {question: "Em Magic: The Gathering, quantos pontos de vida um jogador inicia?", options: ["20","30","15","25"], answer: "20"}
  ]
}
};