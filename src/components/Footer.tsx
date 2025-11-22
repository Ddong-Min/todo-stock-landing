import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: '#171717',
            color: 'white',
            padding: '4rem 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <h3 style={{ marginBottom: '1rem', fontWeight: 800 }}>
                    <span style={{ color: 'var(--color-primary)' }}>TODO</span>
                    <span style={{ color: 'var(--color-secondary)' }}>STOCK</span>
                </h3>
                <p style={{ color: '#a3a3a3', marginBottom: '2rem' }}>
                    습관에 투자하고, 미래를 설계하세요.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'white' }}>인스타그램</a>
                    <a href="#" style={{ color: 'white' }}>트위터</a>
                    <a href="#" style={{ color: 'white' }}>문의하기</a>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#525252' }}>
                    &copy; {new Date().getFullYear()} TodoStock. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
