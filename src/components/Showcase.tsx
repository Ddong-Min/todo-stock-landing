import React from 'react';

const Showcase: React.FC = () => {
    return (
        <section>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
                    인터페이스 미리보기
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    justifyItems: 'center'
                }}>
                    {['screenshot_home.jpg', 'screenshot_chart.jpg', 'screenshot_market.jpg', 'screenshot_news.jpg'].map((img, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            style={{
                                width: '100%',
                                maxWidth: '280px',
                                transition: 'transform 0.3s',
                                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
                            }}
                            className="showcase-item"
                        >
                            <img src={`assets/${img}`} alt={`Showcase ${index}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
