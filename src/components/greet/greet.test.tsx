import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('renders with a name', () => {
    render(<Greet name="Palak" />)
    const textElement = screen.getByText(/Hello Palak/i)
    expect(textElement).toBeInTheDocument()
  })
})

// test.only and test.skip to test as per convenience
// describe.only and describe.skip are also applicable
// fit - replacement of test.only
// xit - replacement of test.skip
