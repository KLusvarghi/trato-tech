import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const buscaSlice = createSlice({
  // tendo que passar o nome e o estado inicial
  name: 'busca',
  initialState,

  reducers: {
    mudarBusca: (state, {payload}) => payload,
    resetarBusca: () => initialState //quando ele mudar de tela ele usará essa função para limpar a busca
  },
});

export const { mudarBusca, resetarBusca } = buscaSlice.actions;

// agora sim estamos exportando o reducer, e agora ele pode ser usado como reducer dentro do index
export default buscaSlice.reducer;
