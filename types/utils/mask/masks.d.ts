/**
 * Aplica máscara ao CPF.
 * @param {string} cpf - O CPF a ser mascarado.
 * @returns {string} O CPF mascarado.
 */
export declare const maskCpf: (cpf?: string) => string;
/**
 * Aplica máscara ao CNPJ.
 * @param {string} cpf - O CNPJ a ser mascarado.
 * @returns {string} O CNPJ mascarado.
 */
export declare const maskCnpj: (cpf?: string) => string;
/**
 * Aplica máscara ao CPF ou CNPJ com base no tamanho do número.
 * @param {string | null} cpfcnpj - O CPF ou CNPJ a ser mascarado.
 * @returns {string} O CPF ou CNPJ mascarado.
 */
export declare const maskCpfCnpj: (cpfcnpj?: string | null) => string;
/**
 * Aplica máscara à data.
 * @param {string} dateText - A data a ser mascarada.
 * @returns {string} A data mascarada.
 */
export declare const maskDate: (dateText?: string) => string;
/**
 * Aplica máscara à moeda.
 * @param {string} value - O valor a ser mascarado.
 * @returns {string} O valor mascarado.
 */
export declare const maskCurrency: (value?: string) => string;
/**
 * Aplica máscara ao telefone.
 * @param {string} phoneNumber - O número do telefone a ser mascarado.
 * @returns {string} O número do telefone mascarado.
 */
export declare const maskPhone: (phoneNumber?: string) => string;
/**
 * Aplica máscara ao CEP.
 * @param {string} cep - O CEP a ser mascarado.
 * @returns {string} O CEP mascarado.
 */
export declare const maskZipcode: (cep?: string) => string;
/**
 * Remove todos os caracteres não numéricos de uma string.
 * @param {string} value - A string a ser limpa.
 * @returns {string} A string sem caracteres não numéricos.
 */
export declare const maskOnlyNumbers: (value?: string) => string;
/**
 * Retorna o valor sem aplicar nenhuma máscara.
 * @param {string} value - O valor a ser retornado.
 * @returns {string} O valor sem máscara.
 */
export declare const noMask: (value?: string) => string;
export declare const MASKS: {
    cpf: (cpf?: string) => string;
    cnpj: (cpf?: string) => string;
    cpfcnpj: (cpfcnpj?: string | null) => string;
    date: (dateText?: string) => string;
    currency: (value?: string) => string;
    phone: (phoneNumber?: string) => string;
    zipcode: (cep?: string) => string;
    none: (value?: string) => string;
};
