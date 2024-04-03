/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Todos from './Todos';

describe("Render components", () => {

    it("should render the Todos component", async () => {
        // ARRANGE
        render(<Todos />);

        // ACT

        // ASSERT
        expect(true).toBe(true);
    });
});