import '../styles/Support.scss';

export default function Support() {
    return (
        <div>
            <div className="support-hero">
                <div className="support-hero-overlay">
                    <div className="container support-hero-content d-flex align-items-center justify-content-center" style={{ height: "60vh"}}>
                    <h1>Email us at <a style={{textDecoration: "none", color: '#cdf1fe'}} href="mailto:marketing@classify.com.ph" target="_blank" rel="noreferrer">support@classify.com.ph</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}