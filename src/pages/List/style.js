import styled from "styled-components";

export const ListStyled = styled.section`
width: 100%;

display: flex;
align-items: center;
justify-content:center;
flex-direction: column;

margin-top: 20px;

background-color: var(--color-pink);
opacity: 0.55;

font-family: var(--font-sacramento);

h2 {
    font-size: 50px;

    margin-top: 40px;
}

#alert {
    font-family: var(--font-poppins);

    font-size: 13px;

    margin-top: 20px;
}

.list-presence {
width: 100%;
max-width: 1024px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

margin: 40px 0px;

gap: 20px;
}

.content-main {
    width: 90%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list-presence li {
    width: 90%;
    height: 70px;

    border-radius: 5px;

    background-color: var(--color-white);

    display: flex;

    align-items: center;
    justify-content: center;

}

.list-presence li p {
    font-size: 35px;
}

.content-box {
    display: flex;

    flex-direction: row;

    gap: 15px;
}

.content-box span {
    font-size: 20px;
}

.check {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;

    border-radius: 10px;

    border: 2px solid var(--color-pink);

    cursor: pointer;
}

.check img {
    width: 80%;
    height: 80%;
}

.check.ativo {
    background-color: var(--color-green);
}

.check.inativo {
    background-color: var(--color-red);
}

button {
    width: 90%;
    height: 70px;
    

    background-color: var(--color-white);

    border-radius: 10px;
    border: 2px solid var(--color-pink);

    font-family: var(--font-sacramento);
    font-size: 30px;

    cursor: pointer;

    margin-bottom: 20px;
    padding: 0;
}

`