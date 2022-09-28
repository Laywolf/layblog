import { render, screen } from '@testing-library/react'
import Home from 'pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /ここは彼方花雪の 秘密箱です。/i,
    })

    expect(heading).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
