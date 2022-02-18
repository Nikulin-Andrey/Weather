import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.sunny};
  opacity: ${({ theme }) => theme.opacity};
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
  height: 30%;
  justify-content: space-between;
`

export const Today = styled.div`
  width: 20%;
`

export const Days = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`
