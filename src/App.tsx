import React from 'react';
import { Menu, ArrowDown, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

// Project data
const featuredProjects = [
  {
    image: '/public/ADAPAZARI - FÇ APARTMANI.PNG',
    title: 'Adapazarı - Nova Apartment',
  },
  {
    image: '/public/Ekran görüntüsü 2024-07-23 182114.png',
    title: 'Sapanca kurtköy - Villa longa',
  },
  {
    image: '/public/arifiye apartment.png',
    title: 'Arifiye - Natura Vista apartment ',
  },
  {
    image: '/public/ESENGÖL SİTESİ.png',
    title: 'Esentepe - Esengöl Roof',
  },
  {
    image: '/public/NEVİYE MUTFAK.png',
    title: 'Arifiye - Natura Vista Apartment Interior',
  },
  {
    image: '/public/WhatsApp Image 2025-03-11 at 00.57.47.jpeg',
    title: 'Taç dersanesi, Sakarya',
  },
];

const constructionProjects = [
  {
    image: '/public/sapanca villa uygulama.jpg',
    title: 'Sapanca Villa Projesi',
  },
  {
    image: "/public/IMG_6741.jpg",
    title: 'Yazlık - Müstakil Ev Projesi',
  },
  {
    image: '/public/cc70966f-6a6d-4f41-ba08-ab3b1716f579.jpg',
    title: 'Esence - Müstakil Ev Projesi',
  }
];

function App() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-light tracking-widest text-black-600">X DESIGN</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-900 hover:text-blue-600">Hakkında</a>
              <a href="#projects" className="text-gray-900 hover:text-blue-600">Projeler</a>
              <a href="#construction" className="text-gray-900 hover:text-blue-600">Uygulamalar</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600">İletişim</a>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider">DESIGN × BUILD</h1>
          <p className="text-xl md:text-2xl font-light">Hayallerinizi Gerçeğe Dönüştürüyoruz</p>
          <ArrowDown className="mx-auto animate-bounce mt-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-700/20 z-10"></div>
              <img 
                src="/public/Ekran Resmi 2025-03-11 01.05.50.png" 
                alt="Berkan Yılmaz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
              X Design & Build, modern mimari tasarım ve uygulama çözümlerini bir araya getiren yenilikçi bir yapım şirketidir. Fonksiyonelliği, estetiği ve mühendislik disiplinini kusursuz bir şekilde harmanlayarak, hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.              </p>
              <p className="text-gray-700 leading-relaxed">
              Her projede kalite, sürdürülebilirlik ve teknolojiyi merkeze alarak, mimari tasarımdan anahtar teslim uygulamaya kadar uçtan uca hizmet sunuyoruz. Sahip olduğumuz uzman ekip ve ileri mühendislik çözümleri ile yapı sektörüne çağdaş ve yenilikçi bir bakış açısı kazandırıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Bizim için her proje, yalnızca bir yapı değil; yaşayan, nefes alan, insanlarla bütünleşen bir tasarım sürecidir. X Design & Build olarak, geleceğin yaşam alanlarını inşa etmeye devam ediyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Gelin, birlikte hayallerinizi inşa edelim.             
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-12 text-center text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden bg-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white text-xl font-light mb-2">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section id="construction" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-12 text-center text-gray-800">Construction Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionProjects.map((project, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden bg-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white text-xl font-light mb-2">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-12 text-center text-gray-800">İletişim</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
            <a href="mailto:berkany695@gmail.com" className="flex items-center space-x-3 group">
              <Mail className="text-gray-700 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">berkany695@gmail.com</span>
            </a>
            <a href="tel:+90 532 528 08 47" className="flex items-center space-x-3 group">
              <Phone className="text-gray-700 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">+90 532 528 08 47</span>
            </a>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:scale-110 transition-transform">
                <Instagram />
              </a>
              <a href="#" className="text-gray-700 hover:scale-110 transition-transform">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} X Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;