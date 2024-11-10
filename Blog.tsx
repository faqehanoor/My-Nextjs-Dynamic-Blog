import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="container mx-auto p-5">
      
      <div className="nextjs mb-6 flex justify-center">
        <img
          src="https://www.syncfusion.com/blogs/wp-content/uploads/2024/08/Whats-New-in-Next.js-15-RC.png"
          alt="Next.js 15"
          className="w-full max-w-4xl rounded-md shadow-lg"
        />
      </div>

      <h2 className="text-4xl font-semibold text-center mb-4 text-gray-800">
        𝕄𝕪 𝔹𝕝𝕠𝕘 𝕠𝕗 ℕ𝕖𝕩𝕥.𝕛𝕤 15
      </h2>

     
      <div className="space-y-4 text-lg text-gray-700">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <span className="font-semibold">𝐸𝓃𝒽𝒶𝓃𝒸𝑒𝒹 𝒞𝒶𝒸𝒽𝒾𝓃𝑔:</span>
            Fine-tuned caching control gives developers explicit handling over
            client-side data, improving data freshness and reducing unwanted
            staleness​ ATOMIC SPIN.
          </li>
          <li>
            <span className="font-semibold">𝒫𝒶𝓇𝓉𝒾𝒶𝓁 𝒫𝓇𝑒-𝑅𝑒𝓃𝒹𝑒𝓇𝒾𝓃𝑔 (𝒫𝒫𝑅):</span>Combines static and dynamic
            content rendering, which is useful for apps like e-commerce sites
            that require static product pages with dynamic pricing​ ATOMIC SPIN.
          </li>
          <li>
            <span className="font-semibold">𝑅𝑒𝒶𝒸𝓉 19 𝐼𝓃𝓉𝑒𝑔𝓇𝒶𝓉𝒾𝑜𝓃:</span> Optimizations with React 19 bring
            smoother rendering and eliminate the need for certain hooks like
            useMemo and useCallback​ ATOMIC SPIN.
          </li>
          <li>
            <span className="font-semibold">𝒩𝑒𝓌 𝒶𝒻𝓉𝑒𝓇() 𝒜𝒫𝐼:</span> Allows background tasks to run after a
            response is sent, ideal for analytics and logging without slowing
            down page delivery​ CODING BEAUTY.
          </li>
          <li>
            <span className="font-semibold">𝐼𝓂𝓅𝓇𝑜𝓋𝑒𝒹 𝒮𝑒𝓉𝓊𝓅 & 𝒯𝑜𝑜𝓁𝒾𝓃𝑔:</span> The revamped create-next-app
            setup uses TurboPack for faster project initialization and builds,
            making it quicker to start new projects​ CODING BEAUTY.
          </li>
        </ul>

       
        <div>
          <p className="text-lg font-semibold">
            𝐹𝑜𝓇 𝑀𝑜𝓇𝑒 𝒫𝓁𝑒𝒶𝓈𝑒 𝒱𝒾𝓈𝒾𝓉:{" "}
            <a
              href="https://nextjs.org/blog/next-15-rc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 transition-all"
            >
              Nextjs 15
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
