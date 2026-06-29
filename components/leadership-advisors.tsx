import Image from "next/image"

export default function LeadershipAdvisors() {
  const leadership = [
    {
      name: "Thomas Gaye",
      role: "Founder, CEO & Technical Lead",
      bio: "Founder of Wingman and S&G AI Lab. U.S. Navy Veteran and AI Systems Engineer leading the architecture and development of the Wingman Spatial Intelligence Platform.",
      avatar: "/assets/founders/thomas-gaye.png",
    },
    {
      name: "Henry Slebo",
      role: "Co-Founder & Operations Lead",
      bio: "Leads company operations, execution, strategic planning, partnerships, and organizational growth.",
      avatar: "/assets/founders/henry-slebo.png",
    },
  ];

  const growthAdvisors = [
    {
      name: "Fabian M. Vincent",
      role: "Senior Vice President, Caribbean Strategy & Partnerships",
      bio: "Leads Caribbean market expansion, government engagement, university partnerships, innovation ecosystem development, and strategic growth initiatives across Trinidad & Tobago and the wider Caribbean.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Kellyann Few",
      role: "Strategic Sustainability, Government Relations, Grant & Growth Advisor",
      bio: "Provides executive guidance on government engagement, infrastructure modernization, sustainability initiatives, grant strategy, economic development, and public-sector partnerships.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Randi Payton",
      role: "Fundraising & Investor Relations Advisor",
      bio: "Supports capital strategy, investor readiness, venture capital introductions, strategic fundraising, commercial opportunity development, and investor relationship management to help accelerate the growth of Wingman and S&G AI Lab.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Bobby Delacruz",
      role: "Fundraising & Strategic Advisor",
      bio: "Advises on capital readiness, strategic partnerships, business development, investor presentation preparation, enterprise positioning, and commercial growth initiatives.",
      avatar: "/placeholder.svg",
    },
  ];

  const operationsAdvisors = [
    {
      name: "Claudia Ansah",
      role: "Human Resources Director",
      bio: "Leads organizational development, talent acquisition, people operations, leadership development, and company culture to help build a world-class AI organization.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Jay Stroup, PhD",
      role: "Security, Compliance & Corporate Governance Advisor",
      bio: "Provides executive leadership in enterprise security, regulatory compliance, governance, risk management, cybersecurity strategy, and operational resilience.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Krishanma Marie",
      role: "Partnerships Advisor",
      bio: "Supports strategic alliances, partnership development, ecosystem expansion, and international relationship building.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Beatrice Misorimaligayo",
      role: "Strategic Expansion Advisor",
      bio: "Advises on international growth strategy, market expansion, business development, and long-term organizational scaling.",
      avatar: "/placeholder.svg",
    },
  ];

  const renderProfile = (person: any) => (
    <div key={person.name} className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">

        <div>
          <h3 className="text-xl font-bold">{person.name}</h3>
          <p className="text-sm text-purple-400 font-medium leading-snug">{person.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">{person.bio}</p>
    </div>
  );

  return (
    <section id="advisors" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Advisors</h2>
          <p className="text-lg text-gray-400">
            Experts guiding our mission and future.
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200 border-b border-gray-800 pb-4">Executive Leadership</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {leadership.map(renderProfile)}
          </div>
        </div>

        {/* Strategic Growth & Business Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200 border-b border-gray-800 pb-4">Strategic Growth &amp; Business Advisors</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {growthAdvisors.map(renderProfile)}
          </div>
        </div>

        {/* Operations, People & Governance */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200 border-b border-gray-800 pb-4">Operations, People &amp; Governance</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operationsAdvisors.map(renderProfile)}
          </div>
        </div>

      </div>
    </section>
  )
}
