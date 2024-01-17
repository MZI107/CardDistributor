import './App.css';
import React, { useState } from 'react';

import { Boundary, Form, FormWrapper, FormPanelWrapper, Input, Button } from './components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { generateDeck } from './cards/Cards';
import { distributeCardV2 } from './function/Main';

function App() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [noOfPeople, setNoOfPerson] = useState(0);
  const [dCard, setDistributeCard] = useState([]); //useState to track state

  const onSubmit = async noOfPeople => {
    if(noOfPeople !== undefined && noOfPeople !== null)
    {
      setNoOfPerson(parseInt(noOfPeople));
      if(parseInt(noOfPeople) <= 0) {
        setDistributeCard([]);
        setError("Input value does not exist or value is invalid"); //if value is equal to zero prompt error
        return;
      }
      
      try {
        let deck = generateDeck(); //generate deck
        setDistributeCard(distributeCardV2(deck, noOfPeople)); //set data to state "setDistributeCard" to trigger gui changes
      } catch(e) {
        console.log(e)
        setError("Irregularity occurred");
      }
    }
  };

  return (
    <>
      <Boundary
          modal={true}
          error={error}
          success={success}
          onClose={() => {
              setError('');
              setSuccess('');
        }}>
        <FormPanelWrapper>
          <FormWrapper>
            <SettingsForm
                onSubmit={onSubmit}
                noOfPeople={noOfPeople}
                setNoOfPeople={setNoOfPerson}
                setError={setError}
            />
            {dCard && dCard.length > 0 ? 
              <CardDisplay 
                data={dCard}
              />
             : ''}
          </FormWrapper>
        </FormPanelWrapper>
      </Boundary>
    </>
  );
}

export const SettingsForm = props => {
  const { onSubmit, noOfPeople, setError } = props;

  const {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
  } = useFormik({
      initialValues: {
        noOfPeople: noOfPeople
      },
      validationSchema: inputScheme,
      validateOnMount: true,
      validateOnChange: true,
      enableReinitialize: true,
      onSubmit: async (values, { _, setSubmitting }) => {
          try {
              if(values !== undefined && values !== null)
              {
                if(values.noOfPeople !== undefined && values.noOfPeople !== null)
                {
                  const noOfPeople = parseInt(values.noOfPeople);
                  console.log("values.noOfPeople", values.noOfPeople);

                  setSubmitting(true);
                  await onSubmit(noOfPeople);
                  setSubmitting(false);
                }
                else
                {
                  setError("Irregularity occurred");
                }
              }
              else
              {
                setError("Irregularity occurred");
              }
              // resetForm();
          } catch (e) {
            console.log(e)
            setError("Irregularity occurred");
          }
      },
  });

  return (
    <div className='card p-4'>
      <Form onSubmit={handleSubmit} className='d-flex flex-column'>
        <Input
            name="noOfPeople"
            label="Number of People"
            value={values.noOfPeople}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.noOfPeople && errors.noOfPeople}
            type="number"
        />
        <Button
          variant={`success`}
          onClick={handleSubmit}
          label={`Distribute Card`}
          className={`justify-content-end`}
        />
      </Form>
    </div>
  );
};

const CardDisplay = props => {
  const { data } = props;

  return (
    data.map((obj, index) =>
      <div className='d-flex flex-row card mt-2'>
        <span className='d-flex flex-row text-nowrap mx-1 text-center container-person'>{`#${index+1}`}</span>
        <div className='d-flex flex-row text-center flex-wrap'>
          {obj.map((cards, i) => {
            let html = <div className={`card container-card px-1 ml-1 ${cards.seperated ? "seperated" : ""}`}>
              <div className={`symbol-logo icon icon-${cards.symbolInfo.name}`}></div>
              {cards.display}
            </div>;
            return html
          }
          )}
        </div>
      </div>
    )
  )    
}

export const inputScheme = Yup.object({
  noOfPeople: Yup.number().required('Required field'),
});

export default App;
