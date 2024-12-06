import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const teamData = [
    {
        name: 'Amey Khamkar',
        email: 'amey.khamkar@mitaoe.ac.in',
        photo: 'https://media.licdn.com/dms/image/v2/D5635AQFlYKSEtVP8wA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710363904062?e=1734120000&v=beta&t=3e5adrf6RadaRksX8IyXNUaTGfR71wQ5YsdsmMnvKvg',
        linkedin: 'https://www.linkedin.com/in/amey-khamkar/',
    },
    {
        name: 'Patik Patil',
        email: 'pratikv.patil@mitaoe.ac.in',
        photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFR1aaoe7BrQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707822522087?e=1738800000&v=beta&t=y9MRZYJ67Uj3eIWuCuU_aKddGwYvloXLjnjpA8Y4zT0',
        linkedin: 'https://www.linkedin.com/in/pratik-patil-3b79b8247/',
    },
    {
        name: 'Tejas Pingale',
        email: 'tejas.pingale@mitaoe.ac.in',
        photo: 'https://media.licdn.com/dms/image/v2/D5603AQGMdlncdQDNGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679674598328?e=1738800000&v=beta&t=WRCnjOEWVUVVMQ3_WgKd4kM2NcNjU6N5rgp0P3CVnxc',
        linkedin: 'https://www.linkedin.com/in/tejas-pingale/',
    },
    {
        name: 'Mohit Jaiswal',
        email: 'mohit.jaiswal@mitaoe.ac.in',
        photo: 'https://media.licdn.com/dms/image/v2/D5603AQH9t69K-2uxfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714998026632?e=1738800000&v=beta&t=U_wvXy7vULc9pc3t0TLQxl_N1QZQ1kov9SIxcL6QdiQ',
        linkedin: 'https://www.linkedin.com/in/mohitjaiswal28/',
    },
];

const projectGuide = {
    name: 'Mr. Shriram Pranav Rajesh',
    designation: 'Assistant Professor',
    photo: 'https://mitaoe.ac.in/assets/images/it/pranav.jpg',
    linkedin: 'https://www.linkedin.com/in/pranav-shriram-68515376/',
};

const Team = () => {
    const styles = {
        container: {
            padding: '40px 20px',
            textAlign: 'center',
            minHeight: '100vh',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
            justifyItems: 'center',
            marginBottom: '40px',
        },
        card: {
            width: '100%',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        cardHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
        photo: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '15px',
        },
        name: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#333',
        },
        role: {
            fontSize: '1rem',
            color: '#777',
            marginBottom: '10px',
        },
        socialLink: {
            color: '#0077b5',
            fontSize: '1.5rem',
            textDecoration: 'none',
            transition: 'color 0.3s',
        },
        socialLinkHover: {
            color: '#005582',
        },
        projectGuideCard: {
            gridColumn: 'span 12',
            width: '100%',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
    };

    return (
        <section id="about">
            <div className="container-fluid px-0">
                <div style={styles.container}>
                    <h1 className="heading-text au-text">Our Team</h1>
                    <div style={styles.grid}>
                        {teamData.map((member, index) => (
                            <div key={index} style={{ gridColumn: 'span 3' }} className='col-lg-12 col-md-12 mt-3 aboutus-main-card d-flex align-items-center justify-content-center'>
                                <img src={member.photo} alt={member.name} style={styles.photo} />
                                <div style={styles.name}>{member.name}</div>
                                <div style={styles.name}>{member.email}</div>
                                <div style={styles.name}>MIT Academy of Engineering</div>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink} onMouseOver={(e) => e.target.style.color = styles.socialLinkHover.color} onMouseOut={(e) => e.target.style.color = styles.socialLink.color}><FaLinkedin /></a>
                            </div>
                        ))}
                    </div>

                    <h1 className="heading-text au-text">Project Guide</h1>
                    <div className='col-lg-12 col-md-12 mt-3 aboutus-main-card d-flex align-items-center justify-content-center'>
                        <img src={projectGuide.photo} alt={projectGuide.name} style={styles.photo} />
                        <div style={styles.name}>{projectGuide.name}</div>
                        <div style={styles.role}>{projectGuide.designation}</div>
                        <div style={styles.name}>MIT Academy of Engineering</div>
                        <a href={projectGuide.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink} onMouseOver={(e) => e.target.style.color = styles.socialLinkHover.color} onMouseOut={(e) => e.target.style.color = styles.socialLink.color}><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
