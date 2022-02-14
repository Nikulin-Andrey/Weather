import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.sunny};
  opacity: ${({ theme }) => theme.opacity};
  padding: ${({ theme }) => theme.spacing(4)}px
    ${({ theme }) => theme.spacing(10)}px;
  height: 40%;
`

export const Today = styled.div``

export const Days = styled.div``

export const Day = styled.div``
