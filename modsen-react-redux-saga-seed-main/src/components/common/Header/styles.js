import styled from 'styled-components'

export const Container = styled.header`
  padding: ${({ theme }) => theme.spacing(4)}px
    ${({ theme }) => theme.spacing(10)}px;
  font-size: ${({ theme }) => theme.fonts.big}px;
  height: 20%;
  display: flex;
  justify-content: space-between;
`

export const ActiveApi = styled.h1`
  font-size: ${({ theme }) => theme.fonts.big}px;
`

export const ChangeApi = styled.button`
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background: ${({ theme }) => theme.colors.sunny};
  padding: ${({ theme }) => theme.spacing(2)}px;
  opacity: ${({ theme }) => theme.opacity};
  font-famaly: inherit;
  border: none;
  cursor: pointer;
`
