import { motion, useInView } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useRef } from "react";
import { ChevronRight, Users } from "lucide-react";
import pic1 from "@/assets/csd-team-members/1.jpeg";
import pic2 from "@/assets/csd-team-members/2.jpeg";
import pic3 from "@/assets/csd-team-members/3.jpeg";
import pic4 from "@/assets/csd-team-members/4.jpeg";
const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
const teamMembers = [
  {
    name: "Dr. Amer Aseery",
    role: "Supply Chain Expert | Projects & Training Specialist",
    image: pic1,
  },
  {
    name: "Mr. Thamer Al-Khaldi",
    role: "PR & Stakeholder Relations Manager, 20 Years of Experience (Ex-GE & TÜV)",
    image: pic2,
  },
   {
    name: "Mr. Sami Hathot",
    role: "30+ Years Experience | Support Services & Maintenance | Project Preparation Specialist | SABIC",
    image: pic3,
  },
   {
    name: "Mr. Saleh Al Ghamdi",
    role: "25+ Years Experience | Electrical Maintenance & Supervision Expert | SABIC",
    image: pic4,
  },
];

const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // 3 cards per row for large screens
  const rows = chunkArray(teamMembers, 3);
  
  return (
    <section id="team" className="py-24 bg-darker-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">فريقنا</span>
          <div className="flex items-center gap-2 my-4 chevron-accent">
            <ChevronRight className="w-8 h-8" />
            <ChevronRight className="w-8 h-8 -ml-4 opacity-70" />
            <ChevronRight className="w-8 h-8 -ml-4 opacity-40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-12">OUR TEAM</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="gold-border-card p-12 max-w-4xl mx-auto"
        >
          <Users className="w-20 h-20 text-gold mx-auto mb-8 opacity-50" />
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-1 rounded-xl flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full border-4 border-primary object-cover mb-4"
                />
                <h5 className="font-bold text-lg mb-1">{member.name}</h5>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
         
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
