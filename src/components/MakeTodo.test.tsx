import { render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';
import MakeTodo from './MakeTodo';

describe("Render MakeTodo components", () => {
    
        it("should render the MakeTodo component", async () => {
            // ARRANGE
            render(<MakeTodo customOnClick={() => {}} />);
    
            // ACT
    
            // ASSERT
            expect(true).toBeTruthy();
        });
    
        it('should render the input', async () => {
            // ARRANGE
            render(<MakeTodo customOnClick={() => {}} />);
    
            // ACT
            const input = await screen.findByPlaceholderText('enter todo here');
    
            // ASSERT
            expect(input).toBeTruthy();
        });
    
        it('should render the button', async () => {
            // ARRANGE
            render(<MakeTodo customOnClick={() => {}} />);
    
            // ACT
            const button = await screen.findByText('Add Todo');
    
            // ASSERT
            expect(button).toBeTruthy();
        });
});