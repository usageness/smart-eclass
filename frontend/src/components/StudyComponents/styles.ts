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

const CardFooter = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem;
`;

const JoinButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;

  border-radius: 10px;
  background: radial-gradient(
    circle farthest-corner at 10% 10%,
    rgba(123, 142, 255, 0.9) 40%,
    rgba(116, 182, 247, 0.9) 90%
  );

  padding: 1rem 3rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-height: 50vh;

  padding: 2rem;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.6rem;
  }
`;

const DocumentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
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

const Introduction = styled.div`
  width: 100%;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #eeeeee;

  color: #111111;
`;

const BackwardButton = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.6rem;
  margin-right: 1rem;
`;

const ChapterContainer = styled.div`
  display: flex;
`;

const ChapterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 10rem;
`;

const ChapterTable = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChapterHead = styled.div`
  background-color: #eeeeee;
  font-weight: bold;

  padding: 1rem;

  border-radius: 10px 10px 0 0;
  border: solid 1px #cccccc;
`;

const ChapterItem = styled.button`
  font-size: 1rem;
  padding: 1rem;

  border: solid 1px #cccccc;
  border-top: none;

  &:nth-last-child(2) {
    border-radius: 0 0 10px 10px;
  }
`;

const ChapterContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: 80%;
  padding: 1rem;

  color: #222222;

  ul {
    list-style: inside;
  }

  li {
    margin: 0.5rem;
  }
`;

const ModifyButton = styled.button`
  & > img {
    width: 40px;
  }
`;

const AddButton = styled.button`
  margin-top: 0.5rem;

  & > img {
    width: 40px;
  }
`;

export {
  Container,
  Card,
  CardHeader,
  CardFooter,
  JoinButton,
  Content,
  DocumentHeader,
  TitleContainer,
  Title,
  IsOpen,
  TeacherContainer,
  Emblem,
  Introduction,
  BackwardButton,
  ChapterContainer,
  ChapterTable,
  ChapterWrapper,
  ChapterHead,
  ChapterItem,
  ChapterContents,
  ModifyButton,
  AddButton,
};
