import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-white font-bold text-xl">
              Autera
            </Link>
            <p className="text-muted text-base">
              Transforming small businesses with AI-powered automation solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#services" className="text-base text-muted hover:text-primary">
                      Loyalty Programs
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-base text-muted hover:text-primary">
                      Appointment Scheduling
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-base text-muted hover:text-primary">
                      Inventory Management
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-base text-muted hover:text-primary">
                      Customer Service Chatbots
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#process" className="text-base text-muted hover:text-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-base text-muted hover:text-primary">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-base text-muted hover:text-primary">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-muted hover:text-primary">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-surface pt-8">
          <p className="text-base text-muted xl:text-center">
            &copy; {new Date().getFullYear()} Autera, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
