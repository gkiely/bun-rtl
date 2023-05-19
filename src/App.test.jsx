import { render } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';
import React from 'react';

// jsdom
import { jsdom } from 'jsdom';
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// happy-dom
// import { Window } from 'happy-dom';
// const window = new Window();
// const document = window.document;

// linkedom
// const { parseHTML } = require('linkedom');
// const dom = parseHTML(`<!doctype html><html lang="en"><head /><body /></html>`);

// Enable dom
global.window = dom.window;
global.document = dom.document;

import App from './App';

describe('test', () => {
  it('should render text', () => {
    // TODO: render fails due to jsdom error `Cannot find package "vm"`
    render(<App />);

    // TODO: allow testing via @testing-library/jest-dom
    // https://www.npmjs.com/package/@testing-library/jest-dom
    // expect(getByText('Welcome to React!')).toBeInTheDocument();
  })
})
