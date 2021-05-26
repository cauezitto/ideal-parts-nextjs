import { render, screen } from '@testing-library/react'

import HorizontalPaddingWrapper from '.'

describe('<HorizontalPaddingWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<HorizontalPaddingWrapper />)

    expect(screen.getByRole('heading', { name: /HorizontalPaddingWrapper/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
