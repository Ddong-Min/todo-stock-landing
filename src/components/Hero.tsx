import React from 'react';

const Hero: React.FC = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            background: 'linear-gradient(135deg, rgba(90, 165, 216, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }} data-aos="fade-up">
                    <h1 style={{ marginBottom: '1.5rem', wordBreak: 'keep-all' }}>
                        당신의 <span style={{ color: 'var(--color-primary)' }}>습관</span>에<br />
                        주식처럼 투자하세요.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '500px', wordBreak: 'keep-all' }}>
                        투두스톡은 할 일 관리와 주식 시장의 시각화를 결합했습니다.
                        할 일을 완료하여 당신의 주가를 올리고 친구들과 경쟁하세요.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary">시작하기</button>
                        <button className="btn" style={{ border: '1px solid var(--color-text-light)' }}>더 알아보기</button>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }} data-aos="fade-left">
                    <div style={{
                        position: 'relative',
                        width: '300px',
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))'
                    }}>
                        <img
                            src="/assets/screenshot_home.jpg"
                            alt="TodoStock App Interface"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
