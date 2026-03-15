import React from "react";
import PageLayout from "../../components/PageLayout";

const sssReports = [
  {
    label: "SSS Report 2018-19",
    href: "https://vcet.edu.in/wp-content/uploads/2024/03/SSS-2018-19_Report.pdf",
  },
  {
    label: "SSS Report 2019-20",
    href: "https://vcet.edu.in/wp-content/uploads/2024/03/SSS-2019-20_Report.pdf",
  },
  {
    label: "SSS Report 2020-21",
    href: "https://vcet.edu.in/wp-content/uploads/2024/03/SSS-2020-21_Report.pdf",
  },
  {
    label: "SSS Report 2021-22",
    href: "https://vcet.edu.in/wp-content/uploads/2024/03/SSS-2021-22_Report.pdf",
  },
  {
    label: "SSS Report 2022-23",
    href: "https://vcet.edu.in/wp-content/uploads/2024/03/SSS-2022-23_Report.pdf",
  },
];

const SSSReport: React.FC = () => {
  const leftColumn = sssReports.slice(0, 3);
  const rightColumn = sssReports.slice(3);

  return (
    <PageLayout>
      <section className="bg-[#1a4b7c]">
        <div className="max-w-7xl mx-auto px-16 py-3 text-xs uppercase tracking-widest text-white flex items-center gap-2">
          <span className="inline-flex items-center">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 10v10h14V10" />
            </svg>
            HOME
          </span>
          <span>&gt;</span>
          <span>NAAC</span>
          <span>&gt;</span>
          <span className="text-[#fdb813] font-semibold">SSS REPORT</span>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#143a61] to-[#1f5d92] text-white">
        <div className="max-w-7xl mx-auto px-16 py-10">
          <div className="text-sm uppercase tracking-[0.35em] text-[#fdb813] font-semibold">
            NAAC
          </div>
          <div className="h-1 w-16 bg-[#fdb813] mt-2 mb-4" />
          <h1 className="text-4xl font-bold font-serif uppercase">SSS Report</h1>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-5">
              {leftColumn.map((item) => (
                <a
                  key={item.href}
                  className="flex items-center gap-4 bg-[#1a4b7c] text-[#fdb813] uppercase font-bold tracking-widest px-6 py-5 rounded-lg shadow-lg hover:scale-[1.02] hover:brightness-110 transition"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 self-stretch bg-[#fdb813] rounded" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {rightColumn.map((item) => (
                <a
                  key={item.href}
                  className="flex items-center gap-4 bg-[#1a4b7c] text-[#fdb813] uppercase font-bold tracking-widest px-6 py-5 rounded-lg shadow-lg hover:scale-[1.02] hover:brightness-110 transition"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 self-stretch bg-[#fdb813] rounded" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

    </PageLayout>
  );
};

export default SSSReport;
