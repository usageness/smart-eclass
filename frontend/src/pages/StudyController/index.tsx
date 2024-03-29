import { useEffect, useState } from 'react';
import { requestGetStudy } from 'apis/request/study';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';
import useAuth from 'hooks/useAuth';
import { StudyDetail, StudyIntroduction } from 'components/StudyComponents';

function StudyController() {
  const [study, setStudy] = useState<null | study>(null);
  const [isStudying, setIsStudying] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStale, setIsStale] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();

  const getStudy = () => {
    if (!id) {
      return;
    }

    requestGetStudy(id)
      .then(data => {
        setStudy(data);
        console.log('data is fetched :', data);
        setIsStale(false);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  const getDataStale = () => {
    console.log('make data stale');
    setIsStale(true);
  };

  useEffect(() => {
    getStudy();
  }, [isStale]);

  useEffect(() => {
    if (!study || !user) {
      setIsStudying(false);
      setIsTeacher(false);
      return;
    }

    const students = JSON.parse(study.students) as Array<string>;

    if (students.includes(user.userid)) {
      setIsStudying(true);
    }

    if (study.teacher === user.userid) {
      setIsTeacher(true);
    }

    console.log(isStudying);
  }, [study]);

  if (!study) return <p>loading</p>;

  return (
    <>
      {isStudying ? (
        <StudyDetail
          study={study}
          isTeacher={isTeacher}
          getDataStale={getDataStale}
        />
      ) : (
        <StudyIntroduction study={study} />
      )}
    </>
  );
}

export default StudyController;
