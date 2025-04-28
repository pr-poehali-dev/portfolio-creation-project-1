import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Привет! Я <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Динар</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
                  Лох Сигма
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                  Профессиональный разработчик с опытом создания современных веб-приложений. 
                  Специализируюсь на фронтенд-разработке с использованием новейших технологий.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/projects">
                      Мои проекты
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      Связаться со мной
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent to-primary/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/c7b48e88-eb3a-4c12-b0c7-d80ea041a3a8.png" 
                    alt="Динар" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Мои навыки</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm border">
                <Code className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Разработка</h3>
                <p className="text-muted-foreground">
                  Создаю современные веб-приложения с использованием React, TypeScript и других передовых технологий.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm border">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Документация</h3>
                <p className="text-muted-foreground">
                  Разрабатываю подробную техническую документацию для проектов, обеспечивая понимание и поддержку кода.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm border">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Оптимизация</h3>
                <p className="text-muted-foreground">
                  Улучшаю производительность существующих приложений, сокращая время загрузки и улучшая пользовательский опыт.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Избранные проекты</h2>
              <Button asChild variant="outline">
                <Link to="/projects">Все проекты</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} 
                      alt={`Проект ${item}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Проект {item}</h3>
                    <p className="text-muted-foreground mb-4">
                      Краткое описание проекта, технологии и результаты.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-accent">
                      <Link to={`/projects/${item}`}>
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-accent to-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы работать вместе?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Если у вас есть проект, над которым мы могли бы поработать вместе, или если у вас есть вопросы, не стесняйтесь связаться со мной.
            </p>
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
              <Link to="/contact">
                Связаться со мной
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;