import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heat from "../heat.png";
import Heat2 from "../heat2.png";
import Forest from "../forest.png";
import Linear from "../lin.png";

export default function EVChargerAnalysis() {
  return (
    <div className="min-h-screen bg-[#181718] text-gray-100 font-inter">
      <header className="sticky top-0 bg-[#1c1b1c] z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-suranna text-white">EV Analyzer</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="#overview"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#analysis"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 relative z-10">
        <section id="overview" className="mb-16">
          <h2 className="text-4xl font-suranna mb-6 text-white">
            Project Overview
          </h2>
          <p className="text-l text-slate-300 leading-relaxed max-w-3xl">
            Our{" "}
            <a
              href="https://docs.google.com/presentation/d/1KQjkQKvQd5RTDRKkvGr5CflVCXZk5-AlXDZtTw_8Vz4/edit?usp=sharing"
              className="underline"
            >
              EV Charger Analysis Datathon Project{" "}
            </a>{" "}
            dives deep into the world of electric vehicle charging
            infrastructure. Using advanced data analysis techniques, we've
            uncovered fascinating insights about charger usage, distribution,
            and efficiency in our area.
          </p>
        </section>

        <section
          id="analysis"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        >
          <Card className="bg-transparent backdrop-blur-md hover:shadow-2xl hover:scale-101 shadow-xl transition-all duration-300 group hover:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-suranna text-white">
                Linear Regression Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden">
                <Image
                  src={Linear}
                  alt="Charging Session Duration Chart"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-101"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent backdrop-blur-md shadow-xl transition-all duration-300 group hover:shadow-2xl hover:scale-101">
            <CardHeader>
              <CardTitle className="text-2xl font-suranna text-white">
                Heatmap (Stations by level per State)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden">
                <Image
                  src={Heat}
                  alt="Heatmap Chart"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-101"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-transparent backdrop-blur-md shadow-xl transition-all border-none duration-300 group hover:bg-gray-800 hover:shadow-2xl hover:scale-101">
            <CardHeader>
              <CardTitle className="text-2xl font-suranna text-white">
                Heatmap (Registrations per State)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden">
                <Image
                  src={Heat2}
                  alt="Linear Regression Chart"
                  width={1200}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-101"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-transparent backdrop-blur-md hover:shadow-2xl hover:scale-101 shadow-xl transition-all duration-300 group hover:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-suranna text-white">
                Random Forest Regression Model
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="relative overflow-hidden">
                <Image
                  src={Forest}
                  alt="Monthly Charging Trends Chart"
                  width={1200}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-101"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-3xl font-suranna mb-6 text-white">Contact Us</h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Interested in learning more about our analysis or have questions?
            Get in touch with Kuldeep, Rohan, Vikranth, and Varun!
          </p>
          <Button className="bg-white text-[#181718] hover:bg-gray-200 transition-colors">
            <a
              href="https://www.linkedin.com/in/kuldeep-debnath/"
              target="_blank"
            >
              Contact Team
            </a>
          </Button>
        </section>
      </main>

      <footer className="bg-[#1c1b1c] text-gray-400 py-8 mt-16 relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Ginyu Force. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
