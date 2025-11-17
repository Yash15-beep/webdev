const mongoose = require('mongoose');
const User = require('./models/User');
const Skill = require('./models/Skill');
require('dotenv').config();

// Sample data for seeding
const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Skill.deleteMany({});
    console.log('Cleared existing data');

    // Create sample users
    const users = await User.create([
      {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        skillsOffered: [],
        skillsWanted: ['Web Development']
      },
      {
        name: 'Mike Chen',
        email: 'mike@example.com',
        skillsOffered: [],
        skillsWanted: ['Graphic Design']
      },
      {
        name: 'Emma Davis',
        email: 'emma@example.com',
        skillsOffered: [],
        skillsWanted: ['Spanish']
      },
      {
        name: 'Alex Kumar',
        email: 'alex@example.com',
        skillsOffered: [],
        skillsWanted: ['Guitar']
      }
    ]);

    console.log('Created sample users');

    // Create sample skills
    const skills = await Skill.create([
      {
        name: 'Web Development',
        category: 'Programming',
        description: 'Learn HTML, CSS, JavaScript, and modern frameworks like React',
        level: 'Intermediate',
        offeredBy: users[0]._id
      },
      {
        name: 'Graphic Design',
        category: 'Design',
        description: 'Master Photoshop, Illustrator, and UI/UX design principles',
        level: 'Beginner',
        offeredBy: users[1]._id
      },
      {
        name: 'Spanish Language',
        category: 'Languages',
        description: 'Conversational Spanish for beginners and intermediate learners',
        level: 'Intermediate',
        offeredBy: users[2]._id
      },
      {
        name: 'Guitar Lessons',
        category: 'Music',
        description: 'Learn acoustic guitar from basics to advanced techniques',
        level: 'Beginner',
        offeredBy: users[3]._id
      },
      {
        name: 'Python Programming',
        category: 'Programming',
        description: 'Learn Python for data science, web development, and automation',
        level: 'Intermediate',
        offeredBy: users[0]._id
      },
      {
        name: 'Digital Photography',
        category: 'Design',
        description: 'Master camera settings, composition, and photo editing',
        level: 'Beginner',
        offeredBy: users[1]._id
      },
      {
        name: 'French Language',
        category: 'Languages',
        description: 'Learn French from scratch or improve your conversational skills',
        level: 'Beginner',
        offeredBy: users[2]._id
      },
      {
        name: 'Yoga & Meditation',
        category: 'Sports',
        description: 'Practice mindfulness and physical wellness through yoga',
        level: 'Beginner',
        offeredBy: users[3]._id
      }
    ]);

    console.log('Created sample skills');

    // Update users with their offered skills
    await User.findByIdAndUpdate(users[0]._id, { 
      skillsOffered: [skills[0]._id, skills[4]._id] 
    });
    await User.findByIdAndUpdate(users[1]._id, { 
      skillsOffered: [skills[1]._id, skills[5]._id] 
    });
    await User.findByIdAndUpdate(users[2]._id, { 
      skillsOffered: [skills[2]._id, skills[6]._id] 
    });
    await User.findByIdAndUpdate(users[3]._id, { 
      skillsOffered: [skills[3]._id, skills[7]._id] 
    });

    console.log('Database seeded successfully!');
    console.log(`Created ${users.length} users and ${skills.length} skills`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
