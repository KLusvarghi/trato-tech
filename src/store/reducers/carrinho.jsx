import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
  // tendo que passar o nome e o estado inicial
  name: 'categoria',
  initialState,

  reducers: {
    // e nessa função queremos retornar um estado novo com um novo estado dentro
    mudarCarrinho: (state, { payload }) => {
      // O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
      // neste caso se der true e atender ao requisito, ele tem que remover ou adicionar o item do do array "temItem"
      const temItem = state.some((item) => item.id === payload);
      if (!temItem) // se o item não existir
        return [
      ...state, //passando o estado anterior mais o objeto anterior
          {
            id: payload,
            quantidade: 1,
          },
        ];
      // se existir
      // retornando apenas os itens que tem o id diferente do payload que será recebido como parametro
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { mudarCarrinho } = carrinhoSlice.actions;

// agora sim estamos exportando o reducer, e agora ele pode ser usado como reducer dentro do index
export default carrinhoSlice.reducer;
