import { useContext, useEffect, useState } from 'react'
import { ManagerStyled } from './style'
import { GuestContext } from '../../contexts/GuestContexto'
import { MainStyled } from '../Main/style'
import Loading from '../Loading'

const Manager = () => {
    const { loading, guests, getGuests } = useContext(GuestContext);
    const [filter, setFilter] = useState('all');
  
    useEffect(() => {
      setTimeout(getGuests(), 4000);
    }, []);
  
    const filteredGuests = guests.filter((g) => {
      if (filter === 'confirmado') return g.status === true;
      if (filter === 'ausente') return g.status === false;
      if (filter === 'sem_status') return g.status == null;
      return true;
    });
  
    return loading ? (
      <MainStyled>
        <Loading />
      </MainStyled>
    ) : (
      <ManagerStyled>
        <div className="content">
          <div className="box">
            <h2>Total</h2>
            <h4>{guests.length}</h4>
          </div>
          <div className="box">
            <h2>Confirmados</h2>
            <h3>
              {(
                (guests.filter((g) => g.status).length / guests.length) * 100
              ).toFixed(0)}{' '}
              %
            </h3>
            <h4>{guests.filter((g) => g.status === true).length}</h4>
          </div>
  
          <div className="box">
            <h2>Ausentes</h2>
            <h3>
              {(
                (guests.filter((g) => g.status === false).length /
                  guests.length) *
                100
              ).toFixed(0)}{' '}
              %
            </h3>
            <h4>{guests.filter((g) => g.status === false).length}</h4>
          </div>
  
          <div className="box">
            <h2>Sem resposta</h2>
            <h3>
              {(
                (guests.filter((g) => g.status == null).length / guests.length) *
                100
              ).toFixed(0)}{' '}
              %
            </h3>
            <h4>{guests.filter((g) => g.status == null).length}</h4>
          </div>
        </div>
        <div className="filter-buttons">
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('confirmado')}
            className={filter === 'confirmado' ? 'active' : ''}
          >
            Confirmados
          </button>
          <button
            onClick={() => setFilter('ausente')}
            className={filter === 'ausente' ? 'active' : ''}
          >
            Ausentes
          </button>
          <button
            onClick={() => setFilter('sem_status')}
            className={filter === 'sem_status' ? 'active' : ''}
          >
            Sem Status
          </button>
        </div>
        <ul>
          {filteredGuests.map((g) => (
            <li key={g.id}>
              {g.name} -{' '}
              {g.status === true
                ? 'Confirmado'
                : g.status === false
                ? 'Ausente'
                : 'Sem status'}
            </li>
          ))}
        </ul>
      </ManagerStyled>
    );
  };
  
  export default Manager;