// src/utils/string.ts
export const cleanString = (str: string) => {
    return str
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[\s-]+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
};