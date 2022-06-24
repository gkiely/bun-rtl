import { describe, it, expect } from 'bun:test';
import React from 'react'
import { render } from '@testing-library/react';

// Enable jsdom to render the DOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.document;

import App from './App';

describe('test', () => {
  it('should render text', () => {
    render(<App />);
  })
})
