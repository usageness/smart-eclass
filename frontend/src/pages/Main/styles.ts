import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: #333333;
  font-size: 1rem;
  font-weight: bold;

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

export { Container, Notice, SampleNotice, NoticeText, NoticeDiv };
