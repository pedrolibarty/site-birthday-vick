import { DashboardStyled } from './style'

const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="box-image">
        <img src="\images\image-2.jpeg" alt="" />
      </div>
      <section className="dash-box">
        <h1>15 anos da Victória</h1>
        <ul>
          <li>
            <div>
              <img src="\icons\calender-icon.svg" id='calender' alt="" />
            </div>
            24 de maio de 2025
          </li>
          <li>
            <div>
              <img src="\icons\clocker-icon.svg" alt="" />{' '}
            </div>
            21:00
          </li>
          <li id='line-locate'>
            <div>
              <img src="\icons\locate-icon.svg" alt="" />{' '}
            </div>
            Chácara Holiday Paulo Seidel, 40 - Capim, 35024-820
          </li>
        </ul>
      </section>
    </DashboardStyled>
  )
}

export default Dashboard
