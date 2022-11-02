import mockRouter from 'next-router-mock'
import { render, screen } from '@testing-library/react'

import Layout, { hiddenLayoutPages } from 'components/Layout'
import { act } from 'react-dom/test-utils'

jest.mock('next/router', () => require('next-router-mock'))

describe('MyApp', () => {
  it('displays Layout normally', () => {
    act(() => {
      mockRouter.setCurrentUrl('/')
    })

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
      act(() => {
        mockRouter.setCurrentUrl('/' + page)
      })

      render(<Layout />)

      const header = screen.queryByRole('banner')
      const footer = screen.queryByRole('contentinfo')
      const sidebar = screen.queryByRole('complementary')

      expect(header).not.toBeInTheDocument()
      expect(footer).not.toBeInTheDocument()
      expect(sidebar).not.toBeInTheDocument()
    })
  })

  it('do not display sidebar on mobile', () => {
    mockRouter.setCurrentUrl('/')

    render(<Layout />)

    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))

    const sidebar = screen.queryByRole('complementary')
    expect(sidebar?.style.display).toBe('')
  })
})
