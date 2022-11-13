import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('tests', () => {
  test("Counter should be 0 at the start", () => {
    render(<App />);
    expect(screen.getByText('One Track')).toBeDefined();
  });
});