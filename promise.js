const cart = {
  isim: "yasin",
  bakiye: 50,
};

function biletokut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("KART OKUNUYOR..."));
    }, 1500);
  });
}
function bilgiGoster() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart) {
        console.log(`bakiyeniz: ${cart.bakiye} `);
        resolve();
      } else {
        console.log("kart bulunamadi");
        reject();
      }
    }),
      3000;
  });
}
function paraCek() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart) {
        cart.bakiye -= 2;
        console.log(`kalan bakiyeniz: ${cart.bakiye}`);
        resolve;
      } else {
        console.log("kart bulunamadi");
        reject();
      }
    }, 4500);
  });
}

biletokut()
  .then(() => bilgiGoster(cart))
  .then(() => paraCek(cart))
  .catch((err) => {
    console.log(err);
  });
