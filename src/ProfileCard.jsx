import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile = {} }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', message: '' });

  // Avatar initials
  const getInitials = (name = '') =>
    name
      .split(' ')
      .map(n => n[0] || '')
      .join('')
      .toUpperCase();

  // Toggle dark/light theme
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // Card click increments view count
  const handleCardClick = () => setViewCount(prev => prev + 1);

  // Toggle favorite hobbies
  const toggleFavoriteHobby = (hobby) => {
    setFavoriteHobbies(prev =>
      prev.includes(hobby)
        ? prev.filter(h => h !== hobby)
        : [...prev, hobby]
    );
  };

  // Show contact form instead of alert
  const handleContactClick = () => setShowContactForm(true);

  // Submit contact form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${contactInfo.name}\nMessage: ${contactInfo.message}`);
    setShowContactForm(false);
    setContactInfo({ name: '', message: '' });
  };

  const cardClassName = `profile-card ${isDarkMode ? 'dark' : ''}`;

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      {/* Theme toggle */}
      <button className="theme-toggle" onClick={(e) => { e.stopPropagation(); toggleTheme(); }}>
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* View counter */}
      <div className="view-counter">👁️ Views: {viewCount}</div>

      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar">
            {profile.avatarUrl
                ? <img src={profile.avatarUrl} alt={profile.name} />
                : getInitials(profile.name)}
        </div>
        <h1 className="profile-name">{profile.name ?? 'Unknown'}</h1>
        <div className="student-id">{profile.studentId ?? 'N/A'}</div>
      </div>

      {/* Info */}
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
            {typeof profile.gpa === 'number' ? profile.gpa.toFixed(2) : 'N/A'}
            {typeof profile.gpa === 'number' && profile.gpa >= 3.5 && ' 🌟'}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <div className="achievements">
          {profile.gpa >= 3.5 && <span className="achievement-badge">🌟 Honors</span>}
          {(profile.skills?.length ?? 0) >= 5 && <span className="achievement-badge">💪 Multi-skilled</span>}
        </div>
      </div>

      {/* Hobbies with favorite toggle */}
      <div className="profile-section">
        <h3>🎯 Hobbies</h3>
        <ul className="hobbies-list">
          {(profile.hobbies ?? []).map((hobby, i) => (
            <li
              key={i}
              className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavoriteHobby(hobby);
              }}
            >
              {hobby} {favoriteHobbies.includes(hobby) && '💖'}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="profile-section">
        <h3>💻 Skills</h3>
        <div className="skills">
          {(profile.skills ?? []).map((skill, i) => (
            <div
              key={i}
              className="skill-tag"
              onClick={(e) => { e.stopPropagation(); alert(`${profile.name ?? 'N/A'} is skilled in ${skill}`); }}
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
            {profile.socialLinks.map((link, i) => (
              <a
                key={i}
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

      {/* Contact */}
      {!showContactForm && (
        <button className="contact-button" onClick={(e) => { e.stopPropagation(); handleContactClick(); }}>
          Contact {profile.name ?? 'N/A'}
        </button>
      )}

      {/* Contact Form */}
      {showContactForm && (
        <div className="contact-form" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              value={contactInfo.message}
              onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
