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

const Notice = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 20rem;

  color: #333333;
  font-size: 1rem;
  font-weight: bold;
`;

const SampleNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 100%;

  padding: 4rem;

  background-image: linear-gradient(
    58.2deg,
    rgba(40, 91, 212, 0.73) -3%,
    rgba(171, 53, 163, 0.45) 49.3%,
    rgba(255, 204, 112, 0.37) 97.7%
  );
  backdrop-filter: blur(0.6rem);
`;

const NoticeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  color: #eeeeee;
  font-size: 2.5rem;
  font-weight: bold;
`;

const NoticeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15rem;

  width: 100%;
  height: 100%;
`;

const FlexLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;

  margin-top: 1rem;
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

export {
  Container,
  Notice,
  SampleNotice,
  NoticeText,
  NoticeDiv,
  FlexLine,
  Title,
  CreateStudyButton,
};
