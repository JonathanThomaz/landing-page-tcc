import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SobreProjeto } from './components/SobreProjeto';
import { Funcionalidades } from './components/Funcionalidades';
import { DemoNoticias } from './components/DemoNoticias';
import { Equipe } from './components/Equipe';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <HeroSection />
        <SobreProjeto />
        <Funcionalidades />
        <DemoNoticias />
        <Equipe />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
