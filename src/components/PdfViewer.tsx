'use client';

type PdfViewerProps = {
  pdfUrl: string;
  title: string;
};

export default function PdfViewer({ pdfUrl, title }: PdfViewerProps) {
  return (
    <div className="w-full">
      <iframe
        src={pdfUrl}
        title={title}
        className="w-full h-[800px] border border-gray-300 rounded-lg"
        style={{ minHeight: '600px' }}
      />
      <div className="mt-4 text-center">
        <a
          href={pdfUrl}
          download
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white font-semibold transition-colors hover:bg-primary/90"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
