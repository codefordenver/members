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
import { UserCommonFragment } from '../../generated-models';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import EditableText from '../../forms/EditableText';
import './Onboarding.css';

interface OnboardingProps {
  user?: UserCommonFragment;
  onChange: (value: any) => void;
  onSubmit: (value: any) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({
  user,
  onChange,
  onSubmit
}) => {
  const [activeStep, setStep] = useState(0);
  const handleBack = useCallback(() => setStep(activeStep - 1), [
    setStep,
    activeStep
  ]);
  const handleNext = useCallback(() => setStep(activeStep + 1), [
    setStep,
    activeStep
  ]);

  if (!user) {
    return <LoadingIndicator />;
  }

  const { skills, githubName } = user;

  return (
    <React.Fragment>
      <Card className="Onboarding-header">
        <p>Welcome to Code for Denver!</p>
        <p>
          {
            "Let's spend a few minutes to fill out your profile so you can connect to others and join a project."
          }
        </p>
        {/* TODO: re-add this button to scroll to content
        once we have enough content to scroll */}
        {/* <Button variant="contained" color="primary">
          OKAY!
        </Button>{' '} */}
        <Link to="/">Skip for now</Link>
      </Card>

      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Skills</StepLabel>
          <StepContent>
            <Typography>What skills do you have?</Typography>
            <EditableSkills
              value={skills}
              name="skills"
              label="Add Skill"
              editing
              onChange={onChange}
            />
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
            <EditableText
              value={githubName}
              label="GitHub username"
              name="githubName"
              editing
              onChange={onChange}
            />
            <br />
            <br />
            <div>
              <Button onClick={handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Finish
              </Button>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </React.Fragment>
  );
};

export default Onboarding;
