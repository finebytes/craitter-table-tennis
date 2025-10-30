import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the action? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border shadow-[var(--shadow-soft)] animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Craiter Community Center<br/>123 Paddle Street, Craiter</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@craitter.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary text-primary-foreground shadow-[var(--shadow-medium)] animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">Ready to Play?</h3>
            <p className="mb-8 text-primary-foreground/90 leading-relaxed">
              Join our vibrant community of table tennis enthusiasts. Whether you're a complete beginner or a seasoned pro, there's a place for you at Craitter.
            </p>
            <div className="space-y-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Membership Benefits</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Unlimited access during open hours</li>
                  <li>• Free coaching sessions for beginners</li>
                  <li>• Tournament entry discounts</li>
                  <li>• Equipment storage</li>
                  <li>• Community events and socials</li>
                </ul>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full text-lg font-semibold"
              >
                Become a Member
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
