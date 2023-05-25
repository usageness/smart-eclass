import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 1400px;

  color: #333333;
  font-size: 1rem;
  font-weight: bold;

  margin: auto;
  padding: 1.7rem 1.2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  backdrop-filter: blur(0.6rem);
  box-shadow: 0.5rem 0.5rem 1rem #00000025;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding: 2rem;

  border-radius: 10px 10px 0 0;
  background-color: #444444;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  min-height: 50vh;

  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #eeeeee;
`;

const IsOpen = styled.div`
  color: #eeeeee;
`;

const TeacherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #dddddd;
`;

const Emblem = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: #659999;
  background: -webkit-linear-gradient(45deg, #f4791f, #659999);
  background: linear-gradient(45deg, #f4791f, #659999);
`;

export {
  Container,
  Card,
  CardHeader,
  Content,
  TitleContainer,
  Title,
  IsOpen,
  TeacherContainer,
  Emblem,
};
