'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { Phone, MessageCircle, Heart, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

const Header = () => (
  <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <nav className="max-w-7xl mx-auto px-4 py-4">
      {/* Main Navigation */}
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <Link href="/" className="flex flex-col">
          <span className="font-script text-3xl text-gray-800">Safe Space</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-neutral-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/resources" className="text-neutral-600 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/services" className="text-neutral-600 hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link href="/about" className="text-neutral-600 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-neutral-600 hover:text-primary transition-colors">
            Contact us
          </Link>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="tel:+1-800-XXX-XXXX">
              <Phone className="w-4 h-4 mr-2" />
              1-800-XXX-XXXX
            </a>
          </Button>
        </div>
      </div>
    </nav>
  </header>
);

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Emergency Banner */}
      <div className="bg-red-50 p-3 text-center">
        <p className="text-red-800 font-medium flex items-center justify-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          In immediate danger? Call 112 for emergency services
        </p>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Freedom from Trauma
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Healing occurs when we are able to witness our stories, limiting beliefs and fear based 
              living we inherit from the legacy of trauma with compassion.
            </p>

            {/* Support Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Chat Support */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-100">
                <div className="mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Chat Support</h3>
                <p className="mb-4 text-muted-foreground">
                  Connect with our trained counselors through secure chat for immediate support 
                  and guidance.
                </p>
                <Link href="/chat">
                  <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                    Start Chat Support
                  </Button>
                </Link>
              </div>

              {/* Voice Support */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-100">
                <div className="mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Call Support</h3>
                <p className="mb-4 text-muted-foreground">
                  Speak directly with our crisis counselors for immediate assistance 
                  and support.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="tel:+1-800-XXX-XXXX">Call 1-800-XXX-XXXX</a>
                </Button>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 mt-8">
              <h3 className="font-script text-2xl mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Initial assessment and support connection
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional counseling and guidance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ongoing support and healing journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-accent p-8 rounded-lg">
              <h3 className="font-script text-3xl mb-4">Courage</h3>
              <p className="text-muted-foreground">
                to visit the imprints of trauma, and the residual pain it evokes in our life.
              </p>
            </div>
            <div className="bg-accent p-8 rounded-lg">
              <h3 className="font-script text-3xl mb-4">Compassion</h3>
              <p className="text-muted-foreground">
                to process and heal the pain and rediscover your true-self- you are not 
                your trauma.
              </p>
            </div>
            <div className="bg-accent p-8 rounded-lg">
              <h3 className="font-script text-3xl mb-4">Wisdom</h3>
              <p className="text-muted-foreground">
                to understand your true meaning and purpose, through the journey of healing to 
                the wisdom of trauma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Safe Space Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Safe Space, our mission is deeply rooted in creating a sacred haven for 
              holistic healing, a refuge we lovingly call 'safe space.' Here, we are 
              committed to serving individuals seeking transformation through a combination of 
              science-based practices like psychotherapy and the timeless wisdom of ancient 
              healing traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-script text-2xl mb-4">Emergency Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Emergency: 112</li>
                <li>Crisis Line: 1-800-XXX-XXXX</li>
                <li>Available 24/7</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-script text-2xl mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/resources/crisis" className="text-muted-foreground hover:text-primary">Crisis Resources</Link></li>
                <li><Link href="/resources/mental-health" className="text-muted-foreground hover:text-primary">Mental Health Support</Link></li>
                <li><Link href="/resources/self-help" className="text-muted-foreground hover:text-primary">Self-Help Tools</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-script text-2xl mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about/mission" className="text-muted-foreground hover:text-primary">Our Mission</Link></li>
                <li><Link href="/about/team" className="text-muted-foreground hover:text-primary">Our Team</Link></li>
                <li><Link href="/about/partners" className="text-muted-foreground hover:text-primary">Partner Organizations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-script text-2xl mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="text-muted-foreground hover:text-primary">Accessibility</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-neutral-100">
            <p className="text-sm text-muted-foreground">
              © 2024 Safe Space. All conversations are confidential and handled by trained professionals.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;