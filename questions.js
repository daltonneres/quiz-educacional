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
  }
};
