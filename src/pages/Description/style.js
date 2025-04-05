import styled from 'styled-components'

export const DescriptionStyled = styled.section`
  width: 100%;
  height: 900px;

  background-color: var(--color-pink);

  margin-top: 20px;

  position: relative;

  display: flex;

  justify-content: center;

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

  .desc-box {
    width: 90%;
    height: 100%;
    max-height: 450px;

    background-color: var(--color-white);

    position: absolute;

    top: 45%;

    border-radius: 20px;

    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;

    box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 0.6);
    -webkit-box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 0.6);
    -moz-box-shadow: 10px 10px 8px 1px rgba(222, 198, 192, 1);
  }

  .desc-box h1 {
    font-family: var(--font-sacramento);

    font-size: 50px;

    margin: 40px 0px 20px 0px;
  }

  .desc-box p {
    width: 90%;

    font-family: var(--font-poppins);
    text-align: center;
    font-size: 18px;

    margin-bottom: 20px;
  }

  @media (min-width: 550px) {
    .desc-box {
        height: 400px;
        max-height: 400px;
    }
  }

  @media (min-width: 990px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;

    .box-image {
      height: 100%;
      width: 90%;
    }

    .box-image img {
      height: auto;

      width: 100%;

      top: none;
      left: 70%;
    }

    .desc-box {
      width: 50%;
      height: 80%;

      top: 50%;
      left: 30%;

      transform: translate(-50%, -50%);
    }

    .desc-box h1 {
      font-size: 55px;
    }
  }
`
