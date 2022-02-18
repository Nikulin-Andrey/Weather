import styled from 'styled-components'

export const Container = styled.div`
  text-align: end;
`

export const PlaceInput = styled.span`
  font-size: ${({ theme }) => theme.fonts.huge}px;
  color: ${({ theme }) => theme.colors.font};
  font-weight: ${({ theme }) => theme.fonts.weight};
  text-shadow: ${({ theme }) => theme.fonts.shadow};
  font-family: inherit;
  background: none;
  border: none;
  text-align: end;
  width: 50%;
`
