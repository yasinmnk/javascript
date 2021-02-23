const cart = {
  isim: "yasin",
  bakiye: 50,
};

function biletokut(callback) {
  setTimeout(() => {
    console.log(" Kart okutuluyor...");
    callback();
  }, 2500);
}

function bilgiGoster(cart, callback) {
  setTimeout(() => {
    console.log(`bakiyeniz: ${cart.bakiye} `);
    callback ? callback() : "";
  }, 1500);
}

function paraCek(cart, callback) {
  setTimeout(() => {
    cart.bakiye -= 2;
    console.log(`kalan bakiye ${cart.bakiye} `);
    callback ? callback() : "";
  }, 500);
}

biletokut(() => {
  bilgiGoster(cart, () => {
    paraCek(cart);
  });
});
