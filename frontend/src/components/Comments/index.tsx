// import * as S from './styles';

interface CommentsPropsType {
  commentList: string;
}

function Comments({ commentList }: CommentsPropsType) {
  if (!commentList) return <p>작성된 수강평이 없습니다.</p>;

  return (
    <>
      {JSON.parse(commentList).map((item: string) => {
        <p>{item}</p>;
      })}
    </>
  );
}

export default Comments;
