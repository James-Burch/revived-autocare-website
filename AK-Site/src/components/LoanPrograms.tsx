import React from 'react';
import { Card, Button } from './';

interface LoanProgram {
  id: string;
  name: string;
  description: string;
  minCreditScore?: string;
  maxLTV: number;
  minDeposit: number;
  benefits: string[];
  requirements: string[];
  bestFor: string;
  typicalRate: string;
}

const loanPrograms: LoanProgram[] = [
  {
    id: 'residential',
    name: 'Residential Mortgage',
    description: 'Standard residential mortgages for home purchases and remortgaging',
    minCreditScore: 'Good',
    maxLTV: 95,
    minDeposit: 5,
    typicalRate: 'From 4.65%',
    bestFor: 'Home buyers and those looking to remortgage',
    benefits: [
      'Competitive rates from 90+ lenders',
      'Up to 95% LTV available',
      'Fixed, tracker, and variable options',
      'Portability options available'
    ],
    requirements: [
      'Good credit history',
      'Proof of income',
      'UK resident',
      'Property valuation required'
    ]
  },
  {
    id: 'first-time-buyer',
    name: 'First Time Buyer',
    description: 'Specialist mortgages and government schemes for first-time buyers',
    minCreditScore: 'Fair to Good',
    maxLTV: 95,
    minDeposit: 5,
    typicalRate: 'From 4.89%',
    bestFor: 'Those buying their first home',
    benefits: [
      'Government schemes available',
      'Stamp duty relief up to £425k',
      'Shared ownership options',
      'Help to Buy available'
    ],
    requirements: [
      'First-time buyer status',
      'Minimum 5% deposit',
      'Income verification',
      'Property under £600k (Help to Buy)'
    ]
  },
  {
    id: 'buy-to-let',
    name: 'Buy-to-Let Mortgage',
    description: 'Investment property mortgages for landlords and property investors',
    minCreditScore: 'Good to Excellent',
    maxLTV: 75,
    minDeposit: 25,
    typicalRate: 'From 5.25%',
    bestFor: 'Property investors and landlords',
    benefits: [
      'Portfolio landlord options',
      'Interest-only available',
      'Limited company mortgages',
      'HMO and multi-unit properties'
    ],
    requirements: [
      '25% minimum deposit',
      'Rental income assessment',
      'Landlord experience preferred',
      'Property management plan'
    ]
  },
  {
    id: 'right-to-buy',
    name: 'Right to Buy',
    description: 'Mortgages for council and housing association tenants',
    minCreditScore: 'Fair to Good',
    maxLTV: 100,
    minDeposit: 0,
    typicalRate: 'From 4.95%',
    bestFor: 'Council tenants exercising Right to Buy',
    benefits: [
      'Up to 70% discount available',
      'No deposit required with discount',
      'Specialist lenders available',
      'Fast-track applications'
    ],
    requirements: [
      'Minimum 3 years tenancy',
      'Right to Buy eligibility',
      'Council approval',
      'Property valuation'
    ]
  },
  {
    id: 'self-employed',
    name: 'Self-Employed Mortgage',
    description: 'Mortgages for contractors, freelancers, and business owners',
    minCreditScore: 'Good',
    maxLTV: 90,
    minDeposit: 10,
    typicalRate: 'From 5.15%',
    bestFor: 'Self-employed individuals and contractors',
    benefits: [
      'Bank statement mortgages',
      'Day rate contractor products',
      'Minimal paperwork options',
      'Up to 90% LTV available'
    ],
    requirements: [
      '1-2 years trading history',
      'Accountant certification',
      'Business bank statements',
      'SA302 forms or equivalent'
    ]
  },
  {
    id: 'adverse-credit',
    name: 'Adverse Credit Mortgage',
    description: 'Specialist mortgages for those with credit history issues',
    minCreditScore: 'Poor to Fair',
    maxLTV: 85,
    minDeposit: 15,
    typicalRate: 'From 6.25%',
    bestFor: 'Those with previous credit issues',
    benefits: [
      'Specialist adverse credit lenders',
      'CCJs and defaults considered',
      'Bankruptcy discharged options',
      'Credit repair guidance included'
    ],
    requirements: [
      'Minimum 15% deposit',
      'Satisfactory explanation of issues',
      'Current income verification',
      'No recent missed payments'
    ]
  }
];

const LoanPrograms: React.FC = () => {
  return (
    <div className="loan-programs">
      <div className="container">
        <div className="section-header">
          <h2>UK Mortgage Products</h2>
          <p>Find the right mortgage product for your unique circumstances</p>
        </div>

        <div className="programs-grid">
          {loanPrograms.map((program) => (
            <Card key={program.id} className="program-card" hoverable>
              <div className="program-header">
                <h3>{program.name}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-highlight">
                  <strong>Best for:</strong> {program.bestFor}
                </div>
                <div className="program-rate">
                  <strong>{program.typicalRate}</strong>
                </div>
              </div>

              <div className="program-details">
                <div className="detail-row">
                  <span>Max LTV:</span>
                  <span className="value">{program.maxLTV}%</span>
                </div>
                <div className="detail-row">
                  <span>Min. Deposit:</span>
                  <span className="value">{program.minDeposit}%</span>
                </div>
                {program.minCreditScore && (
                  <div className="detail-row">
                    <span>Credit Score:</span>
                    <span className="value">{program.minCreditScore}</span>
                  </div>
                )}
              </div>

              <div className="program-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  {program.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="program-requirements">
                <h4>Requirements</h4>
                <ul>
                  {program.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="program-action">
                <Button variant="primary" size="small">
                  Get Quote
                </Button>
                <Button variant="outline" size="small">
                  More Info
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanPrograms;
