import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Input } from './index';
import { maskCpf } from '@utils/mask';

describe('Input Component', () => {
  it('Deve renderizar o input corretamente e sem erro.', () => {
    render(<Input testId="input-test" name="test" placeholder="Digite algo" />);

    const inputWrapperElement = screen.getByTestId('input-test-wrapper');
    const inputElement = screen.getByTestId('input-test');

    expect(inputWrapperElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    const inputErrorElement = screen.queryByTestId('input-test-error');
    expect(inputErrorElement).not.toBeInTheDocument();
  });

  it('Deve permitir que o usuário digite no input.', () => {
    const inputValue = 'Novo valor';
    render(<Input testId="input-test" name="test" placeholder="Digite algo" />);

    const inputElement = screen.getByTestId('input-test');

    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement).toHaveValue(inputValue);
  });

  it('Deve chamar a função de callback ao alterar o valor.', () => {
    const handleChange = vi.fn();

    render(
      <Input testId="input-test" name="test" placeholder="Digite algo" onChange={handleChange} />
    );

    const inputElement = screen.getByTestId('input-test');

    fireEvent.change(inputElement, { target: { value: 'Novo valor' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Novo valor');
  });

  it('Deve chamar a função de callback ao alterar o valor utilizando a máscara.', () => {
    const handleChange = vi.fn();

    const inputValueEntry = '12345678900';
    const inputValueExpected = maskCpf(inputValueEntry);

    render(
      <Input
        testId="input-test"
        name="test"
        placeholder="Digite CPF"
        onChange={handleChange}
        mask="cpf"
      />
    );

    const inputElement = screen.getByTestId('input-test');

    fireEvent.change(inputElement, { target: { value: inputValueEntry } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(inputValueExpected);
  });

  it('Deve validar o valor do input ao desfocar.', async () => {
    const inputValue = 'Novo valor';
    const inputErrorMessage = 'Erro';

    render(
      <Input
        testId="input-test"
        name="test"
        placeholder="Digite algo"
        validateError={(value) => (value === inputValue ? inputErrorMessage : '')}
      />
    );

    const inputElement = screen.getByTestId('input-test');

    const inputErrorElementBeforeShowingError = screen.queryByTestId('input-test-error');
    expect(inputErrorElementBeforeShowingError).not.toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.blur(inputElement);

    const inputErrorElementAfterShowingError = screen.getByTestId('input-test-error');
    expect(inputErrorElementAfterShowingError).toBeInTheDocument();
    expect(inputErrorElementAfterShowingError).toHaveTextContent(inputErrorMessage);

    fireEvent.focus(inputElement);

    const inputErrorElementAfterHidingError = screen.queryByTestId('input-test-error');
    expect(inputErrorElementAfterHidingError).not.toBeInTheDocument();
  });

  it('Deve chamar a função de submit ao pressionar a tecla enter.', () => {
    const handleSubmit = vi.fn();

    render(
      <Input
        testId="input-test"
        name="test"
        placeholder="Digite algo"
        onEnterSubmit={handleSubmit}
      />
    );

    const inputElement = screen.getByTestId('input-test');
    fireEvent.keyUp(inputElement, { key: 'Enter' });

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('Deve evitar validação quando estiver desabilitado.', () => {
    const inputValue = 'Novo valor';

    render(
      <Input
        testId="input-test"
        name="test"
        placeholder="Digite algo"
        value={inputValue}
        validateError={(value) => (value === inputValue ? 'Erro' : '')}
        disabled
      />
    );

    const inputElement = screen.getByTestId('input-test');
    fireEvent.blur(inputElement);

    const inputErrorElement = screen.queryByTestId('input-test-error');
    expect(inputErrorElement).not.toBeInTheDocument();
  });
});
