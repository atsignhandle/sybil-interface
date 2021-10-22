import React from 'react'
import styled from 'styled-components'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'
import TwitterIcon from '../../assets/images/Twitter_Logo_Blue.png'

const VERIFY_TWITTER_LINK = process.env.REACT_APP_VERIFY_TWITTER_LINK

export const VerifyButton = styled.a`
  background-color: ${({ theme }) => theme.blue1};
  padding: 8px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 12px;
  text-decoration: none;
  font-size: 14px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const TwitterLogo = styled.img`
  height: 20px;
  width: 20px;
`

export default function TwitterLoginButton({ text }: { text: string }) {
  return (
    <VerifyButton href={VERIFY_TWITTER_LINK}>
      <RowBetween>
        <TYPE.white>{text}</TYPE.white>
        <TwitterLogo src={TwitterIcon} />
      </RowBetween>
    </VerifyButton>
  )
}
