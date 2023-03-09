const repiticion = (text) => {
  const datos = text.split(" ");
  const count = datos.reduce((acumulador, currentValue) => {
    if (acumulador[currentValue]) {
      acumulador[currentValue]++;
    } else {
      acumulador[currentValue] = 1;
    }
    return acumulador;
  }, {});
  return count;
};
console.log(repiticion("La vida programando es una buena vida"));

const charges = [
  {
    amount: "50USD",
    invoice_id: 1,
    status: "failed",
  },
  {
    amount: "50USD",
    invoice_id: 1,
    status: "success",
  },
  {
    amount: "25USD",
    invoice_id: 2,
    status: "success",
  },
  {
    amount: "50USD",
    invoice_id: 3,
    status: "failed",
  },
  {
    amount: "75USD",
    invoice_id: 3,
    status: "failed",
  },
];

const getPendingInvoices = (charges) => {

    const unicos = charges.filter((valor, indice) => {
        return charges.indexOf(valor.invoice_id) === indice;
        console.log(charges.indexOf(valor.invoice_id)+"555")
      })
    const result =[]
   charges.map((charge) => {   
    if(charge.status==='failed')  {
        result.push( charge.invoice_id)
    }
    
  });
  return result
};
console.log(getPendingInvoices(charges))



function par_checker(symbol_string) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado;
    const datos = symbol_string.split("");
    let uno = 0
    let dos = 0
    datos.forEach(element => {
        if(element==='('){
            uno++
        }else{
            dos++
        }
        
    });
    if(uno !==dos){
        return false
    }else{
        return true
    }

  }
  console.log(par_checker("(()()()())"))