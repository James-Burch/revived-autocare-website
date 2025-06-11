/**
 * Mortgage calculation utilities
 */

export interface PaymentCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  principalAndInterest: number;
}

export const calculateMonthlyPayment = (
  loanAmount: number,
  annualRate: number,
  loanTermYears: number
): PaymentCalculation => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  
  if (monthlyRate === 0) {
    const monthlyPayment = loanAmount / numberOfPayments;
    return {
      monthlyPayment,
      totalInterest: 0,
      totalPayment: loanAmount,
      principalAndInterest: monthlyPayment
    };
  }
  
  const monthlyPayment = loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;
  
  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    principalAndInterest: Math.round(monthlyPayment * 100) / 100
  };
};

export const calculateAffordability = (
  monthlyIncome: number,
  monthlyDebts: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number,
  propertyTax: number = 0,
  insurance: number = 0,
  pmi: number = 0
): number => {
  const maxDebtToIncomeRatio = 0.43; // 43% DTI ratio
  const maxHousingRatio = 0.28; // 28% housing ratio
  
  const maxTotalDebt = monthlyIncome * maxDebtToIncomeRatio;
  const maxHousingPayment = monthlyIncome * maxHousingRatio;
  
  const availableForHousing = Math.min(
    maxTotalDebt - monthlyDebts,
    maxHousingPayment
  );
  
  const availableForPrincipalInterest = availableForHousing - propertyTax - insurance - pmi;
  
  if (availableForPrincipalInterest <= 0) return 0;
  
  // Calculate max loan amount based on available payment
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  if (monthlyRate === 0) {
    return availableForPrincipalInterest * numberOfPayments + downPayment;
  }
  
  const maxLoanAmount = availableForPrincipalInterest * 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
  
  return Math.round((maxLoanAmount + downPayment) * 100) / 100;
};

export const calculateLoanToValue = (
  loanAmount: number,
  propertyValue: number
): number => {
  return Math.round((loanAmount / propertyValue) * 10000) / 100;
};

export const calculateDebtToIncome = (
  monthlyDebts: number,
  monthlyIncome: number
): number => {
  return Math.round((monthlyDebts / monthlyIncome) * 10000) / 100;
};

export const estimateClosingCosts = (
  loanAmount: number,
  propertyValue: number
): number => {
  // Typical closing costs are 2-5% of loan amount
  const baseCosts = loanAmount * 0.03; // 3% average
  const titleInsurance = propertyValue * 0.005; // 0.5%
  const appraisal = 500;
  const inspection = 400;
  
  return Math.round((baseCosts + titleInsurance + appraisal + inspection) * 100) / 100;
};

export const calculateAmortizationSchedule = (
  loanAmount: number,
  annualRate: number,
  loanTermYears: number
): Array<{
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  cumulativeInterest: number;
}> => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, annualRate, loanTermYears).monthlyPayment;
  
  const schedule = [];
  let balance = loanAmount;
  let cumulativeInterest = 0;
  
  for (let i = 1; i <= numberOfPayments; i++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
    cumulativeInterest += interestPayment;
    
    schedule.push({
      payment: i,
      principal: Math.round(principalPayment * 100) / 100,
      interest: Math.round(interestPayment * 100) / 100,
      balance: Math.round(Math.max(0, balance) * 100) / 100,
      cumulativeInterest: Math.round(cumulativeInterest * 100) / 100
    });
  }
  
  return schedule;
};
