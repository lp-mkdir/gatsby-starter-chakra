import * as React from "react"
import { chakra, HStack, Box, Flex } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Headroom from "react-headroom"

const Link = chakra(GatsbyLink)
const Logo: React.FC = () => (
  <Link
    to="/"
    fontWeight="bold"
    fontSize="24px"
    transition="all 0.4s"
    _hover={{ transform: `scale(1.1)` }}
    aria-label="luiskunz.com, Back to homepage"
  >
    LK
  </Link>
)
/**
 * Navigation component containing the primary links
 */
export const Navigation: React.FC = () => {
  const primaryNavigation = [
    { name: `Home`, link: `/` },
    { name: `Link`, link: `/link` },
    { name: `Link`, link: `/link` },
  ]
  return (
    <Box pos="fixed" w="100%">
      <Flex as="header" alignItems="center" justifyContent="space-between" py="16px" maxW="1280px" mx="auto">
        <Logo />
        <HStack spacing={[`2`, `4`]}>
          <nav aria-label="Primary navigation">
            <HStack as="ul" listStyleType="none" spacing={[`2`, `4`]}>
              {primaryNavigation.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    fontFamily="heading"
                    color="gray.300"
                    fontSize={[null, null, null, `md`]}
                    _hover={{ color: `white` }}
                    p="2"
                    activeClassName="active"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Flex>
    </Box>
  )
}
