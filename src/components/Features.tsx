import React from 'react';

const FeatureItem: React.FC<{
    title: string;
    desc: string;
    img: string;
    reversed?: boolean;
}> = ({ title, desc, img, reversed }) => (
    <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexDirection: reversed ? 'row-reverse' : 'row',
        marginBottom: '6rem',
        flexWrap: 'wrap'
    }} data-aos="fade-up">
        <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', wordBreak: 'keep-all' }}>{desc}</p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
            <div style={{
                width: '280px',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
            }}>
                <img src={img} alt={title} style={{ width: '100%' }} />
            </div>
        </div>
    </div>
);

const Features: React.FC = () => {
    return (
        <section style={{ backgroundColor: 'var(--color-card-bg)' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 data-aos="fade-up">왜 투두스톡인가요?</h2>
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: 'var(--color-text-light)' }}>
                    매일의 할 일을 성장의 게임으로 바꿔보세요.
                </p>
            </div>

            <FeatureItem
                title="성장을 시각화하세요"
                desc="주식 차트로 생산성을 추적하세요. 완료한 모든 할 일이 당신의 가치를 높입니다. 좋은 습관을 만들며 당신의 주가가 오르는 것을 지켜보세요."
                img="/assets/screenshot_chart.jpg"
            />

            <FeatureItem
                title="친구들과 경쟁하세요"
                desc="친구들 사이에서 당신의 순위를 확인하세요. 이번 주 가장 높은 성장률은 누구일까요? 선의의 경쟁이 강력한 동기부여가 됩니다."
                img="/assets/screenshot_market.jpg"
                reversed
            />

            <FeatureItem
                title="소식을 받아보세요"
                desc="당신의 생산성 트렌드에 대한 뉴스를 받아보세요. 전문 투자자처럼 자신의 성과를 분석하고 관리할 수 있습니다."
                img="/assets/screenshot_news.jpg"
            />
        </section>
    );
};

export default Features;
