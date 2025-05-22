// src/services/matchAlgorithm.js

export function generarMatches(usuarios) {
  const nativos = usuarios.filter(u => u.tipo === 'nativo');
  const apoyo = usuarios.filter(u => u.tipo === 'necesita_apoyo');

  const matches = []

  apoyo.forEach(personaApoyo => {
    const candidato = nativos.find(nativo => {
      const interesesComunes = nativo.intereses.filter(i => personaApoyo.intereses.includes(i));
      const edadCercana = Math.abs(nativo.edad - personaApoyo.edad) <= 2;

      return interesesComunes.length > 0 && edadCercana;
    })

    if (candidato) {
      matches.push({ apoyo: personaApoyo, nativo: candidato });

      // Eliminar al nativo para que no se repita
      const index = nativos.findIndex(u => u.id === candidato.id);
      if (index !== -1) nativos.splice(index, 1);
    }
  });

  return matches;
}
