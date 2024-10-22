import { useDispatch, useSelector } from 'react-redux'
import styles from './Busca.module.scss'
import { mudarBusca, resetarBusca } from '@/store/reducers/busca'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Busca = () => {
  const busca = useSelector(state => state.busca)
  const dispatch = useDispatch()
  const location = useLocation()

  // sempre que o location mudar, ele resetará a busca
  useEffect(() => {
    dispatch(resetarBusca())
  }, [dispatch, location.pathname])

  return (
    <div className={styles.busca}>
      <input className={styles.input} placeholder='O que você procura?' type="text" value={busca} onChange={(e) => dispatch(mudarBusca(e.target.value))}/>
    </div>
  )
}

export default Busca