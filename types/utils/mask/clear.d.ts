/**
 * Remove todos os caracteres não numéricos de uma string.
 * @param {string} str - A string que terá os caracteres não numéricos removidos.
 * @returns {string} A string sem caracteres não numéricos.
 */
export declare const removeNonNumericCharacters: (str: string) => string;
/**
 * Limpa a máscara de uma moeda, convertendo para um número.
 * @param {string} currency - A string que representa a moeda com máscara.
 * @returns {number} O valor da moeda sem máscara.
 */
export declare const clearCurrencyMask: (currency?: string) => number;
/**
 * Limpa a máscara de um telefone, removendo todos os caracteres não numéricos.
 * @param {string} phone - A string que representa o telefone com máscara.
 * @returns {string} O número do telefone sem máscara.
 */
export declare const clearPhoneMask: (phone?: string) => string;
/**
 * Limpa a máscara de um CEP, removendo todos os caracteres não numéricos.
 * @param {string} zipcode - A string que representa o CEP com máscara.
 * @returns {string} O CEP sem máscara.
 */
export declare const clearZipcodeMask: (zipcode: string) => string;
