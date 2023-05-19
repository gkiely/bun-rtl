// import { describe, expect, test } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');

describe('app', () => {
  test('should be true', () => {
    expect(true).toBe(true);
  });
})