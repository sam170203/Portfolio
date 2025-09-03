import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mudgalsaksham@gmail.com",
      href: "mailto:mudgalsaksham@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "sam170203",
      href: "https://github.com/sam170203",
      color: "text-secondary"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/saksham-mudgal",
      color: "text-accent"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-9818027255",
      href: "tel:+919818027255",
      color: "text-success"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "text-warning"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface-variant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a great conversation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={contact.label}
                    className="p-6 hover-lift bg-card shadow-portfolio transition-all duration-300"
                  >
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center group ${contact.href === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className={`p-3 rounded-lg mr-4 bg-muted group-hover:scale-110 transition-transform duration-300`}>
                        <div className={contact.color}>
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className={`font-medium ${contact.color} group-hover:underline`}>
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow developers and tech enthusiasts. Whether you're looking 
                  for a dedicated developer, have an interesting project in mind, or want to chat about 
                  AI/ML and technology trends, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:mudgalsaksham@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href="https://linkedin.com/in/saksham-mudgal" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-card/50 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Open to:</strong> Full-time opportunities, internships, freelance projects, 
                    and collaborative research in AI/ML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;