import React, { useState } from "react";
import { 
  CheckCircle,
  Share2,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [downloading, setDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setSuccessMessage("Word Document 'DEWK_Financial_Plan_Template.docx' download started.");
      setTimeout(() => setSuccessMessage(""), 4000);
    }, 1200);
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    navigator.clipboard.writeText("https://docs.google.com/document/d/1GZ6nsh-Ecl6n4_KshXW73w6b_1B8DbyY_7O8u-2m_sA/copy");
    setSuccessMessage("Google Doc template link copied to clipboard!");
    setTimeout(() => {
      setCopiedLink(false);
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div id="dewk-toolkit" className="min-h-screen bg-[#fbfaf6] text-[#1a1a1b] font-sans antialiased selection:bg-stone-200 selection:text-stone-900 pb-28">
      

      {/* Hero Content Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 sm:pt-20 text-center">
        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
          DEWK Financial Plan Template
        </h1>
        
        {/* Subtitle with newsreader serif 600 italic emphasis */}
        <p className="font-serif text-xl sm:text-2xl font-semibold italic text-emerald-800 leading-relaxed max-w-3xl mx-auto mb-10">
          Free Financial Plan Template for “DEWK” (Dually Employed With Kids) Caught in the “Middle Class Trap”
        </p>

        {/* First Descriptive Paragraph */}
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6">
          This is a Financial Planning Toolkit Item – a Sample Financial Plan + accompanying Financial Projection Model. It’s Scott Trench’s best attempt at solving the “Middle Class Trap” problem common to many BiggerPockets Money listeners in the “Dually Employed With Kids” category (“DEWK”) – who are starting to build meaningful net worth, but feel that their wealth is illiquid – not actually solving core challenges for them, or providing optionality.
        </p>

        {/* Second Disclaimer Paragraph */}
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-10 italic">
          This is not YOUR financial plan – it is for illustrative and educational purposes only. We hope you like it. The plan is free. No email required.
        </p>

        {/* Global Success / Copy Toast Banner */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto mb-8 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs"
            >
              <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="font-medium">{successMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* EMBED CARDS SECTION */}
      <section className="px-6 py-10 bg-stone-100/30 border-y border-stone-200/40">
        <div className="max-w-5xl mx-auto">
          {/* Side-by-side grid of raw embed cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center justify-items-center items-start">
            
            {/* Embed 1: Plan Template */}
            <div className="w-full max-w-[380px] mx-auto">
              <iframe
                src="https://financial-resources.vercel.app//#/embed/L26iS881ZhPUIqSWTaRc"
                className="w-full !h-[650px] border-none block"
                style={{ width: "100%", height: "650px", border: "none", overflow: "hidden", display: "block" }}
                title="Financial Plan Template: DEWK"
                scrolling="no"
              />
            </div>

            {/* Embed 2: Projection Model */}
            <div className="w-full max-w-[380px] mx-auto">
              <iframe
                src="https://financial-resources.vercel.app//#/embed/5xMBrAQfaeg217N05xkn"
                className="w-full !h-[650px] border-none block"
                style={{ width: "100%", height: "650px", border: "none", overflow: "hidden", display: "block" }}
                title="Financial Model Spreadsheet: DEWK"
                scrolling="no"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Toolkit Details Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
        
        {/* How to Use Section */}
        <div className="border-t border-stone-200/80 pt-12">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">
            How to use
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-stone-400 font-serif font-bold text-lg leading-none mt-1 shrink-0">1.</span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <strong className="text-stone-900">Download the Template as a Word Document:</strong> Read it. Challenge it. Modify it.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-stone-400 font-serif font-bold text-lg leading-none mt-1 shrink-0">2.</span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <strong className="text-stone-900">Make a Copy of the Google Doc:</strong> Read it. Challenge it. Modify it.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-stone-400 font-serif font-bold text-lg leading-none mt-1 shrink-0">3.</span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <strong className="text-stone-900">Use the Template and it’s Illustration of “Good Strategy”:</strong> Do not follow the plan blindly. Rather, use it as a learning experience, and consider your own situation, your own goals, and the hard tradeoffs central to “Good Strategy”.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-stone-400 font-serif font-bold text-lg leading-none mt-1 shrink-0">4.</span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <strong className="text-stone-900">Download the Projection Model as an Excel file, or Google Sheet:</strong> Play with the model, see how various assumptions impact projections.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-stone-400 font-serif font-bold text-lg leading-none mt-1 shrink-0">5.</span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <strong className="text-stone-900">Use the Template and it’s Illustration of “Good Strategy”:</strong> Do not follow the plan or model blindly. Rather, use it as a learning experience, and consider your own situation, your own goals, and the hard tradeoffs central to “Good Strategy”. Modify either or both, use them as inspiration for a new plan, or take a single nugget and throw out the rest.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons Below Checklist */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleCopyLink}
              className="bg-emerald-850 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded transition-all shadow-xs cursor-pointer bg-emerald-800"
            >
              Open the tool
            </button>
            <a
              href="#how-to-use"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("dewk-toolkit")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border border-stone-300 hover:bg-stone-50 text-stone-700 hover:text-stone-900 font-semibold text-xs py-2.5 px-4 rounded transition-all"
            >
              How to use
            </a>
          </div>
        </div>

        {/* In this resource block */}
        <div className="bg-stone-50 border border-stone-200/50 rounded-xl p-6 sm:p-8">
          <h3 className="font-serif text-lg font-bold text-[#1a1a1b] uppercase tracking-wider mb-5">In this resource:</h3>
          <ul className="space-y-3.5">
            {[
              "Find an illustrative financial plan.",
              "Sections, breaking out the example household’s net worth, spending, income, and goals.",
              "Examples/options of major strategic choices for the household to consider.",
              "A specific, detailed, financial plan, including step by step order of operations recommendations.",
              "A detailed checklist of personal finance best practices, and specific recommended implementation derived from the core strategic diagnosis.",
              "A detailed projection model, including estimates of costs, income, investment projections, inflation, and more."
            ].map((bullet, i) => (
              <li key={i} className="flex gap-3 items-start text-stone-700 text-sm sm:text-base font-sans">
                <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why use this Section */}
        <div className="border-t border-stone-200/80 pt-12">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">Why use this</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-stone-900">Financial Planning Template</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We are not aware of another artifact that even attempts this as an exercise at the time of publication.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-stone-900">Better decision-making</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Provides a clear framework that defines “Good Strategy” and does not shy away from implementing that strategy, despite hard tradeoffs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-stone-900">Modifiable</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                As long as you don’t repurpose it for commercial purposes, we encourage you to modify it and use it to advance your goals, whatever they may be.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Feedback Block - Strictly contains the elegant Newsreader 600 italic feedback sentence as requested */}
        <div className="border-t border-stone-200/80 pt-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold italic text-[#1a1a1b] leading-relaxed max-w-3xl mx-auto">
            “We Welcome Feedback: Please leave feedback in the comments below, including suggestions, criticism, debate, dialogue, or modifications you may suggest!”
          </h2>
        </div>

      </section>

    </div>
  );
}
