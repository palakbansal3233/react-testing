import { Application } from './application'
import { render, screen } from '@testing-library/react'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    // const nameElement2 = screen.getByLabelText('Name', {
    //   selector: 'input'
    // })
    // expect(nameElement2).toBeInTheDocument(); only for reference

    // const nameElement3 = screen.getByPlaceholderText("Fullname");
    // expect(nameElement3).toBeInTheDocument();

    // const nameElement4 = screen.getByDisplayValue('Palak');
    // expect(nameElement4).toBeInTheDocument(); [input, textarea, select]

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory', {
      exact: false, // substring match, ignore case
    })
    expect(paragraphElement).toBeInTheDocument()
    // Typical uses: div, span and para. Has "SELECTOR" as an option

    /* Regex Examples
    1. screen.getByText(/World/) -> Substring Match
    2. screen.getByText(/world/i) -> Substring Match, ignore case
    3. screen.getByText(/^hello world$/i) -> Full String Match, ignore case
    */

    /* Custom Function 

    (content?: string, element?: Element | null) => boolean

    <div>Hello World</div>
    screen.getByText((content) => content.startsWith('Hello'))
    */

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    // const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
    // expect(termsElement2).toBeInTheDocument(); only for reference

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    // expect(submitButtonElement).not.toBeEnabled();
    expect(submitButtonElement).toBeDisabled()
  })
})

// getByRole Options: [name, level, hidden, selected, checked, pressed]

/* Priority order for Queries
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId
 */
