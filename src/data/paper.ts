// Public source: https://openreview.net/pdf?id=NdDKcU9HlU
// Acceptance to Findings of EMNLP confirmed by the author; year and author order not provided.
export const paper = {
  title:
    "Do AI Reviewers Converge? Diversity Collapse in Model-Generated Peer Review",
  status: "Accepted to Findings of EMNLP",
  url: "https://openreview.net/pdf?id=NdDKcU9HlU",
  summary:
    "Do automated reviewers offer independent perspectives? This study compares human and model-generated peer reviews to examine how AI changes the diversity of scientific evaluation.",
  finding:
    "Model-generated reviews tend to favor praise and resemble one another even across unrelated papers. Specialized review agents mitigate this convergence, but do not eliminate it.",
  metrics: [
    { value: "509", label: "ICLR papers" },
    { value: "1,943", label: "Human reviews" },
    { value: "10,172", label: "Model-generated reviews" },
    { value: "5", label: "LLMs evaluated" },
  ],
};
