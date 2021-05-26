import { render, screen } from '@testing-library/react'

import VerticalPaddingWrapper from '.'

describe('<VerticalPaddingWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<VerticalPaddingWrapper />)

    expect(screen.getByRole('heading', { name: /VerticalPaddingWrapper/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
