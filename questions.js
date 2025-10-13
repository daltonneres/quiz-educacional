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
    {question: "Qual vitamina é conhecida por ajudar na visão?", options: ["Vitamina A","Vitamina C","Vitamina D","Vitamina B12"], answer: "Vitamina A"},
    {question: "Quantos dentes adultos uma pessoa normalmente possui?", options: ["32","28","30","34"], answer: "32"},
    {question: "Qual órgão filtra o sangue no corpo humano?", options: ["Rim","Fígado","Coração","Pulmão"], answer: "Rim"},
    {question: "Qual é a principal função do coração?", options: ["Bombear sangue","Produzir hormônios","Filtrar toxinas","Controlar a respiração"], answer: "Bombear sangue"},
    {question: "Qual é o principal nutriente presente no leite?", options: ["Cálcio","Ferro","Vitamina C","Potássio"], answer: "Cálcio"},
    {question: "Qual prática ajuda a prevenir gripes e resfriados?", options: ["Lavar as mãos","Dormir pouco","Evitar frutas","Não beber água"], answer: "Lavar as mãos"},
    {question: "O que significa IMC?", options: ["Índice de Massa Corporal","Índice de Medida Corporal","Índice de Metabolismo Calórico","Índice de Massa Celular"], answer: "Índice de Massa Corporal"},
    {question: "Qual é a bebida mais indicada para manter o corpo hidratado?", options: ["Água","Refrigerante","Suco artificial","Café"], answer: "Água"},
    {question: "O que ajuda na formação de ossos e dentes?", options: ["Cálcio","Ferro","Vitamina B12","Zinco"], answer: "Cálcio"},
    {question: "Qual é a doença causada pela falta de vitamina C?", options: ["Escorbuto","Raquitismo","Anemia","Diabetes"], answer: "Escorbuto"}
  ],
  medium: [
    {question: "Qual é a principal função do fígado?", options: ["Desintoxicar o sangue","Bombear sangue","Filtrar ar","Produzir insulina"], answer: "Desintoxicar o sangue"},
    {question: "Qual hormônio é responsável pelo controle do açúcar no sangue?", options: ["Insulina","Adrenalina","Testosterona","Tiroxina"], answer: "Insulina"},
    {question: "O que é hipertensão?", options: ["Pressão alta","Baixa pressão","Batimentos irregulares","Colesterol elevado"], answer: "Pressão alta"},
    {question: "Qual exame avalia a densidade óssea?", options: ["Densitometria óssea","Ressonância","Tomografia","Ultrassom"], answer: "Densitometria óssea"},
    {question: "Qual vitamina é produzida pelo corpo quando há exposição ao sol?", options: ["Vitamina D","Vitamina A","Vitamina C","Vitamina K"], answer: "Vitamina D"},
    {question: "O que significa a sigla AIDS?", options: ["Síndrome da Imunodeficiência Adquirida","Doença Imunológica Avançada","Infecção Aguda de Sangue","Síndrome Autoimune"], answer: "Síndrome da Imunodeficiência Adquirida"},
    {question: "Qual exame detecta a presença de células cancerígenas no colo do útero?", options: ["Papanicolau","Mamografia","Endoscopia","Colonoscopia"], answer: "Papanicolau"},
    {question: "Qual nutriente é essencial para a coagulação sanguínea?", options: ["Vitamina K","Vitamina C","Cálcio","Ferro"], answer: "Vitamina K"},
    {question: "Qual órgão é afetado pelo glaucoma?", options: ["Olhos","Ouvidos","Rins","Fígado"], answer: "Olhos"},
    {question: "Qual é a doença crônica causada pelo excesso de açúcar no sangue?", options: ["Diabetes","Hipotireoidismo","Hipertensão","Anemia"], answer: "Diabetes"}
  ],
  hard: [
    {question: "Qual é a função do hipotálamo?", options: ["Regular temperatura e fome","Filtrar sangue","Bombear sangue","Produzir bile"], answer: "Regular temperatura e fome"},
    {question: "O que é a doença de Parkinson?", options: ["Distúrbio neurológico","Doença cardíaca","Infecção pulmonar","Problema digestivo"], answer: "Distúrbio neurológico"},
    {question: "Qual a principal célula responsável pelo transporte de oxigênio no sangue?", options: ["Hemácia","Leucócito","Plaqueta","Neurônio"], answer: "Hemácia"},
    {question: "Qual exame mede a função renal?", options: ["Creatinina","Hemograma","Colesterol","Ultrassom abdominal"], answer: "Creatinina"},
    {question: "O que causa a anemia ferropriva?", options: ["Falta de ferro","Excesso de cálcio","Deficiência de vitamina D","Excesso de açúcar"], answer: "Falta de ferro"},
    {question: "Qual é a função da insulina no organismo?", options: ["Reduzir glicose no sangue","Aumentar pressão arterial","Produzir energia","Estimular o sono"], answer: "Reduzir glicose no sangue"},
    {question: "Qual é a doença autoimune que ataca a tiróide?", options: ["Hashimoto","Diabetes tipo 1","Esclerose múltipla","Lúpus"], answer: "Hashimoto"},
    {question: "O que é osteoporose?", options: ["Perda de densidade óssea","Inflamação articular","Doença muscular","Doença cardiovascular"], answer: "Perda de densidade óssea"},
    {question: "Qual vírus causa a hepatite B?", options: ["HBV","HCV","HIV","HPV"], answer: "HBV"},
    {question: "Qual exame avalia a saúde do coração por meio da atividade elétrica?", options: ["Eletrocardiograma","Ressonância","Ultrassom","Tomografia"], answer: "Eletrocardiograma"}
  ]
},
gastronomia: {
  easy: [
    {question: "Qual é o principal ingrediente do pão?", options: ["Farinha","Ovo","Leite","Açúcar"], answer: "Farinha"},
    {question: "De qual país é o prato 'sushi'?", options: ["Japão","China","Itália","Brasil"], answer: "Japão"},
    {question: "Qual é a fruta que faz o vinho?", options: ["Uva","Maçã","Morango","Banana"], answer: "Uva"},
    {question: "Qual é o ingrediente principal do chocolate?", options: ["Cacau","Café","Baunilha","Leite"], answer: "Cacau"},
    {question: "Qual carne é usada para fazer bacon?", options: ["Porco","Boi","Frango","Peixe"], answer: "Porco"},
    {question: "Qual é o principal ingrediente da pizza?", options: ["Massa e queijo","Arroz","Batata","Carne"], answer: "Massa e queijo"},
    {question: "Qual bebida é feita de grãos torrados e moídos?", options: ["Café","Chá","Suco","Refrigerante"], answer: "Café"},
    {question: "Qual é o nome da comida rápida americana mais famosa?", options: ["Hambúrguer","Taco","Sopa","Salada"], answer: "Hambúrguer"},
    {question: "Qual o vegetal usado para fazer batata frita?", options: ["Batata","Cenoura","Tomate","Cebola"], answer: "Batata"},
    {question: "Qual é o ingrediente base da culinária italiana?", options: ["Macarrão","Arroz","Feijão","Milho"], answer: "Macarrão"}
  ],
  medium: [
    {question: "Qual é o queijo mais usado na pizza Margherita?", options: ["Mussarela","Parmesão","Cheddar","Provolone"], answer: "Mussarela"},
    {question: "O que é a 'mise en place' na culinária?", options: ["Preparação e organização dos ingredientes","Técnica de corte","Método de cozimento","Decoração do prato"], answer: "Preparação e organização dos ingredientes"},
    {question: "Qual é o ingrediente chave do guacamole?", options: ["Abacate","Tomate","Cebola","Pimenta"], answer: "Abacate"},
    {question: "Qual país criou o croissant?", options: ["Áustria","França","Itália","Suíça"], answer: "Áustria"},
    {question: "Qual é a base do molho bechamel?", options: ["Leite e roux (manteiga e farinha)","Tomate e azeite","Creme de leite","Caldo de carne"], answer: "Leite e roux (manteiga e farinha)"},
    {question: "O que é um 'emulsionante' na cozinha?", options: ["Substância que ajuda a misturar líquidos imiscíveis","Temperos","Tipo de faca","Método de fermentação"], answer: "Substância que ajuda a misturar líquidos imiscíveis"},
    {question: "Qual é o ingrediente essencial para fazer pão levedado?", options: ["Fermento biológico","Açúcar","Sal","Ovo"], answer: "Fermento biológico"},
    {question: "Qual a diferença entre azeite virgem e extra virgem?", options: ["Extra virgem tem acidez menor","Virgem tem acidez menor","Não há diferença","Extra virgem é refinado"], answer: "Extra virgem tem acidez menor"},
    {question: "Qual o nome do método de cozimento lento e úmido?", options: ["Braise","Fritura","Grelhar","Assar"], answer: "Braise"},
    {question: "Qual a origem do Tiramisu?", options: ["Itália","França","Portugal","Espanha"], answer: "Itália"}
  ],
  hard: [
    {question: "Qual é o molho base do prato 'Carbonara' tradicional?", options: ["Ovo, queijo pecorino, pimenta e guanciale","Creme de leite e bacon","Tomate e carne moída","Azeite e alho"], answer: "Ovo, queijo pecorino, pimenta e guanciale"},
    {question: "Qual o nome do processo de cozimento de alimentos em seu próprio vapor?", options: ["Poaching","Sautéeing","Braising","Steaming"], answer: "Steaming"},
    {question: "O que é o 'Umami'?", options: ["Quinto gosto fundamental","Tipo de especiaria","Método de preparo","Molho japonês"], answer: "Quinto gosto fundamental"},
    {question: "Qual o princípio ativo que causa a picância da pimenta?", options: ["Capsaicina","Curcumina","Piperina","Alicina"], answer: "Capsaicina"},
    {question: "Qual é o país de origem do 'ceviche'?", options: ["Peru","México","Brasil","Chile"], answer: "Peru"},
    {question: "O que é um 'Rouille'?", options: ["Molho provençal à base de alho, azeite, pimenta e pão","Vinho francês","Queijo suíço","Prato de carne"], answer: "Molho provençal à base de alho, azeite, pimenta e pão"},
    {question: "Qual a temperatura ideal para a fermentação de pães (média)?", options: ["25°C a 30°C","10°C a 15°C","40°C a 45°C","5°C a 10°C"], answer: "25°C a 30°C"},
    {question: "O que é a caramelização?", options: ["Reação química do açúcar sob aquecimento","Reação de proteínas","Processo de fermentação","Mistura de gordura e água"], answer: "Reação química do açúcar sob aquecimento"},
    {question: "Qual o país de origem do queijo 'Feta'?", options: ["Grécia","Itália","França","Suíça"], answer: "Grécia"},
    {question: "Qual é o principal componente do 'Miso' japonês?", options: ["Soja fermentada","Arroz e peixe","Gergelim e algas","Caldo de carne"], answer: "Soja fermentada"}
  ]
},
jogos: {
  easy: [
    {question: "Qual é o encanador famoso da Nintendo?", options: ["Mario","Luigi","Sonic","Link"], answer: "Mario"},
    {question: "Qual jogo tem o personagem 'Pikachu'?", options: ["Pokémon","Digimon","Zelda","Final Fantasy"], answer: "Pokémon"},
    {question: "Qual console é feito pela Microsoft?", options: ["Xbox","PlayStation","Nintendo Switch","Wii"], answer: "Xbox"},
    {question: "Qual é a espada lendária de Link em Zelda?", options: ["Master Sword","Excalibur","Buster Sword","Keyblade"], answer: "Master Sword"},
    {question: "Qual o jogo de construção com blocos mais popular?", options: ["Minecraft","Terraria","Roblox","Fortnite"], answer: "Minecraft"},
    {question: "Qual é o nome do principal rival de Sonic?", options: ["Dr. Eggman","Tails","Knuckles","Shadow"], answer: "Dr. Eggman"},
    {question: "Qual a cor do Pac-Man?", options: ["Amarelo","Vermelho","Azul","Verde"], answer: "Amarelo"},
    {question: "Qual jogo é conhecido pelo 'battle royale'?", options: ["Fortnite","The Sims","League of Legends","Angry Birds"], answer: "Fortnite"},
    {question: "Qual o nome do herói de 'God of War'?", options: ["Kratos","Zeus","Ares","Hercules"], answer: "Kratos"},
    {question: "Qual o console mais vendido de todos os tempos?", options: ["PlayStation 2","Nintendo DS","PlayStation 4","Xbox 360"], answer: "PlayStation 2"}
  ],
  medium: [
    {question: "Qual é a empresa criadora de 'Grand Theft Auto' (GTA)?", options: ["Rockstar Games","Ubisoft","EA Games","Activision"], answer: "Rockstar Games"},
    {question: "Qual jogo popularizou o gênero 'MOBA'?", options: ["League of Legends","Dota 2","StarCraft","World of Warcraft"], answer: "League of Legends"},
    {question: "Qual o nome do protagonista de 'Metal Gear Solid'?", options: ["Solid Snake","Naked Snake","Big Boss","Raiden"], answer: "Solid Snake"},
    {question: "Qual a primeira consola a usar cartuchos de jogo?", options: ["Magnavox Odyssey","Atari 2600","Nintendo Entertainment System (NES)","Sega Master System"], answer: "Magnavox Odyssey"},
    {question: "Em qual cidade fictícia se passa a maior parte de 'Cyberpunk 2077'?", options: ["Night City","Los Santos","Raccoon City","Midgar"], answer: "Night City"},
    {question: "Qual é o nome do monstro final em 'Space Invaders'?", options: ["UFO","Boss","Alien","King"], answer: "UFO"},
    {question: "Qual é a principal moeda de troca em 'Minecraft'?", options: ["Esmeralda","Ouro","Diamante","Ferro"], answer: "Esmeralda"},
    {question: "Qual personagem é conhecido por usar um 'gancho' em 'Street Fighter'?", options: ["Balrog","Sagat","M. Bison","Vega"], answer: "Balrog"},
    {question: "Qual o nome do planeta natal de 'Halo'?", options: ["Reach","Earth","Installation 07","Covenant"], answer: "Reach"},
    {question: "O que é um 'NPC' em jogos?", options: ["Non-Playable Character","New Player Character","Navegação Pessoal do Computador","Não Pode Conectar"], answer: "Non-Playable Character"}
  ],
  hard: [
    {question: "Qual o ano de lançamento do primeiro 'The Legend of Zelda'?", options: ["1986","1987","1985","1988"], answer: "1986"},
    {question: "Qual jogo introduziu o sistema de combate 'Active Time Battle' (ATB)?", options: ["Final Fantasy IV","Final Fantasy VII","Chrono Trigger","Dragon Quest"], answer: "Final Fantasy IV"},
    {question: "Qual é o nome do vilão principal em 'Half-Life'?", options: ["G-Man","Dr. Breen","Nihilanth","Combine"], answer: "G-Man"},
    {question: "Qual a resolução padrão do primeiro 'Doom'?", options: ["320x200","640x480","256x256","160x100"], answer: "320x200"},
    {question: "Qual a empresa que criou o motor gráfico 'Unreal Engine'?", options: ["Epic Games","Unity Technologies","Valve Corporation","Crytek"], answer: "Epic Games"},
    {question: "O que significa 'MMORPG'?", options: ["Massively Multiplayer Online Role-Playing Game","Multiplayer Massive Online Role-Playing Game","Mobile Multi-Online Role-Playing Game","Massive Multiplayer Open Role-Playing Game"], answer: "Massively Multiplayer Online Role-Playing Game"},
    {question: "Qual o jogo é considerado o primeiro 'Survival Horror'?", options: ["Alone in the Dark","Resident Evil","Sweet Home","Silent Hill"], answer: "Sweet Home"},
    {question: "Qual o nome do protagonista de 'BioShock'?", options: ["Jack","Booker DeWitt","Andrew Ryan","Atlas"], answer: "Jack"},
    {question: "Qual o nome do criador de 'Pac-Man'?", options: ["Toru Iwatani","Shigeru Miyamoto","Hideo Kojima","Gunpei Yokoi"], answer: "Toru Iwatani"},
    {question: "Qual é o nome do planeta em 'Star Fox'?", options: ["Corneria","Venom","Aquas","Sauria"], answer: "Corneria"}
  ]
},
quimica: {
  easy: [
    {question: "Qual é o símbolo químico da água?", options: ["H2O","CO2","O2","NaCl"], answer: "H2O"},
    {question: "Qual gás respiramos principalmente?", options: ["Oxigênio","Nitrogênio","Hidrogênio","Dióxido de Carbono"], answer: "Oxigênio"},
    {question: "Qual é o estado físico do gelo?", options: ["Sólido","Líquido","Gasoso","Plasma"], answer: "Sólido"},
    {question: "Qual elemento tem o símbolo 'C'?", options: ["Carbono","Cálcio","Cloro","Cobalto"], answer: "Carbono"},
    {question: "Qual é o ácido presente no suco de limão?", options: ["Ácido cítrico","Ácido sulfúrico","Ácido acético","Ácido láctico"], answer: "Ácido cítrico"},
    {question: "Qual é a unidade básica da matéria?", options: ["Átomo","Molécula","Elétron","Neutrônio"], answer: "Átomo"},
    {question: "Qual é o metal líquido à temperatura ambiente?", options: ["Mercúrio","Ouro","Ferro","Cobre"], answer: "Mercúrio"},
    {question: "Qual é o símbolo químico do sódio?", options: ["Na","S","K","N"], answer: "Na"},
    {question: "Qual substância é usada para matar microrganismos em ferimentos?", options: ["Álcool","Água","Glicerina","Óleo"], answer: "Álcool"},
    {question: "Qual gás é liberado na combustão do carvão?", options: ["Dióxido de carbono","Oxigênio","Hidrogênio","Nitrogênio"], answer: "Dióxido de carbono"}
  ],
  medium: [
    {question: "Qual é o número atômico do oxigênio?", options: ["8","6","16","12"], answer: "8"},
    {question: "Qual é a fórmula do sal de cozinha?", options: ["NaCl","KCl","CaCO3","Na2SO4"], answer: "NaCl"},
    {question: "Qual elemento é essencial para a formação de ossos?", options: ["Cálcio","Ferro","Potássio","Magnésio"], answer: "Cálcio"},
    {question: "O que é uma reação endotérmica?", options: ["Absorve energia","Libera energia","Não envolve energia","Libera luz apenas"], answer: "Absorve energia"},
    {question: "Qual é o gás liberado nas erupções vulcânicas?", options: ["Dióxido de enxofre","Oxigênio","Hélio","Nitrogênio"], answer: "Dióxido de enxofre"},
    {question: "Qual é a massa atômica do carbono?", options: ["12","14","16","10"], answer: "12"},
    {question: "Qual é o pH de uma solução neutra?", options: ["7","0","14","5"], answer: "7"},
    {question: "Qual é a principal função dos catalisadores?", options: ["Acelerar reações químicas","Aumentar a temperatura","Mudar cor","Reagir com o produto"], answer: "Acelerar reações químicas"},
    {question: "Qual é o gás liberado quando o bicarbonato de sódio reage com vinagre?", options: ["Dióxido de carbono","Oxigênio","Hidrogênio","Nitrogênio"], answer: "Dióxido de carbono"},
    {question: "Qual é a fórmula da água oxigenada?", options: ["H2O2","H2O","HO","O2"], answer: "H2O2"}
  ],
  hard: [
    {question: "Qual é o grupo da tabela periódica do cloro?", options: ["Halogênios","Gases nobres","Alcalinos","Calcogênios"], answer: "Halogênios"},
    {question: "Qual é a massa molar do CO2?", options: ["44 g/mol","28 g/mol","32 g/mol","16 g/mol"], answer: "44 g/mol"},
    {question: "O que é uma ligação iônica?", options: ["Transferência de elétrons","Compartilhamento de elétrons","Ausência de elétrons","Ligação metálica"], answer: "Transferência de elétrons"},
    {question: "Qual é o elemento mais abundante na crosta terrestre?", options: ["Oxigênio","Ferro","Silício","Alumínio"], answer: "Oxigênio"},
    {question: "Qual ácido está presente no estômago humano?", options: ["Ácido clorídrico","Ácido sulfúrico","Ácido cítrico","Ácido nítrico"], answer: "Ácido clorídrico"},
    {question: "Qual é o nome do modelo que representa a distribuição eletrônica dos átomos?", options: ["Modelo de Bohr","Modelo de Dalton","Modelo de Rutherford","Modelo de Thomson"], answer: "Modelo de Bohr"},
    {question: "Qual é o gás utilizado em lâmpadas fluorescentes?", options: ["Mercúrio","Neônio","Argônio","Hélio"], answer: "Mercúrio"},
    {question: "O que caracteriza um composto orgânico?", options: ["Presença de carbono","Ausência de hidrogênio","Presença de oxigênio","Ausência de nitrogênio"], answer: "Presença de carbono"},
    {question: "Qual é o íon presente no sal de cozinha?", options: ["Na+ e Cl-","K+ e Cl-","Ca2+ e CO32-","Mg2+ e SO42-"], answer: "Na+ e Cl-"},
    {question: "O que é uma reação de oxidação?", options: ["Perda de elétrons","Ganho de elétrons","Liberação de calor","Formação de água"], answer: "Perda de elétrons"}
  ]
},
biologia: {
  easy: [
    {question: "Qual é a unidade básica da vida?", options: ["Célula","Tecido","Órgão","Sistema"], answer: "Célula"},
    {question: "Qual órgão produz insulina?", options: ["Pâncreas","Fígado","Rim","Estômago"], answer: "Pâncreas"},
    {question: "Qual é o processo pelo qual as plantas produzem alimento?", options: ["Fotossíntese","Respiração","Fermentação","Transpiração"], answer: "Fotossíntese"},
    {question: "Qual é o principal órgão do sistema circulatório?", options: ["Coração","Pulmão","Fígado","Rim"], answer: "Coração"},
    {question: "Qual vitamina é importante para a saúde dos ossos?", options: ["Vitamina D","Vitamina C","Vitamina A","Vitamina K"], answer: "Vitamina D"},
    {question: "Qual é o órgão responsável pela digestão dos alimentos?", options: ["Estômago","Cérebro","Coração","Rim"], answer: "Estômago"},
    {question: "Qual célula transporta oxigênio no corpo?", options: ["Glóbulo vermelho","Neurônio","Plaqueta","Linfócito"], answer: "Glóbulo vermelho"},
    {question: "Qual é o hábito saudável que ajuda a prevenir doenças?", options: ["Lavar as mãos","Ficar acordado até tarde","Evitar exercícios","Comer apenas doces"], answer: "Lavar as mãos"},
    {question: "Qual nutriente é principal fonte de energia?", options: ["Carboidrato","Proteína","Vitamina","Água"], answer: "Carboidrato"},
    {question: "Qual parte do corpo filtra o sangue?", options: ["Rim","Fígado","Coração","Pulmão"], answer: "Rim"}
  ],
  medium: [
    {question: "Qual é a função dos glóbulos brancos?", options: ["Defender o corpo contra doenças","Transportar oxigênio","Coagular sangue","Produzir hormônios"], answer: "Defender o corpo contra doenças"},
    {question: "Qual sistema é responsável pelo transporte de nutrientes pelo corpo?", options: ["Sistema circulatório","Sistema nervoso","Sistema respiratório","Sistema digestório"], answer: "Sistema circulatório"},
    {question: "Qual mineral é essencial para a formação dos ossos?", options: ["Cálcio","Ferro","Potássio","Sódio"], answer: "Cálcio"},
    {question: "Qual é o órgão do sistema respiratório responsável pelas trocas gasosas?", options: ["Pulmão","Traqueia","Faringe","Laringe"], answer: "Pulmão"},
    {question: "O que significa a sigla AIDS?", options: ["Síndrome da Imunodeficiência Adquirida","Síndrome de Inflamação Aguda","Doença Autoimune","Infecção Viral"], answer: "Síndrome da Imunodeficiência Adquirida"},
    {question: "Qual é o nome do hormônio responsável pelo crescimento?", options: ["Hormônio do crescimento","Insulina","Adrenalina","Tiroxina"], answer: "Hormônio do crescimento"},
    {question: "Qual tipo de tecido conecta músculos aos ossos?", options: ["Tendão","Cartilagem","Ligamento","Epitélio"], answer: "Tendão"},
    {question: "Qual é a função do fígado?", options: ["Desintoxicar o corpo","Bombear sangue","Produzir células sanguíneas","Regular a temperatura"], answer: "Desintoxicar o corpo"},
    {question: "Qual é a principal função dos rins?", options: ["Filtrar o sangue e eliminar resíduos","Produzir enzimas digestivas","Armazenar nutrientes","Controlar hormônios"], answer: "Filtrar o sangue e eliminar resíduos"},
    {question: "Qual é a função das plaquetas?", options: ["Coagular o sangue","Transportar oxigênio","Defender o corpo","Produzir hormônios"], answer: "Coagular o sangue"}
  ],
  hard: [
    {question: "Qual é a sequência correta do sistema digestório?", options: ["Boca, esôfago, estômago, intestino delgado, intestino grosso","Esôfago, boca, intestino grosso, estômago, intestino delgado","Boca, estômago, intestino grosso, intestino delgado, esôfago","Intestino delgado, boca, estômago, intestino grosso, esôfago"], answer: "Boca, esôfago, estômago, intestino delgado, intestino grosso"},
    {question: "Qual a principal função dos alvéolos pulmonares?", options: ["Troca de gases entre sangue e ar","Filtrar toxinas","Produzir muco","Controlar a respiração"], answer: "Troca de gases entre sangue e ar"},
    {question: "Qual vitamina é importante para a coagulação do sangue?", options: ["Vitamina K","Vitamina D","Vitamina C","Vitamina B12"], answer: "Vitamina K"},
    {question: "Qual parte do cérebro é responsável pela memória?", options: ["Hipocampo","Cerebelo","Bulbo","Tálamo"], answer: "Hipocampo"},
    {question: "Qual hormônio é produzido pela glândula tireoide?", options: ["Tiroxina","Insulina","Adrenalina","Cortisol"], answer: "Tiroxina"},
    {question: "O que é homeostase?", options: ["Equilíbrio do ambiente interno do corpo","Processo de digestão","Transporte de oxigênio","Coagulação do sangue"], answer: "Equilíbrio do ambiente interno do corpo"},
    {question: "Qual é a principal função do sistema linfático?", options: ["Defesa do organismo contra infecções","Produzir hormônios","Transportar oxigênio","Regular a pressão arterial"], answer: "Defesa do organismo contra infecções"},
    {question: "Qual é a função da insulina?", options: ["Reduzir a glicose no sangue","Aumentar a pressão arterial","Produzir proteínas","Estimular crescimento"], answer: "Reduzir a glicose no sangue"},
    {question: "Qual vitamina previne o escorbuto?", options: ["Vitamina C","Vitamina D","Vitamina A","Vitamina B12"], answer: "Vitamina C"},
    {question: "O que caracteriza uma dieta balanceada?", options: ["Inclui carboidratos, proteínas, gorduras, vitaminas e minerais","Só inclui proteínas","Inclui apenas vegetais","Só inclui carboidratos"], answer: "Inclui carboidratos, proteínas, gorduras, vitaminas e minerais"}
  ]
},
brasil: {
  easy: [
    {question: "Qual é a capital do Brasil?", options: ["Brasília","São Paulo","Rio de Janeiro","Salvador"], answer: "Brasília"},
    {question: "Qual estado brasileiro tem Salvador como capital?", options: ["Bahia","Pernambuco","Ceará","Rio Grande do Norte"], answer: "Bahia"},
    {question: "Qual é a capital de São Paulo?", options: ["São Paulo","Campinas","Ribeirão Preto","Santos"], answer: "São Paulo"},
    {question: "Qual é a capital do Rio de Janeiro?", options: ["Rio de Janeiro","Niterói","Petrópolis","Angra dos Reis"], answer: "Rio de Janeiro"},
    {question: "Qual é a capital do Paraná?", options: ["Curitiba","Londrina","Maringá","Foz do Iguaçu"], answer: "Curitiba"},
    {question: "Qual estado tem Fortaleza como capital?", options: ["Ceará","Piauí","Rio Grande do Norte","Paraíba"], answer: "Ceará"},
    {question: "Qual é a capital de Minas Gerais?", options: ["Belo Horizonte","Uberlândia","Ouro Preto","Juiz de Fora"], answer: "Belo Horizonte"},
    {question: "Qual estado tem a cidade de Manaus?", options: ["Amazonas","Pará","Roraima","Acre"], answer: "Amazonas"},
    {question: "Qual é a capital do Rio Grande do Sul?", options: ["Porto Alegre","Caxias do Sul","Pelotas","Santa Maria"], answer: "Porto Alegre"},
    {question: "Qual estado tem Goiânia como capital?", options: ["Goiás","Mato Grosso","Mato Grosso do Sul","Minas Gerais"], answer: "Goiás"}
  ],
  medium: [
    {question: "Qual é a capital de Pernambuco?", options: ["Recife","Olinda","Caruaru","Jaboatão dos Guararapes"], answer: "Recife"},
    {question: "Qual estado tem a cidade de Florianópolis?", options: ["Santa Catarina","Paraná","Rio Grande do Sul","Espírito Santo"], answer: "Santa Catarina"},
    {question: "Qual é a capital do Amazonas?", options: ["Manaus","Parintins","Coari","Itacoatiara"], answer: "Manaus"},
    {question: "Qual estado tem Cuiabá como capital?", options: ["Mato Grosso","Mato Grosso do Sul","Goiás","Rondônia"], answer: "Mato Grosso"},
    {question: "Qual é a capital do Espírito Santo?", options: ["Vitória","Vila Velha","Guarapari","Cariacica"], answer: "Vitória"},
    {question: "Qual estado tem Natal como capital?", options: ["Rio Grande do Norte","Ceará","Paraíba","Pernambuco"], answer: "Rio Grande do Norte"},
    {question: "Qual é a capital de Alagoas?", options: ["Maceió","Arapiraca","Palmeira dos Índios","Penedo"], answer: "Maceió"},
    {question: "Qual estado tem a cidade de Porto Velho?", options: ["Rondônia","Roraima","Acre","Amapá"], answer: "Rondônia"},
    {question: "Qual é a capital do Maranhão?", options: ["São Luís","Imperatriz","Caxias","Bacabal"], answer: "São Luís"},
    {question: "Qual estado tem Teresina como capital?", options: ["Piauí","Ceará","Maranhão","Bahia"], answer: "Piauí"}
  ],
  hard: [
    {question: "Qual é a capital de Roraima?", options: ["Boa Vista","Manaus","Macapá","Porto Velho"], answer: "Boa Vista"},
    {question: "Qual estado tem a cidade de Joinville?", options: ["Santa Catarina","Paraná","Rio Grande do Sul","São Paulo"], answer: "Santa Catarina"},
    {question: "Qual é a capital do Acre?", options: ["Rio Branco","Cruzeiro do Sul","Sena Madureira","Tarauacá"], answer: "Rio Branco"},
    {question: "Qual estado tem a cidade de Foz do Iguaçu?", options: ["Paraná","Santa Catarina","São Paulo","Mato Grosso do Sul"], answer: "Paraná"},
    {question: "Qual é a capital do Tocantins?", options: ["Palmas","Gurupi","Araguaína","Porto Nacional"], answer: "Palmas"},
    {question: "Qual estado tem a cidade de Maringá?", options: ["Paraná","São Paulo","Santa Catarina","Minas Gerais"], answer: "Paraná"},
    {question: "Qual é a capital de Sergipe?", options: ["Aracaju","Nossa Senhora do Socorro","Lagarto","Itabaiana"], answer: "Aracaju"},
    {question: "Qual estado tem a cidade de Campina Grande?", options: ["Paraíba","Pernambuco","Ceará","Rio Grande do Norte"], answer: "Paraíba"},
    {question: "Qual é a capital do Pará?", options: ["Belém","Santarém","Marabá","Ananindeua"], answer: "Belém"},
    {question: "Qual estado tem a cidade de Itajaí?", options: ["Santa Catarina","Paraná","São Paulo","Rio Grande do Sul"], answer: "Santa Catarina"}
  ]
},
paises: {
  easy: [
    {question: "Qual é a capital da França?", options: ["Paris","Londres","Madri","Berlim"], answer: "Paris"},
    {question: "Qual país tem a bandeira com círculos vermelhos no fundo branco?", options: ["Japão","China","Coreia do Sul","Turquia"], answer: "Japão"},
    {question: "Qual é o continente onde fica o Egito?", options: ["África","Ásia","Europa","América"], answer: "África"},
    {question: "Qual país é conhecido como a Terra do Sol Nascente?", options: ["Japão","China","Índia","Tailândia"], answer: "Japão"},
    {question: "Qual é a língua oficial do Brasil?", options: ["Português","Espanhol","Inglês","Francês"], answer: "Português"},
    {question: "Qual país tem o maior território do mundo?", options: ["Rússia","Canadá","China","Estados Unidos"], answer: "Rússia"},
    {question: "Qual é a moeda oficial dos Estados Unidos?", options: ["Dólar","Euro","Libra","Iene"], answer: "Dólar"},
    {question: "Qual país é famoso por suas tulipas e moinhos de vento?", options: ["Países Baixos","Alemanha","Bélgica","Suíça"], answer: "Países Baixos"},
    {question: "Qual é a capital da Itália?", options: ["Roma","Milão","Veneza","Florença"], answer: "Roma"},
    {question: "Qual país tem a maior população do mundo?", options: ["China","Índia","Estados Unidos","Indonésia"], answer: "China"}
  ],
  medium: [
    {question: "Qual é a capital da Austrália?", options: ["Camberra","Sydney","Melbourne","Brisbane"], answer: "Camberra"},
    {question: "Qual país é conhecido pelos seus canais e gôndolas?", options: ["Itália","Holanda","Espanha","França"], answer: "Itália"},
    {question: "Qual país tem o maior número de ilhas?", options: ["Suécia","Indonésia","Filipinas","Noruega"], answer: "Suécia"},
    {question: "Qual é a capital do Canadá?", options: ["Ottawa","Toronto","Vancouver","Montreal"], answer: "Ottawa"},
    {question: "Qual país é famoso por seu deserto de Gobi?", options: ["China","Mongólia","Índia","Paquistão"], answer: "China"},
    {question: "Qual país tem a maior economia da Europa?", options: ["Alemanha","França","Reino Unido","Itália"], answer: "Alemanha"},
    {question: "Qual é a capital da Argentina?", options: ["Buenos Aires","Córdoba","Rosário","Mendoza"], answer: "Buenos Aires"},
    {question: "Qual país tem a bandeira com uma folha de bordo?", options: ["Canadá","Estados Unidos","Reino Unido","Austrália"], answer: "Canadá"},
    {question: "Qual país africano tem o maior território?", options: ["Argélia","Sudão","Líbia","Níger"], answer: "Argélia"},
    {question: "Qual é a capital da Turquia?", options: ["Ancara","Istambul","Bursa","Esmirna"], answer: "Ancara"}
  ],
  hard: [
    {question: "Qual país possui a cidade mais populosa da África?", options: ["Nigéria","Egito","África do Sul","Quênia"], answer: "Nigéria"},
    {question: "Qual país tem como idioma oficial o sueco?", options: ["Suécia","Noruega","Finlândia","Dinamarca"], answer: "Suécia"},
    {question: "Qual é a capital da Nova Zelândia?", options: ["Wellington","Auckland","Christchurch","Hamilton"], answer: "Wellington"},
    {question: "Qual país é conhecido como 'Terra dos Incas'?", options: ["Peru","Chile","Bolívia","Equador"], answer: "Peru"},
    {question: "Qual país europeu possui dois idiomas oficiais, francês e holandês?", options: ["Bélgica","Suíça","Luxemburgo","Países Baixos"], answer: "Bélgica"},
    {question: "Qual país possui o maior número de vulcões ativos?", options: ["Indonésia","Japão","Itália","México"], answer: "Indonésia"},
    {question: "Qual país africano tem o maior número de línguas oficiais?", options: ["África do Sul","Nigéria","Etiópia","Camarões"], answer: "África do Sul"},
    {question: "Qual país tem a maior reserva de petróleo do mundo?", options: ["Venezuela","Arábia Saudita","Canadá","Irã"], answer: "Venezuela"},
    {question: "Qual país europeu tem a capital mais alta em altitude?", options: ["Andorra","Suíça","Áustria","Liechtenstein"], answer: "Andorra"},
    {question: "Qual país asiático é formado por mais de 7.000 ilhas?", options: ["Filipinas","Indonésia","Japão","Malásia"], answer: "Filipinas"}
  ]
},
marcas: {
  easy: [
    {question: "Qual é o logotipo da Apple?", options: ["Maçã mordida","Banana","Cereja","Pera"], answer: "Maçã mordida"},
    {question: "Qual marca tem o símbolo de uma 'swoosh'?", options: ["Nike","Adidas","Puma","Reebok"], answer: "Nike"},
    {question: "Qual marca é famosa pelo seu 'M' dourado?", options: ["McDonald's","Burger King","KFC","Subway"], answer: "McDonald's"},
    {question: "Qual cor é associada à Coca-Cola?", options: ["Vermelho","Azul","Verde","Amarelo"], answer: "Vermelho"},
    {question: "Qual marca tem um coelho como mascote em alguns produtos?", options: ["Energizer","Duracell","Nestlé","Pepsi"], answer: "Energizer"},
    {question: "Qual logotipo tem quatro anéis entrelaçados?", options: ["Audi","BMW","Toyota","Mercedes"], answer: "Audi"},
    {question: "Qual marca é famosa pelo seu ursinho de pelúcia colorido?", options: ["Haribo","Lindt","Nestlé","Ferrero"], answer: "Haribo"},
    {question: "Qual é a marca do famoso tênis com três listras?", options: ["Adidas","Nike","Puma","Reebok"], answer: "Adidas"},
    {question: "Qual logotipo é uma maçã mordida?", options: ["Apple","Microsoft","Google","Samsung"], answer: "Apple"},
    {question: "Qual empresa tem o logotipo de uma concha?", options: ["Shell","Exxon","BP","Chevron"], answer: "Shell"}
  ],
  medium: [
    {question: "Qual marca de carros tem um cavalo empinado no logotipo?", options: ["Ferrari","Porsche","Lamborghini","Maserati"], answer: "Ferrari"},
    {question: "Qual marca tem um pássaro azul como logotipo?", options: ["Twitter","Facebook","LinkedIn","Instagram"], answer: "Twitter"},
    {question: "Qual marca de chocolates usa o símbolo de um ursinho dourado?", options: ["Toblerone","Haribo","Nestlé","Lindt"], answer: "Haribo"},
    {question: "Qual é a marca de fast food com um logotipo de coroa?", options: ["Burger King","Wendy's","KFC","Pizza Hut"], answer: "Burger King"},
    {question: "Qual empresa de tecnologia tem um logotipo com quatro quadrados coloridos?", options: ["Microsoft","Google","IBM","Intel"], answer: "Microsoft"},
    {question: "Qual marca de carros tem uma estrela de três pontas como logotipo?", options: ["Mercedes-Benz","BMW","Audi","Volvo"], answer: "Mercedes-Benz"},
    {question: "Qual marca tem um logotipo de uma abelha?", options: ["Bumble Bee","Lipton","Beech-Nut","Honeywell"], answer: "Bumble Bee"},
    {question: "Qual empresa de bebidas tem uma coroa como logotipo em sua cerveja mais famosa?", options: ["Corona","Heineken","Budweiser","Stella Artois"], answer: "Corona"},
    {question: "Qual marca famosa tem um logotipo verde com uma sereia?", options: ["Starbucks","Dunkin' Donuts","Costa Coffee","Peet's Coffee"], answer: "Starbucks"},
    {question: "Qual marca tem uma bola de futebol estilizada como parte do logotipo?", options: ["Puma","Adidas","Nike","Reebok"], answer: "Adidas"}
  ],
  hard: [
    {question: "Qual é a cor principal do logotipo da Ferrari?", options: ["Amarelo","Vermelho","Preto","Branco"], answer: "Amarelo"},
    {question: "Qual empresa tem um logotipo com uma tartaruga como símbolo?", options: ["Tortuga","Turtle Wax","Reptile Inc","Shell"], answer: "Turtle Wax"},
    {question: "Qual marca de carros tem um logotipo com uma serpente e uma cruz?", options: ["Alfa Romeo","Maserati","Ferrari","Lancia"], answer: "Alfa Romeo"},
    {question: "Qual empresa tem um logotipo com a letra 'M' estilizada como uma montanha?", options: ["McLaren","Monster","Marmot","Mountain Dew"], answer: "McLaren"},
    {question: "Qual logotipo de tecnologia é composto por um 'ponto' vermelho sobre um círculo?", options: ["Pinterest","Reddit","Dribbble","YouTube"], answer: "Pinterest"},
    {question: "Qual marca de carros tem um logotipo com uma lâmpada estilizada?", options: ["Opel","Renault","Ford","Peugeot"], answer: "Opel"},
    {question: "Qual empresa de bebidas tem um logotipo com um touro vermelho?", options: ["Red Bull","Monster","Rockstar","Burn"], answer: "Red Bull"},
    {question: "Qual marca de moda tem um logotipo de uma cabeça de cavalo?", options: ["Hermès","Ralph Lauren","Gucci","Burberry"], answer: "Hermès"},
    {question: "Qual logotipo famoso tem um triângulo invertido com uma letra 'A'?", options: ["Adobe","Delta","Acer","Avon"], answer: "Adobe"},
    {question: "Qual marca de pneus usa um homem alado no logotipo?", options: ["Michelin","Goodyear","Pirelli","Bridgestone"], answer: "Goodyear"}
  ]
},
enem: {
    easy: [
    {question: "Qual é o valor aproximado de π (pi)?", options: ["3,14","3,15","3,10","3,00"], answer: "3,14"},
    {question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis","José de Alencar","Graciliano Ramos","Carlos Drummond de Andrade"], answer: "Machado de Assis"},
    {question: "Em que continente está localizado o Egito?", options: ["África","Ásia","Europa","América"], answer: "África"},
    {question: "Qual é a unidade básica da vida?", options: ["Célula","Tecido","Órgão","Molécula"], answer: "Célula"},
    {question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral","Cristóvão Colombo","Vasco da Gama","Fernão de Magalhães"], answer: "Pedro Álvares Cabral"},
    {question: "Qual revolução marcou o início da Idade Moderna?", options: ["Queda de Constantinopla","Revolução Francesa","Independência dos EUA","Revolução Industrial"], answer: "Queda de Constantinopla"},
    {question: "Qual o principal objetivo da tese em uma redação?", options: ["Apresentar o ponto de vista","Contar uma história","Explicar regras gramaticais","Listar fatos"], answer: "Apresentar o ponto de vista"},
    {question: "Qual é o planeta mais próximo do Sol?", options: ["Mercúrio","Vênus","Terra","Marte"], answer: "Mercúrio"},
    {question: "Qual órgão produz insulina?", options: ["Pâncreas","Fígado","Rim","Estômago"], answer: "Pâncreas"},
    {question: "Qual é a função do coração?", options: ["Bombear sangue","Filtrar ar","Produzir hormônios","Armazenar energia"], answer: "Bombear sangue"}
  ],
    medium: [
    {question: "Qual empresa criou 'Grand Theft Auto' (GTA)?", options: ["Rockstar Games","Ubisoft","EA Games","Activision"], answer: "Rockstar Games"},
    {question: "Qual jogo popularizou o gênero MOBA?", options: ["League of Legends","Dota 2","StarCraft","World of Warcraft"], answer: "League of Legends"},
    {question: "O que é um NPC em jogos?", options: ["Non-Playable Character","New Player Character","Navegação Pessoal do Computador","Não Pode Conectar"], answer: "Non-Playable Character"},
    {question: "Qual é a função da fotossíntese nas plantas?", options: ["Produzir alimento usando luz","Respirar oxigênio","Reproduzir","Absorver nutrientes do solo"], answer: "Produzir alimento usando luz"},
    {question: "O que ocorre na meiose?", options: ["Formação de gametas","Divisão de células somáticas","Produção de proteínas","Respiração celular"], answer: "Formação de gametas"},
    {question: "Qual é a principal moeda de troca em 'Minecraft'?", options: ["Esmeralda","Ouro","Diamante","Ferro"], answer: "Esmeralda"},
    {question: "Qual o nome do planeta natal de 'Halo'?", options: ["Reach","Earth","Installation 07","Covenant"], answer: "Reach"},
    {question: "Qual é a fórmula química da glicose?", options: ["C6H12O6","H2O","CO2","C12H22O11"], answer: "C6H12O6"},
    {question: "O que caracteriza uma reação exotérmica?", options: ["Libera calor","Absorve calor","Não há troca de energia","Produz apenas gás"], answer: "Libera calor"},
    {question: "O que significa 'MMORPG'?", options: ["Massively Multiplayer Online Role-Playing Game","Multiplayer Massive Online Role-Playing Game","Mobile Multi-Online Role-Playing Game","Massive Multiplayer Open Role-Playing Game"], answer: "Massively Multiplayer Online Role-Playing Game"}
  ],
  hard: [
    {question: "Qual o ano de lançamento do primeiro 'The Legend of Zelda'?", options: ["1986","1987","1985","1988"], answer: "1986"},
    {question: "Qual jogo introduziu o sistema de combate 'Active Time Battle' (ATB)?", options: ["Final Fantasy IV","Final Fantasy VII","Chrono Trigger","Dragon Quest"], answer: "Final Fantasy IV"},
    {question: "Qual o vilão principal em 'Half-Life'?", options: ["G-Man","Dr. Breen","Nihilanth","Combine"], answer: "G-Man"},
    {question: "Qual jogo é considerado o primeiro 'Survival Horror'?", options: ["Alone in the Dark","Resident Evil","Sweet Home","Silent Hill"], answer: "Sweet Home"},
    {question: "Qual o nome do protagonista de 'BioShock'?", options: ["Jack","Booker DeWitt","Andrew Ryan","Atlas"], answer: "Jack"},
    {question: "Qual o nome do criador de 'Pac-Man'?", options: ["Toru Iwatani","Shigeru Miyamoto","Hideo Kojima","Gunpei Yokoi"], answer: "Toru Iwatani"},
    {question: "Qual a resolução padrão do primeiro 'Doom'?", options: ["320x200","640x480","256x256","160x100"], answer: "320x200"},
    {question: "Qual a primeira consola a usar cartuchos de jogo?", options: ["Magnavox Odyssey","Atari 2600","NES","Sega Master System"], answer: "Magnavox Odyssey"},
    {question: "Em qual cidade fictícia se passa 'Cyberpunk 2077'?", options: ["Night City","Los Santos","Raccoon City","Midgar"], answer: "Night City"},
    {question: "Qual o planeta em 'Star Fox'?", options: ["Corneria","Venom","Aquas","Sauria"], answer: "Corneria"}
  ],
}
};