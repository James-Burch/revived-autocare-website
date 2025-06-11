import React from 'react';
import { Card } from './';

interface LoanProgram {
  id: string;
  name: string;
  description: string;
  minCreditScore: number;
  maxLoanAmount: number;
  minDownPayment: number;
  benefits: string[];
  requirements: string[];
  bestFor: string;
}

const loanPrograms: LoanProgram[] = [
  {
    id: 'conventional',
    name: 'Conventional Loan',
    description: 'Traditional mortgage not backed by government agencies',
    minCreditScore: 620,
    maxLoanAmount: 766550,
    minDownPayment: 3,
    bestFor: 'Borrowers with good credit and stable income',
    benefits: [
      'Competitive interest rates',
      'No upfront mortgage insurance premium',
      'PMI can be removed at 20% equity',
      'Flexible property types'
    ],
    requirements: [
      'Credit score of 620+',
      'Debt-to-income ratio under 43%',
      'Employment verification',
      'Asset documentation'
    ]
  },
  {
    id: 'fha',
    name: 'FHA Loan',
    description: 'Government-backed loan with flexible qualification requirements',
    minCreditScore: 580,
    maxLoanAmount: 472030,
    minDownPayment: 3.5,
    bestFor: 'First-time buyers and those with lower credit scores',
    benefits: [
      'Low down payment (3.5%)',
      'Lower credit score requirements',
      'Gift funds allowed for down payment',
      'Assumable loans'
    ],
    requirements: [
      'Credit score of 580+ (3.5% down) or 500+ (10% down)',
      'Debt-to-income ratio under 57%',
      'Primary residence only',
      'Mortgage insurance required'
    ]
  },
  {
    id: 'va',
    name: 'VA Loan',
    description: 'Zero down payment loans for eligible veterans and service members',
    minCreditScore: 620,
    maxLoanAmount: 766550,
    minDownPayment: 0,
    bestFor: 'Veterans, active military, and eligible spouses',
    benefits: [
      'No down payment required',
      'No private mortgage insurance',
      'Competitive interest rates',
      'No prepayment penalties'
    ],
    requirements: [
      'Valid Certificate of Eligibility',
      'Credit score typically 620+',
      'Sufficient income and employment',
      'Primary residence requirement'
    ]
  },
  {
    id: 'usda',
    name: 'USDA Loan',
    description: 'Zero down payment loans for rural and suburban areas',
    minCreditScore: 640,
    maxLoanAmount: 0, // No set limit
    minDownPayment: 0,
    bestFor: 'Buyers in rural and suburban eligible areas',
    benefits: [
      'No down payment required',
      'Low interest rates',
      'Low mortgage insurance',
      'Flexible credit guidelines'
    ],
    requirements: [
      'Property in USDA-eligible area',
      'Income limits apply',
      'Credit score of 640+',
      'Primary residence only'
    ]
  },
  {
    id: 'jumbo',
    name: 'Jumbo Loan',
    description: 'Loans that exceed conforming loan limits',
    minCreditScore: 700,
    maxLoanAmount: 0, // No upper limit
    minDownPayment: 10,
    bestFor: 'High-value property purchases',
    benefits: [
      'No loan amount restrictions',
      'Competitive rates for qualified borrowers',
      'Flexible terms available',
      'Various property types eligible'
    ],
    requirements: [
      'Credit score of 700+',
      'Low debt-to-income ratio',
      'Significant assets and reserves',
      'Higher down payment requirements'
    ]
  }
];

const LoanPrograms: React.FC = () => {
  return (
    <div className="loan-programs">
      <div className="container">
        <div className="section-header">
          <h2>Mortgage Loan Programs</h2>
          <p>Choose the right loan program that fits your needs and financial situation</p>
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
              </div>

              <div className="program-details">
                <div className="detail-row">
                  <span>Min. Credit Score:</span>
                  <span className="value">{program.minCreditScore}</span>
                </div>
                <div className="detail-row">
                  <span>Min. Down Payment:</span>
                  <span className="value">{program.minDownPayment}%</span>
                </div>
                {program.maxLoanAmount > 0 && (
                  <div className="detail-row">
                    <span>Max. Loan Amount:</span>
                    <span className="value">${program.maxLoanAmount.toLocaleString()}</span>
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
                <button className="btn btn--primary btn--small">
                  Learn More
                </button>
                <button className="btn btn--outline btn--small">
                  Apply Now
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanPrograms;
