import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile = {} }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Avatar initials
  const getInitials = (name = '') =>
    name
      .split(' ')
      .map(n => n[0] || '')
      .join('')
      .toUpperCase();

  // Contact button
  const handleContactClick = () => {
    alert(`Hello! Contact ${profile.name ?? 'N/A'} at ${profile.email ?? 'N/A'}`);
  };

  // Skill click
  const handleSkillClick = (skill) => {
    alert(`${profile.name ?? 'N/A'} is skilled in ${skill}!`);
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Conditional class for dark mode
  const cardClassName = `profile-card ${isDarkMode ? 'dark' : ''}`;

  return (
    <div className={cardClassName}>
      {/* Header */}
      <div className="profile-header">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
        <div className="profile-avatar">{getInitials(profile.name)}</div>
        <h1 className="profile-name">{profile.name ?? 'Unknown'}</h1>
        <div className="student-id">{profile.studentId ?? 'N/A'}</div>
      </div>

      {/* Basic Info */}
      <div className="profile-info">
        <div className="info-item">
          <div className="info-label">Major</div>
          <div className="info-value">{profile.major ?? 'N/A'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Year</div>
          <div className="info-value">{profile.year ?? 'N/A'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Age</div>
          <div className="info-value">{profile.age ?? 'N/A'} years old</div>
        </div>
        <div className="info-item">
          <div className="info-label">GPA</div>
          <div className="info-value">
            {typeof profile.gpa === 'number' ? profile.gpa.toFixed(2) : "N/A"}
            {typeof profile.gpa === 'number' && profile.gpa >= 3.5 && ' 🌟'}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <div className="achievements">
          {profile.gpa >= 3.5 && (
            <span className="achievement-badge">🌟 Honors</span>
          )}
          {(profile.skills?.length ?? 0) >= 5 && (
            <span className="achievement-badge">💪 Multi-skilled</span>
          )}

        </div>
      </div>

      {/* Hobbies */}
      <div className="profile-section">
        <h3>🎯 Hobbies</h3>
        <ul className="hobbies-list">
          {(profile.hobbies ?? []).map((hobby, index) => (
            <li key={index} className="hobby-item">
              {hobby}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="profile-section">
        <h3>💻 Skills</h3>
        <div className="skills">
          {(profile.skills ?? []).map((skill, index) => (
            <div
              key={index}
              className="skill-tag"
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      {(profile.socialLinks ?? []).length > 0 && (
        <div className="profile-section">
          <h3>🌐 Social Media</h3>
          <div className="social-links">
            {profile.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Contact Button */}
      <button className="contact-button" onClick={handleContactClick}>
        Contact {profile.name ?? 'N/A'}
      </button>
    </div>
  );
}

export default ProfileCard;
