import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
	
const navigate = useNavigate();

	return (
		<div className="landing-about-wrapper">
			<section id="landing-page" className="landing-page">
				<h1>Welcome to Founders</h1>
				<p>Where Startup Journeys Meet.</p>
				<button onClick={() => navigate('/signup')} className="cta-button">Start Your Journey</button>
			</section>
		</div>
	);
};

export default LandingPage;