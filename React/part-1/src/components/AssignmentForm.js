import { useEffect, useState } from 'react';
import './FormValidation.css';
import { getPersons, createPerson, getApiError } from './apiutils';
import CardContainer from './CardContainer';
import FormValidation from './FormValidation';

function AssignmentForm() {
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('This is the error from the parent');
  const [error, setError] = useState('');

  const loadPersonList = () => {
    setIsLoading(true);
    getPersons()
      .then((personList) => {
        setIsLoading(false);
        setPerson(personList);
      })
      .catch(() => {
        setIsLoading(false);
        setFormError('Failed to load persons');
      });
  };

  useEffect(() => {
    loadPersonList();
  }, []);

  return (
    <div className='container'>
      <FormValidation
        onSubmit={(data) => {
          createPerson(data)
            .then((response) => {
              if (response.success) {
                onPersonAdd(response.person);
                loadPersonList();
              } else {
                //getApiError(response);
                setError(getApiError(response));
              }
            })
            .catch(() => {
              setFormError('Failed to create person');
            });
        }}
        
      />
      <CardContainer persons={person} isLoading={isLoading} />
    </div>
  );
}

export default AssignmentForm;