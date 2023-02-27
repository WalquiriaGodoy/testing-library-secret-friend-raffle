import { atom } from 'recoil';

export const listaParticipantesState = atom<string[]>({
  key: 'ListaParticipantesState',
  default: [],
});

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoDoAmigoSecreto',
  default: new Map(),
});

export const erroState = atom<string>({
  key: 'erroState',
  default: '',
});
