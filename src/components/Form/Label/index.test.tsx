// src/components/Form/Label/index.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Label from './index';

describe('Label Component', () => {
  it('renders label with children', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders required label with asterisk', () => {
    render(<Label required>Required Label</Label>);
    expect(screen.getByText('Required Label')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveClass('text-red-500');
  });

  it('does not render asterisk when not required', () => {
    render(<Label>Optional Label</Label>);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('applies additional label props', () => {
    render(<Label htmlFor="input-id">Label with htmlFor</Label>);
    const labelElement = screen.getByText('Label with htmlFor');
    expect(labelElement).toHaveAttribute('htmlFor', 'input-id');
  });
});
