import styled, {keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  };
  20% {
    opacity: 1;
    transform: scale(1);
  };
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  };
`

const Dot = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color:#3cefff;
  animation: ${dotAnimation} 1.5s infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  ${Dot}:nth-of-type(1) {
    animation-delay: -0.4s;
    margin-right: 2em;
  }
  ${Dot}:nth-of-type(2) {
    animation-delay: -0.2s;
    margin-right: 2em;
  }
  ${Dot}:nth-of-type(3) {
    animation-delay: 0s;
  }
`;

export default function ThreeDotsUse() {
  return (
    <DotsContainer>
      <Dot />
      <Dot />
      <Dot />
    </DotsContainer>
  );
}
