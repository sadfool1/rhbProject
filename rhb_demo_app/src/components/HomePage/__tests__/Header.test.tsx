import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import HeaderGreetings from "../Header" 
import { homepageMock } from '../../mockData/homepageMock'

describe("Header testing", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("should render header with greetings", () => {
        const expectedText = "Here is the update from your payment channels, that is really important for you to catch up"

        render(<HeaderGreetings />)
        expect(screen.getByTestId('headerGreetings')).toHaveTextContent('Greetings')
        expect(screen.getByTestId('headerNote')).toHaveTextContent(expectedText)

    })

    it("should render header with mockcustomer name", () => {
        const expectedName = homepageMock.name

        render(<HeaderGreetings />)
        expect(screen.getByTestId('headerGreetings')).toHaveTextContent(expectedName)
    })
})