export class projeto {
  constructor(tipo, areaConsruir, areaTerreno) {
    this.tipo = tipo;
    this.areaConsruir = areaConsruir;
    this.areaTerreno = areaTerreno;
    this.valores = {vista: 0, prazo: 0, parcela: 0};
    this.itensInclude = {};
    this.itensExcluded = {};
    this.observacao = {};
  }
  itensIncludeInsert(value) {
    const icon = {base: './icons/', iconName: 'v', extension: '.png'};
    this.itensInclude = (
      <>{value.map((item, i)=>{
        return (
          <li key={icon.iconName}>
            <img src={icon.base+icon.iconName+icon.extension} alt={i}/> {item}
          </li>);
      })}</>
    );
  }
  itensExcludedInsert(value) {
    const icon = {base: './icons/', iconName: 'x', extension: '.png'};
    this.itensExcluded = (
      <>{value.map((item, i)=>{
        return (
          <li key={icon.iconName}>
            <img src={icon.base+icon.iconName+icon.extension} alt={i}/> {item}
          </li>);
      })}</>
    );
  }
  valoresInsert(valorM2, precentualAcrescimoPrazo) {
    const vista = this.areaConsruir * valorM2;
    const prazoTotal = this.areaConsruir * valorM2 * (1+precentualAcrescimoPrazo/100);
    let parcela = Math.floor(prazoTotal / 400);
    if (parcela<3) {
      parcela = 2;
    } else if (parcela>12) {
      parcela = 12;
    }
    const prazo = +parseFloat(prazoTotal/parcela).toFixed(2);
    this.valores = {
      vista,
      prazo,
      parcela,
    };
  }
  observacaoInsert(value) {
    this.observacao = (
      <>{value.map((item, i)=>{
        return (
          <li key={icon.iconName}>
            <img src={icon.base+icon.iconName+icon.extension} alt={i}/> {item}
          </li>);
      })}</>
    );
  }
}
