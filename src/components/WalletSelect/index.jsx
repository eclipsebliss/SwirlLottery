
import {useConnect } from 'wagmi';
import styled from 'styled-components';
import {useContext } from 'react'
import {StatusContext } from '../Dialog'
import {VerScatter, HorScatterBut,VerCenter } from '../../BaseStyle/LayoutSty';


const SelectContainer = styled(VerScatter)`
    max-height: 32rem;
    width: 38rem;
    padding:1rem;
    gap:5rem; 
    cursor: pointer;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      gap:2rem; 
    `}
`

const SelectSingleButton = styled(HorScatterBut)`
    height: 5rem;
    width: 100% !important;
    border-radius: 12px;
    border: 1px solid ${props => props.theme.button8};
    padding: 0.3rem 1.5rem 0.3rem 1.5rem ;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
   
    background-color:transparent;
    :hover {
      background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
    }
`

const SelectNameOut = styled(VerCenter)`
    height: 100%;
    padding-top:3px;
`

const SelectName = styled.div`
    display: flex;
    flex-flow: row;
    color:${props => props.theme.text1};
    font-size: 1em;
    font-weight: 700;
`

const SelectLogo = styled(VerCenter)`
`

const SelectImg = styled.img`
    height: 24px;
    width: 24px;
`

export default function WalletSelect() {
  const {getpendingConnector, getisError, getConnectorInfo } = useContext(StatusContext)
  const {connect, connectors } = useConnect(
    {
      onMutate(_pendingConnector) {
        getpendingConnector(_pendingConnector)
      },
      onError(_error) {
        getisError(_error)
      },
      onSuccess(){
        document.body.style.overflow = "scroll";
      }
    }
  )

  return (
    <SelectContainer >
      {connectors.map((connector) => (
        <SelectSingleButton disabled={!connector.ready} key={connector.id} onClick={() => connect({connector })}>
          {/* button里面的字体 */}
          <SelectNameOut>
            <SelectName>
              {connector.name}
              {!connector.ready && ' (unsupported)'}
            </SelectName>
          </SelectNameOut>
          {/* button里面的LOGO，根据传入的钱包名称自适应变化 */}
          <SelectLogo>
            <SelectImg src={getConnectorInfo(connector.name, 'icon')} />
          </SelectLogo>
        </SelectSingleButton>
      ))}
    </SelectContainer>
  )
}