export function suggestedEnquirySubject(areaTitle?: string) {
  return areaTitle
    ? `South Cape College × Superimmersive — ${areaTitle} POC`
    : "South Cape College × Superimmersive — Proof of Concept enquiry";
}

export function suggestedEnquiryBody(areaTitle?: string) {
  const area = areaTitle || "Welding Training";

  return `Hello Devon,

I am getting in touch regarding the Superimmersive immersive training proposal.

We would like to proceed with the development of a Proof of Concept.

Training area: ${area}

Please let us know the next steps to confirm the scope, requirements and commencement date.

Kind regards,
South Cape College
`;
}
