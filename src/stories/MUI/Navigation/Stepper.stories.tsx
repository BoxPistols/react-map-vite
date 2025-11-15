/** @jsxImportSource react */
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stepper> = {
  title: 'MUI/Navigation/Stepper',
  component: Stepper,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    alternativeLabel: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Stepper>

const steps = ['アカウント作成', '個人情報入力', '確認']

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              全てのステップが完了しました
            </Typography>
            <Button onClick={handleReset}>リセット</Button>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              ステップ {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                戻る
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? '完了' : '次へ'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export const Playground: Story = {
  render: () => <HorizontalStepper />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <HorizontalStepper />
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          縦方向
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <Box sx={{ ml: 4, mb: 2 }}>
                <Typography>ステップ {index + 1} の内容</Typography>
                <Box sx={{ mt: 1 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    戻る
                  </Button>
                  <Button onClick={handleNext}>
                    {index === steps.length - 1 ? '完了' : '次へ'}
                  </Button>
                </Box>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Box>
    )
  },
}

export const AlternativeLabel: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        代替ラベル
      </Typography>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  ),
}

export const Optional: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        オプションステップ
      </Typography>
      <Stepper activeStep={1}>
        <Step>
          <StepLabel>ステップ 1</StepLabel>
        </Step>
        <Step>
          <StepLabel optional={<Typography variant="caption">オプション</Typography>}>
            ステップ 2
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>ステップ 3</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
}

export const Error: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        エラーステップ
      </Typography>
      <Stepper activeStep={1}>
        <Step>
          <StepLabel>ステップ 1</StepLabel>
        </Step>
        <Step>
          <StepLabel error>エラーステップ</StepLabel>
        </Step>
        <Step>
          <StepLabel>ステップ 3</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
}
