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

      {/* NATIVE CARDS SECTION */}
      <section className="px-6 py-12 bg-stone-100/30 border-y border-stone-200/40">
        <div className="max-w-5xl mx-auto">
          {/* Side-by-side grid of native download cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center justify-items-center items-stretch">
            
            {/* Card 1: Plan Template */}
            <div className="w-full max-w-[390px] rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">
              {/* Banner Area */}
              <div className="relative h-[210px] bg-gradient-to-br from-stone-100 via-stone-50 to-[#f5f4ee]/70 p-6 flex flex-col justify-between border-b border-stone-200/50 overflow-hidden shrink-0 select-none">
                {/* Decorative SVG Illustration of Papers and Family */}
                <div className="absolute right-[-10px] bottom-[-15px] w-[180px] h-[180px] opacity-85 pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Shadow Layer */}
                    <path d="M 45 75 L 175 45 L 195 145 L 65 175 Z" fill="#000000" opacity="0.03" />
                    {/* Paper 1 */}
                    <path d="M 40 70 L 170 40 L 190 140 L 60 170 Z" fill="#ffffff" stroke="#e3e1d9" strokeWidth="1.2" />
                    {/* Paper 2 (Offset top) */}
                    <path d="M 48 62 L 178 32 L 198 132 L 68 162 Z" fill="#fcfbf7" stroke="#e2dfd5" strokeWidth="1.2" />
                    
                    {/* Line Sketch of Family */}
                    {/* Parent 1 */}
                    <path d="M 95 90 C 95 85, 103 85, 103 90 C 103 95, 95 95, 95 90 Z" fill="#1a1a1b" opacity="0.1" />
                    <circle cx="99" cy="85" r="5" stroke="#44403c" strokeWidth="1.2" />
                    <path d="M 99 90 L 99 110 M 99 94 L 91 100 M 99 94 L 107 100 M 99 110 L 94 125 M 99 110 L 104 125" stroke="#44403c" strokeWidth="1.2" strokeLinecap="round" />
                    
                    {/* Parent 2 */}
                    <circle cx="115" cy="88" r="4.5" stroke="#44403c" strokeWidth="1.2" />
                    <path d="M 115 92.5 L 115 109 M 115 96 L 108 101 M 115 96 L 122 101 M 115 109 L 111 123 M 115 109 L 119 123" stroke="#44403c" strokeWidth="1.2" strokeLinecap="round" />
                    
                    {/* Kid 1 */}
                    <circle cx="85" cy="103" r="3.5" stroke="#44403c" strokeWidth="1.2" />
                    <path d="M 85 106.5 L 85 118 M 85 109 L 79 113 M 85 109 L 91 113 M 85 118 L 82 127 M 85 118 L 88 127" stroke="#44403c" strokeWidth="1.2" strokeLinecap="round" />

                    {/* Kid 2 */}
                    <circle cx="127" cy="105" r="3" stroke="#44403c" strokeWidth="1.2" />
                    <path d="M 127 108 L 127 117 M 127 110 L 122 114 M 127 110 L 132 114 M 127 117 L 125 125 M 127 117 L 129 125" stroke="#44403c" strokeWidth="1.2" strokeLinecap="round" />

                    {/* Ground/Shadow Line */}
                    <path d="M 65 132 C 100 128, 140 128, 175 132" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Top-right Admin Badge */}
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-stone-400 uppercase">ADMIN</span>

                {/* BiggerPockets MONEY Logo */}
                <div className="flex flex-col items-start">
                  <span className="text-[9px] tracking-widest font-sans font-extrabold text-stone-400 uppercase leading-none">BiggerPockets®</span>
                  <span className="text-lg font-black tracking-tight text-[#2c6e91] leading-none mt-0.5">MONEY</span>
                </div>

                {/* Title */}
                <div className="mt-2 max-w-[210px] z-10">
                  <h3 className="font-serif text-2xl font-black text-stone-900 leading-none">"DEWK"</h3>
                  <p className="text-[10px] sm:text-[11px] font-bold text-stone-600 uppercase tracking-wide leading-tight mt-1.5">
                    (Dually Employed With Kids) Financial Plan Template
                  </p>
                </div>

                {/* Dynamic Download pill */}
                <div className="z-10 bg-white/90 backdrop-blur-xs border border-stone-200/60 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-stone-600 shadow-xs self-start mt-3">
                  <Download className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>1,913 Downloads</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category Pill and Date */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Document
                    </span>
                    <span className="text-[11px] text-stone-500 font-semibold font-sans">Updated Jul 7, 2026</span>
                  </div>

                  {/* Document Title */}
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug mb-3">
                    "DEWK" (Dually Employed With Kids) Financial Plan Template
                  </h4>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    A detailed, illustrative financial plan and template specifically crafted for households in the "Middle Class Trap" with kids and dual incomes, who are trying to build liquid wealth and escape illiquidity.
                  </p>

                  {/* Read More Anchor */}
                  <a 
                    href="#how-to-use" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("dewk-toolkit")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-emerald-700 hover:text-emerald-800 font-bold text-xs transition-colors inline-block mb-6 cursor-pointer"
                  >
                    Read more
                  </a>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 mb-5">
                    <span className="text-[9px] font-bold tracking-wide uppercase bg-[#f4f6f0] text-emerald-800 px-2.5 py-1 rounded-md">Financial Plan Templates</span>
                    <span className="text-[9px] font-bold tracking-wide uppercase bg-[#f4f6f0] text-emerald-800 px-2.5 py-1 rounded-md">Families</span>
                    <span className="text-[9px] font-bold tracking-wide uppercase border border-stone-200 text-stone-500 px-2.5 py-1 rounded-md">+2</span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleCopyLink}
                    className="w-full bg-[#0a5c36] hover:bg-[#084b2c] text-white font-bold py-3.5 px-6 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm cursor-pointer uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4 text-emerald-200 shrink-0" />
                    Download Template
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Projection Model */}
            <div className="w-full max-w-[390px] rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">
              {/* Banner Area */}
              <div className="relative h-[210px] bg-gradient-to-br from-stone-100 via-stone-50 to-[#f5f4ee]/70 p-6 flex flex-col justify-between border-b border-stone-200/50 overflow-hidden shrink-0 select-none">
                {/* Decorative SVG Illustration of Spreadsheet & Charts */}
                <div className="absolute right-[-10px] bottom-[-15px] w-[180px] h-[180px] opacity-85 pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Shadow Layer */}
                    <path d="M 45 75 L 175 45 L 195 145 L 65 175 Z" fill="#000000" opacity="0.03" />
                    {/* Spreadsheet Sheet */}
                    <path d="M 40 70 L 170 40 L 190 140 L 60 170 Z" fill="#ffffff" stroke="#e3e1d9" strokeWidth="1.2" />
                    
                    {/* Spreadsheet grid lines */}
                    <path d="M 68 64 L 173 40 M 72 82 L 177 58 M 76 100 L 181 76 M 80 118 L 185 94 M 84 136 L 189 112" stroke="#f1f0ea" strokeWidth="1" />
                    <path d="M 90 59 L 110 147 M 120 52 L 140 140 M 150 45 L 170 133" stroke="#f1f0ea" strokeWidth="1" />

                    {/* Chart overlay bar */}
                    <rect x="75" y="115" width="12" height="35" rx="2" transform="rotate(-13 75 115)" fill="#10b981" opacity="0.15" />
                    <rect x="100" y="95" width="12" height="55" rx="2" transform="rotate(-13 100 95)" fill="#10b981" opacity="0.25" />
                    <rect x="125" y="75" width="12" height="75" rx="2" transform="rotate(-13 125 75)" fill="#10b981" opacity="0.35" />

                    {/* Trend Line */}
                    <path d="M 75 125 L 105 102 L 132 88 L 160 55" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="160" cy="55" r="3.5" fill="#10b981" />
                    
                    {/* Ground/Shadow Line */}
                    <path d="M 65 132 C 100 128, 140 128, 175 132" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Top-right Admin Badge */}
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-stone-400 uppercase">ADMIN</span>

                {/* BiggerPockets MONEY Logo */}
                <div className="flex flex-col items-start">
                  <span className="text-[9px] tracking-widest font-sans font-extrabold text-stone-400 uppercase leading-none">BiggerPockets®</span>
                  <span className="text-lg font-black tracking-tight text-[#2c6e91] leading-none mt-0.5">MONEY</span>
                </div>

                {/* Title */}
                <div className="mt-2 max-w-[210px] z-10">
                  <h3 className="font-serif text-2xl font-black text-stone-900 leading-none">"DEWK" Model</h3>
                  <p className="text-[10px] sm:text-[11px] font-bold text-stone-600 uppercase tracking-wide leading-tight mt-1.5">
                    A Projection Model to Accompany the "DEWK" Plan
                  </p>
                </div>

                {/* Dynamic Download pill */}
                <div className="z-10 bg-white/90 backdrop-blur-xs border border-stone-200/60 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-stone-600 shadow-xs self-start mt-3">
                  <Download className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>1,047 Downloads</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category Pill and Date */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Spreadsheet
                    </span>
                    <span className="text-[11px] text-stone-500 font-semibold font-sans">Updated Jul 7, 2026</span>
                  </div>

                  {/* Document Title */}
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug mb-3">
                    Financial Projection Model Spreadsheet: DEWK
                  </h4>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    A robust, fully formulas-driven financial model designed to simulate various scenarios, trade-offs, and projections based on your household spend rates and investment vehicles.
                  </p>

                  {/* Read More Anchor */}
                  <a 
                    href="#how-to-use" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("dewk-toolkit")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-emerald-700 hover:text-emerald-800 font-bold text-xs transition-colors inline-block mb-6 cursor-pointer"
                  >
                    Read more
                  </a>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 mb-5">
                    <span className="text-[9px] font-bold tracking-wide uppercase bg-[#f4f6f0] text-emerald-800 px-2.5 py-1 rounded-md">Spreadsheets</span>
                    <span className="text-[9px] font-bold tracking-wide uppercase bg-[#f4f6f0] text-emerald-800 px-2.5 py-1 rounded-md">Financial Models</span>
                    <span className="text-[9px] font-bold tracking-wide uppercase border border-stone-200 text-stone-500 px-2.5 py-1 rounded-md">+1</span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full bg-[#0a5c36] hover:bg-[#084b2c] text-white font-bold py-3.5 px-6 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm cursor-pointer uppercase tracking-wider disabled:opacity-80"
                  >
                    <Download className={`w-4 h-4 text-emerald-200 shrink-0 ${downloading ? "animate-bounce" : ""}`} />
                    {downloading ? "Downloading..." : "Download Model"}
                  </button>
                </div>
              </div>
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
