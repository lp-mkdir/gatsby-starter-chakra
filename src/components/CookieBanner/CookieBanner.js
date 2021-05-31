import React, { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { Button, Stack, Flex, Spacer, Text, Center, useDisclosure, Progress, Box } from "@chakra-ui/react"
import ScrollProgress from "utils/ScrollProgress"
import OptModal from "./optModal"
import config from "../../../config/website"

const cookieName = `gatsby-gdpr-google-analytics`

function CookieBanner({ content, buttonText, debug }) {
  const [isVisible, setVisible] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pos, scrollPerc } = ScrollProgress()

  function disableTrack() {
    Cookies.set(cookieName, false)
    window[`ga-disable-${config.googleAnalyticsID}}`] = true
    onClose()
    setVisible(false)
  }

  function gaEnable() {
    Cookies.set(cookieName, true)
    onClose()
    setVisible(false)
  }

  useEffect(() => {
    // Check if there is a cookie in local storage or debug phase
    if (Cookies.get(cookieName) === undefined || debug) {
      setVisible(true)
    }
    // After 70% of scroll && GDPR is false it will automatically accept the cookies
    if (scrollPerc > 70 && Cookies.get(cookieName) === undefined && !Cookies.get(cookieName)) {
      setVisible(false)
      Cookies.set(cookieName, true)
    }
  }, [isVisible, debug, pos, scrollPerc])

  if (!isVisible) {
    return null
  }

  return (
    <Center>
      <Box w="90%" pos="fixed" bottom={6}>
        <Progress value={scrollPerc} size="xs" mb="-1" rounded="md" />
        <Box px={4} py={4} bgGradient="linear(to-tr, primary.600, primary.900)" boxShadow="xl" rounded="md">
          <Flex align="center" justifyItems="center">
            <Text color="white.base" fontSize="lg" fontWeight="semibold">
              {content}
            </Text>
            <Spacer />
            <Stack spacing={4} direction="row">
              <Button colorScheme="secondary" onClick={gaEnable}>
                {buttonText}
              </Button>
              <Button colorScheme="primary" variant="link" onClick={onOpen}>
                Change settings
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <OptModal Title="Title" isOpen={isOpen} onClose={onClose} gaEnable={gaEnable} gaDisable={disableTrack}>
        <Text color="black.light" fontSize="lg" fontWeight="semibold">
          Hello there!
        </Text>
      </OptModal>
    </Center>
  )
}

const CookieBannerApp = ({ content, buttonText, debug }) =>
  !Cookies.get(cookieName) || debug ? <CookieBanner content={content} buttonText={buttonText} /> : null

export default CookieBannerApp
