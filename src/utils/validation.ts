export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return /^[+()\d\s.-]+$/.test(value.trim()) && digits.length >= 7 && digits.length <= 15;
}

export function isBlank(value: string): boolean {
  return value.trim().length === 0;
}