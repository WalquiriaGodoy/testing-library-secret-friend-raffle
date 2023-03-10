import { useState } from 'react';
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';
import { useResultadoDoSorteio } from '../state/hook/useResultadoDoSorteio';

const Sorteio = () => {
  const participantes = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
      setTimeout(() => {
        setAmigoSecreto('');
      }, 5000);
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          name='participanteDaVez'
          id='participanteDaVez'
          placeholder='Selecione o seu nome'
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role={'alert'}>{amigoSecreto}</p>}
    </section>
  );
};
export default Sorteio;
