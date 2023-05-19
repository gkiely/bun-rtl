import { render, screen } from '@testing-library/react';
import { describe, it } from 'bun:test';
import React from 'react';

// jsdom
// import jsdom from 'jsdom';
// const { JSDOM } = jsdom;
// const dom = new JSDOM('<!doctype html><html><body></body></html>');

// happy-dom
// import { Window } from 'happy-dom';
// const window = new Window();
// const document = window.document;
// global.document = document;
// global.window = window;

// linkedom
// const { parseHTML } = require('linkedom');
// const dom = parseHTML(`<!doctype html><html lang="en"><head /><body /></html>`);
// global.window = dom.window;
// global.document = dom.document;

import App from './App';

describe('test', () => {
  it('should render welcome message', () => {
    render(<App />);    
    screen.debug();
    screen.getByText(/Welcome to React!/i);
  })
})
