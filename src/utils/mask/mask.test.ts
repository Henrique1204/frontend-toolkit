import {
  maskCpf,
  maskCnpj,
  maskCpfCnpj,
  maskDate,
  maskCurrency,
  maskPhone,
  maskZipcode,
  maskOnlyNumbers,
  noMask,
} from './masks';

describe('Máscaras', () => {
  it('maskCpf', () => {
    expect(maskCpf('12345678909')).toBe('123.456.789-09');
    expect(maskCpf('')).toBe('');
  });

  it('maskCnpj', () => {
    expect(maskCnpj('12345678000195')).toBe('12.345.678/0001-95');
    expect(maskCnpj('')).toBe('');
  });

  it('maskCpfCnpj', () => {
    expect(maskCpfCnpj('12345678909')).toBe('123.456.789-09');
    expect(maskCpfCnpj('12345678000195')).toBe('12.345.678/0001-95');
    expect(maskCpfCnpj('')).toBe('');
    expect(maskCpfCnpj(null)).toBe('');
  });

  it('maskDate', () => {
    expect(maskDate('01012020')).toBe('01/01/2020');
    expect(maskDate('0101')).toBe('01/01');
    expect(maskDate('')).toBe('');
  });

  it('maskCurrency', () => {
    expect(maskCurrency('123400')).toBe('R$\xA01.234,00');
    expect(maskCurrency('')).toBe('');
  });

  it('maskPhone', () => {
    expect(maskPhone('11987654321')).toBe('(11) 9 8765-4321');
    expect(maskPhone('1123456789')).toBe('(11) 2345-6789');
    expect(maskPhone('')).toBe('');
  });

  it('maskZipcode', () => {
    expect(maskZipcode('12345678')).toBe('12345-678');
    expect(maskZipcode('')).toBe('');
  });

  it('maskOnlyNumbers', () => {
    expect(maskOnlyNumbers('abc123')).toBe('123');
    expect(maskOnlyNumbers('')).toBe('');
  });

  it('noMask', () => {
    expect(noMask('abc123')).toBe('abc123');
    expect(noMask('')).toBe('');
  });
});
