import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-primary-200">Get started with AI automation today.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
            Join hundreds of small businesses already saving time and money with our solutions.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#contact">
              <Button
                variant="secondary"
                size="lg"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Contact Us
              </Button>
            </a>
            <a href="#services" className="ml-3">
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 transition-colors duration-200"
              >
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
