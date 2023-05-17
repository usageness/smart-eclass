import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  max-width: 1400px;
  height: 70vh;

  color: #333333;
  font-size: 1rem;
  font-weight: bold;

  margin: auto;
  padding: 1.7rem 1.2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 40%;
  min-width: 400px;

  margin: auto;
  padding: 1.7rem 1.2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  & > label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    width: 100%;

    & > span {
      line-height: 2rem;
    }

    & > input {
      box-shadow: 5px 5px 1rem #00000006;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.5rem;

  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 25px;
  font-size: 1rem;

  margin: 2rem 0 1rem 0;
`;

export { Container, CardContainer, Form, Button };
