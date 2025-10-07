import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const sectionStyle = {
    margin: '4rem 0'
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '2rem 0'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem'
  };

  const cardTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem'
  };

  const cardTextStyle = {
    color: '#666',
    lineHeight: '1.6'
  };

  const storyStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
    margin: '4rem 0'
  };

  const storyImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  };

  const storyContentStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555'
  };

  const teamStyle = {
    backgroundColor: '#f8f9fa',
    padding: '4rem 2rem',
    borderRadius: '12px',
    margin: '4rem 0'
  };

  const teamGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const teamMemberStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const memberImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '4px solid #2c5530'
  };

  const memberNameStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem'
  };

  const memberRoleStyle = {
    color: '#2c5530',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const memberDescStyle = {
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.5'
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={titleStyle}>About Cow Products</h1>
        <p style={subtitleStyle}>
          Bringing you the finest dairy products from happy, grass-fed cows since 1985. 
          Our commitment to quality and sustainability drives everything we do.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Why Choose Us?</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={iconStyle}>🌱</div>
            <h3 style={cardTitleStyle}>100% Organic</h3>
            <p style={cardTextStyle}>
              All our products are certified organic, ensuring you get the purest, 
              most natural dairy products without any harmful chemicals or additives.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>🐄</div>
            <h3 style={cardTitleStyle}>Happy Cows</h3>
            <p style={cardTextStyle}>
              Our cows roam freely on lush green pastures, living stress-free lives 
              that result in higher quality milk and dairy products.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>🚚</div>
            <h3 style={cardTitleStyle}>Fresh Delivery</h3>
            <p style={cardTextStyle}>
              From farm to your table in 24 hours. Our cold-chain delivery system 
              ensures maximum freshness and nutritional value.
            </p>
          </div>
        </div>
      </div>

      <div style={storyStyle}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop" 
            alt="Our Farm" 
            style={storyImageStyle}
          />
        </div>
        <div style={storyContentStyle}>
          <h2 style={{ ...sectionTitleStyle, textAlign: 'left', marginBottom: '1.5rem' }}>
            Our Story
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Founded in 1985 by the Johnson family, Cow Products began as a small dairy farm 
            with just 20 cows. Our passion for providing the highest quality dairy products 
            to our community has driven us to become one of the region's most trusted dairy brands.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Today, we work with over 50 local family farms, all committed to sustainable 
            farming practices and animal welfare. Every cow in our network is grass-fed, 
            hormone-free, and treated with the utmost care and respect.
          </p>
          <p>
            Our state-of-the-art processing facility ensures that every product meets our 
            rigorous quality standards while maintaining the natural goodness that makes 
            our dairy products so special.
          </p>
        </div>
      </div>

      <div style={teamStyle}>
        <h2 style={sectionTitleStyle}>Meet Our Team</h2>
        <div style={teamGridStyle}>
          <div style={teamMemberStyle}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="John Johnson" 
              style={memberImageStyle}
            />
            <h3 style={memberNameStyle}>John Johnson</h3>
            <p style={memberRoleStyle}>Founder & CEO</p>
            <p style={memberDescStyle}>
              Third-generation dairy farmer with over 40 years of experience in sustainable farming practices.
            </p>
          </div>
          <div style={teamMemberStyle}>
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
              alt="Sarah Miller" 
              style={memberImageStyle}
            />
            <h3 style={memberNameStyle}>Sarah Miller</h3>
            <p style={memberRoleStyle}>Head of Quality Assurance</p>
            <p style={memberDescStyle}>
              Food scientist ensuring every product meets our highest standards for quality and safety.
            </p>
          </div>
          <div style={teamMemberStyle}>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
              alt="Mike Davis" 
              style={memberImageStyle}
            />
            <h3 style={memberNameStyle}>Mike Davis</h3>
            <p style={memberRoleStyle}>Farm Operations Manager</p>
            <p style={memberDescStyle}>
              Oversees daily operations across all partner farms, ensuring animal welfare and product quality.
            </p>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Commitment</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={iconStyle}>🌍</div>
            <h3 style={cardTitleStyle}>Sustainability</h3>
            <p style={cardTextStyle}>
              We're committed to environmental stewardship through renewable energy, 
              water conservation, and regenerative farming practices.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>❤️</div>
            <h3 style={cardTitleStyle}>Animal Welfare</h3>
            <p style={cardTextStyle}>
              Our cows are treated with love and respect, living in comfortable environments 
              with access to pasture, fresh air, and clean water.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>🏘️</div>
            <h3 style={cardTitleStyle}>Community</h3>
            <p style={cardTextStyle}>
              We support local farmers and communities, creating jobs and contributing 
              to the economic vitality of rural areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
