import { useContext, useEffect } from 'react'
import { ListStyled } from './style'
import { GuestContext } from '../../contexts/GuestContexto'

const List = () => {
  const { companions, setCompanions, updateCompanion } = useContext(GuestContext)

  const confirm = (id) => {
    const updated = companions.map((comp) =>
      comp.id === id ? { ...comp, status: true } : comp
    );
  
    setCompanions(updated);
  };

  const inative = (id) => {
    const updated = companions.map((comp) =>
      comp.id === id ? { ...comp, status: false } : comp
    );
  
    setCompanions(updated);
  };

  return (
    <ListStyled>
      <h2>Confirme sua presença!</h2>
      <span id="alert">
        ⚠️ Atenção: Confirme sua presença até dia 27/04/2025
      </span>
      <ul className="list-presence">
        {companions.map((comp) => {
          return (
            <li key={comp.id}>
              <div className="content-main">
                <p>{comp.name}</p>
                <div className="content-box">
                  <div className="box">
                    <span>Sim</span>
                    <div
                      className={`check ${comp.status === true ? 'ativo' : ''}`}
                      onClick={() => confirm(comp.id)}
                    >
                      {comp.status === true && (
                        <img src="\icons\check-icon.svg" alt="" />
                      )}
                    </div>
                  </div>
                  <div className="box">
                    <span>Não</span>
                    <div
                      className={`check ${comp.status === false ? 'inativo' : ''}`}
                      onClick={() => inative(comp.id)}
                    >
                      {comp.status === false && (
                        <img src="\icons\negative-icon.svg" alt="" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
        <button onClick={() => updateCompanion()}>Confirmar presença!</button>
      </ul>
    </ListStyled>
  )
}

export default List
