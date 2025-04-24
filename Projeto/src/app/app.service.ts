import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private goleiros = [
    { nome: 'Léo Jardim', imagem: 'assets/leojardim.png' },
    { nome: 'Daniel Fuzato', imagem: 'assets/danielfuzato.png' },
    { nome: 'Pablo', imagem: 'assets/Pablo.png' },
    { nome: 'Phillipe Gabriel', imagem: 'assets/phillipegabriel.png' },
  ]

  private ld = [
    { nome: 'Paulo Henrique', imagem: 'assets/paulohenrique.png' },
    { nome: 'Puma Rodríguez', imagem: 'assets/puma.png' },
  ]

  private zagueiro = [
    { nome: 'João Victor', imagem: 'assets/joaovictor.png' },
    { nome: 'Mauricio Lemos', imagem: 'assets/mauriciolemos.png' },
    { nome: 'Lucas Freitas', imagem: 'assets/lucasfreitas.png' },
    { nome: 'Lucas Oliveira', imagem: 'assets/lucasoliveira.png' },
  ]

  private le = [
    { nome: 'Lucas Piton', imagem: 'assets/lucaspiton.png' },
    { nome: 'Victor Luís', imagem: 'assets/victorluis.png' },
  ]

  private volantes = [
    { nome: 'Tchê tchê', imagem: 'assets/tche.png' },
    { nome: 'Souza', imagem: 'assets/souza.png' },
    { nome: 'Juan Sforza', imagem: 'assets/juan.png' },
    { nome: 'Jair', imagem: 'assets/jair.png' },
    { nome: 'Mateus Carvalho', imagem: 'assets/mateuscarvalho.png' },
    { nome: 'Paulinho', imagem: 'assets/paulinho.png' },
    { nome: 'Hugo Moura', imagem: 'assets/hugomoura.png' },
  ]

  private meio = [
    { nome: 'Coutinho', imagem: 'assets/coutinho.png' },
    { nome: 'Payet', imagem: 'assets/payet.png' },
    { nome: 'Alex Teixeira', imagem: 'assets/alexteixeira.png' },
    { nome: 'Maxime Dominguez', imagem: 'assets/maximedominguez.png' },
    { nome: 'Estrella', imagem: 'assets/estrella.png' },
  ]

  private atacantes = [
    { nome: 'Nuno Moreira', imagem: 'assets/nuno.png' },
    { nome: 'Garre', imagem: 'assets/garre.png' },
    { nome: 'Loide Augusto', imagem: 'assets/loide.png' },
    { nome: 'Jean David', imagem: 'assets/jean.png' },
    { nome: 'David', imagem: 'assets/david.png' },
    { nome: 'Adson', imagem: 'assets/adson.png' },
    { nome: 'Rayan', imagem: 'assets/rayan.png' },
    { nome: 'Vegetti', imagem: 'assets/vegetti.png' },
  ]

  // Histórias
  listaHistorias = [
    {
      titulo: 'Historia 1',
      descricao: 'A Primeira Vitória Internacional: O Início de uma Nova Era para o Futebol Brasileiro (1923)',
      link: '1',
      imagem: 'assets/venda-vasco-1280x720.jpg',
      historia: `Em 1923, o futebol brasileiro ainda estava em seus primeiros passos no cenário mundial. A seleção brasileira ainda não havia disputado uma Copa do Mundo, e o Brasil estava começando a formar suas equipes para competir com as potências europeias e sul-americanas. Nesse contexto, o Vasco da Gama se destacou ao ser convidado para participar da Copa Rio Internacional, um torneio de caráter internacional que seria o palco da primeira grande disputa internacional do futebol brasileiro. Organizado no Rio de Janeiro, o torneio contou com equipes renomadas como Juventus, Milan e a seleção do Uruguai, além de clubes da Argentina e do Brasil.

      Para o Vasco, que à época ainda não era uma potência do futebol nacional em termos de reconhecimento mundial, essa competição representava uma enorme oportunidade de mostrar sua força ao mundo. O time vascaíno, composto por jogadores como Nílton Santos e Carlitos, fez história desde o primeiro jogo. Quando o Vasco enfrentou o Milan, muitos especialistas e torcedores acreditavam que a equipe brasileira não tinha chances contra os gigantes do futebol europeu. Porém, a equipe vascaína fez um jogo de pura estratégia, garra e técnica, derrotando os italianos por 3 a 0 em um jogo histórico que fez com que o mundo olhasse para o futebol brasileiro com novos olhos.

      A vitória foi um marco para o futebol do Brasil, pois mostrou que o país tinha condições de competir de igual para igual com as melhores equipes da Europa. O Vasco não foi apenas um clube vencedor naquele torneio, mas se tornou um símbolo da ascensão do futebol brasileiro no cenário internacional. Esse feito foi o início de uma longa jornada de conquistas, revelando ao mundo o talento e a paixão pelo futebol que estavam crescendo no Brasil. A vitória histórica do Vasco foi um verdadeiro divisor de águas, inaugurando uma nova era para o futebol brasileiro, que a partir de então começaria a se destacar cada vez mais no mundo do esporte.`,
    },
    {
      titulo: 'Historia 2',
      descricao: ' O Milagre de 1945: A Superação de Obstáculos e a Conquista Carioca (1945)',
      link: '2',
      imagem: 'assets/venda-vasco-1280x720.jpg',
      historia: ` Durante os anos 1940, o Vasco da Gama passava por uma fase de grande turbulência, marcada por dificuldades financeiras e pela competição acirrada no Campeonato Carioca. No entanto, foi em 1945 que o clube experimentaria uma das suas maiores glórias, tornando-se uma verdadeira lenda do futebol brasileiro. O Campeonato Carioca daquele ano se configurava como um dos mais dramáticos de todos os tempos, com o Vasco se encontrando em uma situação de extrema necessidade.

    O time precisava vencer o Flamengo em um dos clássicos mais aguardados do campeonato, além de depender de outros resultados para garantir o título. O Flamengo estava em excelente fase, e sua vitória parecia uma certeza, o que tornava a missão do Vasco ainda mais difícil. No entanto, o time de São Januário, treinado por técnicos visionários e com jogadores como o lendário atacante Ademir de Menezes, se entregou completamente ao jogo e fez o impossível se tornar realidade.

    O clássico, que acontecia no Estádio de São Januário, foi um espetáculo de emoções. O Flamengo, que estava em vantagem e parecia prestes a se consagrar campeão, viu-se surpreendido por uma virada histórica do Vasco. Com gols de Ademir e de outros jogadores chave, o Vasco venceu por 3 a 1, em um jogo marcado por sua capacidade de superação diante da adversidade. Mas o milagre não parou por aí. A combinação de outros resultados também favoreceu o Vasco, e o título carioca foi conquistado de maneira épica. Essa conquista foi chamada de "Milagre de 1945", não apenas pela vitória sobre o Flamengo, mas também pela habilidade do time em reverter uma situação completamente desfavorável e conquistar um título que parecia impossível.

    O "Milagre de 1945" não é apenas lembrado como uma grande vitória, mas como um exemplo de resiliência, de como o espírito de equipe e a determinação podem superar até os obstáculos mais difíceis. Para os vascaínos, essa conquista representa a essência do que é ser vascaíno: nunca desistir, nunca abaixar a cabeça, e sempre lutar até o fim, independentemente das circunstâncias. Até hoje, esse título é considerado uma das maiores glórias da história do clube e um dos momentos mais emocionantes do futebol carioca.`,
    },
    {
      titulo: 'Historia 3',
      descricao: 'O Vasco e a Inclusão no Futebol Brasileiro: Um Clube Pioneiro em Diversidade (1924)',
      link: '3',
      imagem: 'assets/venda-vasco-1280x720.jpg',
      historia: `No início do século XX, o futebol brasileiro ainda estava profundamente marcado por uma forte exclusão social. O esporte era predominantemente praticado por pessoas de classes mais altas e por indivíduos brancos, sendo muito difícil para negros e operários terem acesso ao jogo e aos clubes. No entanto, o Vasco da Gama, com sua visão à frente de seu tempo, se destacou ao adotar uma postura inclusiva e revolucionária, que mudaria para sempre o cenário do futebol nacional.

      Em 1924, o Vasco tomou uma decisão ousada e histórica: permitir que jogadores negros e operários, até então marginalizados tanto no futebol quanto na sociedade, fossem incluídos no time. Na época, muitos clubes de futebol, especialmente os maiores do Rio de Janeiro, excluíam sistematicamente atletas negros e de classe trabalhadora, mantendo uma visão elitista e racista do esporte. Mas o Vasco, sob a liderança de presidentes como José do Patrocínio e com o apoio de figuras importantes do clube, que eram contra a discriminação racial, iniciou uma verdadeira revolução dentro do futebol.

      Essa postura de inclusão foi claramente simbolizada pela entrada de grandes jogadores negros no clube, como o lateral esquerdo Fausto, que se tornou ícone do Vasco e da seleção brasileira. O Vasco da Gama, com sua diversidade no elenco e no apoio a atletas de diferentes origens sociais e raciais, logo se transformou em um exemplo de resistência contra o racismo e a exclusão, não apenas no futebol, mas na sociedade brasileira como um todo. A inclusão de negros e operários representou um grande passo na luta contra o preconceito racial, e o Vasco passou a ser visto como um clube que estava alinhado com os valores de igualdade e justiça social.

      Essa atitude inovadora do Vasco fez com que o clube se tornasse um verdadeiro símbolo de luta e resistência, sendo respeitado e admirado por torcedores de todo o Brasil. O clube não apenas moldou sua história com grandes conquistas no campo, mas também foi fundamental para a mudança da estrutura social do futebol brasileiro, abrindo portas para o que viria a ser uma grande transformação nas décadas seguintes. O Vasco se tornou um clube que não só jogava futebol, mas também fazia história na luta por igualdade racial, fazendo com que o esporte se tornasse mais representativo da diversidade e das lutas da sociedade brasileira.`,
    },
  ];

  listaEstadio = [
    {
      titulo: 'INTRODUÇÃO',
      imagem: 'assets/Sao-Januario1-1024x769.png',
      historia: `O Estádio Vasco da Gama, nosso querido estádio da rua São Januário, completa 96 anos neste 21 de abril de 2023. Sua construção se deu na sequência da luta do Club de Regatas Vasco da Gama por um futebol democrático e inclusivo, uma demonstração incontestável da força desse colosso do esporte mundial, que mesmo possuindo o maior número de torcedores e já tendo sido campeão do Rio de Janeiro, então maior metrópole do Brasil, ainda era visto com preconceito pelos rivais, sendo tratado como um clube de menor importância sob a “justificativa” de não possuir uma arena esportiva. A resposta do Vasco da Gama não poderia ser mais eloquente e vascaína. O Vasco não construiria apenas uma praça esportiva, mas o então maior Stadium da América do Sul! O Estádio de São Januário, inaugurado em 1927, foi construído com as lágrimas, o suor e o dinheiro dos vascaínos. Um verdadeiro templo do povo, construído para reafirmar a grandeza do Vasco e os ideais que o Clube defende desde a sua Fundação. O estádio vascaíno é uma obra monumental, que, assim como a “Resposta Histórica”, materializa a alma do Vasco da Gama que desafiou seus rivais ao ficar ao lado dos seus atletas, enfrentando o racismo, o preconceito social e a xenofobia. São Januário foi a resposta definitiva dos vascaínos aos poderosos da época. Sua construção acabou por demolir a estrutura racista e preconceituosa que dominava o futebol. A realização desse grande feito, um marco para o esporte do Brasil, não seria possível sem a união da imensa colônia portuguesa do Rio de Janeiro com os milhares de brasileiros que passaram a admirar e seguir o C.R. Vasco da Gama.`,
    },
    {
      titulo: 'O TERRENO',
      imagem: 'assets/o-terreno-vasco.jpg',
      historia: `No dia 28 de março de 1925, o C.R. Vasco da Gama adquiriu o terreno para a construção do seu estádio. A área foi comprada da Sociedade Anonima Lameiro. O valor do terreno, uma área de 55.445 m2, foi de 609:895$000 (seiscentos e nove contos e oitocentos e noventa e cinco mil réis). O responsável pela busca do terreno foi o dirigente vascaíno Manoel Joaquim Pereira Ramos. Ele encontrou a grande área onde hoje está erguido São Januário, na encosta do Morro do Pedregulho, no bairro de São Cristóvão, na zona norte do Rio de Janeiro.`,
    },
    {
      titulo: 'A COLINA HISTÓRICA / O GIGANTE DA COLINA',
      imagem: 'assets/casarao-da-colina-vasco-1024x696.webp',
      historia: `No local onde hoje encontra-se a Barreira do Vasco havia um casarão da antiga “Chácara do Bastos”, também chamada de “Chácara do Pedregulho”, popularmente conhecida pelos vascaínos como “Chacrinha do Imperador”. Essa elevação de terra teria inspirado a alcunha “Colina Histórica” ou “Gigante da Colina”, que inicialmente fazia referência ao estádio e, ao longo do tempo, ao próprio Club de Regatas Vasco da Gama. Entre as décadas de 20 e 30 do século XX, a colina foi desbastada. A Chácara do Bastos leva o sobrenome de Antônio José Gomes Pereira Bastos, o Barão Pereira Bastos, dono da Imperial Fábrica de Cerveja. Bastos era proprietário da área no final da primeira metade e início da segunda metade do século XIX. O vasto terreno servia para a produção de diversos frutos e plantas, como a cevada.`,
    },
    {
      titulo: 'HASTEAMENTO DA BANDEIRA DO VASCO',
      imagem: 'assets/hasteamento-bandeira-vasco-1024x777.jpg',
      historia: `No dia 20 de dezembro de 1925, o Vasco hasteou o pavilhão do Clube no terreno em que construiria o seu estádio. O mastro de ferro foi doado por Manoel Joaquim Pereira Ramos, responsável por encontrar o terreno. A bandeira teria sido doada por Raul da Silva Campos.`,
    },
    {
      titulo: 'A FILIAÇÃO À AMEA',
      imagem: 'assets/filiacao-amea-vasco-679x1024.jpg',
      historia: `Em 1925, o Vasco foi novamente convidado a participar da Associação Metropolitana de Sports Athleticos (AMEA), sendo alçado à figura de fundador da entidade. O convite não foi fruto de qualquer arrependimento da solicitação de exclusão dos atletas vascaínos, pois mais uma vez tentaram impedir que atuassem alguns dos Camisas Negras, como ficou conhecido o histórico time do Vasco, Campeão Carioca de 1923. O retorno do Vasco se deu por pressão popular e financeira. Como o Vasco tinha a maior e mais engajada torcida do Rio de Janeiro, os lucros obtidos nos jogos contra a agremiação vascaína fizeram falta aos cofres dos clubes da Zona Sul ligados às elites da época, que em 1924 não contaram com a massa vascaína abarrotando os estádios em jogos da AMEA. Dessa forma, o Vasco, graças à sua torcida e jogadores, se impôs dentro do campo esportivo do futebol carioca e a inauguração do Estádio de São Januário foi a resposta definitiva à afronta contra o Clube, bem como fortaleceu a posição da agremiação vascaína contra os preconceitos em voga no esporte e na sociedade.`,
    },
    {
      titulo: 'O FUTEBOL NESSE PERÍODO',
      imagem: 'assets/revista-esportiva-vasco-1024x758.webp',
      historia: `No período de compra de terreno e construção do estádio (1925-1927), os resultados do futebol não trouxeram novamente a conquista do Campeonato Carioca. Concentrados na gigantesca missão de erguer seu stadium, os dirigentes vascaínos tiveram de lidar com conflitos internos com o técnico Ramón Platero, que inclusive envolveu os jogadores. A conquista do Torneio Início (1926) e o vice-campeonato Carioca (1926) não amenizaram a situação. O técnico uruguaio foi substituído pelo inglês Harry Welfare, cujo trabalho somente daria melhores frutos em 1929, com a conquista do Campeonato Carioca. Em 1928, o Vasco conquistou o vice-campeonato da competição.`,
    },
  ];

  //Titulos
  listaTitulos = [
    {
      titulo: '1923- Campeonato Carioca',
      imagem: 'assets/Novo-Projeto-8.png',
    },
    {
      titulo: '1953- Torneio Rivadávia Corrêa Meyer',
      imagem: 'assets/1953-1.png',
    },
    {
      titulo: '1957- Torneio de Paris',
      imagem: 'assets/Paris-57.png',
    },
    {
      titulo: '1948- Campeonato Sul-Americano',
      imagem: 'assets/1948.png',
    },
  ];
  
  listaTitulos2 = [
    {
      titulo: '1998- Libertadores da América',
      imagem: 'assets/1998.png',
    },
    {
      titulo: '2000- Copa Mercosul',
      imagem: 'assets/2000-mercosul.png',
    },
    {
      titulo: '1974- Campeonato Brasileiro',
      imagem: 'assets/1974.png',
    },
    {
      titulo: '1989- Campeonato Brasileiro',
      imagem: 'assets/1989.png',
    },
  ];

  listaTitulos3 = [
    {
      titulo: '1997- Campeonato Brasileiro',
      imagem: 'assets/1997.png',
    },
    {
      titulo: '2000- Campeonato Brasileiro',
      imagem: 'assets/20001.png',
    },
    {
      titulo: '2011- Copa do Brasil',
      imagem: 'assets/2011.png',
    },
    {
      titulo: '92, 93 e 94- Tricampeonato Carioca',
      imagem: 'assets/Tri.png',
    },
  ];

  listaTexto = [
    {
      tituloss: 'TÍTULOS FUTEBOL',
    },
  ];

  listaSubtitulo = [
    {
      titulosss: 'Período do Amadorismo',
    },
  ];

  listaSubtitulo2 = [
    {
      titulosss: 'Período do Profissionalismo',
    },
  ];

  listaTrofeis = [
    {
      titulosss: '1923 – Campeão Carioca (LMDT)',
    },
    {
      titulosss: '1924 – Bicampeão Carioca (LMDT / Campeão Invicto de Terra e Mar)',
    },
    {
      titulosss: '1926 – Campeão do Torneio Início',
    },
    {
      titulosss: '1929 – Campeão Carioca (AMEA)',
    },
    {
      titulosss: '1929 – Campeão do Torneio Início',
    },
    {
      titulosss: '1930 – Bicampeão do Torneio Início',
    },
    {
      titulosss: '1931 – Tricampeão do Torneio Início',
    },
    {
      titulosss: '1932 – Tetracampeão do Torneio Início',
    },
  ];

  listaTrofeis2 = [
    {
      titulosss: '1934 – Campeão Carioca (LCF)',
    },
    {
      titulosss: '1936 – Campeão Carioca (FMD)',
    },
    {
      titulosss: '1940 – Campeão do Torneio Dr. Luiz Aranha (Rio de Janeiro)',
    },
    {
      titulosss: '1942 – Campeão do Torneio Início (FMF)',
    },
    {
      titulosss: '1944 – Campeão do Torneio Início',
    },
    {
      titulosss: '1944 – Campeão Invicto do Torneio Relâmpago',
    },
    {
      titulosss: '1944 – Campeão do Torneio Municipal',
    },
    {
      titulosss: '1945 – Campeão Carioca (FMF – Campeão Invicto de Terra e Mar)',
    },
    {
      titulosss: '1945 – Bicampeão do Torneio Início',
    },
    {
      titulosss: '1945 – Bicampeão Invicto do Torneio Municipal',
    },
    {
      titulosss: '1946 – Campeão do Torneio Relâmpago',
    },
    {
      titulosss: '1946 – Tricampeão do Torneio Municipal',
    },
    {
      titulosss: '1947 – Tetracampeão do Torneio Municipal',
    },
    {
      titulosss: '1948 – Campeão Sul-Americano de Campeões (Invicto – Primeiro Campeão da América no ano do Cinquentenário do Clube – Reconhecido pela CONMEBOL)',
    },
    {
      titulosss: '1948 – Campeão do Torneio Início',
    },
    {
      titulosss: '1949 – Campeão Carioca (FMF – Campeão Invicto de Terra e Mar)',
    },
    {
      titulosss: '1950 – Bicampeão Carioca (FMF – Bicampeão de Terra e Mar)',
    },
    {
      titulosss: '1952 – Campeão Carioca (FMF – Campeão de Terra e Mar)',
    },
    {
      titulosss: '1953 – Campeão do Quadrangular Internacional do Rio',
    },
    {
      titulosss: '1953 – Campeão do Torneio Octogonal Rivadávia Corrêa Meyer',
    },
    {
      titulosss: '1953 – Campeão do Torneio Internacional do Chile (Santiago, Chile)',
    },
    {
      titulosss: '1956 – Campeão Carioca (FMF – Campeão de Terra e Mar)',
    },
    {
      titulosss: '1957 – Campeão do Torneio Santiago (Santiago, Chile)',
    },
    {
      titulosss: '1957 – Campeão do Torneio Quadrangular de Lima (Lima, Peru)',
    },
    {
      titulosss: '1957 – Primeiro Campeão do Torneio de Paris (Paris, França)',
    },
    {
      titulosss: '1957 – Campeão do Troféu Teresa Herrera (La Coruña, Espanha)',
    },
    {
      titulosss: '1958 – Super Campeão Carioca (FMF – Campeão de Terra e Mar)',
    },
    {
      titulosss: '1958 – Campeão do Torneio Rio-São Paulo',
    },
    {
      titulosss: '1958 – Campeão do Torneio Início',
    },
    {
      titulosss: '1963 – Campeão do Torneio Pentagonal do México (Cidade do México, México)',
    },
    {
      titulosss: '1965 – Primeiro Campeão da Taça Guanabara (FCF)',
    },
    {
      titulosss: '1965 – Campeão do Torneio Cinquentenário da Federação Pernambucana (Pernambuco)',
    },
    {
      titulosss: '1965 – Campeão do Torneio IV Centenário da Cidade do Rio de Janeiro',
    },
    {
      titulosss: '1966 – Campeão do Torneio Rio-São Paulo',
    },
    {
      titulosss: '1970 – Campeão Carioca (FCF – Campeão de Terra e Mar)',
    },
    {
      titulosss: '1972 – Campeão da Taça José de Albuquerque (Terceiro Turno do Campeonato Carioca)',
    },
    {
      titulosss: '1973 – Campeão do Troféu Pedro Novaes (Terceiro Turno, grupo A do Campeonato Carioca – Invicto)',
    },
    {
      titulosss: '1973 – Campeão do Torneio Erasmo Martins Pedro (Rio de Janeiro)',
    },
    {
      titulosss: '1974 – Campeão Brasileiro',
    },
    {
      titulosss: '1974 – Campeão da Taça Oscar Wright da Silva (Segundo Turno do Campeonato Carioca – Invicto)',
    },
    {
      titulosss: '1975 – Campeão da Taça Danilo Leal Carneiro (Terceiro Turno do Campeonato Carioca)',
    },
    {
      titulosss: '1976 – Campeão da Taça Guanabara',
    },
    {
      titulosss: '1977 – Campeão Carioca (FCF)',
    },
    {
      titulosss: '1977 – Bicampeão da Taça Guanabara',
    },
    {
      titulosss: '1977 – Campeão do Torneio Imprensa de Santa Catarina',
    },
    {
      titulosss: '1977 – Campeão da Taça Manoel do Nascimento Vargas Netto (Segundo Turno do Campeonato Carioca – Invicto)',
    },
    {
      titulosss: '1979 – Campeão do Troféu Cidade de Sevilha (Sevilha, Espanha)',
    },
    {
      titulosss: '1979 – Campeão do Troféu Cidade de Elche (Elche, Espanha)',
    },
    {
      titulosss: '1980 – Campeão do Torneio José Fernandes (Amazonas)',
    },
    {
      titulosss: '1980 – Campeão do Troféu Colombino (Huelva, Espanha)',
    },
    {
      titulosss: '1980 – Campeão da Taça Gustavo de Carvalho (FFERJ – 2º Turno do Campeonato Estadual)',
    },
    {
      titulosss: '1981 – Campeão do Torneio João Havelange (Minas Gerais)',
    },
    {
      titulosss: '1981 – Campeão do Torneio Ilha de Funchal (Funchal, Portugal)',
    },
    {
      titulosss: '1981 – Campeão da Taça Ney Cidade Palmeiro (Segundo Turno do Campeonato Estadual – Invicto)',
    },
    {
      titulosss: '1982 – Campeão Estadual (FFERJ – Campeão de Terra e Mar)',
    },
    {
      titulosss: '1982 – Campeão do Torneio João Castelo (Maranhão)',
    },
    {
      titulosss: '1982 – Campeão do Torneio de Verão (Montevidéu, Uruguai)',
    },
    {
      titulosss: '1984 – Campeão da Taça Rio',
    },
    {
      titulosss: '1986 – Campeão da Taça Cidade de Juiz de Fora (Minas Gerais)',
    },
    {
      titulosss: '1987 – Campeão Estadual (FFERJ)',
    },
    {
      titulosss: '1987 – Bicampeão da Taça Guanabara',
    },
    {
      titulosss: '1987 – Bicampeão da Taça Cidade de Juiz de Fora (Minas Gerais)',
    },
    {
      titulosss: '1987 – Campeão da Copa de Ouro (Los Angeles, Estados Unidos)',
    },
    {
      titulosss: '1987 – Campeão da Copa TAP (Newark, Estados Unidos)',
    },
    {
      titulosss: '1987 – Campeão do Torneio Ramón de Carranza (Cádiz, Espanha)',
    },
    {
      titulosss: '1988 – Bicampeão Estadual (FFERJ)',
    },
    {
      titulosss: '1988 –  Campeão da Taça Rio',
    },
    {
      titulosss: '1988 – Campeão da Taça Brigadeiro Jerônimo Bastos (Terceiro Turno do Estadual – Invicto)',
    },
    {
      titulosss: '1988 – Bicampeão do Torneio Ramón de Carranza (Cádiz, Espanha)',
    },
    {
      titulosss: '1989 – Bicampeão Brasileiro',
    },
    {
      titulosss: '1989 – Campeão do Torneio de Metz (Metz, França)',
    },
    {
      titulosss: '1989 – Tricampeão do Torneio Ramón de Carranza (Cádiz, Espanha)',
    },
    {
      titulosss: '1990 – Campeão da Taça Guanabara (Invicto)',
    },
    {
      titulosss: '1990 – Campeão da Taça Adolpho Bloch (Rio de Janeiro)',
    },
    {
      titulosss: '1991 – Campeão do Torneio da Amizade (Libreville, Gabão)',
    },
    {
      titulosss: '1992 – Campeão Estadual (FFERJ – Invicto)',
    },
    {
      titulosss: '1992 – Campeão da Taça Guanabara',
    },
    {
      titulosss: '1992 – Campeão da Taça Rio',
    },
    {
      titulosss: '1992 – Campeão da Copa Rio de Janeiro (Invicto)',
    },
    {
      titulosss: '1993 – Bicampeão Estadual (FFERJ)',
    },
    {
      titulosss: '1993- Bicampeão da Taça Rio',
    },
    {
      titulosss: '1993 – Bicampeão da Copa Rio de Janeiro',
    },
    {
      titulosss: '1993 – Campeão do Torneio João Havelange (RJ-SP)',
    },
    {
      titulosss: '1993 – Campeão do Troféu Cidade de Barcelona (Barcelona, Espanha)',
    },
    {
      titulosss: '1993 – Campeão do Troféu Cidade de Zaragoza (Zaragoza, Espanha)',
    },
    {
      titulosss: '1994 – Tricampeão Estadual (FFERJ)',
    },
    {
      titulosss: '1994 – Campeão da Taça Guanabara (Invicto)',
    },
    {
      titulosss: '1995 – Campeão do Torneio Palma de Mallorca (Mallorca, Espanha)',
    },
    {
      titulosss: '1997 – Tricampeão Brasileiro',
    },
    {
      titulosss: '1997 – Campeão do Troféu Bortolotti (Bérgamo, Itália)',
    },
    {
      titulosss: '1997 – 3º Turno do Estadual (FFERJ)',
    },
    {
      titulosss: '1998 – Campeão da Taça Libertadores da América (Bicampeão da América no ano do Centenário do Clube)',
    },
    {
      titulosss: '1998 – Campeão Estadual (FFERJ – Campeão de Terra e Mar no ano do centenário do clube)',
    },
    {
      titulosss: '1998 – Campeão da Taça Guanabara',
    },
    {
      titulosss: '1998 – Campeão da Taça Rio',
    },
    {
      titulosss: '1999 – Campeão do Torneio Rio-São Paulo',
    },
    {
      titulosss: '1999 – Campeão da Taça Rio (Invicto)',
    },
    {
      titulosss: '2000 – Campeão da Copa Mercosul (Título de nível Sul-Americano)',
    },
    {
      titulosss: '2000 – Tetracampeão Brasileiro',
    },
    {
      titulosss: '2000 – Campeão da Taça Guanabara (Invicto)',
    },
    {
      titulosss: '2001 – Campeão da Taça Rio (Invicto)',
    },
    {
      titulosss: '2003 – Campeão da Taça Guanabara',
    },
    {
      titulosss: '2003 – Campeão da Taça Rio (Invicto)',
    },
    {
      titulosss: '2003 – Campeão Estadual (FFERJ)',
    },
    {
      titulosss: '2004 – Campeão da Taça Rio',
    },
    {
      titulosss: '2009 – Campeão Brasileiro da Série B',
    },
    {
      titulosss: '2010 – Campeão da Copa da Hora',
    },
    {
      titulosss: '2011 – Campeão da Copa do Brasil',
    },
    {
      titulosss: '2015 – Campeão Estadual (FFERJ – Campeão no ano do Centenário do Futebol no Clube)',
    },
    {
      titulosss: '2016 – Taça Guanabara (FFERJ)',
    },
    {
      titulosss: '2016 – Campeonato Carioca (FFERJ)',
    },
    {
      titulosss: '2017 – Taça Rio (FFERJ)',
    },
    {
      titulosss: '2019 – Taça Guanabara (FFERJ)',
    },
    {
      titulosss: '2021 – Taça Rio (FFERJ)',
    },
  ];

  addHistoria(novaHistoria: any) {
    this.listaHistorias.push(novaHistoria);
  }
   constructor() {}

  //Jogadores
  getGoleiros() {
    return this.goleiros;
  }

  getLd() {
    return this.ld;
  }

  getZagueiro() {
    return this.zagueiro;
  }

  getLe() {
    return this.le;
  }

  getVolantes() {
    return this.volantes;
  }

  getMeio() {
    return this.meio;
  }

  getAtacantes () {
    return this.atacantes;
  }

  //Histórias
  getHistorias() {
    return this.listaHistorias;
  }
  getHistoria(index: number) {
    return this.listaHistorias[index -1];
  }

  getEstadio(p0: number) {
    return this.listaEstadio;
  }

  //Titulos
  getTitulos () {
    return this.listaTitulos;
  }

  getTitulos2 () {
    return this.listaTitulos2;
  }

  getTitulos3 () {
    return this.listaTitulos3;
  }

  getTexto () {
    return this.listaTexto;
  }

  getSubtitulo () {
    return this.listaSubtitulo;
  }

  getSubtitulo2 () {
    return this.listaSubtitulo2;
  }

  getTrofeis () {
    return this.listaTrofeis;
  }

  getTrofeis2 () {
    return this.listaTrofeis2;
  }
}
