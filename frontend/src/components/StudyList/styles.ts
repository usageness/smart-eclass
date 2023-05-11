import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1.5rem;

  width: 100%;
  min-width: 910px;
  height: 20rem;

  padding: 1rem 0;
`;

const Study = styled.div`
  width: 13rem;
  height: 100%;

  color: #ffffff;
  font-size: 1.25rem;

  padding: 2rem 1.5rem;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #00000025;
`;

const Study2 = styled.div`
  width: 13rem;
  height: 100%;

  color: #222222;
  font-size: 1.25rem;

  padding: 2rem 1.5rem;

  background-image: linear-gradient(
    92.7deg,
    rgba(245, 212, 212, 1) 8.5%,
    rgba(252, 251, 224, 1) 90.2%
  );
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #00000025;
`;

export { Container, Study, Study2 };
