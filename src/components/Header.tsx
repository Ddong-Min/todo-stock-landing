import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{
            padding: '1.5rem 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(var(--color-bg), 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    <span style={{ color: 'var(--color-primary)' }}>TODO</span>
                    <span style={{ color: 'var(--color-secondary)' }}>STOCK</span>
                </div>
                <nav>
                    <a href="#download" className="btn btn-primary">앱 다운로드</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
