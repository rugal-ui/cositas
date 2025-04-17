
const products = [
    {
        name: "Mono de Romper a Rayas",
        description: "Con botones, manga corta y cinturón. Perfecto para primavera y verano.",
        image: "https://i.imgur.com/EbOqYZO.jpg",
        whatsapp: "https://wa.me/593998495289?text=Hola,%20quiero%20el%20Mono%20de%20Rayas"
    },
    {
        name: "Conjunto Elegante Floral",
        description: "Cardigan ligero con shorts, ideal para cualquier estación.",
        image: "https://i.imgur.com/NWoRxMi.jpg",
        whatsapp: "https://wa.me/593998495289?text=Hola,%20quiero%20el%20conjunto%20floral"
    },
    {
        name: "Camisa Hawaiana para Hombre",
        description: "Camisa de manga corta con rayas, perfecta para el verano.",
        image: "https://i.imgur.com/UQL2V4K.jpg",
        whatsapp: "https://wa.me/593998495289?text=Hola,%20quiero%20la%20camisa%20rayada"
    }
];

const container = document.getElementById("product-list");
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="\${product.image}" alt="\${product.name}">
        <h2>\${product.name}</h2>
        <p>\${product.description}</p>
        <a href="\${product.whatsapp}" target="_blank">Pedir por WhatsApp</a>
    `;
    container.appendChild(card);
});
