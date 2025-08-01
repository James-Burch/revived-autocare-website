import { Layout, ContactBar, Button } from '../components';
import MortgageCalculator from '../components/MortgageCalculator';
import { Link } from 'react-router-dom';

const CalculatorPage = () => {
    return (
        <Layout title="Mortgage Calculator - UK Mortgage Advisor">
            <div className="calculator-page">
                <section className="calculator-hero">
                    <div className="container">
                        <div className="calculator-hero-content">
                            <h1>Mortgage Calculator</h1>
                            <p>
                                Calculate your monthly mortgage payments and get an estimate of how much you could borrow.
                                Use our free calculator to plan your next property purchase.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="calculator-section">
                    <div className="container">
                        <div className="calculator-wrapper">
                            <MortgageCalculator />

                            <div className="calculator-info">
                                <div className="info-card">
                                    <h3>How Our Calculator Works</h3>
                                    <p>
                                        Our mortgage calculator uses standard calculation methods to estimate your monthly payments
                                        based on the property value, deposit amount, interest rate, and loan term you enter.
                                    </p>
                                    <ul>
                                        <li>Enter your property value and deposit amount</li>
                                        <li>Add the interest rate and loan term</li>
                                        <li>Get instant calculations including stamp duty</li>
                                        <li>See your total cost and interest over the loan term</li>
                                    </ul>
                                </div>

                                <div className="info-card">
                                    <h3>Need More Help?</h3>
                                    <p>
                                        Our qualified mortgage advisors can help you understand your options and find the best deals
                                        available to you from across the whole of market.
                                    </p>
                                    <div className="info-actions">
                                        <Link to="/contact">
                                            <Button variant="primary" size="md">
                                                Speak to an Advisor
                                            </Button>
                                        </Link>
                                        <Link to="/contact">
                                            <Button variant="outline" size="md">
                                                Get a Quote
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactBar />
            </div>
        </Layout>
    );
};

export default CalculatorPage;