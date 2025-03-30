import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StarRating } from "@/components/ui/star-rating";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  quote: string;
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Owner",
      company: "Sunrise Cafe",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"The AI loyalty program has increased our customer return rate by 40%. Our customers love the personalized recommendations and offers they receive.\""
    },
    {
      name: "James Wilson",
      role: "Manager",
      company: "Urban Barber Shop",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"The appointment scheduling system is amazing. We've reduced no-shows by 75% and our stylists love that their schedules are optimized.\""
    },
    {
      name: "Olivia Martinez",
      role: "Owner",
      company: "Coastal Boutique",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"Their inventory management AI has saved us countless hours and prevented stockouts. It's like having a full-time inventory specialist who never sleeps.\""
    }
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
    <section className="py-12 bg-background" id="testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted mx-auto">
            Discover how our AI solutions have transformed small businesses like yours.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-surface rounded-lg shadow-sm p-6 border border-gray-800 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-muted">
                    {testimonial.company}, {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-muted italic">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
