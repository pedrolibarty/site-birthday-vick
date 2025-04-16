import styled from 'styled-components';

export const ManagerStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: var(--font-poppins);

  .content {
    margin-top: 20px;
    max-width: 550px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .box {
    width: 100%;
    height: 90px;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 7px;

    font-size: 13px;
  }

  .filter-buttons {
    width: 90%;

    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .filter-buttons button {
    padding: 10px 20px;
    border: 1px solid var(--color-pink);
    background-color: var(--color-white);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .filter-buttons button.active {
    background-color: var(--color-pink);
    color: var(--color-white);
    border: 1px solid var(--color-black);
  }

  ul {
    width: 90%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  ul li {
    width: 90%;
    max-width: 500px;
    height: 40px;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
  }
`;
