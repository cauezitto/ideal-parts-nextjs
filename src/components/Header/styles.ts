import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    .menu-button {
      display: none;
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .menu-button {
        display: unset;
      }
    }
  `}
`

export const ContactContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primaryRed};
  `}
`

export const NavigationWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} 0;

    svg {
      font-size: ${theme.font.sizes.max};
    }
  `}
`

export const Logo = styled.img`
  height: 80px;
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      list-style: none;
      display: flex;
    }

    li {
      margin-left: 20px;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: none;
    }
  `}
`

type MobileMenuProps = {
  show?: boolean
}
export const MobileMenu = styled.div<MobileMenuProps>`
  ${({ theme, show }) => css`
    ${show
      ? css`
          display: unset;
        `
      : css`
          display: none;
        `}
  `}
`
