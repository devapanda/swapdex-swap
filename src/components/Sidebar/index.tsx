import React from 'react'
import styled from "styled-components";

import { NavLink } from 'react-router-dom'

import AnalyticsIcon from '../../assets/svg/ionic-md-analytics.svg'
import SwapIconBlue from '../../assets/images/logo-blue.png'
//import SwapIconWhite from '../../assets/images/logo-white.png'
import WalletIcon from '../../assets/svg/material-account-balance-wallet.svg'
import FiatIcon from '../../assets/svg/Fiat.svg'
import VoteIcon from '../../assets/svg/awesome-vote-yea.svg'
import DexIcon from '../../assets/svg/Dex.svg'
import StableCoinIcon from '../../assets/svg/Stable-coin.svg'
import LoanIcon from '../../assets/svg/Loan.svg'
import StakingIcon from '../../assets/svg/Staking.svg'
//import SidebarShape from '../../assets/svg/sidebar-bg.svg'
import {isMobile} from "react-device-detect";

export default function Sidebar({ active }: { active: 'swap' | 'dex' | 'staking' | 'loan' | 'stable-coin' | 'fiat' | 'wallet' | 'analytics' | 'vote'}) {
  const activeClassName = 'ACTIVE'
  //const scaleValue = (window.screen.width <= 1366) ? 'scale(0.145)' : 'scale(0.2)'
  //const activeElement = (!document.getElementById(active)) ? {top: 0} : document.getElementById(active)!.getBoundingClientRect()

  const SidebarFrame = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: auto;
      background-color: #FFFFFF;
      height: 100%;
      position: absolute;
      z-index: 2;
      padding: 5px 0 5px 0;
      border-radius: 0 60px 50px 50px;
      -webkit-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
      -moz-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);   /* Firefox 3.5 - 3.6 */
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
      
      svg {
        z-index: -1;
        position: fixed;
        left: 0;
        top: 0;
      }
       
      ${({ theme }) => theme.mediaWidth.upToMedium`
        width: 100%;
        border-radius: 0;in
        padding: 0;
        -webkit-box-shadow: none;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: none;   /* Firefox 3.5 - 3.6 */
        box-shadow: none;
        position: relative;
        
        svg {
          
        }
      `};
  `

  const SidebarMenu = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      width: 100%;
      margin-top: 10rem;
      
      ${({ theme }) => theme.mediaWidth.upToMedium`
        margin-top: 0rem;
        padding: 0;
      `};
    `

  const SidebarElement = styled(NavLink).attrs({
    activeClassName
  })`
      text-decoration: none;
      outline: none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #8b91f5;  
      
      img {
        width: 1.25rem;
        color: white;
      }
      
      p {
        margin-left: 10%;
        font-size: 0;
        font-weight: 600;
        text-transform: uppercase;
        transform: rotate(-90deg);
      }
      
      &.${activeClassName} {
        color: #7D81F6;
        fill: #D5E2F8;
      }
    
      :hover,
      :focus {
      }
      
      ${({ theme }) => theme.mediaWidth.upToMedium`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding: 0 0 0 10%;
        
        &.${activeClassName} {
          fill: #D5E2F8;
          border-radius: 0;
        }
        
        p {
          transform: rotate(0deg);
          font-size: 1em;
        }
      `};
    `

  return (
      <SidebarFrame>
        <SidebarMenu>
          <SidebarElement to={'/swap'} isActive={() => active === 'swap'}>
            <img src={SwapIconBlue} style={ isMobile ? { height: '1.25rem', width: '1.5rem' } : { display: 'none'}}></img>
            <p id="swap" style={ isMobile ? { fontSize: '1em' } : { fontSize: '0.8em' }}>Swap</p>
          </SidebarElement>
          <SidebarElement to={'/dex'} isActive={() => active === 'dex'}>
            <img src={DexIcon}></img>
            <p>Dex</p>
          </SidebarElement>
          <SidebarElement to={'/staking'} isActive={() => active === 'staking'}>
            <img src={StakingIcon}></img>
            <p>Staking</p>
          </SidebarElement>
          <SidebarElement to={'/loan'} isActive={() => active === 'loan'}>
            <img src={LoanIcon}></img>
            <p>Loan</p>
          </SidebarElement>
          <SidebarElement to={'/stable-coin'} isActive={() => active === 'stable-coin'}>
            <img src={StableCoinIcon}></img>
            <p>Stable</p>
          </SidebarElement>
          <SidebarElement to={'/fiat'} isActive={() => active === 'fiat'}>
            <img src={FiatIcon}></img>
            <p>Fiat</p>
          </SidebarElement>
          <SidebarElement to={'/wallet'} isActive={() => active === 'wallet'}>
            <img src={WalletIcon}></img>
            <p>Wallet</p>
          </SidebarElement>
          <SidebarElement to={'/analytics'} isActive={() => active === 'analytics'}>
            <img src={AnalyticsIcon}></img>
            <p>Analytics</p>
          </SidebarElement>
          <SidebarElement to={'/vote'} isActive={() => active === 'vote'}>
            <img src={VoteIcon}></img>
            <p>Vote</p>
          </SidebarElement>
        </SidebarMenu>
      </SidebarFrame>
  )
}
