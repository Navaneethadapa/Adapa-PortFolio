import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon, 
  SparklesIcon,
  CommandLineIcon,
  CubeIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: CodeBracketIcon,
      description: 'Proficient in multiple programming languages for diverse development needs',
      skills: ['Python', 'Java', 'SQL', 'Bash', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: CloudIcon,
      description: 'Extensive experience with major cloud platforms and infrastructure management',
      skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Cloud Architecture', 'Serverless', 'Microservices'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI & Machine Learning',
      icon: CpuChipIcon,
      description: 'Specialized in artificial intelligence, machine learning, and data science',
      skills: ['Machine Learning', 'Natural Language Processing', 'Generative AI', 'Prompt Engineering', 'Data Analysis', 'Model Training'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps & Tools',
      icon: WrenchScrewdriverIcon,
      description: 'Modern development tools and practices for efficient software delivery',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'System Monitoring'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technicalProficiency = [
    { name: 'Cloud Computing', level: 95, icon: CloudIcon, description: '700+ hours hands-on experience' },
    { name: 'AI/ML Development', level: 90, icon: CpuChipIcon, description: 'Model training & optimization' },
    { name: 'Backend Development', level: 88, icon: CommandLineIcon, description: 'Scalable system design' },
    { name: 'Database Management', level: 85, icon: CubeIcon, description: 'SQL & NoSQL expertise' },
    { name: 'DevOps & Security', level: 80, icon: ShieldCheckIcon, description: 'Deployment & monitoring' },
  ];

  const certifications = [
    {
      name: 'Google BigQuery Skills Challenge',
      issuer: 'Google',
      year: '2023',
      achievement: 'Top 10 among 10,000+ APAC participants',
      color: 'bg-blue-500'
    },
    {
      name: 'Google AI Startup School',
      issuer: 'Google',
      year: '2023',
      achievement: 'Completed with distinction',
      color: 'bg-green-500'
    },
    {
      name: 'Amazon ML Summer School',
      issuer: 'Amazon',
      year: '2023',
      achievement: 'NLP and Deep Learning focus',
      color: 'bg-orange-500'
    },
    {
      name: 'Chegg Subject Expert',
      issuer: 'Chegg',
      year: '2023',
      achievement: '4.8-star rating, 98% accuracy',
      color: 'bg-purple-500'
    }
  ];

  const tools = [
    'PyCharm', 'Visual Studio Code', 'Eclipse', 'Git', 'GitHub', 'GitLab',
    'Maven', 'Jenkins', 'Travis CI', 'MySQL', 'PostgreSQL', 'MongoDB',
    'DynamoDB', 'Slack', 'Microsoft Teams', 'Zoom'
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and expertise gained through 
            hands-on experience in cloud computing, AI, and software development
          </p>
        </motion.div>
      </section>

      {/* Main Skills Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Background Gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                whileHover={{ opacity: 0.1 }}
              />
              
              {/* Icon */}
              <motion.div 
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}
                whileHover={{ scale: 1.2, rotate: 10, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <category.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Proficiency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My expertise levels across different technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalProficiency.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="h-6 w-6 text-blue-600 mr-3" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
                <span className="text-blue-600 font-bold text-lg">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recognition and credentials that validate my expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start">
                  <div className={`w-4 h-4 ${cert.color} rounded-full mr-4 mt-2 flex-shrink-0`}></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {cert.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Development tools and platforms I use daily
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {tool.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {tool}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Soft Skills
            </h2>
            <p className="text-xl text-blue-100">
              Essential skills that complement my technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Communication', 'Creativity', 'Team Management', 'Work Organization', 'Flexibility', 'Collaboration'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20"
              >
                <SparklesIcon className="h-8 w-8 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-white text-sm">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;