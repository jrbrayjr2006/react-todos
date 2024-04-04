/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Todos from './Todos';

describe("Render Todo component", () => {

    it("should render the Todos component", async () => {
        // ARRANGE
        render(<Todos />);

        // ACT

        // ASSERT
        expect(true).toBeTruthy();
    });

    it('should render the heading', async () => {
        // ARRANGE
        render(<Todos />);

        // ACT
        const heading = await screen.findByText('Todos');

        // ASSERT
        expect(heading).toBeTruthy();
    });
});