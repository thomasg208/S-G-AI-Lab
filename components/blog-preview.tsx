"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import BlogModal from "./BlogModal"

export default function BlogPreview() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const articles = [
    {
      title: "10 Ways to Boost Your Team's Productivity",
      excerpt: "Discover proven strategies to enhance your team's efficiency and output without burning out.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
      category: "Productivity",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      author: "Thomas Gaye",
      authorImage: "/assets/founders/thomas-gaye.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">Introduction: The Productivity Revolution</h2>
        <p class="mb-4">In today's fast-paced business environment, productivity isn't just about doing more—it's about achieving meaningful results efficiently. As a new startup building the future of AI-driven solutions, we at FusionCell understand that teams face increasing demands and complex challenges. Drawing from our experience developing cutting-edge productivity tools, I've identified ten proven approaches that can transform how your team works.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">1. Implement Time Blocking</h2>
        <p class="mb-4">Time blocking is more than just scheduling—it's about creating dedicated focus periods for specific types of work. Research shows that the human brain can only maintain deep focus for about 90-120 minutes at a time. By structuring your day around these natural focus cycles, you can maximize cognitive performance and reduce mental fatigue.</p>
        <p class="mb-4">Start by identifying your team's peak productivity hours and schedule the most demanding tasks during these periods. Encourage team members to block out "deep work" sessions where they can focus without interruptions, and "collaboration time" for meetings and discussions.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">2. Leverage AI-Powered Tools</h2>
        <p class="mb-4">Artificial intelligence has revolutionized how we work. From automated task management to intelligent document analysis, AI tools can handle repetitive tasks, freeing up your team to focus on high-value activities. As a new startup focused on AI innovation, FusionCell is developing next-generation productivity tools that we believe will increase team efficiency by up to 40% when properly integrated into workflows.</p>
        <p class="mb-4">Consider implementing AI-powered project management tools that can predict bottlenecks, suggest optimal resource allocation, and automate routine reporting. The key is to choose tools that complement your team's existing processes rather than completely overhauling them.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">3. Foster a Culture of Continuous Learning</h2>
        <p class="mb-4">Productive teams are learning teams. When team members are encouraged to acquire new skills and knowledge, they bring fresh perspectives and innovative solutions to challenges. Create a learning ecosystem where knowledge sharing is rewarded and failure is viewed as a learning opportunity.</p>
        <p class="mb-4">Implement weekly knowledge-sharing sessions, provide access to online learning platforms, and establish mentorship programs. The investment in your team's growth will pay dividends in increased productivity and innovation.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">4. Optimize Communication Channels</h2>
        <p class="mb-4">Poor communication is one of the biggest productivity killers in modern workplaces. The constant barrage of emails, messages, and notifications fragments attention and reduces focus. Establish clear communication protocols that specify which channels to use for different types of information.</p>
        <p class="mb-4">For example, use instant messaging for urgent matters, email for formal communications, and project management tools for task-related updates. Consider implementing "communication windows" where team members can send non-urgent messages, reducing the expectation of immediate responses.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">5. Implement the 2-Minute Rule</h2>
        <p class="mb-4">Popularized by productivity expert David Allen, the 2-minute rule states that if a task takes less than two minutes to complete, do it immediately rather than deferring it. This simple principle prevents small tasks from piling up and becoming overwhelming.</p>
        <p class="mb-4">Train your team to quickly assess task duration and handle short tasks immediately. This approach reduces mental clutter and prevents the accumulation of minor but time-consuming activities.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">6. Create a Results-Oriented Work Environment</h2>
        <p class="mb-4">Shift your focus from hours worked to outcomes achieved. When team members are evaluated based on results rather than time spent at their desks, they're more likely to work efficiently and take ownership of their responsibilities.</p>
        <p class="mb-4">Implement clear metrics for success and regular check-ins to discuss progress rather than micromanaging daily activities. This approach builds trust and empowers team members to find their most productive ways of working.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">7. Encourage Strategic Breaks</h2>
        <p class="mb-4">Counterintuitive as it may seem, taking regular breaks actually increases productivity. The brain needs time to rest and consolidate information. Research shows that short breaks every 60-90 minutes can improve focus, creativity, and decision-making.</p>
        <p class="mb-4">Encourage your team to step away from their desks, stretch, or engage in brief mindfulness exercises. Some companies have implemented "no-meeting zones" during certain hours to allow for uninterrupted focus and strategic breaks.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">8. Automate Repetitive Processes</h2>
        <p class="mb-4">Identify repetitive tasks that consume significant time and explore automation solutions. From automated report generation to workflow automation, there are numerous tools that can handle routine activities more efficiently than manual processes.</p>
        <p class="mb-4">Start by documenting your team's workflows and identifying bottlenecks. Then, explore automation tools that can streamline these processes. Even small automations can compound into significant time savings over time.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">9. Foster Psychological Safety</h2>
        <p class="mb-4">Teams that feel psychologically safe are more productive because they're not afraid to take risks, admit mistakes, or ask for help. When team members feel secure, they're more likely to collaborate effectively and innovate.</p>
        <p class="mb-4">Create an environment where constructive feedback is welcomed, failures are treated as learning opportunities, and diverse perspectives are valued. Leaders should model vulnerability and openness to set the tone for the entire team.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">10. Implement Regular Retrospectives</h2>
        <p class="mb-4">Continuous improvement is essential for sustained productivity. Regular retrospectives allow teams to reflect on what's working, what isn't, and how processes can be improved. These sessions should focus on process improvement rather than individual performance.</p>
        <p class="mb-4">Schedule monthly retrospectives where team members can openly discuss challenges and successes. Use these insights to iterate on your productivity strategies and adapt to changing needs.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Conclusion: Building a Productivity Ecosystem</h2>
        <p class="mb-4">Boosting team productivity isn't about implementing a single solution—it's about creating an ecosystem where efficient work habits are supported and rewarded. Start with the strategies that align with your team's current challenges and gradually build upon your successes.</p>
        <p class="mb-4">Remember that productivity is a journey, not a destination. The most successful teams are those that continuously experiment, learn, and adapt their approaches. By implementing these ten strategies, you'll create a foundation for sustained productivity and team success.</p>
      `
    },
    {
      title: "The Future of Remote Work: Trends to Watch",
      excerpt: "Explore emerging trends that are shaping how teams collaborate and work together remotely.",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop",
      category: "Remote Work",
      date: "Nov 10, 2025",
      readTime: "7 min read",
      author: "Thomas Gaye",
      authorImage: "/assets/founders/thomas-gaye.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">The Remote Work Revolution: Where We Are and Where We're Going</h2>
        <p class="mb-4">The global shift to remote work that began in 2020 wasn't just a temporary response to a crisis—it was the catalyst for a fundamental transformation in how we think about work, collaboration, and organizational structure. As a founder building a new startup in 2025, I'm witnessing firsthand how distributed work is evolving and the trends that will shape its future for emerging companies like FusionCell.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">1. The Hybrid Work Model Becomes Standard</h2>
        <p class="mb-4">While some companies have embraced fully remote work, the majority are settling into hybrid models that combine the flexibility of remote work with the benefits of in-person collaboration. The key insight is that there's no one-size-fits-all approach—successful organizations are designing hybrid models that align with their culture, industry, and business objectives.</p>
        <p class="mb-4">What we're seeing is the emergence of "hub-and-spoke" models, where companies maintain central offices for collaboration while allowing employees to work from remote locations or smaller satellite offices. This approach provides the flexibility employees crave while maintaining the organizational cohesion that comes from regular in-person interaction.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">2. AI-Powered Collaboration Tools</h2>
        <p class="mb-4">Artificial intelligence is revolutionizing remote collaboration in ways we couldn't have imagined just a few years ago. From real-time language translation in video calls to AI-powered meeting summaries and action item extraction, technology is breaking down the barriers that once made remote work challenging.</p>
        <p class="mb-4">As a new startup, FusionCell is developing AI systems that can analyze meeting dynamics, suggest optimal meeting times across time zones, and even detect when team members are disengaged during virtual meetings. These tools aren't replacing human interaction—they're enhancing it by handling the administrative burdens that often detract from meaningful collaboration.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">3. The Rise of Asynchronous Communication</h2>
        <p class="mb-4">As distributed teams become the norm, organizations are rediscovering the power of asynchronous communication. Unlike synchronous communication that requires everyone to be available simultaneously, asynchronous approaches allow team members to contribute on their own schedules, leading to more thoughtful responses and reduced meeting fatigue.</p>
        <p class="mb-4">We're seeing the emergence of sophisticated documentation platforms, video messaging tools, and project management systems that facilitate asynchronous collaboration. The most successful remote teams are those that master the art of clear, comprehensive communication that doesn't require immediate responses.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">4. Focus on Employee Experience in Digital Spaces</h2>
        <p class="mb-4">With less physical interaction, companies are investing heavily in creating engaging digital employee experiences. This goes beyond just providing the right tools—it's about creating virtual spaces that foster connection, community, and a sense of belonging.</p>
        <p class="mb-4">Virtual reality meeting spaces, digital water coolers, and AI-powered team matching for informal connections are becoming more common. The goal is to replicate the spontaneous interactions and relationship-building that naturally occur in physical offices, but in digital formats that work for distributed teams.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">5. Data-Driven Remote Work Management</h2>
        <p class="mb-4">The shift to remote work has created an unprecedented opportunity to collect and analyze data on how people work most effectively. Companies are using this data to optimize everything from meeting schedules to project workflows, creating more efficient and humane work environments.</p>
        <p class="mb-4">Advanced analytics can identify patterns in productivity, collaboration effectiveness, and employee well-being. However, the key is using this data to support employees rather than micromanage them. The most successful organizations are transparent about what they measure and why, giving employees agency over their own work patterns.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">6. Global Talent Acquisition Becomes Standard</h2>
        <p class="mb-4">Remote work has eliminated geographic barriers to hiring, allowing companies to access talent from anywhere in the world. This is fundamentally changing how organizations think about recruitment, compensation, and team composition.</p>
        <p class="mb-4">We're seeing the emergence of truly global teams that bring diverse perspectives and experiences to bear on complex problems. However, this also requires new approaches to cultural integration, time zone management, and equitable compensation across different markets.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">7. Emphasis on Digital Wellness</h2>
        <p class="mb-4">As the line between work and home blurs, organizations are recognizing the importance of digital wellness—practices and tools that help employees maintain healthy boundaries and avoid burnout in always-connected environments.</p>
        <p class="mb-4">This includes everything from "right to disconnect" policies to AI tools that can detect signs of digital fatigue and suggest breaks. Companies are investing in training that helps employees develop healthy remote work habits and providing resources for mental health support tailored to remote work challenges.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">8. The Evolution of Leadership for Remote Teams</h2>
        <p class="mb-4">Leading remote teams requires different skills than leading co-located teams. The most effective remote leaders excel at communication, trust-building, and creating clarity without the benefit of physical presence.</p>
        <p class="mb-4">We're seeing a shift away from command-and-control leadership toward more coaching and mentoring approaches. Remote leaders need to be intentional about creating connection, providing regular feedback, and ensuring team members feel seen and valued despite physical distance.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">9. Increased Focus on Outcomes Over Hours</h2>
        <p class="mb-4">Without the ability to physically see who's working, organizations are being forced to shift from measuring inputs (hours worked) to measuring outputs (results achieved). This is leading to more flexible work arrangements and a focus on what actually matters—business impact.</p>
        <p class="mb-4">This shift requires clear goal-setting, regular check-ins focused on progress rather than activity, and trust that employees will manage their time effectively. The payoff is a more engaged workforce that has the flexibility to work when and how they're most productive.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">10. Technology-Enhanced Remote Onboarding</h2>
        <p class="mb-4">Onboarding new employees remotely presents unique challenges, but technology is making it easier to create engaging and effective remote onboarding experiences. From virtual reality office tours to AI-powered mentorship matching, companies are getting creative about welcoming new team members from afar.</p>
        <p class="mb-4">The most successful remote onboarding programs combine structured learning with opportunities for social connection, ensuring new hires feel integrated into the team culture despite physical distance. This investment in effective onboarding pays dividends in employee retention and engagement.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Looking Ahead: The Future of Work is Flexible</h2>
        <p class="mb-4">The future of work isn't about choosing between remote and in-person—it's about creating flexible systems that allow teams to work in the ways that make them most effective. The trends we're seeing today point toward a more human-centered approach to work, one that values flexibility, autonomy, and results over rigid structures and presenteeism.</p>
        <p class="mb-4">As we continue to navigate this transformation, the organizations that thrive will be those that remain adaptable, prioritize employee experience, and leverage technology to enhance rather than replace human connection. The remote work revolution is just getting started, and the possibilities are endless.</p>
      `
    },
    {
      title: "Building a Data-Driven Culture in Your Organization",
      excerpt: "Learn how to foster a culture where decisions are backed by data and insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Analytics",
      date: "Nov 5, 2025",
      readTime: "6 min read",
      author: "Thomas Gaye",
      authorImage: "/assets/founders/thomas-gaye.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">The Data-Driven Transformation: Beyond Dashboards and Reports</h2>
        <p class="mb-4">In today's business landscape, every organization claims to be data-driven. But真正 building a data-driven culture goes far beyond implementing analytics tools and creating dashboards. It requires a fundamental shift in how decisions are made, how success is measured, and how organizations learn and adapt. As a founder building a new startup in 2025, I'm discovering what separates companies that merely use data from those that truly live and breathe it from day one.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">1. Start with Leadership Commitment</h2>
        <p class="mb-4">Data-driven culture starts at the top. When leaders consistently ask "What does the data say?" before making decisions, they set a powerful example that cascades throughout the organization. This isn't just about requesting reports—it's about demonstrating a willingness to be guided by data, even when it challenges long-held assumptions.</p>
        <p class="mb-4">I've seen organizations where executives would make decisions based on gut feeling and then ask the data team to find supporting evidence. True data-driven leadership works the other way around: examine the data first, then apply business judgment and experience to interpret and act on the insights.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">2. Democratize Data Access and Literacy</h2>
        <p class="mb-4">A data-driven culture can't exist if data is locked away in silos, accessible only to specialized analysts. Every team member should have access to the data they need to make informed decisions in their role. This requires investing in user-friendly analytics tools and, more importantly, in data literacy training.</p>
        <p class="mb-4">As a new startup, FusionCell is building our "data champion" program from the ground up, where team members from different departments receive specialized training and then serve as data literacy resources for their colleagues. This peer-to-peer approach is proving more effective than traditional top-down training programs.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">3. Focus on Questions, Not Just Answers</h2>
        <p class="mb-4">Many organizations focus on building dashboards that answer predetermined questions. The truly data-driven organizations focus on empowering people to ask better questions. This means creating systems that allow for exploratory analysis and hypothesis testing, not just reporting on predefined metrics.</p>
        <p class="mb-4">Encourage your teams to start with "What if..." questions and use data to explore possibilities. This mindset shift from reporting to exploration is what drives innovation and continuous improvement.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">4. Embrace Experimentation and A/B Testing</h2>
        <p class="mb-4">Data-driven organizations understand that not every decision can be made based on historical data alone. They create systems for controlled experimentation to learn what works in practice. This could be A/B testing website changes, pilot programs for new processes, or controlled rollout of new features.</p>
        <p class="mb-4">The key is creating a culture where experiments are valued regardless of outcome. Failed experiments provide valuable data that prevents larger mistakes down the line. Celebrate the learning that comes from well-designed experiments, not just the successful ones.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">5. Establish Clear Data Governance</h2>
        <p class="mb-4">Data democratization doesn't mean data chaos. Successful data-driven organizations establish clear governance frameworks that define data ownership, quality standards, and usage policies. This ensures that as more people access and use data, they're working with consistent, reliable information.</p>
        <p class="mb-4">Good data governance balances accessibility with control. It should enable rather than restrict data use, providing clear guidelines that help people use data effectively and responsibly.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">6. Connect Data to Business Outcomes</h2>
        <p class="mb-4">Data for its own sake is meaningless. The most effective data-driven organizations constantly connect data insights to business outcomes. This means creating clear line-of-sight from metrics to business results and regularly communicating these connections throughout the organization.</p>
        <p class="mb-4">When team members understand how their data-driven decisions impact business results, they're more motivated to use data effectively. Make the connection between data and value explicit in every discussion and presentation.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">7. Invest in the Right Tools and Infrastructure</h2>
        <p class="mb-4">While culture is paramount, the right tools and infrastructure are essential enablers. This doesn't mean buying the most expensive analytics platform—it means investing in systems that match your organization's maturity level and specific needs.</p>
        <p class="mb-4">Start with tools that address your most critical data challenges and build from there. The best data infrastructure is one that people actually use and that scales with your organization's growing data capabilities.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">8. Create Feedback Loops</h2>
        <p class="mb-4">Data-driven cultures thrive on feedback loops that connect decisions to outcomes and back to new data. This means implementing systems to track the results of data-driven decisions and using those results to refine future decision-making processes.</p>
        <p class="mb-4">Regular retrospectives that examine both the data used and the outcomes achieved help organizations continuously improve their data-driven decision-making capabilities.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">9. Recognize and Reward Data-Driven Behavior</h2>
        <p class="mb-4">What gets rewarded gets repeated. Recognize and celebrate examples of effective data-driven decision-making at all levels of the organization. This could be through formal awards, case studies shared internally, or simply acknowledging good practices in team meetings.</p>
        <p class="mb-4">When people see that data-driven approaches are valued and rewarded, they're more likely to adopt these behaviors in their own work.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">10. Be Patient and Persistent</h2>
        <p class="mb-4">Building a data-driven culture is a marathon, not a sprint. It requires consistent effort over months and years, with setbacks along the way. The key is persistence—continuing to reinforce data-driven practices even when it's challenging or when old habits creep back in.</p>
        <p class="mb-4">Measure your progress not just in metrics and dashboards, but in changes in behavior, decision-making quality, and business outcomes. Celebrate small wins and use them as momentum for continued transformation.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">The Data-Driven Advantage</h2>
        <p class="mb-4">Organizations that successfully build data-driven cultures gain a significant competitive advantage. They make better decisions, innovate faster, and adapt more quickly to changing market conditions. But the benefits go beyond business performance—data-driven cultures tend to be more transparent, meritocratic, and engaging places to work.</p>
        <p class="mb-4">The journey to becoming truly data-driven is challenging, but the rewards are substantial. By focusing on these ten strategies, you can build a culture where data isn't just used—it's woven into the fabric of how your organization operates and succeeds.</p>
      `
    }
  ]

  const openArticle = (article: any) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <section id="blog" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-purple-400 font-medium mb-2">Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto flex items-center gap-1">
              View all articles <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openArticle(article)}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedArticle && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={closeModal}
          article={selectedArticle}
        />
      )}
    </section>
  )
}
