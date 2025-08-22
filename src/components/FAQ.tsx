import { useState } from "react";

const faqs = [
	{
		question: "How long is the bootcamp?",
		answer:
			"Core pathway is 8 weeks (Coding → Math → ML). An optional 4-week extension deepens the capstone and ML topics.",
	},
	{
		question: "How many hours per week?",
		answer:
			"Expect ~4–5 hours live + 4–6 hours guided practice. Total 8–11 hours weekly for solid progress.",
	},
	{
		question: "Do I need prior experience?",
		answer:
			"No. We start with Python foundations. Comfort with basic algebra helps, but we teach the math you need.",
	},
	{
		question: "What is the weekly format?",
		answer:
			"Live workshops, short concept briefs, structured practice sets, and mentor feedback checkpoints.",
	},
	{
		question: "Are sessions recorded?",
		answer:
			"Yes. All live sessions are recorded and posted same day with timestamps and code snippets.",
	},
	{
		question: "How big are the groups?",
		answer:
			"Small cohorts (8–14 students) to keep interaction high and feedback personal.",
	},
	{
		question: "What is the capstone project?",
		answer:
			"A mini ML project: dataset selection, cleaning, baseline model, evaluation, write-up, and demo README.",
	},
	{
		question: "What tools do we use?",
		answer:
			"Python, VS Code or hosted notebooks, Git/GitHub, NumPy, pandas, scikit-learn, and lightweight plotting libs.",
	},
	{
		question: "What if I get stuck outside sessions?",
		answer:
			"You get async Q&A support, code reviews, and office hour slots weekly.",
	},
	{
		question: "How is progress tracked?",
		answer:
			"Milestone rubric, weekly check-ins, and a final capstone assessment with written feedback.",
	},
	{
		question: "Who is this for?",
		answer:
			"Ambitious high school students preparing for first-year engineering, CS, or data-focused programs.",
	},
	{
		question: "How do payments work?",
		answer:
			"Upfront or two-part installment. No hidden fees. Extension module billed separately if chosen.",
	},
	{
		question: "Do I get something at the end?",
		answer:
			"Yes: a polished GitHub repo, capstone report, skills summary, and a completion certificate.",
	},
	{
		question: "What is the refund policy?",
		answer:
			"Full refund in first 7 days. Pro‑rated after, minus a materials fee. No refunds in final two weeks.",
	},
];

const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="w-full py-16 px-4 bg-gray-50 flex justify-center">
			<div className="w-full max-w-2xl">
				<h2 className="text-5xl font-bold mb-10 text-gray-900 text-center">
					Bootcamp FAQs
				</h2>
				<div className="divide-y divide-gray-200">
					{faqs.map((faq, idx) => (
						<div key={faq.question}>
							<button
								className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
								onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
								aria-expanded={openIndex === idx}
								aria-controls={`faq-answer-${idx}`}
							>
								<span className="text-lg font-semibold text-gray-900">
									{faq.question}
								</span>
								<span className="ml-4 text-2xl text-gray-400">
									{openIndex === idx ? "−" : "+"}
								</span>
							</button>
							<div
								id={`faq-answer-${idx}`}
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === idx
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<p className="text-gray-500 pb-6 pr-8">{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;