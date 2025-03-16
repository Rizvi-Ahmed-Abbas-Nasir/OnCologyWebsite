import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import './Audit.css';


const Container = styled.div`
  color: black;
  padding: 7rem 3rem;
  border-radius: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Mona Sans', sans-serif;
  
  @media (max-width: 1024px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;
    width: 100%;
  }

  @media (max-width: 568px) {
    padding: 4rem 1rem;
    width: 100%;
  }
`;

const Form__ = styled.div`
  border-radius: 15px;
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: 'Mona Sans', sans-serif;
  
  input {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 15px;
    width: 90%;
    margin-bottom: 1rem;
    font-size: 16px;
  }

  input::placeholder {
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 2rem;
  }

  @media (max-width: 568px) {
    padding: 3rem 1rem;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 2.6rem;
  margin: auto;
  overflow-y: auto;
  display: flex;
  gap: 2rem;
  width: 60%;
  flex-direction: column;
  border: 1px solid black;
  padding: 0rem 6rem;
  padding-bottom: 5rem;
  justify-content: center;
  align-items: start;
  font-family: 'Mona Sans', sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 1rem;
  }

  @media (max-width: 568px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;


const FormContainer2 = styled.div`
  background-color: white;
  margin: auto;
  display:flex;
  gap:2rem;
  flex-direction:column;
  width:100%;
    justify-content: center;

  align-items:center;
  font-family: 'Mona Sans', sans-serif;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 568px) {
    padding: 5rem 1rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
      justify-content: center;
  display:flex;
  align-items:center;
  width:100%;
  padding:2rem;
  margin-bottom: 2rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 568px) {
    font-size: 2rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  width: 70%;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FormGroup = styled.div`
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  justify-content: center;

  .input {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .input input,
  .input select,
  .input textarea {
    height: 3rem;
    color: black;
    width: 100%;
    font-family: 'Mona Sans';
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 0.8rem 1rem;
    border-radius: 3rem;
    border: 1.2px solid black;
    transition: all 0.2s ease-in-out;
  }

  .input textarea {
    height: 10rem;
  }

  .input input:focus,
  .input select:focus,
  .input textarea:focus {
    border: 1.5px solid black;
    border-bottom: 3px solid #000000c0;
  }

  @media (max-width: 768px) {
    .input input,
    .input select,
    .input textarea {
      font-size: 1rem;
    }
  }

  @media (max-width: 568px) {
    .input input,
    .input select,
    .input textarea {
      font-size: 0.9rem;
    }
  }
`;

const StyledFormGroup = styled.div`
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  .form-input {
    flex: 1;
    width: 100%;
    display: flex;
  justify-content: space-between;
  }

  .form-input input,
  .form-input select,
  .form-input textarea {
    height: 3rem;
    color: black;
    width: 100%;
    max-width: 600px; /* Sets a consistent width for all inputs */
    font-family: 'Mona Sans';
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 0.8rem 1rem;
    border-radius: 3rem;
    border: 1.2px solid black;
    transition: all 0.2s ease-in-out;
  }

  
  .form-input textarea {
    height: 10rem;
  }

  .form-input input:focus,
  .form-input select:focus,
  .form-input textarea:focus {
    border: 1.5px solid black;
    border-bottom: 3px solid #000000c0;
  }

  .radio-group {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }

  .radio-group label {
    font-size: 1rem;
    font-weight: 500;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .radio-group input[type='radio'] {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .form-input input,
    .form-input select,
    .form-input textarea {
      font-size: 1rem;
    }
    .radio-group label {
      font-size: 0.95rem;
    }
    .radio-group input[type='radio'] {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (max-width: 568px) {
    .form-input input,
    .form-input select,
    .form-input textarea {
      font-size: 0.9rem;
    }
    .radio-group label {
      font-size: 0.85rem;
    }
  }
`;



const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  svg {
    color: white;
  }
`;


const Form: React.FC = () => {
  const [animationClass, setAnimationClass] = useState<string>("");

  interface FormData {
    name: string;
    name1: "",
    name2: "",  
    name3: "",
    name4: "",
    name5: "",
    name6: "",
    name7: "",
    name8: "",
    name9: "",
    agreement: "yes" | "no" | ""; // Specify possible values for agreement

    name11: "",

    name10: "",
    name12: "",  
    name13: "",
    name14: "",
    name15: "",
    name16: "",
    name17: "",
    name18: "",
    name19: "",
    email: string;
    phone: string;
    domain: string;
    description: string;
    websiteLink: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    name1: "",
    name2: "",  
    name3: "",
    name4: "",
    name5: "",
    name6: "",
    name7: "",
    name8: "",
    name9: "",
    name11: "",
    agreement: "", // Default value

    name10: "",
    name12: "",  
    name13: "",
    name14: "",
    name15: "",
    name16: "",
    name17: "",
    name18: "",
    name19: "",
    email: "",
    phone: "",
    domain: "",
    description: "",
    websiteLink: "",
  });

  const stepToWords = (step: number) => {
    const words = ["Patient Name", " Symptom Progression", "Dissimilarities", "Current Condition"];
    return words[step] || `${step + 1}th`;
  };

  const questions = [
    "Is the equipment operational?",
    "Was the maintenance check completed?",
    "Is the safety protocol followed?",
    "Any outstanding issues reported?",
  ];

  const [step, setStep] = useState(0);
  const progress = ((step + 1) / questions.length) * 100;

 

  const [nextLoading, setNextLoading] = useState(false);

  const handleNext = () => {
    if (step < questions.length - 1) {
      setNextLoading(true);
      setAnimationClass("slide-out");
  
      setTimeout(() => {
        setStep(step + 1);
        setAnimationClass("slide-in");
        setNextLoading(false);
      }, 500); 
    }
  };
  

  const handleBack = () => {
    if (step > 0) {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setStep(step - 1);
        setAnimationClass("slide-in");
      }, 300);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   console.log("Form Data Submitted:", formData);
  // };

  return (
    <Container>
      <FormContainer>
      <FormTitle>Differential Diagnosis Form</FormTitle>

      <FormContainer2>

        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="progress-steps">
            {questions.map((_, index) => (
              <div key={index} className="progress-step-container">
                <div
                  className={`progress-step ${index <= step ? "filled" : ""}`}
                >
                  {index + 1}
                </div>
                <div className="progress-step-subheading">
                  {stepToWords(index)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {step === 0 && (
          <Form__ className={`form-wrapper ${animationClass}`}>
            <FormWrapper>
              <FormGroup>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </FormGroup>    


              <FormGroup>
                <div className="input">
                  <input
                    type="date"
                    name="date"
                    placeholder="Select a Date"
                    onChange={handleInputChange}
                  />
                </div>
              </FormGroup>

              <SubmitButton
                type="button"
                onClick={handleNext}
                disabled={nextLoading || formData.name === ""} 
              >
                {nextLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="spinner"></div>
                    Loading...
                  </div>
                ) : (
                  step === questions.length - 1 ? "Submit" : "Next"
                )}
                <FaArrowRight />
              </SubmitButton>

            </FormWrapper>
          </Form__>
        )}

        {step === 1 && (
       <Form__ className={`form-wrapper ${animationClass}`}>
       <FormWrapper>
         {/* Patient Medical History */}
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name1"
               placeholder="Previous cancer diagnoses (Type, Stage, Year)"
               value={formData.name1}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name2"
               placeholder="Past treatments (Chemotherapy, Radiation, Surgery, etc.)"
               value={formData.name2}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name3"
               placeholder="Family history of cancer (Type, Age of Diagnosis)"
               value={formData.name3}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name4"
               placeholder="Genetic predispositions (BRCA mutations, Lynch syndrome, etc.)"
               value={formData.name4}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         {/* Symptom Onset & Progression */}
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name5"
               placeholder="Date symptoms started (Approximate or Exact)"
               value={formData.name5}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name6"
               placeholder="Initial symptoms (Pain, Fatigue, Weight loss, etc.)"
               value={formData.name6}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name7"
               placeholder="Progression over time (Got better/worse, spread, new symptoms)"
               value={formData.name7}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         {/* Dissimilarities & Comparisons */}
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name8"
               placeholder="Unusual symptoms (Not common for this cancer type)"
               value={formData.name8}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name9"
               placeholder="Changes from previous experiences (If recurrence, how different?)"
               value={formData.name9}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         {/* Current Condition & Treatment Response */}
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name10"
               placeholder="Current symptoms & severity (Mild, Moderate, Severe)"
               value={formData.name10}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <FormGroup>
           <div className="input">
             <input
               type="text"
               name="name11"
               placeholder="Response to treatment (Improving, stable, worsening, side effects)"
               value={formData.name11}
               onChange={handleInputChange}
             />
           </div>
         </FormGroup>
     
         <SubmitButton
           type="button"
           onClick={handleNext}
           disabled={formData.name === "" || nextLoading}
         >
           {nextLoading ? (
             <div className="flex items-center gap-2">
               <div className="spinner"></div>
               Loading...
             </div>
           ) : step === questions.length - 1 ? "Submit" : "Next"}
         </SubmitButton>
       </FormWrapper>
     </Form__>
     
        )}
         {step === 2 && (
        <Form__ className={`form-wrapper ${animationClass}`}>
        <FormWrapper>
        <StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Has the patient been diagnosed with any form of cancer?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement1"
          value="yes"
          checked={formData.agreement1 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement1"
          value="no"
          checked={formData.agreement1 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Has the patient undergone chemotherapy or radiation therapy?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement2"
          value="yes"
          checked={formData.agreement2 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement2"
          value="no"
          checked={formData.agreement2 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Is the patient currently on any cancer-related medication?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement3"
          value="yes"
          checked={formData.agreement3 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement3"
          value="no"
          checked={formData.agreement3 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Has the patient experienced any side effects from cancer treatment?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement4"
          value="yes"
          checked={formData.agreement4 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement4"
          value="no"
          checked={formData.agreement4 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Is there a family history of cancer?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement5"
          value="yes"
          checked={formData.agreement5 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement5"
          value="no"
          checked={formData.agreement5 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Has the patient undergone any surgical procedures related to cancer?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement6"
          value="yes"
          checked={formData.agreement6 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement6"
          value="no"
          checked={formData.agreement6 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div>
      <h3>Has the patient been advised for regular cancer screenings?</h3>
    </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="agreement7"
          value="yes"
          checked={formData.agreement7 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="agreement7"
          value="no"
          checked={formData.agreement7 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

      
          <SubmitButton
            type="button"
            onClick={handleNext}
            disabled={formData.name === "" || nextLoading}
          >
            {nextLoading ? (
              <div className="flex items-center gap-2">
                <div className="spinner"></div>
                Loading...
              </div>
            ) : (
              step === questions.length - 1 ? "Submit" : "Next"
            )}
          </SubmitButton>
        </FormWrapper>
      </Form__>
      
        )}
         {step === 3 && (
          <Form__  className={`form-wrapper ${animationClass}`}>
            <FormWrapper>
            <StyledFormGroup>
  <div className="form-input">
    <div> <h3>Does the patient have cancer?</h3> </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cancer1"
          value="yes"
          checked={formData.cancer1 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="cancer1"
          value="no"
          checked={formData.cancer1 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div> <h3>Has the cancer spread to other parts of the body?</h3> </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cancer2"
          value="yes"
          checked={formData.cancer2 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="cancer2"
          value="no"
          checked={formData.cancer2 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div> <h3>Is the patient currently undergoing treatment?</h3> </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cancer3"
          value="yes"
          checked={formData.cancer3 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="cancer3"
          value="no"
          checked={formData.cancer3 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div> <h3>Is the cancer in remission?</h3> </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cancer4"
          value="yes"
          checked={formData.cancer4 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="cancer4"
          value="no"
          checked={formData.cancer4 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

<StyledFormGroup>
  <div className="form-input">
    <div> <h3>Has the patient experienced side effects from treatment?</h3> </div>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cancer5"
          value="yes"
          checked={formData.cancer5 === "yes"}
          onChange={handleInputChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="cancer5"
          value="no"
          checked={formData.cancer5 === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
    </div>
  </div>
</StyledFormGroup>

              <SubmitButton
                type="button"
                onClick={handleNext}
                disabled={formData.name === "" || nextLoading}
              >
                {nextLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="spinner"></div>
                    Loading...
                  </div>
                ) : (
                  step === questions.length - 1 ? "Submit" : "Next"
                )}
              </SubmitButton>
            </FormWrapper>
          </Form__>
        )}
              </ FormContainer2>

      </FormContainer>
    </Container>
  );
};


export default Form;
