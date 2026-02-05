import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center font-sans text-brand-dark flex items-center justify-center" style={{ backgroundImage: "url('https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/background.webp')" }}>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back to Home</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-200 text-center">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-light to-brand-pink/20 rounded-full mb-8 shadow-lg">
            <Heart className="w-10 h-10 text-brand-pink fill-brand-pink" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6 leading-tight">
            Thank you!<br />You're Legendary!
          </h1>

          {/* Message */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-brand-dark/80">
            <p>
              <strong className="text-brand-dark">You are all set!</strong> We are so hyped to turn your favorite memories into a studio-quality podcast episode. We are already jumping in to transform your stories into authentic storytelling.
            </p>

            <p>
              <strong className="text-brand-dark">Keep an eye on your email!</strong> We can't wait for you to hear the soundtrack to your relationship. Please make sure to check your spam or promotions folder just in case our email is hiding there!
            </p>
          </div>

          {/* Decorative Element */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-brand-dark/60">
              Questions? Reach us at{' '}
              <a href="mailto:hello@ourlovepodcast.com" className="text-brand-pink hover:text-pink-600 underline font-semibold">
                hello@ourlovepodcast.com
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
