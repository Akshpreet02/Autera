import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Calendar, BarChart3, MessageSquare } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services: Service[] = [
    {
      title: "Customer Loyalty Programs",
      description:
        "AI-driven loyalty cards that learn customer preferences and boost retention through personalized offers.",
      icon: <Box className="h-6 w-6" />,
      color: "bg-primary",
    },
    {
      title: "Intelligent Appointment Scheduling",
      description:
        "Automated booking systems that optimize your staff's time and reduce scheduling conflicts.",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      title: "Inventory Management",
      description:
        "Smart inventory systems that predict demand patterns and automatically reorder supplies.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-emerald-500",
    },
    {
      title: "Customer Service Chatbots",
      description:
        "24/7 AI assistants that handle customer inquiries, answer FAQs, and escalate complex issues.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-primary",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-gray-50" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Automation Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide AI-powered automation tools tailored for small businesses across
            various industries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-10"
        >
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 p-3">
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-md ${service.color} text-white`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
