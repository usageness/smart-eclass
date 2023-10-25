import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  max-width: 1400px;

  color: #333333;
  font-size: 1rem;
  font-weight: bold;

  margin: auto;
  padding: 1.7rem 1.2rem;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 1.6rem;
`;

const Input = styled.input`
  width: 100%;

  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: bold;

  border: none;
  border-bottom: 1px solid #cccccc;
  border-radius: 0;

  margin: 1rem 0;

  &:focus {
    border-bottom: 1px solid #666666;
  }
`;

const Description = styled.p`
  width: 100%;
  color: #666666;

  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const CreateStudyButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;

  width: 10rem;

  padding: 1rem;

  border-radius: 10px;
  background: radial-gradient(
    circle farthest-corner at 10% 10%,
    rgba(123, 142, 255, 0.9) 40%,
    rgba(116, 182, 247, 0.9) 90%
  );
`;

export { Container, Title, Input, Description, CreateStudyButton };
