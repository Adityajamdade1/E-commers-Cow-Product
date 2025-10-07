// Currency utility functions for Indian Rupees

export const formatPrice = (price) => {
  // Format price in Indian Rupees
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const formatPriceSimple = (price) => {
  // Simple format: ₹1,234
  return `₹${price.toLocaleString('en-IN')}`;
};

export const getCurrencySymbol = () => {
  return '₹';
};

export const formatCartTotal = (total) => {
  return formatPrice(total);
};

export const formatShippingThreshold = () => {
  return formatPrice(4150); // ₹4,150 (equivalent to $50)
};

export const calculateTax = (subtotal, taxRate = 0.18) => {
  // 18% GST in India
  return subtotal * taxRate;
};

export const formatTax = (taxAmount) => {
  return formatPrice(taxAmount);
};

export default {
  formatPrice,
  formatPriceSimple,
  getCurrencySymbol,
  formatCartTotal,
  formatShippingThreshold,
  calculateTax,
  formatTax
};
