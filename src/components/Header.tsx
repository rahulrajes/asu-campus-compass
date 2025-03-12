import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              <img
                src="https://content.sportslogos.net/logos/30/604/full/arizona_state_sun_devils_logo_alt_on_dark_20117880.png"
                alt="ASU Logo"
                className="h-20 w-auto"
              />
            </a>
            <div className="h-12 w-px bg-gray-700" />
            <h1 
              className="text-4xl font-black tracking-tight text-asu-gold" 
              style={{ fontFamily: 'Monaco, monospace' }}
            >
              CAMPUS COMPASS
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}; 