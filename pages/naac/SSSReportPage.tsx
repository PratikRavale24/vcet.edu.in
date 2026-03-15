import React from "react";
import PageLayout from "../../components/PageLayout";
import PageBanner from "../../components/PageBanner";

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
      <PageBanner
        title="SSS Report"
        breadcrumbs={[
          { label: 'NAAC', href: '#' },
          { label: 'SSS Report' },
        ]}
      />

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
