import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, MessageCircle, Send, Sparkles, Zap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mudgalsaksham@gmail.com",
      href: "mailto:mudgalsaksham@gmail.com",
      color: "primary",
      description: "Direct email for professional inquiries"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sam170203",
      href: "https://github.com/sam170203",
      color: "primary",
      description: "Check out my repositories and contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/saksham-mudgal",
      color: "accent",
      description: "Professional network and career updates"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9818027255",
      href: "tel:+919818027255",
      color: "success",
      description: "Available for urgent matters"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "warning",
      description: "Open to remote and local opportunities"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to <span className="text-primary font-semibold">build something amazing</span> together?{' '}
            Let's discuss <span className="text-accent font-semibold">opportunities</span>, collaborations, or just have a great conversation about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Enhanced Contact Information */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Contact Channels</h3>
                  <p className="text-muted-foreground">Multiple ways to reach out and connect</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card 
                      key={contact.label}
                      className={`card-modern group relative overflow-hidden ${
                        index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${contact.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10 p-6">
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`flex items-start gap-4 group ${
                            contact.href === '#' ? 'cursor-default' : 'cursor-pointer hover:scale-105'
                          } transition-transform duration-300`}
                        >
                          <div className={`relative group/icon`}>
                            <div className={`p-3 bg-${contact.color}/10 rounded-xl group-hover/icon:scale-110 transition-all duration-300`}>
                              <Icon className={`h-6 w-6 text-${contact.color}`} />
                            </div>
                            <div className={`absolute -inset-2 bg-${contact.color}/20 rounded-xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-muted-foreground mb-1">{contact.label}</p>
                            <p className={`font-bold text-${contact.color} group-hover:underline break-words`}>
                              {contact.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {contact.description}
                            </p>
                          </div>
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="card-modern h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                        <Sparkles className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gradient">Let's Collaborate</h3>
                      <p className="text-muted-foreground">Build the future together</p>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    I'm passionate about creating innovative solutions and am always excited to discuss new opportunities. Whether you're looking for a dedicated AI/ML developer, have an interesting project, or want to collaborate on cutting-edge technology - I'd love to hear from you!
                  </p>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="btn-modern w-full group"
                      asChild
                    >
                      <a href="mailto:mudgalsaksham@gmail.com">
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Start Conversation</span>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="btn-outline-modern w-full group"
                      asChild
                    >
                      <a href="https://linkedin.com/in/saksham-mudgal" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Connect Professionally</span>
                      </a>
                    </Button>
                  </div>

                  {/* Availability Status */}
                  <div className="mt-8 p-4 glass-dark rounded-xl border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-success">Available for Opportunities</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Open to full-time roles, internships, freelance projects, and research collaborations in AI/ML and software development
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-primary" />
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span>Open to Discuss</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;