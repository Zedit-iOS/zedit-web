'use client';

import { ArrowDownToLine, Zap, Palette, ArrowUpFromLine } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <Image src="/zedit_logo_1024.png" alt="Zedit Logo" width={64} height={64} className="mr-2" />
            <h1 className="text-5xl font-bold text-white">EDIT</h1>
          </div>

          <p className="text-gray-300 text-lg mb-8">Smart Video Clipping with AI</p>
          
          {/* App screenshots - Asymmetric design with hover effects */}
          <div className="relative mb-14 h-72 mx-auto">
            {/* Second ss (shown first in asymmetric design) */}
            <div className="absolute right-8 top-0 w-36 h-70 bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform rotate-2 z-10 
                       hover:scale-110 hover:z-30 transition-all duration-300 ease-in-out hover:shadow-2xl">
              <Image 
                src="/ss/ss7.jpeg" 
                alt="App interface showing video clipping features"
                width={280}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* First ss (shown second in reverse order) */}
            <div className="absolute left-8 top-4 w-36 h-68 bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform -rotate-2
                       hover:scale-110 hover:z-30 transition-all duration-300 ease-in-out hover:shadow-2xl">
              <Image 
                src="/ss/ss5.jpeg" 
                alt="App main screen with editing interface"
                width={280}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Third ss (shown last in asymmetric design) */}
            <div className="absolute left-8 bottom-0 w-36 h-70 bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform rotate-2
                       hover:scale-110 hover:z-30 transition-all duration-300 ease-in-out hover:shadow-2xl">
              <Image 
                src="/ss/ss6.jpeg" 
                alt="App interface showing video editing features"
                width={280}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* App Store Button */}
          <a 
            href="#" 
            className="bg-[#0A84FF] text-white py-4 px-8 rounded-xl font-medium inline-block shadow-lg mb-8"
          >
            Download on App Store
          </a>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-12 max-w-xs mx-auto">
            <Feature icon={<Zap size={20} />} text="AI Powered" />
            <Feature icon={<Palette size={20} />} text="Smart Edits" />
            <Feature icon={<ArrowDownToLine size={20} />} text="Easy Import" />
            <Feature icon={<ArrowUpFromLine size={20} />} text="Quick Export" />
          </div>
        </div>
      </main>
      
      <footer className="text-center py-4 text-sm text-gray-500">
        <p>© 2025 Zedit. All rights reserved.</p>
      </footer>
    </div>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  text: string;
};

function Feature({ icon, text }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xs">{text}</p>
    </div>
  );
}
