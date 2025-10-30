import { Card } from "@/components/ui/card";
import { Trophy, Heart, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Competitive Spirit",
      description: "Regular tournaments and leagues for all skill levels, from beginners to advanced players."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "A welcoming environment where friendships are formed over shared love of the game."
    },
    {
      icon: Zap,
      title: "Modern Facilities",
      description: "Professional-grade tables and equipment in a well-maintained, energetic space."
    }
  ];

  return (
    <section className="py-20 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Our Club
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded in the heart of Craiter, we're more than just a table tennis club – we're a family of players united by our passion for the sport.
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
          <h3 className="text-3xl font-bold mb-6 text-card-foreground">Our Story</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            CraiTTer was born from a simple idea: bring the community together through the fast-paced, exhilarating sport of table tennis. Since our founding, we've grown from a small group of enthusiasts to a thriving club with members of all ages and backgrounds.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're looking to compete, stay active, or simply have fun with friends, CraiTTer is your home for table tennis in the neighborhood.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
