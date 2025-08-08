type Initiatives = {
  title: string
  tagline: string
  description: string
  image: string
  activities: string[]
}

export const initiatives: Initiatives[] = [
  {
    title: 'Samskruti – Rooted in Culture',
    tagline: 'Nurturing Values Through Culture',
    description:
      'Promotes family values, ethics, and cultural pride as the foundation for righteous living. Fosters personality development, moral clarity, and respect for heritage through traditions, rituals, arts, and inner discipline.',
    image: '/initiatives/samskruthi.png',
    activities: [
      'Cultural storytelling',
      'Promoting Family Values',
      'Language learning',
    ],
  },
  {
    title: 'Swadeshi – Self-Reliance',
    tagline: 'Think Global, Act Local',
    description:
      'Inspires pride in Bharatiya innovation, entrepreneurship, and local economy. Encourages mindful consumption and support for locally made products and community-driven solutions.',
    image: '/initiatives/swadeshi.png',
    activities: [
      'Promoting Swadeshi',
      'Swadeshi expos',
      'Local business volunteering',
      'Skill-sharing events',
    ],
  },
  {
    title: 'Karthavya – Civic Responsibility',
    tagline: 'Inspiring Action, Empowering Change',
    description:
      'Builds active citizenship through volunteering, social awareness, and community participation. Covers civic behavior (cleanliness, voting, traffic rules), disaster response, and public campaigns.',
    image: '/initiatives/civic-responsibility.png',
    activities: [
      'Cleanliness drives',
      'Blood donation',
      'Voter awareness',
      'Social Participation',
    ],
  },
  {
    title: 'Prakriti – For a Sustainable Today',
    tagline: 'Acting Now, Shaping Tomorrow',
    description:
      'Promotes eco-conscious living through tree planting, waste reduction, water conservation, and climate literacy. Encourages stewardship of natural resources and responsible habits.',
    image: '/initiatives/prakriti.png',
    activities: [
      'Promoting Desi Gou Economy',
      'Plantation drives',
      'Eco-competitions',
      'Composting workshops',
      'Plastic-free challenges',
    ],
  },
  {
    title: 'Yuva Samvada – Leadership & Innovation',
    tagline: 'Lead with Values. Create with Vision.',
    description:
      'Empowers youth to lead with integrity through mentorship, project-based learning, and collaborative initiatives. Encourages critical thinking, creativity, and teamwork rooted in Indian ethos.',
    image: '/initiatives/yuva-samvaada.png',
    activities: [
      'Value-based discussions',
      'Youth parliaments',
      'Hackathons',
      'Innovation challenges',
    ],
  },
];
