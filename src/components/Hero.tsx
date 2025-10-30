import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-table-tennis.jpg";
import { ArrowRight, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Table tennis player in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Bine ați venit la <span className="text-primary">CraiTTer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Clubul tău de tenis de masă din Craiter. Unde pasiunea întâlnește paleta și fiecare meci este o aventură.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button size="lg" className="text-lg font-semibold">
              Alătură-te Clubului
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold">
              <Users className="mr-2" />
              Vizitează-ne
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
