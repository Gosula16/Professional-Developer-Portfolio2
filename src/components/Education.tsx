import { GraduationCap, Calendar, Award, Users, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology in Information Technology',
    university: 'SASTRA Deemed University',
    location: 'Tamil Nadu, India',
    duration: '2021 - 2025',
    cgpa: '8.3/10',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipNt3cPrjZ6C85hdwerKeRlS5fDesoaRXRDP4Pgt=s1360-w1360-h1020-rw',
  };

  const activities = [
    {
      icon: Users,
      title: 'NSS Volunteer',
      description:
        'Active participant in National Service Scheme, contributing to community initiatives and service-driven programs.',
      period: '2022 - Present',
    },
    {
      icon: Trophy,
      title: 'Gaming Club Member',
      description:
        'Supported university gaming events and tournament activity while building team coordination skills.',
      period: '2021 - Present',
    },
    {
      icon: Award,
      title: 'Mathematics Club',
      description:
        'Participated in problem-solving sessions and analytical discussions that strengthened core thinking.',
      period: '2021 - 2023',
    },
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Machine Learning',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Web Technologies',
    'Operating Systems',
  ];

  return (
    <section id="education" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">Education</span>
          <h2 className="section-title">Academic foundations with room for real product work</h2>
          <p className="section-subtitle">
            My degree work gave me a strong systems and software base while I built
            practical projects outside the classroom.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card lg:col-span-7 lg:row-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <GraduationCap className="h-8 w-8 text-cyan-200" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
                <p className="mt-2 text-lg font-medium text-cyan-200">
                  {education.university}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="info-pill">
                <Calendar className="h-4 w-4 text-cyan-300" />
                {education.duration}
              </div>
              <div className="info-pill">
                <Award className="h-4 w-4 text-cyan-300" />
                CGPA {education.cgpa}
              </div>
              <div className="info-pill">{education.location}</div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-5">
            <img
              src={education.image}
              alt="SASTRA University"
              className="h-full min-h-[320px] w-full rounded-[24px] object-cover"
            />
          </div>

          {activities.map((activity) => (
            <div key={activity.title} className="bento-card lg:col-span-4">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <activity.icon className="h-6 w-6 text-cyan-200" />
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/70">
                {activity.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{activity.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
