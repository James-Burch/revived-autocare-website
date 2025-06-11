/**
 * UK-specific formatting utilities
 */

// UK Currency formatting
export const formatCurrency = (
  amount: number,
  currency: string = 'GBP',
  locale: string = 'en-GB'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatCurrencyWithPence = (
  amount: number,
  currency: string = 'GBP',
  locale: string = 'en-GB'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Number formatting
export const formatNumber = (
  number: number,
  locale: string = 'en-GB'
): string => {
  return new Intl.NumberFormat(locale).format(number);
};

export const formatPercent = (
  value: number,
  decimals: number = 2
): string => {
  return `${value.toFixed(decimals)}%`;
};

// UK Property specific formatting
export const formatPropertyValue = (value: number): string => {
  if (value >= 1000000) {
    return `£${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `£${(value / 1000).toFixed(0)}K`;
  } else {
    return formatCurrency(value);
  }
};

// UK Mortgage term formatting
export const formatMortgageTerm = (years: number): string => {
  return `${years} year${years !== 1 ? 's' : ''}`;
};

// UK Interest rate formatting
export const formatInterestRate = (rate: number): string => {
  return `${rate.toFixed(3)}%`;
};

// UK Loan-to-Value formatting
export const formatLTV = (ltv: number): string => {
  return `${ltv.toFixed(1)}% LTV`;
};

// File size formatting
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// UK Phone number formatting
export const formatUKPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  // UK mobile format: 07xxx xxx xxx
  if (cleaned.startsWith('07') && cleaned.length === 11) {
    const match = cleaned.match(/^(\d{5})(\d{3})(\d{3})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
  }
  
  // UK landline format: 01xxx xxx xxx or 02x xxxx xxxx
  if ((cleaned.startsWith('01') || cleaned.startsWith('02')) && cleaned.length === 11) {
    if (cleaned.startsWith('02')) {
      // London/Cardiff/Portsmouth format: 02x xxxx xxxx
      const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
      }
    } else {
      // Other UK cities: 01xxx xxx xxx
      const match = cleaned.match(/^(\d{5})(\d{3})(\d{3})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
      }
    }
  }
  
  return phone;
};

// UK Postcode formatting
export const formatUKPostcode = (postcode: string): string => {
  const cleaned = postcode.replace(/\s/g, '').toUpperCase();
  
  // UK postcode format: XX## #XX or X## #XX or XX# #XX or X# #XX
  const match = cleaned.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)(\d[A-Z]{2})$/);
  
  if (match) {
    return `${match[1]} ${match[2]}`;
  }
  
  return postcode;
};

// Stamp duty calculator (simplified UK rates for 2024)
export const calculateStampDuty = (propertyValue: number, isFirstTimeBuyer: boolean = false): number => {
  if (isFirstTimeBuyer && propertyValue <= 625000) {
    if (propertyValue <= 425000) return 0;
    return (propertyValue - 425000) * 0.05;
  }
  
  let stampDuty = 0;
  
  if (propertyValue > 250000) {
    stampDuty += Math.min(propertyValue - 250000, 675000) * 0.05;
  }
  
  if (propertyValue > 925000) {
    stampDuty += Math.min(propertyValue - 925000, 650000) * 0.10;
  }
  
  if (propertyValue > 1500000) {
    stampDuty += (propertyValue - 1500000) * 0.12;
  }
  
  return Math.round(stampDuty);
};
