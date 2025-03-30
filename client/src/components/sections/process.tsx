import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Clipboard, Code, TrendingUp } from "lucide-react";

interface Process {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const processes: Process[] = [
    {
      title: "Needs Analysis",
      description: "We identify your specific business challenges and automation opportunities.",
      icon: <Search className="h-8 w-8" />,
    },
    {
      title: "Custom Solution Design",
      description: "We develop tailored AI systems that integrate with your existing operations.",
      icon: <Clipboard className="h-8 w-8" />,
    },
    {
      title: "Implementation",
      description: "We deploy and integrate AI tools seamlessly with minimal disruption.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Ongoing Optimization",
      description: "We continuously improve your AI systems based on performance data.",
      icon: <TrendingUp className="h-8 w-8" />,
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
    <section className="py-12 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Process
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            How We Implement AI Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            Our streamlined approach ensures that you get custom AI solutions without complexity.
          </p>
        </motion.div>

        <div className="mt-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="relative"
          >
            <div className="hidden md:block absolute top-12 w-full border-t-2 border-gray-800"></div>
            <div className="flex flex-wrap justify-around">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative flex flex-col items-center mb-8 md:mb-0"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary mb-4 z-10">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{process.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground text-center max-w-xs">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
