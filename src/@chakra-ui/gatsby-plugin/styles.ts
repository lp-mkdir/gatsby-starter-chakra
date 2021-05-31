import { ThemeOverride } from "@chakra-ui/react"

const styles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
      bg: props.theme.colors.brand.bg,
      color: props.theme.colors.brand.text,
      scrollbarWidth: `thin`,
      scrollbarColor: `${props.theme.colors.gray[`100`]} ${props.theme.colors.gray[`600`]}`,
      "::-webkit-scrollbar": {
        width: `14px`,
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: `${props.theme.colors.gray[`200`]} ${props.theme.colors.gray[`700`]}`,
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: `${props.theme.colors.gray[`400`]} ${props.theme.colors.gray[`400`]}`,
        borderRadius: `8px`,
        borderWidth: `3px`,
        borderStyle: `solid`,
        borderColor: `${props.theme.colors.gray[`200`]} ${props.theme.colors.gray[`700`]}`,
      },
      nav: {
        ul: {
          li: {
            marginBottom: `0`,
          },
        },
      },
    },
    "[data-skip-to-content]": {
      clip: `rect(0 0 0 0)`,
      "&:focus": {
        clip: `auto`,
      },
    },
  }),
}

export default styles
