let panier = [];
let compteur = 0;

function ajouterAuPanier(produit, prix) {
  panier.push({ produit, prix });
  compteur++;
  document.getElementById('panier').innerText = `🛒 Panier (${compteur})`;
  alert(`${produit} a été ajouté au panier !`);
}
