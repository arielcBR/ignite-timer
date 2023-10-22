import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      color: ${({ theme }) => theme['gray-100']};
      outline: none;
      height: 3rem;
      width: 3rem;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
