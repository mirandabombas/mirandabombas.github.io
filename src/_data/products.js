// Each product gets a card on the home page and its own page at
// /produtos/<slug>.html (see src/produtos/produto.njk).
//
//   name     card title on the home page
//   title    heading on the product page
//   summary  card text and page description
//   thumb    card image
//   photos   product page photos (more than one becomes a swipeable gallery)
//   specs    "Detalhes Técnicos" list (optional)
//   warnings "Atenção" list (optional)
//   install  "Instalação" images (optional)
//   ogImage  JPG used for link previews (WhatsApp, Facebook…)

export default [
  {
    slug: "boia",
    name: "Boia Elétrica",
    title: "Boia Elétrica",
    summary: "Boia elétrica universal Loremplus de excelente qualidade, projetada para evitar infiltrações e garantir a proteção da motobomba.",
    thumb: { src: "boia.webp", width: 180, height: 191 },
    photos: {
      alt: "Boia elétrica Loremplus",
      items: [
        { src: "boia-detalhe1.webp", width: 550, height: 400 },
        { src: "boia-detalhe2.webp", width: 550, height: 400 },
      ],
    },
    specs: [
      "Não contém mercúrio",
      "Controle de nível inferior ou superior",
      "Capacidade elétrica do interruptor até 25A ~250V",
      "Cabo flexível pp 3 x 1 mm² ~250V",
      "Blindagem tripla",
      "6 meses de garantia",
    ],
    warnings: [
      "É obrigatório o uso de chave contatora com relê de sobrecarga para qualquer potência de motobomba.",
      "Recomendamos contratar profissionais qualificados para executar a instalação do equipamento.",
      "Nunca instalar diretamente na ligação do motor independente da potência.",
    ],
    install: {
      alt: "Esquema de instalação da boia elétrica",
      items: [{ src: "boia-instalacao.webp", width: 860, height: 744 }],
    },
    ogImage: "og/boia-detalhe1.jpg",
  },
  {
    slug: "clorador",
    name: "Clorador de Pastilha",
    title: "Clorador de Pastilhas",
    summary: "Clorador automático de pastilha para poço com tubulação de 25 mm e 32 mm.",
    thumb: { src: "clorador.webp", width: 240, height: 191 },
    photos: {
      alt: "Clorador de pastilhas Loremplus",
      items: [{ src: "clorador-detalhe.webp", width: 550, height: 400 }],
    },
    specs: [
      "Produto Loremplus",
      "Clorador de pastilha",
      "Tubulação de 25mm ou superior",
      "Garantia de 90 dias",
      "Preço especial para revenda",
    ],
    install: {
      alt: "Esquema de instalação do clorador",
      items: [{ src: "clorador-instalacao.webp", width: 840, height: 567 }],
    },
    ogImage: "og/clorador-detalhe.jpg",
  },
  {
    slug: "bomba-sapo",
    name: "Bomba Sapo",
    title: "Bomba Sapo",
    summary: "Bomba submersível, modelos MB 650 e MB 950.",
    thumb: { src: "bomba-sapo.webp", width: 160, height: 191 },
    photos: {
      alt: "Bomba Sapo submersível",
      items: [
        { src: "bomba-sapo-detalhe1.webp", width: 510, height: 400 },
        { src: "bomba-sapo-detalhe2.webp", width: 510, height: 400 },
      ],
    },
    specs: [
      "Consumo 340W",
      "Tensão nominal 220V",
      "Frequência 60hz",
      "Capacidade até 1.200l/h",
      "Elevação até 65m",
      "Peso 5,5kg",
      "Garantia de 6 meses apenas para eventuais defeitos de fabricação.",
    ],
    install: {
      alt: "Esquema de instalação da Bomba Sapo",
      items: [
        { src: "bomba-sapo-instalacao.webp", width: 497, height: 634 },
        { src: "bomba-sapo-instalacao2.webp", width: 850, height: 516 },
      ],
    },
    ogImage: "og/bomba-sapo-detalhe1.jpg",
  },
  {
    slug: "motobombas",
    name: "Motobombas",
    title: "Bombas Schneider",
    summary: "Linha completa das motobombas centrífugas Schneider.",
    description: "Dispomos da linha completa das motobombas centrífugas Schneider.",
    thumb: { src: "bomba-bc98.webp", width: 160, height: 191 },
    photos: {
      alt: "Motobomba centrífuga Schneider BC-98",
      items: [{ src: "bomba-bc98-detalhe.webp", width: 550, height: 400 }],
    },
    ogImage: "og/bomba-bc98-detalhe.jpg",
  },
];
