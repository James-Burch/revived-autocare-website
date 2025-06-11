export interface LoanApplication {
  id: string;
  applicantInfo: ApplicantInfo;
  loanDetails: LoanDetails;
  propertyInfo: PropertyInfo;
  financialInfo: FinancialInfo;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ApplicantInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  dependents: number;
}

export interface LoanDetails {
  loanAmount: number;
  loanPurpose: 'purchase' | 'refinance' | 'cashout';
  loanTerm: 15 | 20 | 25 | 30;
  loanType: 'conventional' | 'fha' | 'va' | 'usda' | 'jumbo';
  downPayment: number;
  downPaymentPercent: number;
}

export interface PropertyInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'multi-family';
  propertyValue: number;
  propertyUse: 'primary' | 'secondary' | 'investment';
  yearBuilt: number;
}

export interface FinancialInfo {
  annualIncome: number;
  monthlyIncome: number;
  employmentStatus: 'employed' | 'self-employed' | 'unemployed' | 'retired';
  employerName: string;
  yearsEmployed: number;
  monthlyDebts: number;
  creditScore: number;
  assets: number;
}

export type ApplicationStatus = 
  | 'draft' 
  | 'submitted' 
  | 'under-review' 
  | 'approved' 
  | 'denied' 
  | 'closed';

export interface MortgageRate {
  loanType: string;
  term: number;
  rate: number;
  apr: number;
  points: number;
  lastUpdated: string;
}

export interface MonthlyPayment {
  principal: number;
  interest: number;
  taxes: number;
  insurance: number;
  pmi?: number;
  total: number;
}

export interface LoanProgram {
  id: string;
  name: string;
  description: string;
  minCreditScore: number;
  maxLoanAmount: number;
  minDownPayment: number;
  benefits: string[];
  requirements: string[];
}
