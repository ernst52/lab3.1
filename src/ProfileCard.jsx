import React from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    // ฟังก์ชันสำหรับแสดง Avatar (ตัวอักษรแรกของชื่อ)
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    // ฟังก์ชันจัดการเมื่อคลิกปุ่ม Contact
    const handleContactClick = () => {
        alert(`สวัสดี! ติดต่อ ${profile.name} ที่อีเมล ${profile.email}`);
    };

    // ฟังก์ชันจัดการเมื่อคลิกที่ skill
    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    // TODO: นักศึกษาจะเพิ่ม state และ functions เพิ่มเติมในส่วน Challenge

    return (
      <div className="profile-card">
        {/* ส่วนหัว - รูปและชื่อ */}
        <div className="profile-header">
          <div className="profile-avatar">{getInitials(profile.name)}</div>
          <h1 className="profile-name">{profile.name}</h1>
          <div className="student-id">{profile.studentId}</div>
        </div>

        {/* ข้อมูลพื้นฐาน */}
        <div className="profile-info">
          <div className="info-item">
            <div className="info-label">Major</div>
            <div className="info-value">{profile.major}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Year</div>
            <div className="info-value">{profile.year}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Age</div>
            <div className="info-value">{profile.age} Years old</div>
          </div>
          <div className="info-item">
            <div className="info-label">Grade</div>
            <div className="info-value">
              {typeof profile.gpa === "number" ? profile.gpa.toFixed(2) : "Ain't tellin'"}
              {typeof profile.gpa === "number" && profile.gpa >= 3.5 && " 🌟"}
            </div>
          </div>
        </div>

        {/* งานอดิเรก */}
        <div className="profile-section">
          <h3>🎯 Hobbies</h3>
          <ul className="hobbies-list">
            {profile.hobbies.map((hobby, index) => (
              <li key={index} className="hobby-item">
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill */}
        <div className="profile-section">
          <h3>💻 Skill</h3>
          <div className="skills">
            {profile.skills.map((skill, index) => (
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
        {profile.socialLinks && profile.socialLinks.length > 0 && (
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

        {/* ปุ่ม Contact */}
        <button className="contact-button" onClick={handleContactClick}>
          Contact {profile.name}
        </button>
      </div>
    );
}

export default ProfileCard;