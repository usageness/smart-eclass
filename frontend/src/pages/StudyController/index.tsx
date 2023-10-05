import { useEffect, useState } from 'react';
import { requestGetStudy } from 'apis/request/study';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';
import useAuth from 'hooks/useAuth';
import { StudyDetail, StudyIntroduction } from 'components/StudyComponents';

function StudyController() {
  const [study, setStudy] = useState<null | study>(null);
  const [isStudying, setIsStudying] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();

  const getStudy = () => {
    if (!id) {
      return;
    }

    requestGetStudy(id)
      .then(data => {
        setStudy(data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getStudy();
  }, []);

  useEffect(() => {
    if (!study || !user) {
      setIsStudying(false);
      return;
    }

    const students = JSON.parse(study.students) as Array<string>;

    if (students.includes(user.userid)) {
      setIsStudying(true);
    }
    console.log(isStudying);
  }, [study]);

  if (!study) return <p>loading</p>;

  return (
    <>
      {isStudying ? (
        <StudyDetail study={study} />
      ) : (
        <StudyIntroduction study={study} />
      )}
    </>
  );
}

export default StudyController;
