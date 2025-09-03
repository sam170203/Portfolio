import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import tcsGenAiCert from "@/assets/tcs-genai-cert.jpg";
import pandasCert from "@/assets/pandas-cert.png";
import pythonCert from "@/assets/python-cert.png";
import mlCert from "@/assets/ml-cert.png";
import sqlCert from "@/assets/sql-cert.png";

const Certifications = () => {
  const certifications = [
    {
      title: "TCS-IIT KGP GenAI Certification",
      image: tcsGenAiCert,
      link: "#",
      issuer: "TCS & IIT Kharagpur"
    },
    {
      title: "Pandas",
      image: pandasCert,
      link: "https://www.kaggle.com/learn/certification/sakshammudgal17/pandas",
      issuer: "Kaggle"
    },
    {
      title: "Python",
      image: pythonCert,
      link: "https://www.kaggle.com/learn/certification/sakshammudgal17/python",
      issuer: "Kaggle"
    },
    {
      title: "Intro to Machine Learning",
      image: mlCert,
      link: "https://www.kaggle.com/learn/certification/sakshammudgal17/intro-to-machine-learning",
      issuer: "Kaggle"
    },
    {
      title: "SQL",
      image: sqlCert,
      link: "https://www.kaggle.com/learn/certification/sakshammudgal17/intro-to-sql",
      issuer: "Kaggle"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications in AI, ML, and data science technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="group hover-lift bg-card shadow-portfolio animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                {cert.link !== "#" && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;