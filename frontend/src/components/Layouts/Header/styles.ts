import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;

  color: #333333;
  font-size: 1.2rem;
  font-weight: bold;

  background-color: #ffffff99;
  backdrop-filter: blur(0.6rem);
  padding: 1.7rem 1.2rem;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 0 2rem #0000000d;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
`;

export { Container, Contents };
