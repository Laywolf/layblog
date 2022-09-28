import mockRouter from 'next-router-mock'
import { render, screen } from '@testing-library/react'

import Layout, { hiddenLayoutPages } from 'components/Layout'

jest.mock('next/router', () => require('next-router-mock'))

describe('MyApp', () => {
  it('displays Layout normally', () => {
    mockRouter.setCurrentUrl('/')

    render(<Layout />)

    const header = screen.queryByRole('banner')
    const footer = screen.queryByRole('contentinfo')
    const sidebar = screen.queryByRole('complementary')

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(sidebar).toBeInTheDocument()
  })

  it('do not display Layout on specific routes', () => {
    hiddenLayoutPages.forEach((page) => {
      mockRouter.setCurrentUrl('/')
      void mockRouter.push('/' + page)

      render(<Layout />)

      const header = screen.queryByRole('banner')
      const footer = screen.queryByRole('contentinfo')
      const sidebar = screen.queryByRole('complementary')

      expect(header).not.toBeInTheDocument()
      expect(footer).not.toBeInTheDocument()
      expect(sidebar).not.toBeInTheDocument()
    })
  })
})
