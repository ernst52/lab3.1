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
                <div className="profile-avatar">
                    {getInitials(profile.name)}
                </div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            {/* ข้อมูลพื้นฐาน */}
            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>

            {/* งานอดิเรก */}
            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li key={index} className="hobby-item">
                            {hobby}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ทักษะ */}
            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
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

            {/* TODO: นักศึกษาจะเพิ่ม sections เพิ่มเติมใน Challenge */}

            {/* ปุ่ม Contact */}
            <button 
                className="contact-button"
                onClick={handleContactClick}
            >
                📧 ติดต่อ {profile.name}
            </button>
        </div>
    );
}

export default ProfileCard;