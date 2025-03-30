import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-primary-100 border-t border-primary-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-medium text-gray-800 sm:text-4xl max-w-3xl mx-auto leading-tight">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-primary mt-2">Get started with AI automation today.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
            Join hundreds of small businesses already saving time and money with our solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto px-8 py-3 shadow-sm text-base font-normal rounded-md transition-all duration-200 hover:shadow"
              >
                Contact Us
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-3 border-primary/30 text-base font-normal rounded-md text-primary hover:bg-primary-50 transition-colors duration-200"
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
