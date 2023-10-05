import styled from 'styled-components';

const ChapterContainer = styled.div`
  display: flex;
`;

const ChapterTable = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const ChapterContents = styled.div`
  padding: 1rem;

  color: #222222;
`;

export {
  ChapterContainer,
  ChapterTable,
  ChapterHead,
  ChapterItem,
  ChapterContents,
};
