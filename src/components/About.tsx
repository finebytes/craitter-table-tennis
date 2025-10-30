import { Card } from "@/components/ui/card";
import { Trophy, Heart, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Spirit Competitiv",
      description: "Turnee și ligi regulate pentru toate nivelurile de calificare, de la începători la jucători avansați."
    },
    {
      icon: Heart,
      title: "Comunitatea pe Primul Loc",
      description: "Un mediu primitor unde prieteniile se formează prin dragostea comună pentru joc."
    },
    {
      icon: Zap,
      title: "Facilități Moderne",
      description: "Mese și echipamente de calitate profesională într-un spațiu bine întreținut și energic."
    }
  ];

  return (
    <section className="py-20 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Despre Clubul Nostru
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Înființat în inima Craiter, suntem mai mult decât un simplu club de tenis de masă – suntem o familie de jucători uniți prin pasiunea noastră pentru sport.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-soft)] animate-slide-up">
          <h3 className="text-3xl font-bold mb-6 text-card-foreground">Povestea Noastră</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            CraiTTer s-a născut dintr-o idee simplă: să aducem comunitatea împreună prin sportul rapid și captivant al tenisului de masă. De la înființare, am crescut de la un mic grup de entuziaști la un club înfloritor cu membri de toate vârstele și mediile.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fie că dorești să concurezi, să rămâi activ sau pur și simplu să te distrezi cu prietenii, CraiTTer este casa ta pentru tenis de masă în cartier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
