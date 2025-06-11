import React, { useState, useEffect } from 'react';
import { calculateMonthlyPayment } from '../utils/mortgageCalculations';
import { formatCurrency, formatCurrencyWithPence, formatInterestRate, calculateStampDuty } from '../utils/formatters';

interface CalculatorState {
  propertyValue: number;
  deposit: number;
  interestRate: number;
  mortgageTerm: number;
  isFirstTimeBuyer: boolean;
}

const MortgageCalculator: React.FC = () => {
  const [values, setValues] = useState<CalculatorState>({
    propertyValue: 400000,
    deposit: 80000,
    interestRate: 5.25,
    mortgageTerm: 25,
    isFirstTimeBuyer: false
  });

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0,
    principalAndInterest: 0
  });

  useEffect(() => {
    const loanAmount = values.propertyValue - values.deposit;
    const calculation = calculateMonthlyPayment(
      loanAmount,
      values.interestRate,
      values.mortgageTerm
    );
    setResults(calculation);
  }, [values]);

  const handleInputChange = (field: keyof CalculatorState, value: number | boolean) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const loanAmount = values.propertyValue - values.deposit;
  const loanToValue = (loanAmount / values.propertyValue) * 100;
  const depositPercentage = (values.deposit / values.propertyValue) * 100;
  const stampDuty = calculateStampDuty(values.propertyValue, values.isFirstTimeBuyer);

  // Estimate additional monthly costs
  const estimatedInsurance = Math.max(25, values.propertyValue * 0.0002 / 12); // ~0.02% annually
  const totalMonthlyCost = results.principalAndInterest + estimatedInsurance;

  return (
    <div className="mortgage-calculator">
      <div className="calculator-container">
        <div className="calculator-inputs">
          <h2>UK Mortgage Calculator</h2>
          
          <div className="input-group">
            <label htmlFor="propertyValue">Property Value</label>
            <input
              type="number"
              id="propertyValue"
              value={values.propertyValue}
              onChange={(e) => handleInputChange('propertyValue', Number(e.target.value))}
              step="1000"
            />
          </div>

          <div className="input-group">
            <label htmlFor="deposit">Deposit</label>
            <input
              type="number"
              id="deposit"
              value={values.deposit}
              onChange={(e) => handleInputChange('deposit', Number(e.target.value))}
              step="1000"
            />
            <small>{depositPercentage.toFixed(1)}% of property value</small>
          </div>

          <div className="input-group">
            <label htmlFor="loanAmount">Mortgage Amount</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              readOnly
              style={{ backgroundColor: '#f9fafb' }}
            />
            <small>LTV: {loanToValue.toFixed(1)}%</small>
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
            <small>Current average UK mortgage rate</small>
          </div>

          <div className="input-group">
            <label htmlFor="mortgageTerm">Mortgage Term (years)</label>
            <select
              id="mortgageTerm"
              value={values.mortgageTerm}
              onChange={(e) => handleInputChange('mortgageTerm', Number(e.target.value))}
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
              <option value={35}>35 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              <input
                type="checkbox"
                checked={values.isFirstTimeBuyer}
                onChange={(e) => handleInputChange('isFirstTimeBuyer', e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              First-time buyer
            </label>
            <small>May qualify for stamp duty relief</small>
          </div>
        </div>

        <div className="calculator-results">
          <h3>Monthly Payment Breakdown</h3>
          
          <div className="result-item primary">
            <span>Monthly Mortgage Payment</span>
            <span className="amount">{formatCurrency(results.principalAndInterest)}</span>
          </div>

          <div className="result-item">
            <span>Estimated Insurance</span>
            <span className="amount">{formatCurrency(estimatedInsurance)}</span>
          </div>

          <div className="result-item">
            <span>Total Monthly Cost</span>
            <span className="amount">{formatCurrency(totalMonthlyCost)}</span>
          </div>

          <div className="loan-summary">
            <h4>Mortgage Summary</h4>
            <div className="summary-item">
              <span>Total Interest Paid</span>
              <span>{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="summary-item">
              <span>Total Amount Repaid</span>
              <span>{formatCurrency(results.totalPayment)}</span>
            </div>
            <div className="summary-item">
              <span>Loan-to-Value Ratio</span>
              <span>{loanToValue.toFixed(1)}%</span>
            </div>
            <div className="summary-item">
              <span>Stamp Duty{values.isFirstTimeBuyer ? ' (FTB Relief)' : ''}</span>
              <span>{formatCurrency(stampDuty)}</span>
            </div>
          </div>

          <div className="affordability-info">
            <h4>Affordability Guide</h4>
            <p>
              <strong>Annual Income Needed:</strong> {formatCurrency(totalMonthlyCost * 12 * 4.5)}
            </p>
            <small>Based on 4.5x income multiplier (typical UK lending criteria)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
