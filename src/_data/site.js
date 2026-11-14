const whatsapp = {
  number: "5581988371067",
  message: "Olá! Vim pelo site da Miranda Bombas.",
};

export default {
  name: "Miranda Bombas",
  url: "https://www.mirandabombas.com.br",
  description: "Assistência técnica autorizada de motobombas e distribuidor de cloradores e boia elétrica.",
  author: "André Miranda",
  foundingYear: 1986,
  // Build year, used in the footer copyright. The deploy workflow also
  // rebuilds the site every January 1st so this stays current.
  year: new Date().getFullYear(),

  email: "mirandabombas@hotmail.com",
  phones: [
    { label: "(81) 3428-1067", tel: "+558134281067" },
    { label: "(81) 3428-1747", tel: "+558134281747" },
    { label: "(81) 98837-1067", tel: "+5581988371067" },
  ],
  whatsappUrl: `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`,

  address: {
    street: "Av. Cosme Viana, 298, Afogados",
    city: "Recife",
    region: "PE",
  },
  geo: { latitude: -8.0731972, longitude: -34.909049 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Miranda+Bombas+Av.+Cosme+Viana+298+Recife",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.108306283091!2d-34.909049!3d-8.0731972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f59984c56e5%3A0x7da07c1e1af54905!2sMiranda%20bombas!5e0!3m2!1spt-BR!2sde!4v1700339511361!5m2!1spt-BR!2sde",
};
