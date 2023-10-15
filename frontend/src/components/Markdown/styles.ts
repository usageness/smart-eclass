import styled from 'styled-components';

const MarkdownStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h4 {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h5 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  img {
    max-width: 100%;
  }

  a {
    color: #0055ff;

    &:hover {
      color: #00aaff;
    }
  }

  pre {
    border-radius: 15px;
    background-color: #eeeeee;
    padding: 1rem;
  }

  hr {
    width: 100%;
    background-color: #333333;
  }
`;

export { MarkdownStyle };
