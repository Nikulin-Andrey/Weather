import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(4)}px
    ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
