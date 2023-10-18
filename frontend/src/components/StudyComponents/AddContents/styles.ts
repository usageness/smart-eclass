import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  display: flex;
  gap: 1rem;

  padding: 1rem;
`;

const ModifyArea = styled.div`
  display: flex;

  width: 50%;
`;

const PreviewArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;

const SubmitButton = styled.button`
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

const CancelButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;

  width: 10rem;

  padding: 1rem;

  border-radius: 10px;
  background: #888888;
`;

const TitleInput = styled.input`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: bold;

  border: none;
  border-bottom: 1px solid #cccccc;
  border-radius: 0;

  margin-left: 1rem;

  &:focus {
    border-bottom: 1px solid #666666;
  }
`;

export {
  Container,
  ContentArea,
  ModifyArea,
  PreviewArea,
  ButtonArea,
  SubmitButton,
  CancelButton,
  TitleInput,
};
