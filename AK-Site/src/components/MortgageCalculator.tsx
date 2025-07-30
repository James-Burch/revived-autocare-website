import React, { useState } from 'react';
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
    <div className="mortgage-calculator-professional">
      <div className="calculator-content">
        <div className="calculator-header">
          <h2>Calculate Your Mortgage</h2>
          <p>Get instant estimates for your monthly payments and total costs</p>
        </div>

        <div className="calculator-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="propertyValue">Property Value</label>
              <div className="input-wrapper">
                <span className="input-prefix">£</span>
                <input
                  id="propertyValue"
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  placeholder="250000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deposit">Deposit</label>
              <div className="input-wrapper">
                <span className="input-prefix">£</span>
                <input
                  id="deposit"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  placeholder="25000"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="interestRate">Interest Rate</label>
              <div className="input-wrapper">
                <input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  placeholder="5.5"
                />
                <span className="input-suffix">%</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="loanTerm">Loan Term</label>
              <div className="input-wrapper">
                <input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  placeholder="25"
                />
                <span className="input-suffix">years</span>
              </div>
            </div>
          </div>

          <div className="calculator-actions">
            <button
              onClick={calculateMortgage}
              className="button button-primary button-large calculate-btn"
            >
              Calculate Mortgage
            </button>
          </div>
        </div>

        {results && (
          <div className="results-section">
            <h3>Your Results</h3>
            <div className="results-grid">
              <div className="result-card primary">
                <div className="result-icon">£</div>
                <div className="result-content">
                  <span className="result-label">Monthly Payment</span>
                  <span className="result-value">{formatCurrency(results.monthlyPayment)}</span>
                </div>
              </div>

              <div className="result-card">
                <div className="result-icon">💰</div>
                <div className="result-content">
                  <span className="result-label">Total Cost</span>
                  <span className="result-value">{formatCurrency(results.totalCost)}</span>
                </div>
              </div>

              <div className="result-card">
                <div className="result-icon">📈</div>
                <div className="result-content">
                  <span className="result-label">Total Interest</span>
                  <span className="result-value">{formatCurrency(results.totalInterest)}</span>
                </div>
              </div>

              <div className="result-card">
                <div className="result-icon">🏛️</div>
                <div className="result-content">
                  <span className="result-label">Stamp Duty</span>
                  <span className="result-value">{formatCurrency(results.stampDuty)}</span>
                </div>
              </div>
            </div>

            <div className="results-summary">
              <h4>Summary</h4>
              <div className="summary-row">
                <span>Loan Amount:</span>
                <span>{formatCurrency(propertyValue - deposit)}</span>
              </div>
              <div className="summary-row">
                <span>Loan to Value (LTV):</span>
                <span>{(((propertyValue - deposit) / propertyValue) * 100).toFixed(1)}%</span>
              </div>
              <div className="summary-row">
                <span>Deposit Percentage:</span>
                <span>{((deposit / propertyValue) * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
