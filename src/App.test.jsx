import { describe, it, expect } from 'bun:test';
import React from 'react'
import { render } from '@testing-library/react';

import App from './App';

describe('test', () => {
  it('should render text', () => {
    render(<App />);
  })
})