const Envio = {
  adiciona: function (a, b) {
    let vet = [];
    if (this.existe(a)) {
      vet = this.carrega(a);
    }
    vet.push(b);
    this.salva(a, vet);
  },
  salva: function (a, b) {
    localStorage[a] = JSON.stringify(b);
  },
  carrega: function (a) {
    if (this.existe(a)) {
      return JSON.parse(localStorage[a]);
    } else {
      return null;
    }
  },
  existe: function (a) {
    return localStorage[a] ? true : false;
  }
};
