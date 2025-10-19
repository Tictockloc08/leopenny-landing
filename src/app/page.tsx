import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Leopenny Digital Solutions - Coming Soon</title>
        <meta name="description" content="Leopenny Digital Solutions - Coming Soon" />
        <meta name="facebook-domain-verification" content="w9k6ixbdswejp3p13xze964z0d41pd" />
      </head>
      <body className="bg-black text-white overflow-hidden h-screen">
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Content */}
          <div className="text-center z-10 relative max-w-4xl px-8">
            {/* Logo Section */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                Leopenny Digital Solutions
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full animate-slide-in"></div>
            </div>
            
            {/* Coming Soon Section */}
            <div className="mb-12">
              <h2 className="text-8xl md:text-9xl font-light text-white mb-4 animate-fade-in-delay">
                Coming Soon
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto animate-fade-in-delay-2">
                We&apos;re crafting something extraordinary for you
              </p>
            </div>
            
            {/* Status Section */}
            <div className="animate-fade-in-delay-3">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-full text-lg text-gray-200 font-medium">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
                <span>Launching Soon</span>
              </div>
            </div>
          </div>
          
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 -top-48 -left-48 animate-float"></div>
            <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-3xl opacity-30 -bottom-40 -right-40 animate-float-delay"></div>
            <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float-delay-2"></div>
          </div>
        </div>
      </body>
    </html>
  )
}
