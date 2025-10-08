import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // Doxxing material
    const sampleProfile = {
        name: "Pran Meedej",
        studentId: "67543210003-9",
        major: "Software Engineering",
        year: 2,
        age: 20,
        gpa: 3.75,
        email: "cunnylove67@gmail.com",
        hobbies: [
            "Sleeping",
            "Napping",
            "Sitting",
            "Walking",
            "Staring at wall"
        ],
        skills: [
            "JavaScript",
            "React.js",
            "HTML/CSS",
            "Python",
            "Git",
            "Node.js"
        ],
        socialLinks: [
        { platform: "GitHub", url: "https://github.com/ernst52" },
    ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - Raping React.js & JSX
                </p>
            </div>
            
            <ProfileCard profile={sampleProfile} />
        </div>
    );
}

export default App;