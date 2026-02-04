import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Section = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <section className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
    {children}
  </section>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center font-sans text-brand-dark" style={{ backgroundImage: "url('https://ourlovepodcast.s3.eu-north-1.amazonaws.com/assets/background.webp')" }}>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back to Home</span>
        </a>
      </div>

      <main className="pt-24 pb-20">

        {/* Header */}
        <Section>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Privacy Policy</h1>
            <p className="text-lg text-brand-dark/70">Last Updated: January 14, 2026</p>
          </div>
        </Section>

        {/* Content */}
        <Section>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 space-y-8">

            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                Love Story Podcasts ("we," "us," or "the Business") is committed to protecting the deeply personal "Lore" and data you share with us. This policy explains how we collect, process, and protect your information.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">1. DATA CONTROLLER & CONTACT</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                The entity responsible for your data is Love Story Podcasts, located in Hungary. For any data-related inquiries or to exercise your rights, please contact us at{' '}
                <a href="mailto:privacy@ourlovepodcast.com" className="text-brand-pink hover:text-pink-600 underline font-semibold">
                  privacy@ourlovepodcast.com
                </a>
                .
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">2. INFORMATION WE COLLECT & HOW WE USE IT</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">"Lore" (Personal Stories):</strong> We collect your relationship history, memories, and inside jokes through Tally.so to generate your unique podcast script.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Media Assets:</strong> We store your uploaded images, cover art, and final audio files in Amazon S3 to provide your password-secured landing page.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Transactional Data:</strong> We store your name, email, and order history in Airtable to manage your purchase and delivery.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">3. LEGAL BASIS FOR PROCESSING</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                We process your data based on Article 6(1)(b) of the GDPR: processing is necessary for the performance of a contract (delivering your personalized podcast). For marketing newsletters, we rely on your explicit opt-in consent via the intake form.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">4. DATA RETENTION & DELETION ("Wipe Policy")</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Automatic Deletion:</strong> All "Lore," form responses, and media assets (excluding the final podcast) are permanently deleted from our systems 2 years after delivery. This includes Tally.so form data, S3 uploaded images, and Airtable order records.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Final Podcast Retention:</strong> Your finalized audio file and landing page URL remain accessible indefinitely unless you request deletion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Early Deletion Requests:</strong> You may request immediate deletion at any time via email.</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">5. DATA SECURITY</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80 mb-4">
                We use industry-standard security measures:
              </p>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Encryption:</strong> All form data (Tally.so) and file uploads (AWS S3) are transmitted via TLS/SSL.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Access Control:</strong> Only authorized team members with signed NDAs can access your Lore during production.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Password Protection:</strong> Your final podcast landing page is secured with a unique password you set during checkout.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">6. THIRD-PARTY SERVICES</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80 mb-4">
                We partner with trusted providers to deliver our service:
              </p>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Tally.so:</strong> Form hosting (Privacy Policy: <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-pink-600 underline">tally.so/help/privacy-policy</a>)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Amazon Web Services (S3):</strong> Secure media storage (Privacy Notice: <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-pink-600 underline">aws.amazon.com/privacy</a>)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Airtable:</strong> Order management (Privacy Policy: <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-pink-600 underline">airtable.com/privacy</a>)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">OpenAI:</strong> Script generation (Privacy Policy: <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-pink-600 underline">openai.com/policies/privacy-policy</a>)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">ElevenLabs:</strong> Voice synthesis (Privacy Policy: <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-pink-600 underline">elevenlabs.io/privacy</a>)</span>
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">7. YOUR RIGHTS (GDPR & CCPA)</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Access:</strong> Request a copy of your stored data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Correction:</strong> Update any inaccurate personal information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Deletion:</strong> Request immediate deletion of your Lore and media before the 2-year window.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Portability:</strong> Receive your data in a structured, machine-readable format.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Withdraw Consent:</strong> Opt out of marketing emails at any time.</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-brand-dark/80 mt-4">
                To exercise these rights, email{' '}
                <a href="mailto:privacy@ourlovepodcast.com" className="text-brand-pink hover:text-pink-600 underline font-semibold">
                  privacy@ourlovepodcast.com
                </a>
                . We'll respond within 30 days.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">8. COOKIES & ANALYTICS</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                Our website uses minimal cookies for:
              </p>
              <ul className="space-y-4 text-lg leading-relaxed text-brand-dark/80 mt-4">
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Essential Functionality:</strong> Session management and form submission.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-pink mt-1">•</span>
                  <span><strong className="text-brand-dark">Anonymous Analytics:</strong> Google Analytics to improve user experience (no personally identifiable data is linked).</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-brand-dark/80 mt-4">
                You can disable cookies in your browser settings, but this may affect site functionality.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">9. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                Some of our service providers (e.g., AWS, OpenAI) may process data outside the European Economic Area (EEA). We ensure GDPR-compliant safeguards through Standard Contractual Clauses (SCCs) and adequacy decisions.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">10. CHILDREN'S PRIVACY</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                Our service is not intended for individuals under 18. If you believe a minor has submitted data, contact us immediately for deletion.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">11. POLICY UPDATES</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                We may update this policy to reflect service changes or legal requirements. Material changes will be communicated via email or a prominent site notice 30 days before they take effect.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">12. CONTACT US</h2>
              <p className="text-lg leading-relaxed text-brand-dark/80">
                For questions about this policy or your data:
              </p>
              <div className="mt-4 p-6 bg-brand-light/30 rounded-xl border border-brand-pink/20">
                <p className="text-lg font-semibold text-brand-dark">Love Story Podcasts</p>
                <p className="text-lg text-brand-dark/80">Email: <a href="mailto:privacy@ourlovepodcast.com" className="text-brand-pink hover:text-pink-600 underline font-semibold">privacy@ourlovepodcast.com</a></p>
                <p className="text-lg text-brand-dark/80">Location: Hungary</p>
              </div>
            </div>

          </div>
        </Section>

        {/* Footer */}
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
