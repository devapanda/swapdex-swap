import { ChainId } from '@uniswap/sdk'
import React, {useCallback, useState} from 'react'
import { isMobile } from 'react-device-detect'

import styled from 'styled-components'

import Logo from '../../assets/images/logo-white.png'
import { useActiveWeb3React } from '../../hooks'

import { YellowCard } from '../Card'

import Web3Status from '../Web3Status'
import SidebarModal from "../SidebarModal";
import Sidebar from '../Sidebar'
import SwapIconBlue from "../../assets/images/logo-blue.png";

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;  
  height: 3em;
  padding: 0 10px;
  background-color: #8b91f5;
  z-index: 2;
  -webkit-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);   /* Firefox 3.5 - 3.6 */
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); 
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: calc(100%);
    height: 100%;
    flex-direction: column;
    background-color: #d6e4f8;
    padding: 0;
    -webkit-box-shadow: none;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: none;   /* Firefox 3.5 - 3.6 */
    box-shadow: none; 
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 100%;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 20px;
  `};
`

const SidebarMenu = styled.div`
  display: none;
  
  svg {
    width: 0.75rem;
  }
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: flex;
    margin-right: 20px;
    right: 0;
    position: fixed;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-content: center;
    padding-top: 10px;
  `};
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
  display: none;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const SwapIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  left: 120px;
  position: relative;
  
  img { 
    max-width: 30px;
    max-height: 30px;
  }
  
  p {
    padding-left: 10px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: Audiowide, serif;
  }
  
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    left: 0;
    
    img { 
      max-width: 2em;
    }
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  `};
`

const SidebarHeader = styled.div`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #8b91f5; 
      height: 10%;
      width: 100%;
    `

const SwapSidebarIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    position: relative;
    
    img {
      margin-left: 10%;
      width: 1.5rem;
      height: 1rem;
    }
    
    p {
      padding-left: 10px;
      color: #8b91f5;
      text-decoration: none;
      font-family: Audiowide, serif;
    }
    
    svg {
      right: 10%;
      position: fixed;
      width: 1rem;
      height: 1rem;
    }
   
    ${({ theme }) => theme.mediaWidth.upToMedium`
      left: 0;
    `};
  `

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const [modalOpen, setModalOpen] = useState(false)

  const handleDismissMobileSidebar = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <HeaderFrame>
      <HeaderElement style={isMobile ? { backgroundColor: '#8b91f5', boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)' } : { }}>
        <Title href=".">
          <SwapIcon>
            <img src={Logo} alt="logo"/>
            <p>SWAPDEX</p>
          </SwapIcon>
        </Title>
        <SidebarMenu onClick={() => {
          if (isMobile) {
            setModalOpen(true)
          }
        }} >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v"
               className="svg-inline--fa fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 192 512">
            <path fill="#FFFFFF"
                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24
                  80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8
                  32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z">
            </path>
          </svg>
        </SidebarMenu>
      </HeaderElement>
      <HeaderControls style={!isMobile ? { width: 'auto' } : { width: '100%', backgroundColor: '#d6e4f8' }}>
        <HeaderElement>
          <TestnetWrapper>
            {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
          </TestnetWrapper>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
      {isMobile ?
          <SidebarModal isOpen={modalOpen} onDismiss={handleDismissMobileSidebar} maxHeight={200} minHeight={30}>
            <SidebarHeader>
              <SwapSidebarIcon>
                <img src={SwapIconBlue} alt="logo"/>
                <p>SWAPDEX</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                     className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 352 512"
                     onClick={() => {
                       if (isMobile) {
                         setModalOpen(false)
                       }
                     }}>
                  <path fill="#8b91f5"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                    0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48
                    0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48
                    0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256
                    9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28
                    12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28
                    32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19
                    0-44.48L242.72 256z">
                  </path>
                </svg>
              </SwapSidebarIcon>
            </SidebarHeader>
            <Sidebar active={'swap'}></Sidebar>
          </SidebarModal>
      : ''}
    </HeaderFrame>
  )
}
