import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import EditableSkills from '../../forms/EditableSkills';
import './OnboardingPage.css';

const OnboardingPage: React.FC = () => {
  const [activeStep, setStep] = useState(0);
  const handleBack = useCallback(() => setStep(step => step--), [setStep]);
  const handleNext = useCallback(() => setStep(step => step++), [setStep]);

  return (
    <React.Fragment>
      <Card className="OnboardingPage-header">
        <p>Welcome to Code for Denver!</p>
        <p>
          Let's spend a few minutes to fill out your profile so you can connect
          to others and join a project.
        </p>
        <Button variant="contained" color="primary">
          OKAY!
        </Button>{' '}
        <Link to="/">Skip for now</Link>
      </Card>

      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Skills</StepLabel>
          <StepContent>
            <Typography>What skills do you have?</Typography>
            <EditableSkills />
            <div>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Connect Accounts</StepLabel>
          <StepContent>
            <Typography>
              Please connect these accounts if you have them.
            </Typography>
            <div>
              <Button onClick={handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Finish
              </Button>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </React.Fragment>
  );
};

export default OnboardingPage;
