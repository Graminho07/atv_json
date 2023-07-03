function busca() {
    let cod = document.getElementById("cod").value;
    let placa = document.getElementById("placa");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let ano = document.getElementById("ano");
    let url = "./carros.json";
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        for (var carro of data.carros) {
          console.log(carro)
          if (cod === carro.placa) {
            placa.value = carro.placa;
            marca.value = carro.marca;
            modelo.value = carro.modelo;
            ano.value = carro.ano;
            break;
          }
        }
      })
  }  