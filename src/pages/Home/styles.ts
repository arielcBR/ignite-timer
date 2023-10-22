import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  width: 100%;
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountMinutes = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  color: ${({ theme }) => theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
  }
`
export const Separator = styled.div`
  color: ${({ theme }) => theme['green-500']};
  padding: 2rem 0;
  overflow: hidden;
  width: 4rem;

  display: flex;
  justify-content: center;
`
export const StartCountdownButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
