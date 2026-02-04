import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Section = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <section className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
    {children}
  </section>
);

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center font-sans text-brand-dark" style={{ backgroundImage: "url('https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/background.webp')" }}>

      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back to Home</span>
        </a>
      </div>

      <main className="pt-24 pb-20">

        <Section>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Terms and Conditions</h1>
            <p className="text-lg text-brand-dark/70">Last Updated: January 14, 2026</p>
          </div>
        </Section>

        <Section>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 space-y-8">

            <div>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                These Terms and Conditions ("Agreement") govern the relationship between you ("Customer") and Love Story Podcasts ("Business"), headquartered in Hungary. By purchasing a custom podcast episode ("Product"), you agree to the following:
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">1. NATURE OF THE SERVICE & AI TECHNOLOGY</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Custom Digital Asset:</strong> The Product is a 7-12 minute high-fidelity narrative audio experience created to your unique specifications.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Synthetic Media Disclosure:</strong> You acknowledge that while the script is human-guided, the vocal performances and music are generated using professional-grade AI synthesis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Non-Uniqueness of AI Elements:</strong> While your specific story ("Lore") is unique to you, you acknowledge that the underlying AI voice models, musical transitions, and narrative structures are non-exclusive and may be similar to those used in other Products created by the Business.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">No Warranty of Copyrightability:</strong> Due to the evolving nature of machine learning law, the Business makes no representation that the final Output is eligible for copyright registration in any jurisdiction.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Artistic Interpretation:</strong> The Product is an artistic experience shared by AI-driven personas. You accept that minor narrative variations ("hallucinations") or artistic liberties are part of the creative process.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">2. DELIVERY AND THE "24-HOUR CLOCK"</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Commencement:</strong> The 24-hour delivery guarantee begins at the exact moment payment is confirmed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">User Responsibilities:</strong> You are solely responsible for providing a valid, working email address. The Business is not liable for technical failures on the user's end, including full inboxes, ISP connectivity issues, or device incompatibility.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Late Delivery Protocol:</strong> If delivery exceeds 24 hours, you may request a 100% refund via email. If a refund is requested before the Product is delivered, the project will be terminated immediately with no file provided.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Force Majeure:</strong> The Business is not liable for delays caused by circumstances beyond its reasonable control, including but not limited to power grid failures, internet outages, or cyber-attacks on third-party AI providers.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">3. INTELLECTUAL PROPERTY & USAGE RIGHTS</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Ownership & License:</strong> You own the final delivered audio file 100% for Personal, Non-Commercial Use only. You may share it with family and on personal social media, but you may not sell, monetize, or use it for commercial gain.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Proprietary Elements:</strong> The Business retains ownership of the underlying "Script Structure" and proprietary AI workflows. You are prohibited from using the Product to train competing AI models or reverse-engineer the Service.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">User Warranties:</strong> You warrant that you own the rights to the "Lore" shared, that it does not infringe on the privacy of others, and that all parties mentioned are 18+ or have provided necessary consent.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Feedback:</strong> Any suggestions or ideas provided to the Business regarding the Service are non-confidential and become the property of the Business for unrestricted use.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">4. REFUNDS & SATISFACTION GUARANTEE</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Personalized Goods Exemption:</strong> You acknowledge that this Product is "clearly personalized" and therefore exempt from the standard statutory right of withdrawal under Hungarian Law.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Voluntary Guarantee:</strong> We offer a 100% "Satisfaction Guarantee" subject to:
                    <ul className="ml-8 mt-2 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-brand-pink">◦</span>
                        <span>Timeline: Requests must be made via email within 7 days of delivery.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-pink">◦</span>
                        <span>Requirement: You must provide a brief explanation of the dissatisfaction.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-pink">◦</span>
                        <span>Bad Faith Clause: We reserve the right to deny refunds for "Bad Faith" actors, including users with high download counts or patterns of refund abuse.</span>
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">5. HOSTING, STORAGE, AND DATA</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Landing Page:</strong> We provide a permanent hosting page at no extra cost, subject to our right to terminate hosting with 60 days' notice.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Retention:</strong> A shared drive for download is provided for 30 days; thereafter, the drive will be deleted.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Prohibited Content:</strong> We will immediately cancel and 100% refund any order containing illegal acts, harassment, hate speech, or defamation.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">6. LIABILITY & INDEMNIFICATION</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Liability Cap:</strong> The total liability of the Business for any claim shall not exceed the total amount paid by the Customer for the specific Product in question.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Indemnification:</strong> You agree to indemnify and hold the Business harmless from any claims, damages, or legal fees arising from your breach of these terms or the "Lore" you provide.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Statute of Limitations:</strong> Any claim related to the Service must be filed within one (1) year after such claim arose or be forever barred.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">7. DISPUTE RESOLUTION</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Governing Law:</strong> This Agreement is governed by the Laws of Hungary.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Mandatory Mediation:</strong> Before seeking legal action, both parties agree to attempt to resolve the dispute through at least four (4) hours of professional mediation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Jurisdiction:</strong> Any legal proceedings shall be conducted in the courts of Hungary.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">8. CHANGES TO TERMS</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email 30 days before they take effect. Continued use of the Service after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">9. CONTACT INFORMATION</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80 mb-4">
                For questions about these Terms:
              </p>
              <div className="p-6 bg-brand-light/30 rounded-xl border border-brand-pink/20">
                <p className="text-lg font-semibold text-brand-dark">Love Story Podcasts</p>
                <p className="text-lg text-brand-dark/80">Email: <a href="mailto:hello@lovestorypodcasts.com" className="text-brand-pink hover:text-pink-600 underline font-semibold">hello@lovestorypodcasts.com</a></p>
                <p className="text-lg text-brand-dark/80">Location: Hungary</p>
              </div>
            </div>

          </div>
        </Section>

        <Section>
          <div className="text-center">
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-full font-bold hover:bg-[#d93695] hover:shadow-xl transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </Section>

      </main>
    </div>
  );
}
