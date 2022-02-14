import styled from 'styled-components'

export const Container = styled.div`
  text-shadow: ${({ theme }) => theme.fonts.shadow};
`

export const Time = styled.h1`
  font-size: ${({ theme }) => theme.fonts.huge}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  font-weight: ${({ theme }) => theme.fonts.weight};
`

export const CurrentDate = styled.h2`
  font-size: ${({ theme }) => theme.fonts.medium}px;
`
