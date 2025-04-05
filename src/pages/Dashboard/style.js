import styled from 'styled-components'

export const DashboardStyled = styled.section`
  width: 100%;
  height: 800px;

  position: relative;

  display: flex;

  justify-content: center;

  background-color: var(--color-pink);

  .box-image {
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
  }

  .box-image img {
    position: absolute;
    top: 50%;
    left: 54%;
    transform: translate(-50%, -50%);
    width: 1080px;
  }

  .dash-box {
    width: 90%;
    height: 400px;
    max-height: 400px;

    background-color: var(--color-white);

    position: absolute;

    top: 45%;

    border-radius: 20px;

    display: flex;

    align-items: center;
    flex-direction: column;

    box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 0.6);
    -webkit-box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 0.6);
    -moz-box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 1);
  }

  .dash-box h1 {
    font-family: var(--font-sacramento);

    font-size: 50px;

    margin-top: 40px;
  }

  .dash-box ul {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    font-family: var(--font-poppins);
    font-size: 25px;

    margin-top: 40px;
  }

  .dash-box ul li div {
    min-width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dash-box ul li div img {
    width: 100%;
    height: 100%;
  }

  #calender {
    width: 42px;
    height: 42px;
  }

  .dash-box ul li {
    display: flex;
    align-items: center;

    gap: 10px;
  }

  #line-locate {
    align-items: flex-start;
  }

  @media (min-width: 910px) {
    #line-locate {
      align-items: center;
    }
  }

  @media (min-width: 990px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .box-image {
      height: 100%;
      width: 70%;
    }

    .box-image img {
      max-height: 100%;

      width: auto;

      top: none;
      left: 35%;
    }

    .dash-box {
      width: 40%;
      height: 80%;

      top: 50%;
      left: 70%;

      transform: translate(-50%, -50%);
    }

    .dash-box h1 {
      font-size: 55px;
    }
  }

  @media (min-width: 1240px) {
    .dash-box {
      width: 40%;
      height: 60%;
    }
  }
`
