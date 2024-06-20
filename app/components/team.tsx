import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mark Hillgers',
    role: 'CEO',
    imageUrl: 'https://picsum.photos/id/27/3264/1836',
  },
  {
    name: 'Josh Stone',
    role: 'CTO',
    imageUrl: 'https://picsum.photos/id/91/3504/2336',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    imageUrl: 'https://picsum.photos/id/177/2515/1830',
  },
];

export function Team() {
  return (
    <section className="bg-gray-100 py-12" id="team">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-sm w-full lg:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-56 object-cover object-center" src={member.imageUrl} alt={member.name} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
