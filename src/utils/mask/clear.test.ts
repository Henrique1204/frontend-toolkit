import {
  removeNonNumericCharacters,
  clearCurrencyMask,
  clearPhoneMask,
  clearZipcodeMask,
} from './clear';

describe('removeNonNumericCharacters', () => {
  it('Deve remover todos os caracteres não numéricos.', () => {
    expect(removeNonNumericCharacters('abc123')).toBe('123');
    expect(removeNonNumericCharacters('!@#456')).toBe('456');
    expect(removeNonNumericCharacters('789xyz')).toBe('789');
  });
});

describe('clearCurrencyMask.', () => {
  it('Deve converter uma string de moeda com máscara para um número.', () => {
    expect(clearCurrencyMask('R$ 1.234,56')).toBe(1234.56);
    expect(clearCurrencyMask('€ 7.890,12')).toBe(7890.12);
    expect(clearCurrencyMask('')).toBe(0);
  });
});

describe('clearPhoneMask.', () => {
  it('Deve remover a máscara de um número de telefone.', () => {
    expect(clearPhoneMask('(12) 34567-8901')).toBe('12345678901');
    expect(clearPhoneMask('+55 (11) 98765-4321')).toBe('5511987654321');
  });
});

describe('clearZipcodeMask.', () => {
  it('Deve remover a máscara de um CEP', () => {
    expect(clearZipcodeMask('12345-678')).toBe('12345678');
    expect(clearZipcodeMask('98765-432')).toBe('98765432');
  });
});
