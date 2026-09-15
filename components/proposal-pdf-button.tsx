import { proposalPdf } from "@/content/site";

type ProposalPdfButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function ProposalPdfButton({
  className = "btn btn--primary btn--sm",
  onClick,
}: ProposalPdfButtonProps) {
  const label = "Download Proposal PDF";

  if (proposalPdf) {
    return (
      <a href={proposalPdf} download className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <span
      className={className}
      aria-disabled="true"
      title="PDF export not attached yet"
    >
      {label}
    </span>
  );
}
