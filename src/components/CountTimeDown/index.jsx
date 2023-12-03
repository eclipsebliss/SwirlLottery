import React, { useMemo, useContext, Fragment } from 'react'
import GetCountDown from './GetCountDown';
import dayjs from "dayjs";
import styled from 'styled-components';
import { PrizeContext } from '../OpeningInfoShow';
import { useTranslation } from 'react-i18next';
import { HorCenter } from '../../BaseStyle/LayoutSty';
import MediaQuery from 'react-responsive'

const CountdownOut = styled(HorCenter)`
    width: 24rem;
    ${({ theme }) => theme.MEDIA.upToSmall`width: 20rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      justify-content: space-between;
      width: 32rem;
    `}
    max-height: 5rem;
    gap: 5px;
`

const PublicText = styled.span`
    font-size: 2.5em; 
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text2};
    opacity:0.85; 
`

export default function CountTimeDown() {
  const { t } = useTranslation();
  const { remainingTime } = useContext(PrizeContext)

  const countDown = useMemo(() => {
    return dayjs(remainingTime).format('mm:ss');
  }, [remainingTime]);

  return (
    <CountdownOut >
      {/* 小于450px渲染 */}
      <MediaQuery query="(max-device-width: 450px)">
        <PublicText>{t('Opening Time2')}</PublicText>
      </MediaQuery>
      {/* 大于450px渲染 */}
      <MediaQuery query="(min-device-width: 450px)">
        <PublicText>{t('Opening Time1')}</PublicText>
      </MediaQuery>
      <Fragment>
        <GetCountDown numberString={countDown} />
      </Fragment>
    </CountdownOut>
  )
}