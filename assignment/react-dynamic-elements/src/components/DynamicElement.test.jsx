import { render, screen } from '@testing-library/react';
import DynamicElement from './DynamicElement';

test("should render element on passing details as props", () => {
    const elementDetails = {
        htmlElementName: 'h1',
        innerHTML: 'Hello ReactJS',
        style: {
            color: 'red'
        }
    };
    render(<DynamicElement element={elementDetails} />)

    const element = screen.getByRole('heading');

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/hello reactjs/i);
    expect(element).toHaveStyle('color: red');
});
