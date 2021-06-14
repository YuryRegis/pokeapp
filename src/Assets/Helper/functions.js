import dataCor from "./cores.json";


export function nomeCapitalizado(nome) {
  return nome[0].toUpperCase() + nome.slice(1);
}

export function gradienteLinear(tipoPokemon) {
  console.log("PROPS_TIPO", tipoPokemon);
  const fundoBase = dataCor.pokemon.tipo[String(tipoPokemon)];
  const cor_1 = fundoBase ? fundoBase.corTazo.cor_1 : undefined;
  const cor_2 = fundoBase ? fundoBase.corTazo.cor_2 : undefined;
  const angulo = fundoBase ? fundoBase.corTazo.angulo : undefined;

  return `linear-gradient(
            ${angulo || 130}deg,
            ${cor_1 || "#e698e9"} 0%,
            ${cor_2 || "#fce597"} 100%)`;
}
