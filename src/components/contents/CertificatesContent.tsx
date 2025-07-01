import type { Certificate } from "../../interfaces/Certificate";

interface CertificatesContentProps {
  certificates: Certificate[];
}

const CertificatesContent: React.FC<CertificatesContentProps> = ({
  certificates,
}) => {
  if (certificates.length === 0) {
    return <div className="text-red-400">No certificates available.</div>;
  }

  const grouped = certificates.reduce<Record<string, Certificate[]>>(
    (acc, cert) => {
      const key = cert.issuedBy || "Unknown Issuer";
      if (!acc[key]) acc[key] = [];
      acc[key].push(cert);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-6 text-sm text-gray-300">
      <div className="text-green-400 font-semibold text-base">
        📜 Certificates
      </div>

      {Object.entries(grouped).map(([issuer, certs]) => (
        <div key={issuer}>
          <div className="text-yellow-400 font-semibold mb-2">{issuer}</div>
          <div className="ml-4 space-y-3 border-l-2 border-purple-400 pl-4">
            {certs
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.dateIssued).getTime() -
                  new Date(a.dateIssued).getTime()
              )
              .map((cert) => (
                <div key={cert.id} className="space-y-1">
                  <div className="text-purple-400 font-semibold">
                    {cert.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {new Date(cert.dateIssued).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  {cert.url && (
                    <div>
                      🔗{" "}
                      <a
                        href={cert.url}
                        target="_blank"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        {cert.url}
                      </a>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesContent;
