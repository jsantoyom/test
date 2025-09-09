import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Smartphone, CheckCircle } from "lucide-react";

export default function Home() {
  const handleGetStarted = () => {
    console.log('Get Started button clicked');
  };

  const handleNavClick = (linkName: string) => {
    console.log('Navigation clicked:', linkName);
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-lg font-semibold text-foreground" data-testid="text-brand">
                Hola Mundo Demo
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => handleNavClick('Home')}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid="link-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('About')}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid="link-about"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('Contact')}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid="link-contact"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8 sm:p-12 lg:p-16">
              <div className="space-y-6">
                {/* Primary Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" data-testid="text-hello-world">
                  ¡Hola Mundo!
                </h1>
                
                {/* Placeholder Image */}
                <div className="flex justify-center my-8">
                  <div className="w-80 h-48 bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center" data-testid="img-placeholder">
                    <div className="text-center text-muted-foreground">
                      <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Imagen placeholder</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-primary rounded-full"></div>
                </div>
                
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-subtitle">
                  Welcome to this simple, clean, and responsive demonstration of a classic programming tradition.
                </p>
                
                {/* Call to Action */}
                <div className="pt-6">
                  <Button 
                    onClick={handleGetStarted}
                    className="inline-flex items-center px-6 py-3 text-base font-medium"
                    data-testid="button-get-started"
                  >
                    Get Started
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <Card className="hover:shadow-md transition-shadow duration-200" data-testid="card-feature-fast">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-feature-fast-title">
                  Fast Loading
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-fast-description">
                  Minimal complexity ensures lightning-fast page loads and optimal performance.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-md transition-shadow duration-200" data-testid="card-feature-responsive">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-feature-responsive-title">
                  Responsive
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-responsive-description">
                  Perfectly adapted for all screen sizes, from mobile phones to desktop displays.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-md transition-shadow duration-200" data-testid="card-feature-clean">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-feature-clean-title">
                  Clean Design
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-clean-description">
                  Simple, elegant interface following modern design principles and best practices.
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2024 Hola Mundo Demo. Built with modern web technologies.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <button 
                onClick={() => handleNavClick('Privacy Policy')}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavClick('Terms of Service')}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavClick('Support')}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-support"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
