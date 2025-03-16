import { useState } from 'react';
import './Audit.css';

const questions = [
  'Is the equipment operational?',
  'Was the maintenance check completed?',
  'Is the safety protocol followed?',
  'Any outstanding issues reported?'
];

// Helper function to convert step number to words
const stepToWords = (step: number) => {
  const words = ['First', 'Second', 'Third', 'Fourth'];
  return words[step] || `${step + 1}th`; // For cases beyond the 4 steps
};

const AuditForm = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<string | null>>(Array(questions.length).fill(null));

  const handleChange = (value: string) => {
    const updatedAnswers = [...answers];
    if (updatedAnswers[step] === value) {
      updatedAnswers[step] = null; // Unselect if clicked again
    } else {
      updatedAnswers[step] = value;
    }
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Submitted Answers:', answers);
  };

  const isAnswerSelected = answers[step] !== null;

  // Calculate progress as a percentage for the bar and for the circles
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="audit-form-container">
      <div className="form-container">
        <h1 className="form-heading">Audit Form</h1>

        {/* Progress Bar and Circles */}
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="progress-steps">
            {questions.map((_, index) => (
              <div key={index} className="progress-step-container">
                <div
                  className={`progress-step ${index <= step ? 'filled' : ''}`}
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

        <div className="question-container">
          <span className="question-number">Question {step + 1}:</span>
          <span className="question-text">{questions[step]}</span>
        </div>

        <div className="button-container">
          <button
            className={`button yes-button ${answers[step] === 'yes' ? 'selected' : ''}`}
            onClick={() => handleChange('yes')}
          >
            YES
          </button>
          <button
            className={`button no-button ${answers[step] === 'no' ? 'selected' : ''}`}
            onClick={() => handleChange('no')}
          >
            NO
          </button>
        </div>

        <div className="form-buttons">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="btn btn-back"
          >
            Back
          </button>

          {step === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="btn btn-submit"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isAnswerSelected}
              className={`btn btn-next ${!isAnswerSelected ? 'btn-disabled' : ''}`}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
