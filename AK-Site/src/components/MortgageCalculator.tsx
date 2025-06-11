import React, { useState, useEffect } from 'react';
import { calculateMonthlyPayment } from '../utils/mortgageCalculations';
import { formatCurrency } from '../utils/formatters';

interface CalculatorState {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
  propertyTax: number;
  insurance: number;
  pmi: number;
}

const MortgageCalculator: React.FC = () => {
  const [values, setValues] = useState<CalculatorState>({
    loanAmount: 300000,
    interestRate: 6.5,
    loanTerm: 30,
    downPayment: 60000,
    propertyTax: 300,
    insurance: 100,
    pmi: 0
  });

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0,
    principalAndInterest: 0
  });

  useEffect(() => {
    const calculation = calculateMonthlyPayment(
      values.loanAmount,
      values.interestRate,
      values.loanTerm
    );
    setResults(calculation);
  }, [values]);

  const handleInputChange = (field: keyof CalculatorState, value: number) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const totalMonthlyPayment = results.principalAndInterest + 
    values.propertyTax + values.insurance + values.pmi;

  const propertyValue = values.loanAmount + values.downPayment;
  const loanToValue = (values.loanAmount / propertyValue) * 100;

  return (
    <div className="mortgage-calculator">
      <div className="calculator-container">
        <div className="calculator-inputs">
          <h2>Mortgage Calculator</h2>
          
          <div className="input-group">
            <label htmlFor="propertyValue">Property Value</label>
            <input
              type="number"
              id="propertyValue"
              value={propertyValue}
              onChange={(e) => {
                const newPropertyValue = Number(e.target.value);
                const newLoanAmount = newPropertyValue - values.downPayment;
                handleInputChange('loanAmount', Math.max(0, newLoanAmount));
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="downPayment">Down Payment</label>
            <input
              type="number"
              id="downPayment"
              value={values.downPayment}
              onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
            />
            <small>{((values.downPayment / propertyValue) * 100).toFixed(1)}% of property value</small>
          </div>

          <div className="input-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="number"
              id="loanAmount"
              value={values.loanAmount}
              onChange={(e) => handleInputChange('loanAmount', Number(e.target.value))}
              readOnly
            />
          </div>

          <div className="input-group">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              id="interestRate"
              value={values.interestRate}
              onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="loanTerm">Loan Term (years)</label>
            <select
              id="loanTerm"
              value={values.loanTerm}
              onChange={(e) => handleInputChange('loanTerm', Number(e.target.value))}
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="propertyTax">Monthly Property Tax</label>
            <input
              type="number"
              id="propertyTax"
              value={values.propertyTax}
              onChange={(e) => handleInputChange('propertyTax', Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="insurance">Monthly Insurance</label>
            <input
              type="number"
              id="insurance"
              value={values.insurance}
              onChange={(e) => handleInputChange('insurance', Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="pmi">Monthly PMI</label>
            <input
              type="number"
              id="pmi"
              value={values.pmi}
              onChange={(e) => handleInputChange('pmi', Number(e.target.value))}
            />
            <small>Required if down payment is less than 20%</small>
          </div>
        </div>

        <div className="calculator-results">
          <h3>Monthly Payment Breakdown</h3>
          
          <div className="result-item primary">
            <span>Total Monthly Payment</span>
            <span className="amount">{formatCurrency(totalMonthlyPayment)}</span>
          </div>

          <div className="result-item">
            <span>Principal & Interest</span>
            <span className="amount">{formatCurrency(results.principalAndInterest)}</span>
          </div>

          <div className="result-item">
            <span>Property Tax</span>
            <span className="amount">{formatCurrency(values.propertyTax)}</span>
          </div>

          <div className="result-item">
            <span>Insurance</span>
            <span className="amount">{formatCurrency(values.insurance)}</span>
          </div>

          {values.pmi > 0 && (
            <div className="result-item">
              <span>PMI</span>
              <span className="amount">{formatCurrency(values.pmi)}</span>
            </div>
          )}

          <div className="loan-summary">
            <h4>Loan Summary</h4>
            <div className="summary-item">
              <span>Total Interest Paid</span>
              <span>{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="summary-item">
              <span>Total Amount Paid</span>
              <span>{formatCurrency(results.totalPayment)}</span>
            </div>
            <div className="summary-item">
              <span>Loan-to-Value Ratio</span>
              <span>{loanToValue.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
