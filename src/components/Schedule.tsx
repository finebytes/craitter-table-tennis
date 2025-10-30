import { Card } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const Schedule = () => {
  const sessions = [
    { day: "Monday & Wednesday", time: "6:00 PM - 9:00 PM", type: "Open Play" },
    { day: "Tuesday & Thursday", time: "7:00 PM - 9:00 PM", type: "Training Sessions" },
    { day: "Friday", time: "6:00 PM - 10:00 PM", type: "Club Night" },
    { day: "Saturday", time: "2:00 PM - 6:00 PM", type: "Weekend Tournament" },
    { day: "Sunday", time: "10:00 AM - 2:00 PM", type: "Family Sessions" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Training Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect time to play. All levels welcome!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {sessions.map((session, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:translate-x-2 border-border bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{session.day}</h3>
                      <p className="text-muted-foreground">{session.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:ml-auto">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-card-foreground">{session.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
