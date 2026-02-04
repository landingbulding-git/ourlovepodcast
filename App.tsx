import React, { useState } from 'react';
import { Star, Play, ChevronDown, ChevronUp, Bolt, Sparkles, Smile, StickyNote, Info, Loader2 } from 'lucide-react';

// --- Components ---

const Button = ({
  children,
  variant = 'solid',
  href,
  className = ''
}: {
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  href?: string;
  className?: string
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 text-base min-w-[12em] cursor-pointer";
  const variants = {
    solid: "bg-brand-pink text-white hover:bg-[#d93695] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 shadow-md focus:outline-none focus:ring-4 focus:ring-brand-pink/50 focus:ring-offset-2",
    outline: "bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-light hover:border-[#d93695] hover:text-[#d93695] focus:outline-none focus:ring-4 focus:ring-brand-pink/50 focus:ring-offset-2"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : {};

  return (
    // @ts-ignore
    <Component
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

const Section = ({ children, className = '', id }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 overflow-x-hidden ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-3xl p-8 md:p-12 lg:p-14 shadow-xl border border-gray-200 w-full overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ icon, text, variant = 'solid' }: { icon: React.ReactNode; text: string; variant?: 'solid' | 'outline' }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs md:text-sm font-sans uppercase tracking-wide mb-6 ${
    variant === 'outline' 
      ? 'border border-brand-pink text-brand-pink bg-transparent' 
      : 'bg-brand-light text-brand-dark'
  }`}>
    <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
    {text}
  </div>
);

const AccordionItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white backdrop-blur-sm border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-pink/30 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left p-6 md:p-8 group"
      >
        <h3 className="font-serif text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-pink transition-colors pr-8 leading-snug">
          {question}
        </h3>
        <div className={`transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-brand-pink' : 'text-gray-400'}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="text-brand-dark/80 text-base md:text-lg leading-relaxed px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100">
            <div className="pt-6">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpotifyFacade = ({ episodeUrl, title }: { episodeUrl: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const episodeId = episodeUrl.match(/episode\/([a-zA-Z0-9]+)/)?.[1] || '';
  const embedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`;

  const handleLoadStart = () => {
    setIsLoading(true);
    setIsLoaded(true);
  };

  // Prefetch on hover for faster loading
  const handleMouseEnter = () => {
    if (!isLoaded && !isLoading) {
      // Start DNS lookup and connection
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = embedUrl;
      document.head.appendChild(link);
    }
  };

  if (isLoaded) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-lg min-h-[152px] bg-gray-900 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-10 h-10 text-green-500 animate-spin" />
              <p className="text-white text-sm font-semibold">Loading Spotify player...</p>
            </div>
          </div>
        )}
        <iframe
          style={{ borderRadius: '16px', display: 'block', minHeight: '152px' }}
          src={embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          title={title}
          className="w-full"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <button
      onClick={handleLoadStart}
      onMouseEnter={handleMouseEnter}
      className="w-full rounded-2xl overflow-hidden shadow-lg min-h-[152px] bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group relative"
      aria-label={`Play ${title}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
          <Play className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-sm font-semibold opacity-90">{title}</p>
      </div>
    </button>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center font-sans text-brand-dark scroll-smooth overflow-x-hidden" style={{ backgroundImage: "url('https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/background.webp')" }}>

      <main id="top" className="pt-16 md:pt-24 pb-20 w-full overflow-x-hidden">
        
        {/* Hero Section */}
        <Section className="text-center !pt-0">
          <div>
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-semibold text-brand-dark">Loved by 500+ couples</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
              The Podcast That Tells<br />Your Love Story
            </h1>
            <p className="text-xl md:text-2xl text-brand-dark/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              Surprise your partner with a hilarious, studio-quality episode narrated from your memories.
            </p>
            <p className="text-brand-pink font-bold text-xl mb-10 flex items-center justify-center gap-2">
              <Bolt className="w-5 h-5" />
              Delivered in just 24 hours
            </p>

            {/* Pricing with stronger emphasis */}
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-sm uppercase tracking-wide text-brand-dark/60 mb-2 font-semibold">Limited Time Offer</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark">$74.99</h3>
                  <span className="text-gray-400 line-through text-2xl md:text-3xl">$93.75</span>
                </div>
                <span className="inline-flex items-center gap-1 bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  Save 20% Today
                </span>
              </div>
            </div>

            {/* Single, Strong CTA */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <Button href="https://tally.so/r/obRMGO" className="text-lg !px-10 !py-4 shadow-lg hover:shadow-xl transform hover:scale-105">
                Create My Podcast Episode
              </Button>
              <a href="#how-it-works" className="text-brand-pink font-semibold hover:underline flex items-center gap-1">
                See How It Works <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Indicators - Better Layout */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark mb-1">100% Money-Back Guarantee</p>
                    <p className="text-sm text-brand-dark/70 leading-relaxed">
                      If your loved one doesn't laugh or cry by the end, we'll refund you completely. No questions asked.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                    <Bolt className="w-6 h-6 text-brand-pink" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark mb-1">Delivered in 24 Hours</p>
                    <p className="text-sm text-brand-dark/70 leading-relaxed">
                      Order today, receive your beautiful custom podcast episode by tomorrow. Perfect for last-minute gifts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Podcast Examples Section */}
        <Section className="!py-8 md:!py-12">
          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark mb-2">
                Listen to Real Love Stories
              </h2>
              <p className="text-brand-dark/70 text-sm md:text-base">
                Swipe to explore more episodes
              </p>
            </div>
            
            {/* Horizontal Scrollable Container */}
            <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
            }}>
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <div className="flex gap-4 md:gap-6 px-4 md:px-6 pb-4" style={{ width: 'max-content' }}>
                {[
                  { url: 'https://open.spotify.com/episode/4ErSWLFukdmhWrUcZbslYp?si=9fFF8l8lQiqaBeKAnrTPlg', title: 'Love at First Coffee' },
                  { url: 'https://open.spotify.com/episode/7DAN9RFVeY3seKPsg3a5uI?si=BXWICc6iSdai1ijQb9PbPA', title: 'From Roommates to Soulmates' },
                  { url: 'https://open.spotify.com/episode/3m5S113rBPmJOwfjWRfMpg?si=7IPy1TzoTIWbBp5IGS59Zw', title: 'The Park Bench Proposal' },
                  { url: 'https://open.spotify.com/episode/4bOvJBvpMBUkMXbxaYGug0?si=gq9GZD6oSd66_cYXW28y4g', title: 'Dance Floor Romance' },
                  { url: 'https://open.spotify.com/episode/6eyrSqLiWtRxzkC9znAMuP?si=MyGXqPmOQLeXWDkfqExcqQ', title: 'Across the Ocean Love' },
                ].map((episode, index) => (
                  <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]">
                    <SpotifyFacade episodeUrl={episode.url} title={episode.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Testimonial 1 */}
        <Section>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-8 items-center w-full">
              <div>
                <Badge icon={<Star className="w-3 h-3 fill-current text-yellow-400" />} text="Real Story" />
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark leading-tight">
                  "First time I could impress him with a romantic gift"
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-brand-dark/80">
                  I was skeptical about whether he'd like this. I've tried a few things in the past and usually nothing beats a good bottle of whiskey for him. But he actually loved it. We both did! It was really our story, and the way they talked about us was just sooo enjoyable to listen to.
                </p>
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                  <div>
                    <p className="font-bold text-brand-dark">Sarah M.</p>
                    <p className="text-sm text-brand-dark/60">Together 4 years • Portland, OR</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <Button href="https://tally.so/r/obRMGO">Create My Podcast Episode</Button>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src="https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/firstreview.webp"
                  alt="Happy couple"
                  width="350"
                  height="350"
                  className="absolute inset-0 w-full h-full object-cover max-w-full"
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* Testimonial 2 */}
        <Section>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-8 items-center w-full">
              <div>
                <Badge icon={<Star className="w-3 h-3 fill-current text-yellow-400" />} text="Real Story" />
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark leading-tight">
                  "It's amazing how they got our story so right just from those few questions"
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-brand-dark/80">
                  I really want to thank the team for our episode. Nathan loved it, and trust me, he's not the kind of guy who pretends to like something just to be nice. There are so many cliché gifts out there, but this is gold. We've had a tough time lately and hearing our story reframed like this made us both so emotional and proud of what we've been through. Thanks again.
                </p>
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                  <div>
                    <p className="font-bold text-brand-dark">Jessica & Nathan</p>
                    <p className="text-sm text-brand-dark/60">Together 7 years • Austin, TX</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <Button href="https://tally.so/r/obRMGO">Create My Podcast Episode</Button>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src="https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/secondreview.webp"
                  alt="Happy couple"
                  width="350"
                  height="350"
                  className="absolute inset-0 w-full h-full object-cover max-w-full"
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* Info & Audio Section */}
        <Section>
          <Card className="!p-10 md:!p-14">
            <div className="text-center max-w-4xl mx-auto">
              <Badge icon={<Play className="w-3 h-3" />} text="Hear The Magic" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-brand-dark leading-tight">
                More Than a Gift—<br />A Memory You'll Replay Forever
              </h2>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-10 text-brand-dark/80 text-left md:text-center">
                <p>
                  Traditional gifts get used once and forgotten. But a custom podcast episode? <strong className="text-brand-dark">It becomes the soundtrack to your relationship.</strong>
                </p>
                <p>
                  Our team brings your story to life with warmth, humor, and genuine emotion. Let's laugh together at your inside jokes, celebrate your milestones, and capture what makes your relationship beautifully yours.
                </p>
              </div>

              <div className="flex justify-center">
                <Button href="https://tally.so/r/obRMGO" className="shadow-lg">Create My Podcast Episode</Button>
              </div>
            </div>
          </Card>
        </Section>

        {/* How It Works Section */}
        <Section id="how-it-works">
          <Card>
            <div className="w-full">
              <div className="flex flex-col justify-center">
                <Badge icon={<StickyNote className="w-3 h-3" />} text="Simple Process" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-brand-dark leading-tight">
                  How Your Story Becomes a Podcast
                </h2>

                <div className="space-y-10">
                  {/* Step 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-full flex items-center justify-center border-2 border-brand-pink/20">
                      <span className="font-serif text-2xl font-bold text-brand-pink">1</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-brand-dark">Share Your Story</h3>
                      <p className="text-brand-dark/80 leading-relaxed">
                        Tell us your story through a quick, fun questionnaire. Share your favorite moments and inside jokes. <strong>More details = more magic!</strong>
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-full flex items-center justify-center border-2 border-brand-pink/20">
                      <span className="font-serif text-2xl font-bold text-brand-pink">2</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-brand-dark">We Create Your Episode</h3>
                      <p className="text-brand-dark/80 leading-relaxed">
                        Our team transforms your memories into a polished 7-10 minute podcast. <strong>Authentic storytelling meets studio quality.</strong>
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-full flex items-center justify-center border-2 border-brand-pink/20">
                      <span className="font-serif text-2xl font-bold text-brand-pink">3</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-brand-dark">Delivered in 24 Hours</h3>
                      <p className="text-brand-dark/80 leading-relaxed">
                        We'll send you a beautiful page featuring your podcast and custom album cover. Listen together or download to keep forever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Milestones Section */}
        <Section>
          <div>
            <div className="text-center mb-12">
              <Badge icon={<span className="text-brand-pink text-lg">♥</span>} text="Perfect For" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
                Perfect for Every<br />Relationship Milestone
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Anniversaries', img: 'https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/anniversary.webp', text: 'Give a memory that keeps your whole story alive forever, not just another gift that gets forgotten.' },
                { title: "Valentine's Day", img: 'https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/valentine.webp', text: 'Skip the cliché chocolates and flowers. Give something that shows how much you truly love them.' },
                { title: 'Long-Distance Love', img: 'https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/long+distance.webp', text: 'Feel close even when miles apart. Listen together or separately when you miss each other.' },
                { title: 'Just Because', img: 'https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/justbc.webp', text: 'The best surprises are unexpected. Remind them why you love them on any random day.' },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-pink/30 transition-all duration-300 w-full">
                  <div className="h-56 overflow-hidden relative w-full">
                    <img src={item.img} alt={item.title} width="384" height="224" className="w-full h-full object-cover max-w-full transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                    <p className="text-base text-brand-dark/80 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Features / Differences Section */}
        <Section>
          <Card className="bg-gradient-to-br from-white to-brand-light/20">
            <div className="text-center mb-12">
              <Badge icon={<Sparkles className="w-3 h-3" />} text="Why Choose Us" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
                What Makes This Different?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 md:p-10 rounded-2xl flex flex-col items-center text-center h-full border-2 border-brand-pink/10 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-brand-light to-brand-pink/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-pink mb-6 shadow-md">
                  <Bolt className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-brand-dark">Lightning-Fast Delivery</h3>
                <p className="text-brand-dark/80 leading-relaxed">No waiting weeks for your gift. Order today and receive your custom episode in just 24 hours.</p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl flex flex-col items-center text-center h-full border-2 border-brand-pink/10 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-brand-light to-brand-pink/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-pink mb-6 shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-brand-dark">Truly One-of-a-Kind</h3>
                <p className="text-brand-dark/80 leading-relaxed">Your story is unique. No one else in the world will have this exact same gift. It's special just for you two.</p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl flex flex-col items-center text-center h-full border-2 border-brand-pink/10 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-brand-light to-brand-pink/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-pink mb-6 shadow-md">
                  <Smile className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-brand-dark">Funny & Heartfelt</h3>
                <p className="text-brand-dark/80 leading-relaxed">Guaranteed to make you laugh or cry happy tears. If not, we'll refund you 100%. No questions asked.</p>
              </div>
            </div>
          </Card>
        </Section>

        {/* Pricing Section */}
        <Section>
          <div className="text-center">
            <Badge icon={<Sparkles className="w-3 h-3" />} text="Limited Time Offer" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 max-w-3xl mx-auto leading-tight text-brand-dark">
              You Say "I Love You" All The Time.<br />Now Tell Them WHY.
            </h2>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-white to-brand-light/30 rounded-3xl border-2 border-brand-pink/20 p-10 md:p-12 mb-8 max-w-3xl mx-auto shadow-xl">
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-4 mb-3">
                  <h3 className="text-6xl md:text-7xl font-serif font-bold text-brand-dark">$74.99</h3>
                  <span className="text-3xl text-gray-400 line-through">$93.75</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-brand-pink text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                  Save 20% Today
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-brand-dark">Complete Custom Podcast Package</h3>
                <p className="text-brand-dark/70 text-lg">One-time payment. No hidden costs. Ready in 24 hours.</p>
              </div>

              <div className="mb-8">
                <Button href="https://tally.so/r/obRMGO" className="text-lg !px-12 !py-4 shadow-lg">
                  Create My Podcast Episode
                </Button>
              </div>

              {/* What's Included */}
              <h3 className="font-serif text-xl font-bold mb-6 text-center text-brand-dark">What's Included</h3>
              <ul className="space-y-4 text-left">
                {[
                  { title: "7-12 Minute Custom Episode", text: "Professional audio storytelling crafted just for you two" },
                  { title: "Professional Scriptwriting", text: "Our writers transform your memories into an engaging narrative" },
                  { title: "Studio-Quality Production", text: "Sounds like a real podcast you'd hear on Spotify or Apple" },
                  { title: "24-Hour Delivery", text: "Order today, receive your beautiful episode tomorrow" },
                  { title: "Custom Album Cover", text: "Beautiful artwork to match your unique love story" },
                  { title: "Yours Forever", text: "Download and replay as many times as you want" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-pink/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-brand-pink text-lg">✓</span>
                    </span>
                    <p className="text-brand-dark/90">
                      <span className="font-bold text-brand-dark">{item.title}:</span> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scarcity Note - Improved */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-6 mb-8 text-left flex gap-4 max-w-3xl mx-auto items-start shadow-sm">
              <Info className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-amber-900 text-base leading-relaxed">
                  <span className="font-bold">Quality over quantity:</span> We limit orders to ensure every episode gets the attention it deserves. When capacity is full, new orders join our waitlist at the regular price of <span className="font-bold">$93.75</span>. Lock in your <span className="font-bold">20% discount</span> today.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section>
          <div>
            <div className="text-center mb-12">
              <Badge icon={<Info className="w-3 h-3" />} text="FAQ" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark leading-tight mb-4">
                Your Questions Answered
              </h2>
              <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                Everything you need to know about creating your custom podcast episode
              </p>
            </div>
            <div className="space-y-3 max-w-4xl mx-auto">
              <AccordionItem
                question="What information do I need to provide?"
                answer="You'll fill out a fun questionnaire about your relationship: how you met, favorite memories, inside jokes, and special moments. The more details, the richer your episode!"
              />
              <AccordionItem
                question="Can I really get it in 24 hours?"
                answer="Absolutely! We prioritize fast turnaround without sacrificing quality. Order by midnight and have it in your inbox the next day."
              />
              <AccordionItem
                question="Do I need to ask for revisions?"
                answer="You don't have to worry about revisions because our team checks your episode multiple times at every step to ensure perfection. We review everything closely and fix every detail ourselves before delivery."
              />
              <AccordionItem
                question="Is this for any couple?"
                answer="Yes! Whether you've been together three months or thirty years, every relationship has stories worth celebrating. We tailor the tone to match your vibe."
              />
              <AccordionItem
                question="What technology do you use?"
                answer="We use the latest AI technology combined with human expertise to create a professional podcast for you. Our team carefully guides every step to ensure your story sounds perfect and authentically human in a way technology alone cannot achieve."
              />
              <AccordionItem
                question="Is my personal information and story safe?"
                answer={<span>We protect your stories with professional encryption and automatically delete your personal data from our system after two years to ensure your private memories stay safe. For more information, check our <a href="/privacypolicy" className="text-brand-pink underline hover:text-pink-600 font-semibold">Privacy Policy</a>.</span>}
              />
            </div>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section>
          <Card className="bg-gradient-to-br from-brand-light/40 to-white border-2 border-brand-pink/20">
            <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-12 items-center w-full">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden min-h-[400px] shadow-2xl w-full">
                <img
                  src="https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/lastimg.webp"
                  alt="Couple listening to podcast together"
                  width="400"
                  height="400"
                  className="absolute inset-0 w-full h-full object-cover max-w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <Badge icon={<span className="text-brand-pink">♥</span>} text="Start Your Story" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark leading-tight">
                  Ready to Create<br />Your Love Story?
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-brand-dark/80">
                  Give them a gift they'll treasure forever. <strong className="text-brand-dark">A podcast episode that captures your unique story</strong> in a way no other gift can.
                </p>

                {/* Final Pricing Display */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-200">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">$74.99</h3>
                    <span className="text-2xl text-gray-400 line-through">$93.75</span>
                  </div>
                  <p className="text-brand-pink font-bold text-lg mb-1">Save 20% — Limited Time</p>
                  <p className="text-sm text-brand-dark/60">Delivered in 24 hours • 100% Money-Back Guarantee</p>
                </div>

                <div className="flex flex-col items-start gap-4 mb-6">
                  <Button href="https://tally.so/r/obRMGO" className="text-lg !px-10 !py-4 shadow-lg w-full sm:w-auto">
                    Create My Episode Now
                  </Button>
                  <p className="text-sm text-brand-dark/70">
                    <strong>Need help?</strong> Email us anytime at <a href="mailto:hello@ourlovepodcast.com" className="text-brand-pink underline">hello@ourlovepodcast.com</a>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Footer */}
        <Section className="!py-0 pb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <img
                      src="https://cdn.gamma.app/tzl2sixgokxpy70/b2e25f6d4d954d9081b92467ac7de4b6/original/Podcast.png"
                      alt="Love Story Podcasts"
                      width="40"
                      height="40"
                      className="w-10 h-10 rounded-lg"
                    />
                    <span className="font-serif font-bold text-xl text-brand-dark">Love Story Podcasts</span>
                  </div>
                  <p className="text-sm text-brand-dark/70 leading-relaxed">
                    Creating unforgettable audio memories for couples worldwide.
                  </p>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <h3 className="font-serif font-bold text-brand-dark mb-4">Get in Touch</h3>
                  <p className="text-sm text-brand-dark/70 mb-2">Questions? We're here to help!</p>
                  <a href="mailto:hello@ourlovepodcast.com" className="text-brand-pink hover:text-pink-600 font-semibold text-sm underline">
                    hello@ourlovepodcast.com
                  </a>
                </div>

                {/* Links */}
                <div className="text-center md:text-right">
                  <h3 className="font-serif font-bold text-brand-dark mb-4">Legal</h3>
                  <div className="space-y-2">
                    <div>
                      <a href="/termsandconditions" className="text-sm text-brand-dark/70 hover:text-brand-pink transition-colors">
                        Terms & Conditions
                      </a>
                    </div>
                    <div>
                      <a href="/privacypolicy" className="text-sm text-brand-dark/70 hover:text-brand-pink transition-colors">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-200 pt-6 text-center">
                <p className="text-sm text-brand-dark/50">
                  © 2026 Love Story Podcasts. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Section>

      </main>
    </div>
  );
}