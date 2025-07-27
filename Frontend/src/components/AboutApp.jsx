function AboutApp() {
  return (
    <div className="Aboutapp p-4 mb-4">
      <h2 className="mb-3">Why Use This Resume Screening App?</h2>
      <p>
        In today’s competitive job market, recruiters receive <strong>hundreds of resumes</strong> for a single position.
        Manually sorting through each one is time-consuming and inefficient. This web application offers a 
        <strong> smart, AI-powered solution</strong> to streamline that process.
      </p>

      <h3 className="mt-4">What This Web App Does</h3>
      <ul>
        <li>Automatically analyzes and understands resume content using AI.</li>
        <li>Categorizes resumes into job fields like <em>Data Science</em>, <em>Web Development</em>, etc.</li>
        <li>Helps recruiters <strong>filter candidates faster</strong>.</li>
        <li>Helps job seekers understand how ATS (Applicant Tracking Systems) interpret their resumes.</li>
      </ul>

      <h3 className="mt-4">Who Can Use It?</h3>
      <ul>
        <li><strong>Recruiters</strong> – to streamline shortlisting processes.</li>
        <li><strong>Job seekers</strong> – to see how their resume performs in automated screening.</li>
        <li><strong>Career coaches</strong> – to guide professionals on resume optimization.</li>
      </ul>

      <h3 className="mt-4">Powered by AI</h3>
      <ul>
        <li><strong>Flask</strong> – Python backend API</li>
        <li><strong>Scikit-learn</strong> – Machine Learning model</li>
        <li><strong>Joblib</strong> – Model loading and performance</li>
        <li><strong>React.js</strong> – Interactive frontend experience</li>
      </ul>
    </div>
  );
}
export default AboutApp;
