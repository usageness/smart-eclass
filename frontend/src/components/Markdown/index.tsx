import * as S from './styles';
import Markdown from 'react-markdown';

interface MarkDownProps {
  children: string;
}

function MarkDown({ children }: MarkDownProps) {
  return (
    <S.MarkdownStyle>
      <Markdown>{children}</Markdown>
    </S.MarkdownStyle>
  );
}

export default MarkDown;
