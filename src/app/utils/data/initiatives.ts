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
      'Focuses on cultural grounding as the foundation of ethical living and leadership. It nurtures family values, discipline, and pride in heritage while encouraging reflection and moral clarity.',
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
      'Promotes economic responsibility, local innovation, and mindful consumption. It encourages participants to support community-driven solutions and Bharatiya entrepreneurship.',
    image: '/initiatives/swadeshi.png',
    activities: [
      'Promoting Swadeshi',
      'Swadeshi expos',
      'Local business volunteering',
      'Skill-sharing events',
    ],
  },
  {
    title: 'Prakriti – For a Sustainable Today',
    tagline: 'Acting Now, Shaping Tomorrow',
    description:
      'Cultivates environmental stewardship and sustainability literacy, emphasizing daily responsibility toward natural resources.',
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
];

export const yuvaSamvaada: Initiatives =
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
};
