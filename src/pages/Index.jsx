import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your App</h1>
        <p className="text-lg text-muted-foreground">Your journey starts here.</p>
      </header>
      <main className="text-center mb-8">
        <p className="text-lg mb-4">This is a bare-bones application. Start building your features here.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </main>
      <footer className="text-center text-muted-foreground">
        <p>© 2023 Your App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;