import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(3)}px;
  position: relative;
  flex: 1;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ today }) => (today ? 'auto' : '100%')};
  width: ${({ today }) => (today ? 'auto' : '100%')};
  font-size: ${({ theme, today }) =>
    today ? theme.fonts.big : theme.fonts.medium}px;
`

export const Name = styled.span`
  padding: 4px 14px;
  border-radius: 60px;
  background: grey;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

export const Temperature = styled.span``

export const Icon = styled.img`
  position: ${({ today }) =>
    today ? 'static' : 'absolute'};
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(
    ${({ today }) => (today ? '0, 0' : '-50%, -50%')}
  );
`
