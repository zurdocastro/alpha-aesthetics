/**
 * ALPHA AESTHETICS & HEALTH — PEPTIDE DETAIL CONTENT
 *
 * What the popup on peptide-education.html shows when a product name is
 * clicked. Keyed by the same product id as js/cart-data.js, so a peptide
 * without an entry simply has no popup rather than breaking the page.
 *
 * Sourced from the pureblendlabs catalog, the same supplier whose pricing this
 * catalog mirrors. `dose` is in auto-injector clicks, matching how the
 * supplier publishes it.
 *
 * This is research/education copy about the compounds. It is not a treatment
 * plan — every peptide here is dispensed on a prescription after an individual
 * assessment, which the popup says on every card.
 */

const ALPHA_PEPTIDE_INFO = {
  "pep-igf-1-lr3": {
    "blurb": "A long-acting analog of insulin-like growth factor 1, engineered to resist rapid clearance and studied for its role in muscle growth and recovery.",
    "action": "Supports muscle growth and recovery.",
    "benefits": [
      "Explored for stimulating satellite cell activation and muscle protein synthesis.",
      "Studied for accelerated recovery between intense training cycles.",
      "Investigated in models of tissue growth and repair."
    ],
    "dosing": {
      "concentration": "1mg/ml, total 1 ml, total 1 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-follistatin-344": {
    "blurb": "A myostatin-inhibiting protein studied for its potential to support lean muscle development and strength performance in research models.",
    "action": "Aims to optimize muscle strength and performance.",
    "benefits": [
      "Explored for blocking myostatin, a key regulator that limits muscle growth.",
      "Studied for lean mass and strength gains in short, intensive research cycles.",
      "Investigated alongside other growth-signaling peptides for compounding effects."
    ],
    "dosing": {
      "concentration": "1 mg/ml, total 3 ml, total 3 mg",
      "frequency": "Daily",
      "dose": "5",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-tb-500": {
    "blurb": "A synthetic fragment of Thymosin Beta-4 studied for promoting cell migration, angiogenesis, and soft-tissue recovery.",
    "action": "Promotes tissue health and physical recovery.",
    "benefits": [
      "Explored for accelerating healing of muscle, tendon, and ligament tissue.",
      "Studied for reducing inflammation at injury sites.",
      "Investigated for systemic recovery support beyond the injury site."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-bpc-157": {
    "blurb": "A stable gastric pentadecapeptide extensively studied for tissue repair, gut healing, and anti-inflammatory research applications.",
    "action": "Supports overall tissue repair and muscle health.",
    "benefits": [
      "Explored for accelerated healing of tendons, ligaments, and muscle.",
      "Studied for gastrointestinal lining protection and repair.",
      "Investigated for broad anti-inflammatory and cytoprotective effects."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-epitalon": {
    "blurb": "A synthetic peptide that mimics the pineal gland's epithalamin, studied for activating telomerase and protecting telomeres.",
    "action": "Promotes healthy aging and cellular health.",
    "benefits": [
      "Preserves and lengthens telomeres, supporting more cell divisions and potentially slowing cellular aging.",
      "Studied for suppressing CCL11 and HMGB1 gene expression, both linked to longevity.",
      "12-year studies report a 28% reduction in overall mortality in study populations.",
      "Explored for anti-tumor effects, inflammation regulation, and improved sleep via melatonin regulation."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-tb4-thymosin-beta-4": {
    "blurb": "The full-length native peptide from which TB-500 is derived, studied for tissue regeneration, wound healing, and immune modulation.",
    "action": "Aids tissue repair and immune function.",
    "benefits": [
      "Explored for its role in cell migration, angiogenesis, and tissue remodeling.",
      "Studied for wound-healing acceleration in various tissue models.",
      "Investigated for immune-modulatory effects alongside its regenerative properties."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ss-31": {
    "blurb": "Also known as Elamipretide, Bendavia or MTP-131 — a synthetic peptide designed to target mitochondria and improve their function.",
    "action": "Maintains cellular stability and energy.",
    "benefits": [
      "Acts on the inner mitochondrial membrane to reduce free-radical production and oxidative stress.",
      "Protects mitochondrial cardiolipin and improves ATP production efficiency.",
      "Studied in models of cardiovascular disease, neurodegeneration, and mitochondrial dysfunction.",
      "Explored for cellular energy, reduced fatigue, and antioxidant/anti-aging effects."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-mots-c-40": {
    "blurb": "A mitochondrial-derived peptide advancing research into cellular energy signaling and metabolic homeostasis.",
    "action": "Enhances cellular metabolism and energy efficiency.",
    "benefits": [
      "Studied for its role in cellular energy balance and metabolic homeostasis.",
      "Investigated in AMPK-related pathways and metabolic regulation.",
      "Explored in models related to muscle metabolism, glucose regulation, and exercise response.",
      "Evaluated in studies on oxidative stress, inflammation, and aging-related pathways."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-nad-plus-nasal-spray": {
    "blurb": "An intranasal formulation of nicotinamide adenine dinucleotide (NAD+), studied for cellular energy production, DNA repair, and anti-aging research.",
    "action": "Boosts energy, DNA repair, and longevity.",
    "benefits": [
      "Explored as an alternative delivery route for NAD+ precursor research.",
      "Studied for supporting mitochondrial energy production.",
      "Investigated for DNA-repair and longevity-related research applications."
    ],
    "dosing": {
      "concentration": "300 mg/ml, total 10 ml, total 3 gr",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-nad-plus-300": {
    "blurb": "A 300mg-strength NAD+ formulation studied for mitochondrial support, anti-aging, and cellular repair research.",
    "action": "Enhances mitochondria, anti-aging, and cellular repair.",
    "benefits": [
      "Explored for restoring cellular NAD+ levels that decline with age.",
      "Studied for mitochondrial function and reduced fatigue in research models.",
      "Investigated for DNA-repair enzyme (sirtuin) activation."
    ],
    "dosing": {
      "concentration": "100mg/ml, total 3 ml, total 300mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-nad-plus-600": {
    "blurb": "A higher-strength 600mg NAD+ formulation studied for the same mitochondrial and cellular-repair research applications, for protocols calling for a larger total dose per vial.",
    "action": "Enhances mitochondria, anti-aging, and cellular repair — at a higher per-vial concentration.",
    "benefits": [
      "Explored for restoring cellular NAD+ levels at a higher per-vial concentration.",
      "Studied for mitochondrial function, longevity, and DNA-repair research.",
      "Typically dosed at 5–10 clicks per day in research protocols."
    ],
    "dosing": {
      "concentration": "200mg/ml, total 3 ml, total 600mg",
      "frequency": "Daily",
      "dose": "5-10 clicks per day",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-humanin": {
    "blurb": "A mitochondrial-derived peptide studied for supporting mitochondrial health and longevity research.",
    "action": "Supports mitochondrial health and longevity.",
    "benefits": [
      "Explored for improving mitochondrial function and stress resistance.",
      "Studied for protective effects against age-related cellular decline.",
      "Investigated alongside other mitochondrial peptides like MOTS-C and SS-31."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-semax": {
    "blurb": "Developed at Russia's Institute of Molecular Genetics, Selank and Semax are registered pharmaceuticals in Russia widely discussed today in nootropic and biohacking research.",
    "action": "Reduces stress, enhances cognition, and boosts immunity (Selank); improves memory, focus, and neuroprotection (Semax).",
    "benefits": [
      "Semax boosts BDNF and NGF signaling, supports neuroplasticity, and enhances dopaminergic activity — a mental stimulant for focus, memory, and motivation.",
      "Selank modulates GABA pathways and promotes calm without sedation, with research suggesting low dependency risk — a mental stabilizer for calm and clarity.",
      "Selank also shows interaction with the immune system: research explores cytokine signaling, chemokine pathways, and antiviral activity.",
      "Same goal, different mechanisms: Selank removes interference, Semax amplifies performance."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-selank": {
    "blurb": "Developed at Russia's Institute of Molecular Genetics, Selank and Semax are registered pharmaceuticals in Russia widely discussed today in nootropic and biohacking research.",
    "action": "Reduces stress, enhances cognition, and boosts immunity (Selank); improves memory, focus, and neuroprotection (Semax).",
    "benefits": [
      "Semax boosts BDNF and NGF signaling, supports neuroplasticity, and enhances dopaminergic activity — a mental stimulant for focus, memory, and motivation.",
      "Selank modulates GABA pathways and promotes calm without sedation, with research suggesting low dependency risk — a mental stabilizer for calm and clarity.",
      "Selank also shows interaction with the immune system: research explores cytokine signaling, chemokine pathways, and antiviral activity.",
      "Same goal, different mechanisms: Selank removes interference, Semax amplifies performance."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-phdp5-nasal-spray": {
    "blurb": "A nasal-spray peptide formulation studied for cognitive function, mood support, and neuroprotective research applications.",
    "action": "Supports cognition, mood, and neuroprotection.",
    "benefits": [
      "Explored for supporting memory, focus, and overall cognitive performance.",
      "Studied for mood-modulating effects in research models.",
      "Investigated for neuroprotective properties relevant to long-term brain health research."
    ],
    "dosing": {
      "concentration": "10mg/ml, total 10 ml, total 100mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-thymosin-alpha-1": {
    "blurb": "A thymic peptide studied for its immunomodulatory effects, explored in research on immune function and inflammatory balance.",
    "action": "Boosts immunity, reduces inflammation, and supports infection-recovery research.",
    "benefits": [
      "Investigated for enhancing immune cell activity and coordination.",
      "Studied for modulating inflammatory responses in research models.",
      "Explored in broader immune-support and recovery-focused research contexts."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-thymogen": {
    "blurb": "A synthetic dipeptide studied for supporting balanced immune function and cellular immune regulation.",
    "action": "Promotes balanced immune health.",
    "benefits": [
      "Explored for immune modulation and general immune resilience in research models.",
      "Studied to prevent immune overuse with cycled research protocols.",
      "Investigated alongside other thymic peptides for combined immune research."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-gcmaf": {
    "blurb": "A macrophage-activating factor studied for supporting immune cell efficiency and coordination in research settings.",
    "action": "Supports immune system efficiency and recovery.",
    "benefits": [
      "Explored for enhancing macrophage activity and immune surveillance.",
      "Investigated in chronic-condition and immune-recovery research contexts.",
      "Studied for general immune-system support alongside standard care."
    ],
    "dosing": {
      "concentration": "12000ng/3ml",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-nk-peptide": {
    "blurb": "A peptide studied for its influence on natural killer (NK) cell activity, a key component of the body's innate immune surveillance.",
    "action": "Strengthens the immune system and supports infection-defense research.",
    "benefits": [
      "Explored for enhancing NK cell-mediated immune surveillance in research models.",
      "Studied alongside other immune-modulating peptides for combined protocols.",
      "Investigated in general immune-resilience research contexts."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-thymalin": {
    "blurb": "A thymic peptide extract studied for supporting immune resilience and healthy aging in research models.",
    "action": "Enhances immune resilience and wellness.",
    "benefits": [
      "Explored for immune-system support and modulation.",
      "Studied in longevity and healthy-aging research contexts.",
      "Investigated alongside other thymic peptides for combined immune protocols."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ac-kpv-nh2": {
    "blurb": "An acetylated tripeptide fragment of alpha-MSH studied for anti-inflammatory effects on skin and gut tissue.",
    "action": "Anti-inflammatory peptide for skin and immunity.",
    "benefits": [
      "Explored for calming inflammatory skin conditions in research models.",
      "Studied for supporting intestinal barrier integrity and gut-inflammation research.",
      "Investigated for broader immune-modulatory properties."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-cardiogen": {
    "blurb": "A peptide bioregulator studied for supporting cardiovascular tissue health and vitality in research models.",
    "action": "Supports cardiovascular health and vitality.",
    "benefits": [
      "Explored for cardiovascular tissue support and cellular resilience.",
      "Studied in cardiovascular longevity research contexts.",
      "Cycled based on research goals in most protocols."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-bronchogen": {
    "blurb": "A peptide bioregulator studied for supporting respiratory tissue health and function.",
    "action": "Supports respiratory health and overall well-being.",
    "benefits": [
      "Explored for lung and respiratory tissue support in research models.",
      "Studied in respiratory-recovery research contexts.",
      "Typically cycled with breaks for optimal results."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-prostamax": {
    "blurb": "A peptide complex studied for supporting prostate tissue health and urinary function in research models.",
    "action": "Promotes prostate health and urinary function.",
    "benefits": [
      "Explored for reducing inflammation relevant to prostate research.",
      "Studied for supporting healthy urinary function.",
      "Investigated in men's-health-focused peptide research."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-cjc-plus-ipa": {
    "blurb": "A blend of growth hormone secretagogues that work synergistically to mimic the body's natural GH/IGF-1 axis.",
    "action": "Stimulates growth hormone release to support muscle growth and anti-aging (CJC-1295 No DAC), combined with a selective GH secretagogue (Ipamorelin).",
    "benefits": [
      "CJC-1295 No DAC (GHRH): stimulates the pituitary to release GH in a pulsatile pattern.",
      "Ipamorelin (GHRP): activates ghrelin receptors to increase GH release without raising cortisol.",
      "Synergy: amplifies the body's natural physiological GH pulses.",
      "Most commonly reported effects: mild injection-site reactions, fluid retention, headache."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "5-10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-tesamorelin": {
    "blurb": "A synthetic analog of growth hormone-releasing hormone (GHRH) that stimulates the release of human growth hormone (HGH).",
    "action": "Reduces visceral fat and improves metabolism.",
    "benefits": [
      "FDA-approved for HIV-associated lipodystrophy, with demonstrated effects on fat loss, muscle preservation, nerve regeneration, and cognitive support.",
      "Not a steroid and does not affect testosterone levels.",
      "Studied for reduced visceral fat and improved body composition while preserving lean muscle.",
      "Explored for nervous system recovery and key neurotransmitters involved in cognitive function."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-bpc-plus-tb500": {
    "blurb": "Two of the most researched recovery peptides, often combined because they complement each other's mechanisms of action.",
    "action": "Comprehensive blend for targeted tissue and muscle support.",
    "benefits": [
      "BPC-157: tissue repair, anti-inflammatory support, faster healing, tissue protection and restoration.",
      "TB-500: cell migration and proliferation, angiogenesis, soft-tissue repair, systemic recovery.",
      "Together: repair, regenerate, recover — from the inside out."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ghk-cu": {
    "blurb": "A naturally occurring copper-binding human peptide found in plasma, saliva and urine that promotes cell and tissue regeneration throughout the body.",
    "action": "Promotes skin health and a youthful appearance.",
    "benefits": [
      "Stimulates collagen and elastin production, restoring skin elasticity and hydration.",
      "Studied for reducing fine lines, wrinkles, sun damage, and hyperpigmentation.",
      "A potent anti-inflammatory with antioxidant, free-radical-fighting properties.",
      "Explored for accelerating hair growth and follicle health.",
      "Typical research protocol: 1–2mg once daily, 4–6 week cycles with a 4–6 week washout period."
    ],
    "dosing": {
      "concentration": "100mg/3ml",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-dsip-10mg": {
    "blurb": "A natural peptide acting on the central nervous system, especially the hypothalamus, studied for inducing deep, restorative delta sleep.",
    "action": "Supports deep sleep and brain health.",
    "benefits": [
      "Reduces time to fall asleep and increases total sleep duration.",
      "Studied for lowering chronic pain levels and increasing resistance to acute emotional stress.",
      "Potent antioxidant with neuroprotective properties.",
      "Explored for improved spatial memory and cardiac function support."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-melanotan-2": {
    "blurb": "A synthetic analog of alpha-melanocyte-stimulating hormone studied for its effects on skin pigmentation, appetite, and libido.",
    "action": "Enhances tanning, reduces appetite, and boosts libido.",
    "benefits": [
      "Explored for skin-pigmentation (tanning) research applications.",
      "Studied for appetite-modulating effects in research models.",
      "Investigated for potential effects on libido and sexual motivation."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-melittin": {
    "blurb": "A bioactive peptide found in bee venom, studied for anti-inflammatory, antimicrobial, and immune-research applications.",
    "action": "Anti-inflammatory, antimicrobial, and studied in oncology-adjacent research.",
    "benefits": [
      "Explored for anti-inflammatory effects across various tissue models.",
      "Studied for antimicrobial activity against a range of pathogens.",
      "Investigated in broader immune and cellular-research contexts."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-bpc-157-nasal-spray": {
    "blurb": "An intranasal formulation of BPC-157 studied for tissue repair, gut healing, and inflammation research via an alternative delivery route.",
    "action": "Promotes healing, reduces inflammation, and aids gut health.",
    "benefits": [
      "Explored for systemic tissue-repair research via nasal delivery.",
      "Studied for gastrointestinal healing and barrier support.",
      "Investigated for anti-inflammatory effects across research models."
    ],
    "dosing": {
      "concentration": "5mg/ml, total 10 ml, total 50mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-vip": {
    "blurb": "Vasoactive Intestinal Peptide, studied for its role in immune balance, inflammation control, and neuro-immune signaling research.",
    "action": "Promotes immune balance and wellness.",
    "benefits": [
      "Explored for modulating immune responses and inflammation.",
      "Studied for gut-brain axis and neuro-immune signaling research.",
      "Investigated alongside other immune-modulating peptides."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily or every other day",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-protein-complex": {
    "blurb": "A broad-spectrum blend of peptides and amino acids studied for muscle repair, immune function, and general cellular health research.",
    "action": "Essential for muscle repair and health.",
    "benefits": [
      "Explored for supporting muscle repair and recovery research.",
      "Studied for general immune and cellular-health support.",
      "Investigated as a foundational addition to broader research protocols."
    ],
    "dosing": {
      "concentration": "60 IU, 20 mg, total 3 ml",
      "frequency": "Daily",
      "dose": "10",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ss-31-plus-cardiogen-blend": {
    "blurb": "A combination of the mitochondrial peptide SS-31 and the cardiovascular bioregulator Cardiogen, studied for compounded cellular and cardiovascular research support.",
    "action": "Combined mitochondrial and cardiovascular support.",
    "benefits": [
      "SS-31: mitochondrial membrane protection and reduced oxidative stress.",
      "Cardiogen: cardiovascular tissue support and cellular resilience.",
      "Together: explored for combined cardiovascular and cellular-energy research."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-vip-plus-mots-c-blend": {
    "blurb": "A combination of Vasoactive Intestinal Peptide and MOTS-C, studied for compounded immune-modulation and metabolic-energy research.",
    "action": "Combined immune-modulation and metabolic-energy support.",
    "benefits": [
      "VIP: immune balance and neuro-immune signaling research.",
      "MOTS-C: cellular metabolism and energy-efficiency research.",
      "Together: explored for combined immune and metabolic research support."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ghrp-6": {
    "blurb": "A growth hormone-releasing peptide studied for stimulating GH release, often alongside appetite-related research applications.",
    "action": "Stimulates growth hormone release, often alongside appetite-related research.",
    "benefits": [
      "Explored for stimulating natural growth hormone pulses.",
      "Studied for its historically-noted appetite-stimulating effects in research models.",
      "Investigated alongside GHRH analogs for combined GH-axis research."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "As per protocol",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-selank-plus-dsip-blend": {
    "blurb": "A combination of the anxiolytic peptide Selank and the sleep-regulating peptide DSIP, studied for compounded calm-and-recovery research.",
    "action": "Combined calm-and-recovery support (anxiolytic + sleep-regulating peptides).",
    "benefits": [
      "Selank: anxiolytic and cognitive-modulation research via GABA pathways.",
      "DSIP: deep, restorative delta-sleep research support.",
      "Together: explored for combined stress-reduction and sleep-quality research."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-5-amino-1mq": {
    "blurb": "A small-molecule compound studied for inhibiting NNMT, an enzyme linked to fat storage and cellular metabolism, in body-composition research.",
    "action": "Supports fat-metabolism and body-composition research.",
    "benefits": [
      "Explored for its role in fat-metabolism and body-composition research.",
      "Studied for NNMT inhibition and its downstream metabolic effects.",
      "Investigated in longevity-adjacent metabolic research."
    ],
    "dosing": {
      "concentration": "33 mg/ml, total 3 ml, total 100 mg",
      "frequency": "Daily",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-retatrutide-plus-follistatin-344-blend": {
    "blurb": "A combination of the triple-agonist peptide Retatrutide and the myostatin-inhibiting Follistatin 344, studied for compounded weight-management and lean-mass research.",
    "action": "Combined weight-management and lean-mass support.",
    "benefits": [
      "Retatrutide: GLP-1/GIP/glucagon triple-agonist research on weight and metabolism.",
      "Follistatin 344: myostatin inhibition supporting lean-mass research.",
      "Together: explored for combined fat-loss and muscle-preservation research."
    ],
    "dosing": {
      "concentration": "10.4 mg/ml, total 3 ml (30mg Reta + 1.2mg Follistatin), total 31.2mg",
      "frequency": "Once a week",
      "dose": "As per protocol",
      "duration": "6 Months",
      "breakPeriod": "6 Months"
    }
  },
  "pep-selank-plus-semax-nasal-spray": {
    "blurb": "An intranasal combination of Selank and Semax, studied for compounded cognitive, mood, and stress-modulation research via an alternative delivery route.",
    "action": "Combined cognitive, mood, and stress-modulation support via nasal delivery.",
    "benefits": [
      "Selank: calm and stress-modulation research via GABA pathways.",
      "Semax: focus, memory, and neuroprotective research via BDNF/NGF signaling.",
      "Together: explored for combined cognitive and mood-support research."
    ],
    "dosing": {
      "concentration": "5mg/ml + 5mg/ml, total 10ml",
      "frequency": "Upon request",
      "duration": "6 Months",
      "breakPeriod": "6 Months"
    }
  },
  "pep-oxytocin-plus-pt-141-nasal-spray": {
    "blurb": "An intranasal combination of Oxytocin and PT-141, studied for compounded wellness, bonding, and vitality-related research.",
    "action": "Combined wellness, bonding, and vitality support via nasal delivery.",
    "benefits": [
      "Oxytocin: social bonding and stress-modulation research.",
      "PT-141: melanocortin-receptor research related to vitality and motivation.",
      "Together: explored for combined wellness-focused research applications."
    ],
    "dosing": {
      "concentration": "0.05mg/ml + 2.56mg/ml, total 10ml",
      "frequency": "Upon request"
    }
  },
  "pep-tirz-30mg": {
    "blurb": "A dual GIP/GLP-1 receptor agonist studied for its effects on glycemic control and significant weight loss.",
    "action": "Supports healthy weight management.",
    "benefits": [
      "Superior glycemic control: significantly reduces HbA1c and increases insulin sensitivity.",
      "Significant weight loss: average 15–20%+ reduction in body weight; decreases appetite and increases satiety.",
      "Dual metabolic improvement by mimicking two key hormones, GIP and GLP-1.",
      "Potential cardiovascular benefits: may lower blood pressure and improve lipid levels.",
      "Studied for improved liver health (MASH/MASLD) and potential kidney protection.",
      "Explored for reduced systemic inflammation, better digestion, and improved sleep quality."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Once per week",
      "dose": "Weeks 1-4: start with 2.5 per week. Weeks 5-8: increase to 5 per week. Weeks 9-52: raise to a maximum of 7.5 per week, maintaining that level up to 1 year.",
      "duration": "1 Year",
      "breakPeriod": "6 Months"
    }
  },
  "pep-reta-30mg": {
    "blurb": "An experimental triple agonist acting on three key hormonal pathways for weight, metabolism, and cardiometabolic health.",
    "action": "Supports weight loss and metabolic health.",
    "benefits": [
      "GLP-1: regulates appetite and satiety.",
      "GIP: boosts metabolism and energy utilization.",
      "Glucagon: increases energy expenditure and fat oxidation.",
      "Phase 3 trial (Eli Lilly, 2,339 adults, 80 weeks): average weight loss of 19.0% (4mg), 25.9% (9mg) and 28.3% (12mg), vs. 2.2% for placebo.",
      "45.3% of patients on the 12mg dose lost ≥30% of body weight; effects sustained through 104 weeks.",
      "Most common side effects were gastrointestinal (nausea 28.6%, diarrhea 25.2%, constipation 23.8%), mostly mild to moderate."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "See dosage",
      "dose": "25 clicks once a week for the first two weeks; from the third week onward, 25 clicks twice a week.",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-adipotide": {
    "blurb": "A peptide studied for its effects on adipose tissue vasculature, explored in body-composition and metabolic research.",
    "action": "Targets healthy body composition and metabolic support.",
    "benefits": [
      "Investigated for reducing fat tissue by targeting its blood supply.",
      "Studied for its potential role in metabolic and body-composition research.",
      "Requires closer monitoring in research protocols due to reported kidney-function effects."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "Observe kidney function",
      "duration": "6 Months",
      "breakPeriod": "6 Months"
    }
  },
  "pep-kisspeptin": {
    "blurb": "A neuropeptide produced in the hypothalamus that activates the reproductive hormonal axis by stimulating GnRH, LH and FSH release.",
    "action": "Regulates hormones and supports fertility and reproduction.",
    "benefits": [
      "Sexual health & libido: studied for its influence on libido, sexual motivation, and dopaminergic reward circuits.",
      "Hormonal optimization: stimulates LH/FSH and endogenous testosterone, supporting the HPG axis.",
      "Fertility: explored for preserving male fertility and reproductive hormonal signaling.",
      "Metabolism: linked to energy metabolism, appetite regulation, and potential fat-loss support.",
      "Liver & longevity: studied for hepatic antioxidant activity and early-stage NAFLD research."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-pt-141": {
    "blurb": "A synthetic peptide studied for its interaction with neurological signaling systems and melanocortin receptors in controlled research settings.",
    "action": "Known for its vitality-boosting properties and enhancing overall energy levels.",
    "benefits": [
      "Interacts with specific neural pathways linked to desire and motivation regulation.",
      "Studied for its affinity to melanocortin receptors (MC3/MC4) involved in physiological responses.",
      "Supplied as a sterile lyophilized peptide, >99% purity.",
      "Designed exclusively for scientific research — not an approved medication."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "As required",
      "dose": "Primary dose: 5 units approximately 3-4 hours before sexual activity. Boosting dose: an additional 5 units can be taken immediately before sexual activity.",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-cjc-1295-no-dac": {
    "blurb": "A growth hormone-releasing hormone (GHRH) analog studied for stimulating natural, pulsatile growth hormone secretion without the extended half-life of DAC-conjugated versions.",
    "action": "Stimulates growth hormone, muscle growth, and anti-aging.",
    "benefits": [
      "Explored for supporting lean muscle growth and fat metabolism through natural GH pulses.",
      "Studied alongside GHRP-class secretagogues (like Ipamorelin) for synergistic effects.",
      "Investigated for anti-aging and recovery-related research applications."
    ],
    "dosing": {
      "concentration": "10 mg/ml, total 3 ml, total 30 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-ipamorelin": {
    "blurb": "A selective growth hormone secretagogue studied for stimulating GH release without significantly raising cortisol or prolactin.",
    "action": "Growth hormone booster without side effects.",
    "benefits": [
      "Explored for muscle growth and recovery support with a favorable side-effect profile in research models.",
      "Studied for its selectivity compared to older-generation GH secretagogues.",
      "Often researched in combination with GHRH analogs like CJC-1295."
    ],
    "dosing": {
      "concentration": "5 mg/ml, total 3 ml, total 15 mg",
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  },
  "pep-oxytocin": {
    "blurb": "A neuropeptide hormone studied for its roles in social bonding, stress modulation, and — in peptide research contexts — vitality and wellness support.",
    "action": "Studied for vitality, bonding, and wellness support.",
    "benefits": [
      "Explored for stress reduction and emotional regulation in research models.",
      "Studied for its role in social bonding and trust-related behavior.",
      "Investigated alongside other wellness peptides for combined research protocols."
    ],
    "dosing": {
      "frequency": "Daily",
      "dose": "10",
      "duration": "1 Month",
      "breakPeriod": "1 Month"
    }
  }
};

if (typeof window !== "undefined") window.ALPHA_PEPTIDE_INFO = ALPHA_PEPTIDE_INFO;
if (typeof module !== "undefined") module.exports = { ALPHA_PEPTIDE_INFO };
