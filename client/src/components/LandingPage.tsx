import { useState } from 'react';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-dark">
      {/* Navigation */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary bg-yellow-200 p-2 rounded-lg shadow-lg">
              AI Task Manager
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#login" className="hover:text-primary transition-colors">Login</a>
            <a 
              href="#signup" 
              className="bg-primary hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-3 px-4">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#login" className="hover:text-primary transition-colors">Login</a>
              <a 
                href="#signup" 
                className="bg-primary hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors inline-block text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark">
            Smarter Task Management <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-600">
            Let AI prioritize and categorize your tasks to boost productivity and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#signup" 
              className="bg-primary hover:bg-blue-600 text-white py-3 px-8 rounded-md transition-colors text-center text-lg font-medium"
            >
              Get Started
            </a>
            <a 
              href="#learn-more" 
              className="bg-white hover:bg-slate-100 text-primary border border-primary py-3 px-8 rounded-md transition-colors text-center text-lg font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Right Column - Illustration */}
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="font-bold text-xl">Today's Priority Tasks</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">AI Sorted</span>
            </div>
            <div className="space-y-4">
              {[
                { text: "Complete project proposal", category: "Work", priority: "High" },
                { text: "Schedule team meeting", category: "Work", priority: "Medium" },
                { text: "Review quarterly results", category: "Work", priority: "High" },
              ].map((task, index) => (
                <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className={`h-4 w-4 rounded-full ${task.priority === 'High' ? 'bg-red-500' : 'bg-yellow-500'} mr-3`}></div>
                  <div className="flex-1">
                    <p className="font-medium">{task.text}</p>
                  </div>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">{task.category}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-primary font-medium hover:underline text-center">
              View All Tasks
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Intelligent Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Prioritization</h3>
              <p className="text-slate-600">
                Our AI algorithms analyze your tasks and automatically prioritize them based on deadline, importance, and workload.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Categorization</h3>
              <p className="text-slate-600">
                Automatically categorize your tasks into work, personal, and other custom categories based on content and context.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Productivity Insights</h3>
              <p className="text-slate-600">
                Gain valuable insights into your productivity patterns and receive suggestions for optimizing your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to boost your productivity?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who have transformed their task management with our AI-powered solution.
          </p>
          <a 
            href="#signup" 
            className="bg-white hover:bg-slate-100 text-primary py-3 px-8 rounded-md transition-colors text-center text-lg font-medium inline-block"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Task Manager</h3>
              <p className="text-slate-400">
                Smarter task management powered by AI technology to help you focus on what matters most.
              </p>
            </div>
            
            <div className="md:text-center">
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            <div className="md:text-right">
              <h4 className="text-lg font-medium mb-4">Account</h4>
              <ul className="space-y-2">
                <li><a href="#login" className="text-slate-400 hover:text-white transition-colors">Login</a></li>
                <li><a href="#signup" className="text-slate-400 hover:text-white transition-colors">Sign Up</a></li>
                <li><a href="#help" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">© {new Date().getFullYear()} AI Task Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;