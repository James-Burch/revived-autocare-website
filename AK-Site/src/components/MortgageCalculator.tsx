import React, { useState } from 'react';
import Button from './Button';
import { formatCurrency, calculateStampDuty } from '../utils/formatters';

interface MortgageResults {
  monthlyPayment: number;
  totalCost: number;
  totalInterest: number;
  stampDuty: number;
}

const MortgageCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(250000);
  const [deposit, setDeposit] = useState<number>(25000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [results, setResults] = useState<MortgageResults | null>(null);

  const calculateMortgage = () => {
    const loanAmount = propertyValue - deposit;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - loanAmount;
    const stampDuty = calculateStampDuty(propertyValue);

    setResults({
      monthlyPayment,
      totalCost: totalCost + deposit,
      totalInterest,
      stampDuty
    });
  };

  return (
    <div className="mortgage-calculator card">
      <h2>Mortgage Calculator</h2>
      
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="propertyValue">Property Value</label>
          <input
            id="propertyValue"
            type="number"
            value={propertyValue}
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            placeholder="Enter property value"
          />
        </div>

        <div className="form-group">
          <label htmlFor="deposit">Deposit</label>
          <input
            id="deposit"
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            placeholder="Enter deposit amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            id="interestRate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="Enter interest rate"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="Enter loan term"
          />
        </div>

        <Button onClick={calculateMortgage} variant="primary" size="large">
          Calculate Mortgage
        </Button>
      </div>

      {results && (
        <div className="results">
          <h3>Calculation Results</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="label">Monthly Payment:</span>
              <span className="value">{formatCurrency(results.monthlyPayment)}</span>
            </div>
            <div className="result-item">
              <span className="label">Total Cost:</span>
              <span className="value">{formatCurrency(results.totalCost)}</span>
            </div>
            <div className="result-item">
              <span className="label">Total Interest:</span>
              <span className="value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-item">
              <span className="label">Stamp Duty:</span>
              <span className="value">{formatCurrency(results.stampDuty)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
