import { useContext, useEffect } from 'react'
import Dashboard from '../Dashboard'
import Description from '../Description'
import List from '../List'
import Loading from '../Loading'
import { MainStyled } from './style'
import { GuestContext } from '../../contexts/GuestContexto'
import { useParams } from 'react-router-dom'

const Main = () => {
  const { loading, getCompanion } = useContext(GuestContext);
  const { id_guest } = useParams()

  useEffect(() => {
    setTimeout(
      getCompanion(id_guest),
      4000
    )
  }, [])

  return (
    loading ? (
      <MainStyled>
        <Loading />
      </MainStyled>
    ) : (
      <>
        <Dashboard />
        <Description />
        <List />
      </>
    )
  );
};

export default Main
