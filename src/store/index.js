import { configureStore  } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'

// criando um store (estado)
const store = configureStore({
  // criando reducer (pequenos pedaços do store)
  // porém, para separá as responsabilidades, criamos um arquivo "reducer/cartegorias" onde conterá o reducer com as categorias
  reducer: {
    categorias: categoriasSlice, //por enquanto o 'categoriasSlice' não é um reducer em si até que dentro exportemos o reducer dentro de categorias; ele tem variás coisas e podemos exportar várias coisas dele, e uma deles é o reducer
    itens: itensSlice, //por enquanto o 'categoriasSlice' não é um reducer em si até que dentro exportemos o reducer dentro de categorias; ele tem variás coisas e podemos exportar várias coisas dele, e uma deles é o reducer
    carrinho: carrinhoSlice
  }
})

export default store
