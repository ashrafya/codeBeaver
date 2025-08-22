import React, { useState } from "react";
import RegisterButton from "./RegisterButton";

const plans = [
	{
		name: "Single Course Module",
		description:
			"Pick one focused module: Coding Foundations, Math for ML, or Intro ML.",
		fullPrice: 249,
		installmentPayment: 140,
		supportsInstallments: true,
		features: [
			"One 2–3 week module",
			"Live small-group sessions",
			"Practice sets & solutions",
			"Session recordings",
			"Progress feedback",
		],
		popular: false,
	},
	{
		name: "Full AI Bootcamp",
		description:
			"8-week pathway: code → math → ML + capstone. University-ready prep.",
		fullPrice: 600,
		installmentPayment: 350,
		supportsInstallments: true,
		features: [
			"All three modules",
			"Capstone ML project",
			"Code reviews & feedback",
			"GitHub portfolio setup",
			"Certificate of completion",
			"Priority mentor support",
		],
		popular: true,
	},
];

const Pricing: React.FC = () => {
	const [payMode, setPayMode] = useState<"full" | "installments">("full");

	return (
		<section className="px-4 py-16 bg-gray-50 text-black">
			<div className="max-w-5xl mx-auto">
				<p className="text-blue-600 font-semibold text-sm tracking-wide text-center mb-3">
					PRICING
				</p>
				<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-5">
					Choose your path
				</h2>
				<p className="text-lg text-gray-600 text-center mb-10">
					Start with a single module or commit to the full AI bootcamp.
				</p>

				{/* Toggle */}
				<div className="flex justify-center mb-14">
					<div className="inline-flex p-1 rounded-full bg-white/70 backdrop-blur ring-1 ring-gray-200 shadow-sm">
						<button
							onClick={() => setPayMode("full")}
							className={`px-6 py-2 rounded-full text-sm font-semibold transition relative ${
								payMode === "full"
									? "text-white"
									: "text-gray-600 hover:text-gray-800"
							}`}
						>
							{payMode === "full" && (
								<span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow ring-1 ring-blue-500/50" />
							)}
							<span className="relative">Pay in Full</span>
						</button>
						<button
							onClick={() => setPayMode("installments")}
							className={`px-6 py-2 rounded-full text-sm font-semibold transition relative ${
								payMode === "installments"
									? "text-white"
									: "text-gray-600 hover:text-gray-800"
							}`}
						>
							{payMode === "installments" && (
								<span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow ring-1 ring-blue-500/50" />
							)}
							<span className="relative">2 Payments</span>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{plans.map((plan) => {
						const showFull = payMode === "full";
						const savings =
							plan.installmentPayment * 2 - plan.fullPrice;
						return (
							<div
								key={plan.name}
								className={`group relative flex flex-col rounded-3xl overflow-hidden border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur ${
									plan.popular
										? "border-blue-500/60"
										: "border-gray-200"
								}`}
							>
								{/* Top gradient bar */}
								<div
									className={`h-1 w-full ${
										plan.popular
											? "bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"
											: "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
									}`}
								/>
								{/* Popular badge */}
								{plan.popular && (
									<span className="absolute top-4 right-4 text-[10px] uppercase tracking-wide font-bold bg-blue-600 text-white px-3 py-1 rounded-full shadow">
										Most Popular
									</span>
								 )}

								<div className="p-8 flex flex-col flex-1">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{plan.name}
									</h3>
									<p className="text-gray-600 text-sm mb-6 leading-relaxed">
										{plan.description}
									</p>

									{/* Price */}
									<div className="mb-4">
										{showFull ? (
											<div className="flex items-end gap-2">
												<span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
													${plan.fullPrice}
												</span>
												<span className="text-gray-400 font-medium mb-1">
													total
												</span>
												{plan.supportsInstallments &&
													savings > 0 && (
														<span className="ml-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
															Save ${savings}
														</span>
													)}
											</div>
										) : (
											<div className="flex items-end gap-2">
												<span className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent leading-none">
													${plan.installmentPayment}
												</span>
												<span className="text-gray-400 font-medium mb-1">
													x2
												</span>
											</div>
										)}
									</div>

									{plan.supportsInstallments && (
										<p className="text-[11px] text-gray-500 mb-6">
											{showFull
												? "Upfront access to all resources. Best value."
												: plan.name ===
												  "Full AI Bootcamp"
												? "First payment now, second at week 5."
												: "First payment now, second midway through module."}
										</p>
									)}

									<ul className="space-y-3 text-sm text-gray-700 mb-8">
										{plan.features.map((f) => (
											<li
												key={f}
												className="flex items-start gap-3"
											>
												<span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm" />
												<span>{f}</span>
											</li>
										))}
									</ul>

									<div className="mt-auto">
										<div className="relative">
											<RegisterButton />
											{/* Glow on hover */}
											<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-gradient-to-r from-blue-500/40 to-indigo-500/40 pointer-events-none" />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<p className="text-xs text-center text-gray-400 mt-10">
					Installment amounts include a small processing surcharge.
					Prices in CAD.
				</p>
			</div>
		</section>
	);
};

export default Pricing;