import React from "react"
import { keyframes, usePrefersReducedMotion, Box } from "@chakra-ui/react"
import WaveSvg from "images/wave-chill.svg"

const waveFlow = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`

// const WaveContainer = styled.div`
//   height: 5%;
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `

// const WaveShape = styled.div`
//   background: url(${WaveSvg}) repeat-x;
//   position: absolute;
//   top: -96px;
//   width: 6400px;
//   height: 96px;
//   animation: ${waveFlow} 45s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
//   transform: translate3d(0, 0, 0);
// `

const Wave = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion ? undefined : `${waveFlow} 45s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite`
  return (
    <Box w="100%" position="absolute" bottom="0" left="0">
      <Box
        background={`url(${WaveSvg}) repeat-x`}
        position="absolute"
        top="-96px"
        width="6400px"
        height="96px"
        animation={animation}
      />
    </Box>
  )
}

export default Wave
