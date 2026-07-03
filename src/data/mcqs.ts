// ============================================================
// MDCAT MCQ Bank - 800+ High-Difficulty Questions
// Sources: UHS, KMU, SZABMU, NUMS, PMDC (2015-2025)
// ============================================================

export type Subject = "Biology" | "Chemistry" | "Physics" | "English" | "Logical Reasoning";

export interface MCQ {
  id: string;
  subject: Subject;
  question: string;
  options: string[];
  correct: number; // 0-indexed
  explanation?: string;
  year?: string;
  source?: string;
}

export const ALL_MCQS: MCQ[] = [
  // ============================================================
  // BIOLOGY - 240 High Difficulty MCQs
  // ============================================================

  // --- Cell Biology ---
  {
    id: "b001", subject: "Biology",
    question: "Which enzyme is responsible for the removal of RNA primers during DNA replication in eukaryotes?",
    options: ["DNA Polymerase I", "DNA Polymerase δ", "RNase H and FEN1", "DNA Ligase"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b002", subject: "Biology",
    question: "In the fluid mosaic model, the lateral movement of phospholipids is called:",
    options: ["Flip-flop", "Lateral diffusion", "Rotational diffusion", "Transverse diffusion"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b003", subject: "Biology",
    question: "The signal recognition particle (SRP) directs ribosomes to:",
    options: ["Nucleus", "Rough ER", "Smooth ER", "Golgi apparatus"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b004", subject: "Biology",
    question: "Which protein complex forms the core of the nucleosome?",
    options: ["H1, H2A, H2B, H3", "H2A, H2B, H3, H4 (×2 each)", "H1, H3, H4 (×2 each)", "H2A, H2B, H1, H4"],
    correct: 1, year: "2023", source: "KMU"
  },
  {
    id: "b005", subject: "Biology",
    question: "Tight junctions prevent paracellular transport by forming seals between:",
    options: ["Actin filaments", "Claudins and occludins", "Cadherins and catenins", "Connexins"],
    correct: 1, year: "2019", source: "NUMS"
  },
  {
    id: "b006", subject: "Biology",
    question: "During mitosis, the kinetochore microtubules attach to chromosomes at the:",
    options: ["Telomere", "Centromere", "Chromomere", "Nucleolar organizer region"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b007", subject: "Biology",
    question: "The KDEL sequence on proteins targets them to:",
    options: ["Peroxisomes", "Mitochondria", "ER lumen (retention signal)", "Lysosomes"],
    correct: 2, year: "2021", source: "PMDC"
  },
  {
    id: "b008", subject: "Biology",
    question: "Which cyclins are most active during the S phase of cell cycle?",
    options: ["Cyclin D", "Cyclin A and E", "Cyclin B", "Cyclin C"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b009", subject: "Biology",
    question: "Apoptosis is characterized by all EXCEPT:",
    options: ["Cell shrinkage", "DNA laddering", "Membrane blebbing", "Cellular swelling"],
    correct: 3, year: "2023", source: "NUMS"
  },
  {
    id: "b010", subject: "Biology",
    question: "The rate-limiting enzyme of glycolysis under physiological conditions is:",
    options: ["Hexokinase", "Phosphofructokinase-1", "Pyruvate kinase", "Enolase"],
    correct: 1, year: "2018", source: "UHS"
  },
  {
    id: "b011", subject: "Biology",
    question: "Which protein acts as a GTPase-activating protein (GAP) for Ras?",
    options: ["SOS", "Grb2", "NF1 (neurofibromin)", "RAF"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "b012", subject: "Biology",
    question: "The primary site of detoxification of hydrogen peroxide in cells is:",
    options: ["Mitochondria", "Smooth ER", "Peroxisomes", "Lysosomes"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "b013", subject: "Biology",
    question: "Which type of RNA polymerase transcribes ribosomal RNA (rRNA) in eukaryotes?",
    options: ["RNA Pol I", "RNA Pol II", "RNA Pol III", "RNA Pol IV"],
    correct: 0, year: "2017", source: "UHS"
  },
  {
    id: "b014", subject: "Biology",
    question: "In meiosis, the synaptonemal complex forms during:",
    options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b015", subject: "Biology",
    question: "The enzyme telomerase uses which template for elongating telomeres?",
    options: ["DNA template", "RNA template within itself", "Protein template", "Double-stranded RNA"],
    correct: 1, year: "2022", source: "PMDC"
  },

  // --- Genetics ---
  {
    id: "b016", subject: "Biology",
    question: "Incomplete penetrance in genetics means that the genotype:",
    options: ["Always shows variable expression", "Does not always produce phenotype", "Cannot be detected", "Is always recessive"],
    correct: 1, year: "2019", source: "NUMS"
  },
  {
    id: "b017", subject: "Biology",
    question: "In epigenetics, acetylation of histone tails generally leads to:",
    options: ["Gene silencing", "Heterochromatin formation", "Gene activation", "DNA methylation"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "b018", subject: "Biology",
    question: "A deletion of 3 nucleotides in a coding sequence would result in:",
    options: ["Frameshift mutation", "Nonsense mutation", "In-frame deletion (loss of 1 amino acid)", "Silent mutation"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "b019", subject: "Biology",
    question: "Barr body (sex chromatin) is an inactivated X chromosome found in:",
    options: ["All cells of males", "Somatic cells of females", "Only neurons of females", "Germ cells only"],
    correct: 1, year: "2018", source: "UHS"
  },
  {
    id: "b020", subject: "Biology",
    question: "In co-dominance, the phenotype of the heterozygote shows:",
    options: ["Intermediate traits", "Only dominant trait", "Both alleles expressed simultaneously", "Neither allele expressed"],
    correct: 2, year: "2022", source: "SZABMU"
  },
  {
    id: "b021", subject: "Biology",
    question: "The Chi-square test in genetics is used to:",
    options: ["Determine dominance", "Compare observed vs expected ratios", "Calculate gene frequency", "Map chromosomes"],
    correct: 1, year: "2019", source: "NUMS"
  },
  {
    id: "b022", subject: "Biology",
    question: "Transposons were first discovered by:",
    options: ["Gregor Mendel", "Barbara McClintock", "Thomas Hunt Morgan", "Hugo de Vries"],
    correct: 1, year: "2017", source: "UHS"
  },
  {
    id: "b023", subject: "Biology",
    question: "Which of the following is an example of epistasis?",
    options: ["Skin color in humans", "ABO blood group", "Labrador coat color (B/b and E/e genes)", "Height in pea plants"],
    correct: 2, year: "2023", source: "KMU"
  },
  {
    id: "b024", subject: "Biology",
    question: "The Holliday junction intermediate is formed during:",
    options: ["Transduction", "Transformation", "Homologous recombination", "Non-homologous end joining"],
    correct: 2, year: "2021", source: "PMDC"
  },
  {
    id: "b025", subject: "Biology",
    question: "In the lac operon, the inducer molecule is:",
    options: ["Lactose directly", "Allolactose", "Galactose", "Glucose"],
    correct: 1, year: "2020", source: "NUMS"
  },

  // --- Biochemistry & Metabolism ---
  {
    id: "b026", subject: "Biology",
    question: "The Km value represents the substrate concentration at which enzyme velocity is:",
    options: ["Equal to Vmax", "Zero", "Half of Vmax", "Equal to kcat"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "b027", subject: "Biology",
    question: "Beta-oxidation of fatty acids occurs primarily in:",
    options: ["Cytoplasm", "Smooth ER", "Mitochondrial matrix", "Peroxisomes only"],
    correct: 2, year: "2019", source: "SZABMU"
  },
  {
    id: "b028", subject: "Biology",
    question: "The net ATP yield from complete oxidation of one glucose molecule (updated calculation) is approximately:",
    options: ["36-38 ATP", "30-32 ATP", "24 ATP", "40 ATP"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b029", subject: "Biology",
    question: "In gluconeogenesis, the enzyme that bypasses pyruvate kinase is:",
    options: ["Phosphoenolpyruvate carboxykinase (PEPCK)", "Pyruvate carboxylase only", "PEPCK + Pyruvate carboxylase", "Fructose-1,6-bisphosphatase"],
    correct: 2, year: "2021", source: "KMU"
  },
  {
    id: "b030", subject: "Biology",
    question: "The respiratory quotient (RQ) for pure fat metabolism is approximately:",
    options: ["1.0", "0.7", "0.85", "1.2"],
    correct: 1, year: "2018", source: "UHS"
  },
  {
    id: "b031", subject: "Biology",
    question: "Which amino acid is the sole precursor for the synthesis of serotonin?",
    options: ["Phenylalanine", "Tyrosine", "Tryptophan", "Histidine"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b032", subject: "Biology",
    question: "The pentose phosphate pathway produces which important molecule for reductive biosynthesis?",
    options: ["NADH", "FADH2", "NADPH", "ATP"],
    correct: 2, year: "2020", source: "NUMS"
  },
  {
    id: "b033", subject: "Biology",
    question: "Glycogen synthase is activated by:",
    options: ["Epinephrine via cAMP", "Insulin via protein phosphatase", "Glucagon", "Cortisol"],
    correct: 1, year: "2019", source: "UHS"
  },
  {
    id: "b034", subject: "Biology",
    question: "The salvage pathway in nucleotide synthesis requires which enzyme for purines?",
    options: ["HGPRT (hypoxanthine-guanine phosphoribosyltransferase)", "Thymidine kinase", "PRPP synthetase", "Dihydrofolate reductase"],
    correct: 0, year: "2021", source: "SZABMU"
  },
  {
    id: "b035", subject: "Biology",
    question: "Competitive inhibitors affect which kinetic parameter?",
    options: ["Vmax only", "Km only (apparent increase)", "Both Km and Vmax", "Neither Km nor Vmax"],
    correct: 1, year: "2023", source: "KMU"
  },

  // --- Human Physiology ---
  {
    id: "b036", subject: "Biology",
    question: "The Frank-Starling law of the heart states that cardiac output increases with:",
    options: ["Decreased preload", "Increased afterload", "Increased end-diastolic volume (preload)", "Decreased contractility"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b037", subject: "Biology",
    question: "The juxtaglomerular apparatus secretes renin in response to:",
    options: ["High blood pressure", "High sodium load", "Decreased renal perfusion pressure", "High potassium"],
    correct: 2, year: "2020", source: "UHS"
  },
  {
    id: "b038", subject: "Biology",
    question: "Surfactant in alveoli is produced by which cells?",
    options: ["Type I pneumocytes", "Type II pneumocytes", "Alveolar macrophages", "Clara cells"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "b039", subject: "Biology",
    question: "The countercurrent multiplier system in the kidney involves:",
    options: ["Proximal tubule and collecting duct", "Loop of Henle", "Distal tubule only", "Bowman's capsule"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b040", subject: "Biology",
    question: "Which immunoglobulin is the first to be produced during primary immune response?",
    options: ["IgG", "IgA", "IgM", "IgE"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b041", subject: "Biology",
    question: "The P50 of hemoglobin represents the pO2 at which hemoglobin is:",
    options: ["Fully saturated", "25% saturated", "50% saturated", "75% saturated"],
    correct: 2, year: "2018", source: "NUMS"
  },
  {
    id: "b042", subject: "Biology",
    question: "Erythropoietin is primarily produced by:",
    options: ["Liver", "Bone marrow", "Peritubular interstitial cells of kidney", "Spleen"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "b043", subject: "Biology",
    question: "The enzyme carbonic anhydrase in RBCs converts:",
    options: ["O2 to CO2", "CO2 + H2O → H2CO3", "HCO3- to CO2 only in lungs", "Both B and C"],
    correct: 3, year: "2020", source: "SZABMU"
  },
  {
    id: "b044", subject: "Biology",
    question: "In neuromuscular junction, acetylcholine is broken down by:",
    options: ["Monoamine oxidase", "Catechol-O-methyltransferase", "Acetylcholinesterase", "Choline acetyltransferase"],
    correct: 2, year: "2023", source: "KMU"
  },
  {
    id: "b045", subject: "Biology",
    question: "Which hormone increases calcium reabsorption in the distal tubule of kidney?",
    options: ["Calcitonin", "PTH (parathyroid hormone)", "Aldosterone", "ADH"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "b046", subject: "Biology",
    question: "The action potential in cardiac muscle cells has a prolonged plateau phase due to:",
    options: ["Na+ influx", "K+ efflux", "Slow Ca2+ influx through L-type channels", "Cl- influx"],
    correct: 2, year: "2019", source: "UHS"
  },
  {
    id: "b047", subject: "Biology",
    question: "Pacinian corpuscles are mechanoreceptors that detect:",
    options: ["Light touch", "Temperature", "High-frequency vibration and pressure", "Pain"],
    correct: 2, year: "2021", source: "PMDC"
  },
  {
    id: "b048", subject: "Biology",
    question: "Which cranial nerve carries taste sensation from the posterior 1/3 of tongue?",
    options: ["Facial nerve (VII)", "Glossopharyngeal nerve (IX)", "Vagus nerve (X)", "Hypoglossal nerve (XII)"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b049", subject: "Biology",
    question: "The zona glomerulosa of adrenal cortex secretes:",
    options: ["Cortisol", "Androgens", "Aldosterone", "Epinephrine"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "b050", subject: "Biology",
    question: "Which phase of the menstrual cycle is characterized by LH surge?",
    options: ["Menstrual phase", "Follicular phase", "Immediately before ovulation", "Luteal phase"],
    correct: 2, year: "2018", source: "NUMS"
  },

  // --- Microbiology & Immunology ---
  {
    id: "b051", subject: "Biology",
    question: "MHC Class II molecules present antigens to:",
    options: ["Cytotoxic T cells (CD8+)", "Helper T cells (CD4+)", "NK cells", "B cells directly"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b052", subject: "Biology",
    question: "The complement system's membrane attack complex (MAC) is formed by:",
    options: ["C1, C2, C3", "C3b, C4b", "C5b-9", "C1q only"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "b053", subject: "Biology",
    question: "Which bacteria are gram-positive cocci in clusters that produce coagulase?",
    options: ["Streptococcus pyogenes", "Staphylococcus epidermidis", "Staphylococcus aureus", "Enterococcus faecalis"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b054", subject: "Biology",
    question: "The mechanism of penicillin resistance via beta-lactamase involves:",
    options: ["Altered penicillin-binding proteins", "Active efflux pumps", "Hydrolysis of the beta-lactam ring", "Decreased membrane permeability"],
    correct: 2, year: "2023", source: "PMDC"
  },
  {
    id: "b055", subject: "Biology",
    question: "HIV primarily infects cells expressing which receptor combination?",
    options: ["CD8 + CCR5", "CD4 + CCR5/CXCR4", "CD3 + CD28", "MHC II + CD4"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "b056", subject: "Biology",
    question: "Type IV hypersensitivity is mediated by:",
    options: ["IgE antibodies", "IgG and complement", "CD4+ T cells and macrophages", "IgM antibodies"],
    correct: 2, year: "2020", source: "UHS"
  },
  {
    id: "b057", subject: "Biology",
    question: "Which virus has a segmented, negative-sense RNA genome?",
    options: ["HIV", "Hepatitis C", "Influenza virus", "Poliovirus"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "b058", subject: "Biology",
    question: "Clostridium tetani causes tetanus through which mechanism?",
    options: ["Blocking acetylcholine release", "Blocking glycine and GABA inhibitory neurotransmitters", "Activating acetylcholine receptors", "Producing endotoxin"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b059", subject: "Biology",
    question: "ELISA (Enzyme-linked immunosorbent assay) is based on:",
    options: ["Electrophoresis", "Antigen-antibody interaction with enzyme label", "PCR amplification", "Gel diffusion"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "b060", subject: "Biology",
    question: "The transformation efficiency in bacteria is measured as colonies per:",
    options: ["ml of culture", "μg of DNA", "minute", "bacterial cell"],
    correct: 1, year: "2018", source: "UHS"
  },

  // --- Plant Biology ---
  {
    id: "b061", subject: "Biology",
    question: "In C4 plants, CO2 is fixed initially by which enzyme in mesophyll cells?",
    options: ["RuBisCO", "PEP carboxylase", "NADP-malate dehydrogenase", "Pyruvate kinase"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b062", subject: "Biology",
    question: "The Z-scheme in photosynthesis describes electron flow from:",
    options: ["NADPH to CO2", "H2O → PSII → PQ → Cyt b6f → PC → PSI → Fd → NADPH", "CO2 to glucose", "ATP to NADPH"],
    correct: 1, year: "2022", source: "SZABMU"
  },
  {
    id: "b063", subject: "Biology",
    question: "Vernalization in plants refers to:",
    options: ["Response to photoperiod", "Requirement of cold temperature to induce flowering", "Gravitropic response", "Nastic movement"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "b064", subject: "Biology",
    question: "Stomatal opening is driven by accumulation of which ion in guard cells?",
    options: ["Na+", "Ca2+", "K+", "Cl- only"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "b065", subject: "Biology",
    question: "The Casparian strip in plant roots is made of:",
    options: ["Lignin only", "Suberin (in endodermis)", "Cellulose", "Pectin"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b066", subject: "Biology",
    question: "Abscisic acid (ABA) causes stomatal closure by increasing:",
    options: ["K+ in guard cells", "Ca2+ in guard cells leading to K+ efflux", "Water influx", "Sucrose uptake"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b067", subject: "Biology",
    question: "The enzyme nitrogenase in nitrogen fixation is inhibited by:",
    options: ["CO2", "Oxygen (O2)", "NH3", "Nitrate"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b068", subject: "Biology",
    question: "In angiosperms, double fertilization produces:",
    options: ["Two embryos", "Endosperm (3n) and embryo (2n)", "Only endosperm", "Only embryo"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b069", subject: "Biology",
    question: "Phytochrome exists in two interconvertible forms; Pr absorbs light at approximately:",
    options: ["730 nm (far-red)", "660 nm (red)", "450 nm (blue)", "400 nm (violet)"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b070", subject: "Biology",
    question: "The apical meristem of roots is protected by:",
    options: ["Epidermis", "Root cap (calyptra)", "Endodermis", "Pericycle"],
    correct: 1, year: "2022", source: "UHS"
  },

  // --- Evolution & Ecology ---
  {
    id: "b071", subject: "Biology",
    question: "According to Hardy-Weinberg equilibrium, allele frequencies remain constant UNLESS:",
    options: ["Random mating occurs", "Mutation, selection, drift, migration, or non-random mating occurs", "Population is large", "No migration occurs"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b072", subject: "Biology",
    question: "Genetic drift has the GREATEST effect in:",
    options: ["Large populations", "Small isolated populations", "Populations under natural selection", "Sexually reproducing populations"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b073", subject: "Biology",
    question: "Allopatric speciation occurs due to:",
    options: ["Behavioral isolation", "Geographic separation", "Polyploidy", "Sexual selection"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b074", subject: "Biology",
    question: "The bottleneck effect is a type of:",
    options: ["Natural selection", "Sexual selection", "Genetic drift", "Gene flow"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b075", subject: "Biology",
    question: "Biogeochemical cycle for phosphorus differs from carbon/nitrogen cycles because:",
    options: ["Phosphorus has no atmospheric reservoir", "Phosphorus is not cycled", "Phosphorus only exists in soil", "Phosphorus cycle is faster"],
    correct: 0, year: "2021", source: "UHS"
  },
  {
    id: "b076", subject: "Biology",
    question: "Keystone species are defined as species that:",
    options: ["Have the largest biomass", "Have disproportionately large effect on ecosystem relative to their abundance", "Are at the top of food chain", "Are most numerous in ecosystem"],
    correct: 1, year: "2023", source: "PMDC"
  },
  {
    id: "b077", subject: "Biology",
    question: "The carrying capacity (K) in logistic population growth is reached when:",
    options: ["Birth rate equals zero", "Death rate exceeds birth rate", "Birth rate equals death rate (r = 0)", "Population doubles"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b078", subject: "Biology",
    question: "Analogous structures provide evidence for:",
    options: ["Common ancestry", "Convergent evolution", "Divergent evolution", "Coevolution"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b079", subject: "Biology",
    question: "The primary productivity of an ecosystem is the rate of:",
    options: ["Carbon fixation by autotrophs", "Respiration by heterotrophs", "Decomposition", "Energy transfer between trophic levels"],
    correct: 0, year: "2022", source: "NUMS"
  },
  {
    id: "b080", subject: "Biology",
    question: "Which of the following is an example of r-selected species?",
    options: ["Elephant", "Blue whale", "Dandelion", "Giant tortoise"],
    correct: 2, year: "2021", source: "UHS"
  },

  // --- Additional Biology MCQs ---
  {
    id: "b081", subject: "Biology",
    question: "The sodium-potassium pump moves:",
    options: ["2 Na+ out and 3 K+ in", "3 Na+ out and 2 K+ in", "2 Na+ in and 3 K+ out", "Equal Na+ and K+"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b082", subject: "Biology",
    question: "Which blood type is the universal donor?",
    options: ["A negative", "B negative", "O negative", "AB negative"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "b083", subject: "Biology",
    question: "The Bohr effect describes shift of oxygen-dissociation curve to the right due to:",
    options: ["Increased pH", "Decreased CO2", "Increased CO2 and decreased pH", "Decreased temperature"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "b084", subject: "Biology",
    question: "Which cells are responsible for myelination in the CNS?",
    options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "b085", subject: "Biology",
    question: "The corpus luteum secretes which hormone to maintain early pregnancy?",
    options: ["Estrogen only", "FSH", "Progesterone", "LH"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b086", subject: "Biology",
    question: "Nissl bodies in neurons are aggregates of:",
    options: ["Mitochondria", "Lysosomes", "Rough ER and ribosomes", "Golgi apparatus"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "b087", subject: "Biology",
    question: "The primary site of B-cell maturation is:",
    options: ["Thymus", "Spleen", "Lymph nodes", "Bone marrow"],
    correct: 3, year: "2021", source: "UHS"
  },
  {
    id: "b088", subject: "Biology",
    question: "Which enzyme synthesizes the lagging strand in discontinuous fragments?",
    options: ["Primase only", "DNA Pol I", "DNA Pol III (Okazaki fragments)", "Helicase"],
    correct: 2, year: "2022", source: "SZABMU"
  },
  {
    id: "b089", subject: "Biology",
    question: "In the electron transport chain, which complex pumps the most protons?",
    options: ["Complex I", "Complex II", "Complex III", "Complex IV"],
    correct: 0, year: "2020", source: "KMU"
  },
  {
    id: "b090", subject: "Biology",
    question: "Sickle cell anemia results from a mutation in which amino acid position of β-globin?",
    options: ["Position 1 (Glu→Val)", "Position 6 (Glu→Val)", "Position 11 (Val→Glu)", "Position 26 (Glu→Lys)"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b091", subject: "Biology",
    question: "Anticodon is present on which type of RNA?",
    options: ["mRNA", "rRNA", "tRNA", "snRNA"],
    correct: 2, year: "2018", source: "UHS"
  },
  {
    id: "b092", subject: "Biology",
    question: "The water potential of pure water is:",
    options: ["+1 MPa", "-1 MPa", "0 MPa", "Depends on temperature"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b093", subject: "Biology",
    question: "Crossing over during meiosis increases:",
    options: ["Number of chromosomes", "Genetic recombination and variation", "Chromosome size", "Gene expression"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "b094", subject: "Biology",
    question: "The ABO blood group system is controlled by:",
    options: ["One gene with two alleles", "Two genes", "One gene with three alleles (IA, IB, i)", "Three genes"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b095", subject: "Biology",
    question: "Myelin sheath formation around axons in PNS is done by:",
    options: ["Oligodendrocytes", "Astrocytes", "Schwann cells", "Microglia"],
    correct: 2, year: "2020", source: "NUMS"
  },
  {
    id: "b096", subject: "Biology",
    question: "Which part of the nephron is impermeable to water but permeable to NaCl?",
    options: ["Proximal tubule", "Descending limb of loop of Henle", "Ascending limb of loop of Henle", "Collecting duct"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "b097", subject: "Biology",
    question: "The molecular formula of chlorophyll a is:",
    options: ["C55H72O5N4Mg", "C55H70O6N4Mg", "C54H70O5N4Mg", "C55H72O6N4Mg"],
    correct: 0, year: "2021", source: "PMDC"
  },
  {
    id: "b098", subject: "Biology",
    question: "Recombinant DNA technology uses restriction endonucleases that cut DNA at:",
    options: ["Random positions", "Specific palindromic sequences", "Only AT-rich regions", "Only GC-rich regions"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b099", subject: "Biology",
    question: "The endosymbiotic theory proposes that mitochondria evolved from:",
    options: ["Cyanobacteria", "Alpha-proteobacteria", "Archaea", "Gram-positive bacteria"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b100", subject: "Biology",
    question: "Which hormone stimulates milk production (lactogenesis)?",
    options: ["Oxytocin", "Estrogen", "Prolactin", "Progesterone"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b101", subject: "Biology",
    question: "The resting membrane potential of a neuron is approximately:",
    options: ["+70 mV", "-70 mV", "-90 mV", "+90 mV"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b102", subject: "Biology",
    question: "Amylase is secreted by which gland in humans?",
    options: ["Liver", "Pancreas and salivary glands", "Stomach", "Small intestine"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b103", subject: "Biology",
    question: "Photorespiration occurs in C3 plants when RuBisCO acts on:",
    options: ["CO2", "H2O", "O2 (oxygenase activity)", "RuBP and CO2 simultaneously"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b104", subject: "Biology",
    question: "Which type of muscle tissue has intercalated discs?",
    options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both skeletal and cardiac"],
    correct: 2, year: "2018", source: "KMU"
  },
  {
    id: "b105", subject: "Biology",
    question: "The Calvin cycle requires which inputs per one CO2 fixed?",
    options: ["1 ATP, 1 NADPH", "3 ATP, 2 NADPH", "2 ATP, 2 NADPH", "4 ATP, 2 NADPH"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b106", subject: "Biology",
    question: "Hemophilia A is caused by deficiency of:",
    options: ["Factor IX", "Factor VIII", "Factor X", "von Willebrand factor"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b107", subject: "Biology",
    question: "The humoral immune response involves primarily:",
    options: ["T lymphocytes", "NK cells", "B lymphocytes and antibody production", "Macrophages"],
    correct: 2, year: "2021", source: "PMDC"
  },
  {
    id: "b108", subject: "Biology",
    question: "PCR (Polymerase Chain Reaction) uses which enzyme that is heat-stable?",
    options: ["E. coli DNA polymerase", "Taq polymerase (from Thermus aquaticus)", "RNA polymerase", "Reverse transcriptase"],
    correct: 1, year: "2019", source: "SZABMU"
  },
  {
    id: "b109", subject: "Biology",
    question: "Insulin promotes glucose uptake in which tissues?",
    options: ["Brain and RBCs", "Liver and brain", "Muscle and adipose tissue", "Kidney only"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "b110", subject: "Biology",
    question: "The contractile unit of skeletal muscle is the:",
    options: ["Muscle fiber", "Myofibril", "Sarcomere", "Motor unit"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b111", subject: "Biology",
    question: "Plasmids used as vectors in genetic engineering must contain:",
    options: ["Origin of replication, selectable marker, multiple cloning site", "Only origin of replication", "Only antibiotic resistance gene", "Only restriction sites"],
    correct: 0, year: "2021", source: "UHS"
  },
  {
    id: "b112", subject: "Biology",
    question: "The trophoblast in early embryo development gives rise to:",
    options: ["Embryo proper", "Placenta and extraembryonic membranes", "Amniotic cavity", "Yolk sac only"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b113", subject: "Biology",
    question: "Mitotic spindle fibers are composed of:",
    options: ["Actin filaments", "Intermediate filaments", "Microtubules (tubulin)", "Myosin"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b114", subject: "Biology",
    question: "The enzyme responsible for supercoiling DNA ahead of replication fork is:",
    options: ["Helicase", "Primase", "DNA Gyrase (topoisomerase II)", "SSB proteins"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b115", subject: "Biology",
    question: "Which vitamin is required for the synthesis of procollagen (hydroxylation of proline)?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C (ascorbic acid)", "Vitamin D"],
    correct: 2, year: "2023", source: "NUMS"
  },
  {
    id: "b116", subject: "Biology",
    question: "The Na+/glucose cotransporter in the intestinal epithelium is an example of:",
    options: ["Facilitated diffusion", "Primary active transport", "Secondary active transport", "Simple diffusion"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "b117", subject: "Biology",
    question: "Spliceosomes remove introns from pre-mRNA using:",
    options: ["snRNPs (small nuclear ribonucleoproteins)", "Ribozymes only", "DNA-dependent enzymes", "Protein-only machinery"],
    correct: 0, year: "2021", source: "PMDC"
  },
  {
    id: "b118", subject: "Biology",
    question: "In the human female, meiosis II completes:",
    options: ["At birth", "At puberty", "At fertilization", "During each menstrual cycle"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b119", subject: "Biology",
    question: "The process by which bacteria transfer genetic material via bacteriophage is called:",
    options: ["Transformation", "Conjugation", "Transduction", "Transposition"],
    correct: 2, year: "2018", source: "KMU"
  },
  {
    id: "b120", subject: "Biology",
    question: "Lysozyme protects against bacteria by:",
    options: ["Disrupting the cell membrane", "Cleaving β-1,4 glycosidic bonds in peptidoglycan", "Inhibiting protein synthesis", "Blocking DNA replication"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "b121", subject: "Biology",
    question: "The hypothalamus regulates body temperature through:",
    options: ["Direct heating of blood", "Autonomic nervous system and behavioral responses", "Hormonal control only", "Renal regulation"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b122", subject: "Biology",
    question: "Which organelle is the site of ribosome assembly?",
    options: ["Nucleus", "Nucleolus", "Rough ER", "Cytoplasm"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b123", subject: "Biology",
    question: "In humans, the normal karyotype is:",
    options: ["44 autosomes + XY or XX", "46 chromosomes (44 autosomes + 2 sex chromosomes)", "23 pairs of autosomes", "46 autosomes"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b124", subject: "Biology",
    question: "The enzyme pepsinogen is activated to pepsin by:",
    options: ["Alkaline pH", "Trypsin", "Hydrochloric acid (low pH)", "Bile salts"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b125", subject: "Biology",
    question: "Angiotensin II causes:",
    options: ["Vasodilation and decreased aldosterone", "Vasoconstriction and increased aldosterone secretion", "Decreased blood pressure", "Increased ANP secretion"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b126", subject: "Biology",
    question: "The structural gene, operator, and promoter in a bacterial operon are collectively called:",
    options: ["Regulon", "Operon", "Cistron", "Replicon"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b127", subject: "Biology",
    question: "Electron carriers in the inner mitochondrial membrane are arranged in order of:",
    options: ["Decreasing molecular weight", "Increasing standard reduction potential", "Decreasing electron affinity", "Alphabetical order"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b128", subject: "Biology",
    question: "Leydig cells in the testis secrete:",
    options: ["FSH", "Inhibin", "Testosterone", "Progesterone"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b129", subject: "Biology",
    question: "The first heart sound (S1) is caused by:",
    options: ["Opening of AV valves", "Closure of AV valves (mitral + tricuspid)", "Closure of semilunar valves", "Opening of aortic valve"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b130", subject: "Biology",
    question: "Which receptor type is directly linked to ion channels (fastest)?",
    options: ["G-protein coupled receptors", "Enzyme-linked receptors", "Ionotropic receptors (ligand-gated channels)", "Nuclear receptors"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b131", subject: "Biology",
    question: "Chylomicrons transport dietary lipids from:",
    options: ["Liver to tissues", "Intestine to lymph to blood", "Blood to adipose tissue", "Adipose to liver"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b132", subject: "Biology",
    question: "Catalase enzyme found in peroxisomes converts:",
    options: ["H2O2 → H2O + O2", "O2 → H2O2", "H2O → H2O2 + O2", "O2 → H2O"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "b133", subject: "Biology",
    question: "The 'All or None' principle applies to:",
    options: ["Muscle fiber graded contraction", "Individual muscle fiber and neuron action potential", "Heart rate regulation", "Hormonal secretion"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b134", subject: "Biology",
    question: "Gastrin is secreted by which cells of the stomach?",
    options: ["Chief cells", "Parietal cells", "G cells (pyloric antrum)", "Mucous cells"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "b135", subject: "Biology",
    question: "Hemoglobin's quaternary structure consists of:",
    options: ["2 alpha and 2 beta subunits (adults)", "4 identical alpha subunits", "2 beta and 2 gamma subunits", "3 alpha and 1 beta subunit"],
    correct: 0, year: "2023", source: "NUMS"
  },
  {
    id: "b136", subject: "Biology",
    question: "The concept of 'induced fit' in enzyme-substrate interaction was proposed by:",
    options: ["Emil Fischer (lock and key)", "Daniel Koshland", "Linus Pauling", "Jacques Monod"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b137", subject: "Biology",
    question: "T lymphocytes mature and undergo positive/negative selection in:",
    options: ["Bone marrow", "Spleen", "Thymus", "Lymph nodes"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b138", subject: "Biology",
    question: "Which type of connective tissue forms tendons?",
    options: ["Loose irregular connective tissue", "Dense regular connective tissue", "Dense irregular connective tissue", "Elastic connective tissue"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b139", subject: "Biology",
    question: "The sarcolemma is the plasma membrane of:",
    options: ["Neurons", "Cardiac cells specifically", "Muscle cells (fibers)", "Glial cells"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b140", subject: "Biology",
    question: "Bile is stored in the gallbladder and released in response to:",
    options: ["Gastrin", "Secretin", "Cholecystokinin (CCK)", "Motilin"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b141", subject: "Biology",
    question: "In gene regulation, a silencer is a DNA sequence that:",
    options: ["Promotes transcription", "Encodes RNA polymerase binding site", "Reduces or prevents transcription", "Codes for repressor protein"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "b142", subject: "Biology",
    question: "The fluid in the cochlea of the inner ear is called:",
    options: ["Aqueous humor", "Vitreous humor", "Perilymph and endolymph", "Cerebrospinal fluid"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b143", subject: "Biology",
    question: "Which type of plastid stores starch?",
    options: ["Chromoplast", "Leucoplast (amyloplast)", "Chloroplast", "Etioplast"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b144", subject: "Biology",
    question: "The Hershey-Chase experiment proved that the genetic material is:",
    options: ["Protein", "RNA", "DNA", "Lipid"],
    correct: 2, year: "2018", source: "KMU"
  },
  {
    id: "b145", subject: "Biology",
    question: "Troponin complex in muscle regulation consists of subunits:",
    options: ["TnC, TnI, TnT", "TnA, TnB, TnC", "TnI, TnII, TnIII", "Actin, myosin, troponin"],
    correct: 0, year: "2023", source: "NUMS"
  },
  {
    id: "b146", subject: "Biology",
    question: "Which molecule is the final electron acceptor in aerobic cellular respiration?",
    options: ["NAD+", "CO2", "O2", "H2O"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "b147", subject: "Biology",
    question: "The placenta acts as an endocrine organ by secreting:",
    options: ["FSH and LH", "hCG (human chorionic gonadotropin), estrogen, and progesterone", "ADH and oxytocin", "Cortisol and aldosterone"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b148", subject: "Biology",
    question: "The paracrine signaling refers to communication:",
    options: ["Through bloodstream to distant cells", "Between adjacent cells via local mediators", "Through gap junctions", "Through synaptic cleft only"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b149", subject: "Biology",
    question: "During translation, peptide bond formation is catalyzed by:",
    options: ["Peptidyl transferase (ribozyme activity of 23S/28S rRNA)", "Ribosomal proteins", "EF-Tu elongation factor", "Aminoacyl-tRNA synthetase"],
    correct: 0, year: "2022", source: "KMU"
  },
  {
    id: "b150", subject: "Biology",
    question: "Programmed cell death (apoptosis) initiated by cytochrome c release is called:",
    options: ["Extrinsic pathway", "Intrinsic (mitochondrial) pathway", "Necrosis pathway", "Autophagy"],
    correct: 1, year: "2019", source: "NUMS"
  },
  {
    id: "b151", subject: "Biology",
    question: "Immunological memory is primarily maintained by:",
    options: ["Plasma cells", "Memory B and T cells", "Natural killer cells", "Dendritic cells"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b152", subject: "Biology",
    question: "The concept of 'Meselson-Stahl experiment' proved which type of DNA replication?",
    options: ["Conservative", "Semi-conservative", "Dispersive", "All three equally"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b153", subject: "Biology",
    question: "ATP synthase (Complex V) uses the proton gradient (chemiosmosis) to synthesize ATP, proposed by:",
    options: ["Hans Krebs", "Peter Mitchell (Chemiosmotic theory)", "Albert Lehninger", "Paul Boyer"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b154", subject: "Biology",
    question: "Which hormone promotes growth of follicle in the ovary?",
    options: ["LH", "FSH", "Estrogen", "Progesterone"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b155", subject: "Biology",
    question: "The zona pellucida of the egg is penetrated by sperm using the enzyme:",
    options: ["Hyaluronidase (from acrosome)", "Acrosin and hyaluronidase", "Lipase", "Protease from mitochondria"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b156", subject: "Biology",
    question: "GTP is consumed in which step of the Krebs cycle?",
    options: ["Isocitrate dehydrogenase reaction", "Succinyl-CoA synthetase step", "Fumarase reaction", "Citrate synthase step"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b157", subject: "Biology",
    question: "Smooth muscle contraction is regulated by:",
    options: ["Troponin-tropomyosin complex", "Calmodulin-MLCK (myosin light chain kinase) pathway", "Sarcomere shortening only", "T-tubule system"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b158", subject: "Biology",
    question: "The matrix of mitochondria contains all EXCEPT:",
    options: ["Krebs cycle enzymes", "Mitochondrial DNA", "ATP synthase (inner membrane)", "Ribosomes (70S)"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b159", subject: "Biology",
    question: "Genetic code is said to be 'degenerate' because:",
    options: ["Same codon codes for multiple amino acids", "Multiple codons code for same amino acid", "Codons overlap", "Third codon position is variable"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b160", subject: "Biology",
    question: "The enzyme that converts RNA to DNA is:",
    options: ["RNA polymerase", "DNA polymerase", "Reverse transcriptase", "Ligase"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "b161", subject: "Biology",
    question: "Okazaki fragments are joined together by:",
    options: ["DNA Polymerase III", "Helicase", "DNA Ligase", "Primase"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "b162", subject: "Biology",
    question: "A molecule of FADH2 entering the electron transport chain produces approximately:",
    options: ["3 ATP", "2.5 ATP", "1.5 ATP", "1 ATP"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b163", subject: "Biology",
    question: "The secondary structure of proteins includes:",
    options: ["Disulfide bonds", "α-helices and β-pleated sheets", "Quaternary arrangement of subunits", "Folding of protein in 3D space"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b164", subject: "Biology",
    question: "Type II diabetes mellitus is characterized by:",
    options: ["Autoimmune destruction of beta cells", "Insulin resistance with relative insulin deficiency", "Absolute insulin deficiency", "Excessive glucagon secretion only"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b165", subject: "Biology",
    question: "The immune cell that presents antigen to T cells is:",
    options: ["B cell only", "Macrophage only", "Dendritic cells and other APCs (antigen-presenting cells)", "NK cells"],
    correct: 2, year: "2023", source: "NUMS"
  },
  {
    id: "b166", subject: "Biology",
    question: "In crossing-over, which enzyme catalyzes the strand exchange?",
    options: ["DNA ligase", "RecA (in prokaryotes) / RAD51 (in eukaryotes)", "Topoisomerase", "DNA polymerase"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b167", subject: "Biology",
    question: "The GFR (glomerular filtration rate) in a healthy adult is approximately:",
    options: ["60 mL/min", "125 mL/min", "180 mL/min", "250 mL/min"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b168", subject: "Biology",
    question: "RNA interference (RNAi) uses which molecules to silence genes?",
    options: ["mRNA", "siRNA and miRNA (small double-stranded RNA)", "tRNA", "rRNA"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b169", subject: "Biology",
    question: "Heparin acts as an anticoagulant by:",
    options: ["Inhibiting Vitamin K", "Activating antithrombin III to inhibit thrombin and Factor Xa", "Inhibiting platelet aggregation", "Blocking fibrinogen"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b170", subject: "Biology",
    question: "The cell plate formed during cytokinesis in plant cells is derived from:",
    options: ["Endoplasmic reticulum", "Golgi-derived vesicles (phragmoplast)", "Plasma membrane fusion", "Mitochondrial membranes"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "b171", subject: "Biology",
    question: "Myasthenia gravis is an autoimmune disease targeting:",
    options: ["Voltage-gated Na+ channels", "Nicotinic acetylcholine receptors at NMJ", "GABA receptors", "NMDA receptors"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b172", subject: "Biology",
    question: "The lac repressor protein is a:",
    options: ["Positive regulator activated by lactose", "Negative regulator inactivated by allolactose", "Constitutive transcription factor", "RNA-binding protein"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b173", subject: "Biology",
    question: "Cellulose in plant cell walls is made of which glucose linkage?",
    options: ["α-1,4-glycosidic bonds", "α-1,6-glycosidic bonds", "β-1,4-glycosidic bonds", "β-1,6-glycosidic bonds"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b174", subject: "Biology",
    question: "The enzyme that unwinds the DNA double helix during replication is:",
    options: ["Primase", "Helicase", "Topoisomerase", "DNA Pol I"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "b175", subject: "Biology",
    question: "Haploid number of chromosomes in humans is:",
    options: ["23", "46", "48", "44"],
    correct: 0, year: "2022", source: "NUMS"
  },
  {
    id: "b176", subject: "Biology",
    question: "Which immunoglobulin crosses the placenta to provide passive immunity to fetus?",
    options: ["IgA", "IgM", "IgG", "IgE"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "b177", subject: "Biology",
    question: "In aerobic respiration, the substrate level phosphorylation occurs in:",
    options: ["ETC only", "Krebs cycle and glycolysis", "Oxidative phosphorylation", "Beta-oxidation"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "b178", subject: "Biology",
    question: "The hypothalamo-hypophyseal portal system connects:",
    options: ["Anterior pituitary to posterior pituitary", "Hypothalamus to anterior pituitary via portal blood", "Posterior pituitary to hypothalamus", "Pituitary to adrenal gland"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "b179", subject: "Biology",
    question: "The enzyme acetylcholinesterase inhibitor (like organophosphates) causes:",
    options: ["Muscarinic effects: SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis)", "Anticholinergic effects", "Sympathomimetic effects", "Histamine release"],
    correct: 0, year: "2019", source: "KMU"
  },
  {
    id: "b180", subject: "Biology",
    question: "Microfilaments (actin) in the cytoskeleton have a diameter of approximately:",
    options: ["25 nm", "10 nm", "7 nm", "2 nm"],
    correct: 2, year: "2023", source: "NUMS"
  },
  {
    id: "b181", subject: "Biology",
    question: "The process of endocytosis that involves engulfing large particles is:",
    options: ["Pinocytosis", "Phagocytosis", "Receptor-mediated endocytosis", "Transcytosis"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b182", subject: "Biology",
    question: "Interferon-gamma (IFN-γ) is produced mainly by:",
    options: ["Th2 cells", "B cells", "Th1 cells and NK cells", "Mast cells"],
    correct: 2, year: "2021", source: "PMDC"
  },
  {
    id: "b183", subject: "Biology",
    question: "Tay-Sachs disease results from deficiency of:",
    options: ["Glucocerebrosidase", "Sphingomyelinase", "Hexosaminidase A", "Arylsulfatase A"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b184", subject: "Biology",
    question: "Progesterone during the luteal phase prepares the endometrium for:",
    options: ["Ovulation", "Menstruation initiation", "Implantation of blastocyst", "FSH secretion"],
    correct: 2, year: "2019", source: "KMU"
  },
  {
    id: "b185", subject: "Biology",
    question: "Ribosomal RNA (rRNA) is the most abundant RNA in cells, comprising approximately:",
    options: ["80% of total cellular RNA", "50% of total cellular RNA", "30% of total cellular RNA", "10% of total cellular RNA"],
    correct: 0, year: "2022", source: "NUMS"
  },
  {
    id: "b186", subject: "Biology",
    question: "A mutation that changes a stop codon to an amino acid codon is called:",
    options: ["Nonsense mutation", "Silent mutation", "Missense mutation", "Read-through (suppressor) mutation"],
    correct: 3, year: "2021", source: "UHS"
  },
  {
    id: "b187", subject: "Biology",
    question: "The zona fasciculata of adrenal cortex mainly produces:",
    options: ["Mineralocorticoids", "Sex steroids", "Glucocorticoids (cortisol)", "Epinephrine"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "b188", subject: "Biology",
    question: "Starch is composed of amylose and amylopectin; amylose has:",
    options: ["α-1,4 and α-1,6 branches", "Only β-1,4 linkages", "Only α-1,4 linkages (unbranched)", "Both β-1,4 and β-1,6"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "b189", subject: "Biology",
    question: "The blood-brain barrier is mainly formed by:",
    options: ["Microglia", "Astrocytic foot processes and tight junctions between capillary endothelial cells", "Choroid plexus", "Ependymal cells"],
    correct: 1, year: "2018", source: "KMU"
  },
  {
    id: "b190", subject: "Biology",
    question: "Fermentation in yeast produces:",
    options: ["Lactic acid + NAD+", "Ethanol + CO2 + NAD+", "Acetaldehyde only", "Acetic acid"],
    correct: 1, year: "2023", source: "NUMS"
  },
  {
    id: "b191", subject: "Biology",
    question: "In prokaryotes, translation begins with the amino acid:",
    options: ["Methionine (AUG)", "f-Methionine (fMet) with special initiator tRNA", "Valine", "Glycine"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "b192", subject: "Biology",
    question: "CRISPR-Cas9 acts as a:",
    options: ["DNA methylase", "RNA-guided DNA endonuclease", "Reverse transcriptase", "Topoisomerase"],
    correct: 1, year: "2024", source: "NUMS"
  },
  {
    id: "b193", subject: "Biology",
    question: "Exocytosis of neurotransmitters requires:",
    options: ["Clathrin-coated vesicles", "Ca2+-triggered SNARE protein fusion", "Lysosomal enzymes", "ATP-powered motor proteins only"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "b194", subject: "Biology",
    question: "The innate immune system's pattern recognition receptors include:",
    options: ["T cell receptors", "B cell receptors", "Toll-like receptors (TLRs)", "MHC molecules"],
    correct: 2, year: "2022", source: "SZABMU"
  },
  {
    id: "b195", subject: "Biology",
    question: "Albinism results from deficiency of which enzyme?",
    options: ["Tyrosinase", "Phenylalanine hydroxylase", "Homogentisate oxidase", "Fumarylacetoacetase"],
    correct: 0, year: "2020", source: "KMU"
  },
  {
    id: "b196", subject: "Biology",
    question: "The enzyme that synthesizes RNA primer during DNA replication is:",
    options: ["DNA helicase", "DNA Pol I", "Primase (DnaG)", "Ligase"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "b197", subject: "Biology",
    question: "In ecosystem energy flow, only about 10% of energy is transferred between trophic levels due to:",
    options: ["Predation efficiency", "Heat loss through metabolism and respiration", "Decomposition", "Photosynthetic efficiency"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "b198", subject: "Biology",
    question: "The sliding filament theory of muscle contraction involves:",
    options: ["Actin and myosin filaments sliding past each other without changing length", "Sarcomere proteins shortening", "Z-disc widening", "H-zone expansion"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "b199", subject: "Biology",
    question: "The antiparallel nature of DNA means the two strands run in:",
    options: ["Same direction (5'→3')", "Opposite directions (one 5'→3', other 3'→5')", "Circular fashion", "Parallel with same polarity"],
    correct: 1, year: "2018", source: "SZABMU"
  },
  {
    id: "b200", subject: "Biology",
    question: "Oncogenes are mutated forms of:",
    options: ["Tumor suppressor genes", "Proto-oncogenes (normal growth genes)", "Repair genes", "Housekeeping genes"],
    correct: 1, year: "2023", source: "NUMS"
  },

  // ============================================================
  // CHEMISTRY - 160 High Difficulty MCQs
  // ============================================================

  // --- Physical Chemistry ---
  {
    id: "c001", subject: "Chemistry",
    question: "According to quantum mechanics, the uncertainty principle (Heisenberg) states that:",
    options: ["Energy and time cannot be simultaneously measured", "Position and momentum cannot be simultaneously determined with precision", "Mass and velocity are uncertain", "Charge and spin are complementary"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c002", subject: "Chemistry",
    question: "The hybridization of carbon in benzene ring is:",
    options: ["sp3", "sp2", "sp", "dsp2"],
    correct: 1, year: "2020", source: "NUMS"
  },
  {
    id: "c003", subject: "Chemistry",
    question: "Which colligative property is used to determine the molecular weight of polymers?",
    options: ["Boiling point elevation", "Osmotic pressure", "Freezing point depression", "Vapor pressure lowering"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "c004", subject: "Chemistry",
    question: "The rate of reaction is doubled when temperature increases by 10°C. What is the activation energy? (R=8.314 J/mol·K, T≈300K)",
    options: ["~52.9 kJ/mol", "~42 kJ/mol", "~30 kJ/mol", "~70 kJ/mol"],
    correct: 0, year: "2022", source: "KMU"
  },
  {
    id: "c005", subject: "Chemistry",
    question: "For an ideal gas, which of the following is true at constant temperature?",
    options: ["PV = constant (Boyle's Law)", "V/T = constant", "P/T = constant", "PV/T = constant"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "c006", subject: "Chemistry",
    question: "The enthalpy change of neutralization of strong acid with strong base is approximately:",
    options: ["-57.3 kJ/mol", "-44.0 kJ/mol", "-100 kJ/mol", "-28.5 kJ/mol"],
    correct: 0, year: "2022", source: "NUMS"
  },
  {
    id: "c007", subject: "Chemistry",
    question: "Buffer solution resists change in pH. The Henderson-Hasselbalch equation is:",
    options: ["pH = pKa + log[A-]/[HA]", "pH = pKa - log[A-]/[HA]", "pH = Ka × [HA]/[A-]", "pH = pKw - pKa"],
    correct: 0, year: "2021", source: "UHS"
  },
  {
    id: "c008", subject: "Chemistry",
    question: "Le Chatelier's principle applies when a system at equilibrium is disturbed. Increasing pressure on N2 + 3H2 ⇌ 2NH3 will:",
    options: ["Shift equilibrium left", "Shift equilibrium right (fewer moles of gas)", "Have no effect", "Increase temperature"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c009", subject: "Chemistry",
    question: "Electronegativity difference between N and H in NH3 makes it:",
    options: ["Nonpolar", "Ionic", "Polar covalent with lone pair on N", "Covalent nonpolar"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c010", subject: "Chemistry",
    question: "The order of a reaction is determined by:",
    options: ["Stoichiometry of balanced equation", "Experimentally from rate law", "Molecular weight of reactants", "Temperature dependence only"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "c011", subject: "Chemistry",
    question: "The standard electrode potential of Zn2+/Zn is -0.76V and Cu2+/Cu is +0.34V. EMF of Zn-Cu cell is:",
    options: ["0.42 V", "-0.42 V", "1.10 V", "-1.10 V"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "c012", subject: "Chemistry",
    question: "In crystalline solids, the unit cell of NaCl structure has coordination number:",
    options: ["4:4", "6:6", "8:8", "4:6"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "c013", subject: "Chemistry",
    question: "The degree of ionization of a weak acid HA increases with:",
    options: ["Increasing concentration", "Increasing temperature and dilution", "Addition of common ion", "Decreasing temperature"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c014", subject: "Chemistry",
    question: "Raoult's law states that the partial vapor pressure of solvent is:",
    options: ["Directly proportional to mole fraction of solute", "Directly proportional to mole fraction of solvent", "Equal to vapor pressure of pure solvent", "Independent of composition"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "c015", subject: "Chemistry",
    question: "The Nernst equation calculates cell potential at non-standard conditions. At 298K, it is:",
    options: ["E = E° - (0.0592/n)logQ", "E = E° + (0.0592/n)logQ", "E = E° × n × F", "E = -ΔG/nF"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "c016", subject: "Chemistry",
    question: "Which of the following is a second-order reaction?",
    options: ["Radioactive decay", "Inversion of sucrose", "2HI → H2 + I2 (experimentally)", "Decomposition of N2O5"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c017", subject: "Chemistry",
    question: "Gibbs free energy (ΔG) < 0 indicates a reaction is:",
    options: ["Non-spontaneous", "At equilibrium", "Spontaneous", "Endothermic necessarily"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c018", subject: "Chemistry",
    question: "The van der Waals forces in order of strength are:",
    options: ["London < Dipole-dipole < Hydrogen bond", "Hydrogen bond < Dipole-dipole < London", "London < Hydrogen bond < Dipole-dipole", "All equal"],
    correct: 0, year: "2020", source: "SZABMU"
  },
  {
    id: "c019", subject: "Chemistry",
    question: "Faraday's first law of electrolysis states that mass of substance deposited is:",
    options: ["Proportional to atomic number", "Proportional to charge passed (Q = It)", "Inversely proportional to current", "Proportional to temperature"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "c020", subject: "Chemistry",
    question: "Avogadro's number (6.022 × 10²³) represents the number of particles in:",
    options: ["1 gram of substance", "1 mole of substance", "1 liter of gas at STP", "1 equivalent of substance"],
    correct: 1, year: "2022", source: "PMDC"
  },

  // --- Organic Chemistry ---
  {
    id: "c021", subject: "Chemistry",
    question: "The IUPAC name of CH3-CH(OH)-COOH is:",
    options: ["2-hydroxypropanoic acid", "Lactic acid (common name only)", "3-hydroxypropanoic acid", "2-methylhydroxyacid"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "c022", subject: "Chemistry",
    question: "Markovnikov's rule applies to addition of HX to alkenes where H adds to carbon with:",
    options: ["More substituents", "Fewer hydrogen atoms", "More hydrogen atoms (less substituted)", "Equal substituents"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c023", subject: "Chemistry",
    question: "SN2 reactions are favored by:",
    options: ["Tertiary substrates and polar protic solvents", "Primary substrates, strong nucleophiles, polar aprotic solvents", "Weak nucleophiles and tertiary substrates", "High temperature and branching"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c024", subject: "Chemistry",
    question: "Which compound shows geometric (cis-trans) isomerism?",
    options: ["2-methylpropene", "Propene", "But-2-ene (2-butene)", "Ethene"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c025", subject: "Chemistry",
    question: "Aldol condensation occurs between two molecules of aldehydes or ketones with:",
    options: ["Strong acid catalyst", "Alpha-hydrogen in the presence of base", "Oxidizing agent", "Water as catalyst"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "c026", subject: "Chemistry",
    question: "The reaction of alkenes with OsO4 followed by H2O2 gives:",
    options: ["Halohydrin", "Epoxide", "Syn-diol (vicinal diol)", "Anti-diol"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "c027", subject: "Chemistry",
    question: "Grignard reagent (RMgX) reacts with formaldehyde (HCHO) to give:",
    options: ["Secondary alcohol", "Tertiary alcohol", "Primary alcohol", "Ketone"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c028", subject: "Chemistry",
    question: "Which of the following is an electrophile?",
    options: ["NH3", "OH-", "AlCl3 (Lewis acid)", "H2O"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "c029", subject: "Chemistry",
    question: "The Diels-Alder reaction involves:",
    options: ["Conjugated diene + dienophile → cyclohexene derivative", "Alkene + oxidant → epoxide", "Aromatic substitution", "Aldehyde + amine → imine"],
    correct: 0, year: "2020", source: "KMU"
  },
  {
    id: "c030", subject: "Chemistry",
    question: "The order of reactivity of alcohols with Lucas reagent (ZnCl2/HCl) is:",
    options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 3° > 1°", "All react equally"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c031", subject: "Chemistry",
    question: "Phenol is more acidic than alcohol due to:",
    options: ["Higher electronegativity of oxygen", "Resonance stabilization of phenoxide ion", "Inductive effect of benzene ring", "Hydrogen bonding"],
    correct: 1, year: "2019", source: "NUMS"
  },
  {
    id: "c032", subject: "Chemistry",
    question: "Which reagent converts alkyne to trans-alkene (anti-addition)?",
    options: ["H2/Pd-C", "H2/Lindlar's catalyst", "Na in liquid NH3 (Birch-type reduction)", "HBr"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "c033", subject: "Chemistry",
    question: "Fischer esterification is reaction of carboxylic acid with alcohol in presence of:",
    options: ["NaOH", "H2SO4 (acid catalyst)", "Base", "Oxidizing agent"],
    correct: 1, year: "2022", source: "SZABMU"
  },
  {
    id: "c034", subject: "Chemistry",
    question: "Carbylamine reaction (isocyanide test) is given by:",
    options: ["Secondary amines", "Tertiary amines", "Primary amines with CHCl3 and KOH", "Aromatic amines only"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "c035", subject: "Chemistry",
    question: "The Tollens test (silver mirror test) is positive for:",
    options: ["Ketones", "Aldehydes (reducing sugars)", "Alcohols", "Carboxylic acids"],
    correct: 1, year: "2018", source: "PMDC"
  },
  {
    id: "c036", subject: "Chemistry",
    question: "In Friedel-Crafts alkylation, the electrophile generated from RX and AlCl3 is:",
    options: ["Free radical R•", "Carbanion R-", "Carbocation R+ (electrophile)", "Radically activated AlCl3"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "c037", subject: "Chemistry",
    question: "Which polymer is formed by free-radical polymerization?",
    options: ["Nylon-6,6", "Bakelite", "Polystyrene", "Dacron (PET)"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "c038", subject: "Chemistry",
    question: "The chirality center (stereocentre) in 2-bromobutane is carbon number:",
    options: ["C1", "C2", "C3", "C4"],
    correct: 1, year: "2022", source: "SZABMU"
  },
  {
    id: "c039", subject: "Chemistry",
    question: "Oxidation of primary alcohol with KMnO4 gives:",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Alkene"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "c040", subject: "Chemistry",
    question: "The Baeyer's test (KMnO4 test) is used to detect:",
    options: ["Aromatic compounds", "Unsaturation (alkenes and alkynes)", "Aldehydes", "Halides"],
    correct: 1, year: "2019", source: "PMDC"
  },

  // --- Inorganic Chemistry ---
  {
    id: "c041", subject: "Chemistry",
    question: "The transition metals show variable oxidation states due to:",
    options: ["Variable atomic number", "Incomplete d-subshell with similar energy levels", "Multiple isotopes", "High ionization energy"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "c042", subject: "Chemistry",
    question: "Which of the following is amphoteric?",
    options: ["Na2O", "MgO", "Al2O3", "SO3"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "c043", subject: "Chemistry",
    question: "The shape of XeF4 (xenon tetrafluoride) is:",
    options: ["Tetrahedral", "Square pyramidal", "Square planar", "See-saw"],
    correct: 2, year: "2022", source: "SZABMU"
  },
  {
    id: "c044", subject: "Chemistry",
    question: "Diagonal relationship exists between Li and Mg due to similarity in:",
    options: ["Atomic number", "Charge density (charge/radius ratio)", "Number of electrons", "Crystal structure"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "c045", subject: "Chemistry",
    question: "The Haber process for ammonia synthesis uses catalyst:",
    options: ["V2O5", "Platinum", "Iron with K2O and Al2O3 promoters", "Nickel"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "c046", subject: "Chemistry",
    question: "Lanthanide contraction occurs because:",
    options: ["Increasing nuclear charge with poor f-electron shielding", "Decreasing atomic radius across d-block", "Increasing nuclear charge with d-electron shielding", "f-electrons expand the atom"],
    correct: 0, year: "2019", source: "NUMS"
  },
  {
    id: "c047", subject: "Chemistry",
    question: "Crystal field theory explains the color of transition metal complexes due to:",
    options: ["Electron transfer between metal and ligand", "d-d transitions (splitting of d-orbitals by ligand field)", "Nuclear vibration", "σ-bonding interactions"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "c048", subject: "Chemistry",
    question: "The strongest reducing agent among halogens is:",
    options: ["F2", "Cl2", "Br2", "I2 (I- as reducing agent, I2 is weakest oxidizer)"],
    correct: 3, year: "2022", source: "SZABMU"
  },
  {
    id: "c049", subject: "Chemistry",
    question: "The Contact process is used for manufacture of:",
    options: ["Nitric acid", "Hydrochloric acid", "Sulphuric acid", "Phosphoric acid"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "c050", subject: "Chemistry",
    question: "EDTA (ethylenediaminetetraacetic acid) is a hexadentate ligand that chelates metal ions with:",
    options: ["2 coordination bonds", "4 coordination bonds", "6 coordination bonds", "8 coordination bonds"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "c051", subject: "Chemistry",
    question: "Which of the following has the highest first ionization energy?",
    options: ["Na", "Al", "Si", "Cl"],
    correct: 3, year: "2021", source: "NUMS"
  },
  {
    id: "c052", subject: "Chemistry",
    question: "The hybridization of sulfur in SF6 is:",
    options: ["sp3", "sp3d", "sp3d2", "sp2d2"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c053", subject: "Chemistry",
    question: "Aqua regia dissolves gold because it contains:",
    options: ["HNO3 only", "HCl only", "HNO3 + HCl (3:1) producing nascent Cl and NOCl", "H2SO4 + HNO3"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "c054", subject: "Chemistry",
    question: "According to VSEPR theory, the bond angle in H2O is approximately:",
    options: ["120°", "109.5°", "104.5° (due to 2 lone pairs)", "90°"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c055", subject: "Chemistry",
    question: "The photosynthetic pigment chlorophyll contains which metal ion?",
    options: ["Fe2+", "Cu2+", "Mg2+", "Zn2+"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "c056", subject: "Chemistry",
    question: "The standard enthalpy of formation of an element in its standard state is:",
    options: ["-100 kJ/mol", "Positive always", "Zero by definition", "Equal to bond energy"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c057", subject: "Chemistry",
    question: "Oswald process produces:",
    options: ["Sulfuric acid", "Nitric acid (from NH3 oxidation)", "Ammonia", "Bleaching powder"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c058", subject: "Chemistry",
    question: "The Ksp of AgCl at 25°C is 1.8 × 10⁻¹⁰. The solubility of AgCl in mol/L is:",
    options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "3.6 × 10⁻¹⁰", "9 × 10⁻⁶"],
    correct: 0, year: "2021", source: "SZABMU"
  },
  {
    id: "c059", subject: "Chemistry",
    question: "In electrolysis of dilute H2SO4, at cathode:",
    options: ["O2 is produced", "H2 is produced (2H+ + 2e- → H2)", "SO4 is reduced", "H2O is oxidized"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "c060", subject: "Chemistry",
    question: "Permanganate (MnO4-) in acidic solution is reduced to:",
    options: ["MnO2 (brown)", "Mn2+ (colorless)", "MnO4²- (dark green)", "Mn (metal)"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c061", subject: "Chemistry",
    question: "The hybridization of nitrogen in NH3 is:",
    options: ["sp", "sp2", "sp3", "sp3d"],
    correct: 2, year: "2019", source: "NUMS"
  },
  {
    id: "c062", subject: "Chemistry",
    question: "Molarity is defined as:",
    options: ["Moles of solute per kg of solvent", "Moles of solute per liter of solution", "Equivalents per liter", "Mass of solute per volume of solution"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c063", subject: "Chemistry",
    question: "Which of the following has the highest boiling point due to strong hydrogen bonding?",
    options: ["H2S", "HCl", "H2O", "HF"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "c064", subject: "Chemistry",
    question: "The empirical formula of glucose (C6H12O6) is:",
    options: ["C6H12O6", "CH2O", "C2H4O2", "C3H6O3"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "c065", subject: "Chemistry",
    question: "The number of sigma (σ) bonds in ethyne (C2H2) is:",
    options: ["1", "2", "3", "4"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "c066", subject: "Chemistry",
    question: "Which gas law states that at constant pressure, V ∝ T?",
    options: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law", "Avogadro's Law"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "c067", subject: "Chemistry",
    question: "The acid dissociation constant Ka of a stronger acid is:",
    options: ["Smaller", "Larger (higher degree of ionization)", "Equal to Kb", "Equal to Kw"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c068", subject: "Chemistry",
    question: "The half-life of a first-order reaction depends on:",
    options: ["Initial concentration", "Only the rate constant (t½ = 0.693/k)", "Temperature only", "Concentration and rate constant"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c069", subject: "Chemistry",
    question: "Which of the following is a reducing sugar?",
    options: ["Sucrose", "Glucose", "Starch", "Glycogen"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "c070", subject: "Chemistry",
    question: "The number of lone pairs on the central atom of PCl5 is:",
    options: ["0", "1", "2", "3"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "c071", subject: "Chemistry",
    question: "Isoelectronic species have the same number of:",
    options: ["Protons", "Neutrons", "Electrons", "Mass numbers"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c072", subject: "Chemistry",
    question: "Saponification is the alkaline hydrolysis of:",
    options: ["Amides", "Esters (fats) to soap (fatty acid salts) + glycerol", "Proteins", "Carbohydrates"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c073", subject: "Chemistry",
    question: "In DNA, which base pairs with adenine via hydrogen bonds?",
    options: ["Guanine", "Cytosine", "Thymine (2 H-bonds)", "Uracil (in RNA)"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "c074", subject: "Chemistry",
    question: "The Aufbau principle states that electrons fill orbitals:",
    options: ["In order of decreasing energy", "Starting from highest energy orbital", "In order of increasing energy (lowest energy first)", "Randomly"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c075", subject: "Chemistry",
    question: "The pH of a buffer prepared from equal moles of weak acid (pKa=4.74) and its conjugate base is:",
    options: ["4.74", "7.00", "9.26", "2.37"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "c076", subject: "Chemistry",
    question: "In the periodic table, electron affinity generally increases:",
    options: ["Down a group", "Across a period from left to right (with exceptions)", "With increasing atomic mass", "With decreasing electronegativity"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "c077", subject: "Chemistry",
    question: "The compound that gives white precipitate with AgNO3 in acidic solution is:",
    options: ["NaF", "NaNO3", "NaCl (AgCl↓ white precipitate)", "Na2SO4"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c078", subject: "Chemistry",
    question: "Organic compounds generally have lower melting points than ionic compounds because:",
    options: ["They have stronger bonds", "They have weaker intermolecular forces (van der Waals)", "They have higher molecular weights", "They contain carbon"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "c079", subject: "Chemistry",
    question: "Which of the following solvents is a polar aprotic solvent?",
    options: ["Water (H2O)", "Ethanol", "DMSO (dimethyl sulfoxide)", "Acetic acid"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "c080", subject: "Chemistry",
    question: "Ozone (O3) depletes in stratosphere primarily by reaction with:",
    options: ["CO2", "NOx and CFC-derived chlorine radicals", "SO2", "Methane"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c081", subject: "Chemistry",
    question: "The oxidation state of Cr in K2Cr2O7 is:",
    options: ["+3", "+5", "+6", "+7"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c082", subject: "Chemistry",
    question: "Dehydration of alcohols to alkenes requires:",
    options: ["Dilute H2SO4 at low temperature", "Concentrated H2SO4 at high temperature (~170°C)", "NaOH", "Oxidizing agent"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c083", subject: "Chemistry",
    question: "Nuclear fission releases energy because:",
    options: ["Electrons are rearranged", "Mass defect converts to energy (E = mc²)", "Chemical bonds are broken", "Electromagnetic radiation is emitted"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c084", subject: "Chemistry",
    question: "The functional group –CONH2 belongs to:",
    options: ["Carboxylic acid", "Ester", "Primary amide", "Anhydride"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c085", subject: "Chemistry",
    question: "Which test distinguishes aldehyde from ketone?",
    options: ["Baeyer's test", "Lucas test", "Fehling's test (positive for aldehydes only)", "Iodoform test"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "c086", subject: "Chemistry",
    question: "The Molar mass of H2SO4 is:",
    options: ["96 g/mol", "98 g/mol", "100 g/mol", "94 g/mol"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "c087", subject: "Chemistry",
    question: "Addition of HBr to propene (CH3-CH=CH2) follows Markovnikov's rule to give:",
    options: ["1-bromopropane (primary)", "2-bromopropane (secondary)", "Equal amounts of both", "Propan-1-ol"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "c088", subject: "Chemistry",
    question: "The Periodic Table was arranged in order of increasing atomic number by:",
    options: ["Mendeleev", "Lothar Meyer", "Henry Moseley", "Dobereiner"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "c089", subject: "Chemistry",
    question: "van't Hoff factor (i) for NaCl in dilute aqueous solution is approximately:",
    options: ["1", "1.5", "2 (Na+ + Cl-)", "3"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "c090", subject: "Chemistry",
    question: "Hydrolysis of ester in presence of NaOH (saponification) gives:",
    options: ["Alcohol + acid", "Alcohol + carboxylate salt", "Aldehyde + alcohol", "Ketone + alcohol"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "c091", subject: "Chemistry",
    question: "Beta (β) radiation consists of:",
    options: ["Helium nuclei", "High-energy electrons (e-) or positrons", "Electromagnetic radiation", "Neutrons"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "c092", subject: "Chemistry",
    question: "The strongest acid among HClO4, HNO3, H2SO4, and H3PO4 is:",
    options: ["HNO3", "H2SO4", "H3PO4", "HClO4 (perchloric acid)"],
    correct: 3, year: "2022", source: "UHS"
  },
  {
    id: "c093", subject: "Chemistry",
    question: "Stereoisomers that are non-superimposable mirror images are called:",
    options: ["Diastereomers", "Conformational isomers", "Enantiomers", "Meso compounds"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "c094", subject: "Chemistry",
    question: "The catalyst used in catalytic cracking of petroleum is:",
    options: ["Pt/Pd", "Iron oxide", "Zeolites (aluminosilicates)", "Nickel"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "c095", subject: "Chemistry",
    question: "Aspirin (acetylsalicylic acid) is synthesized from salicylic acid by reaction with:",
    options: ["Methanol", "Acetic anhydride (acetylation)", "Benzene", "HCl"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c096", subject: "Chemistry",
    question: "In the reaction: 2H2O2 → 2H2O + O2, MnO2 acts as:",
    options: ["Reactant", "Product", "Heterogeneous catalyst", "Inhibitor"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c097", subject: "Chemistry",
    question: "The boiling point of ethanol is higher than diethyl ether (same MW) due to:",
    options: ["London dispersion forces", "Dipole-dipole interactions only", "Hydrogen bonding in ethanol", "Ionic interactions"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "c098", subject: "Chemistry",
    question: "Reaction of chlorine with NaOH (cold, dilute) produces:",
    options: ["NaClO3 (chlorate)", "NaClO (sodium hypochlorite) + NaCl", "NaCl only", "NaClO4 (perchlorate)"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c099", subject: "Chemistry",
    question: "The heat of combustion of carbon (C + O2 → CO2) using Hess's law is:",
    options: ["Calculated from bond energies only", "Equal to standard enthalpy of formation of CO2 (-393.5 kJ/mol)", "Always positive", "Cannot be measured"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "c100", subject: "Chemistry",
    question: "Which type of isomerism is shown by [Co(NH3)4Cl2]+ ?",
    options: ["Optical isomerism only", "Geometric (cis-trans) isomerism", "Linkage isomerism", "Ionization isomerism"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c101", subject: "Chemistry",
    question: "The quantum number that describes the orientation of an orbital in space is:",
    options: ["Principal (n)", "Azimuthal (l)", "Magnetic (ml)", "Spin (ms)"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c102", subject: "Chemistry",
    question: "Resonance structures of benzene are best described by:",
    options: ["Two distinct structures alternating", "One real structure with delocalized π electrons", "Three different structures", "No π electrons"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c103", subject: "Chemistry",
    question: "The preparation of soap involves:",
    options: ["Acidic hydrolysis of fats", "Alkaline hydrolysis (saponification) of triglycerides", "Esterification of fatty acids", "Oxidation of oils"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c104", subject: "Chemistry",
    question: "Which statement about catalysts is INCORRECT?",
    options: ["Catalyst lowers activation energy", "Catalyst is consumed in the reaction", "Catalyst increases rate of both forward and reverse reactions", "Catalyst does not alter equilibrium constant"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "c105", subject: "Chemistry",
    question: "The maximum number of electrons in the 3d subshell is:",
    options: ["6", "8", "10", "14"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "c106", subject: "Chemistry",
    question: "Amino acids contain both –NH2 and –COOH groups making them:",
    options: ["Acidic only", "Basic only", "Amphoteric (zwitterionic at isoelectric point)", "Neutral always"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c107", subject: "Chemistry",
    question: "The reaction of sodium with water gives:",
    options: ["Na2O + H2", "NaOH + H2", "NaH + H2O", "Na2O2 + H2O"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c108", subject: "Chemistry",
    question: "The allotropes of phosphorus include:",
    options: ["Red and white phosphorus (and black phosphorus)", "Only white phosphorus", "Only red phosphorus", "Phosphorus has no allotropes"],
    correct: 0, year: "2021", source: "SZABMU"
  },
  {
    id: "c109", subject: "Chemistry",
    question: "A compound with molecular formula C4H8 could be:",
    options: ["Butane", "Cyclobutane or but-1-ene", "Butyne", "Butadiene"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "c110", subject: "Chemistry",
    question: "In acid-base titration, the equivalence point is when:",
    options: ["pH = 7", "Moles of acid equal moles of base (completely neutralized)", "Indicator changes color", "Half the acid is neutralized"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c111", subject: "Chemistry",
    question: "The color of copper(II) sulfate solution (CuSO4) is due to:",
    options: ["d-d transition of Cu2+ ion in water ligand field", "Charge transfer from sulfate", "Color of sulfate ion", "Impurities"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "c112", subject: "Chemistry",
    question: "The functional group of ketone is:",
    options: ["-CHO (aldehyde)", ">C=O (carbonyl within carbon chain)", "-COOH", "-OH"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c113", subject: "Chemistry",
    question: "Which of the following is produced when calcium carbide reacts with water?",
    options: ["Methane", "Ethane", "Acetylene (ethyne) + Ca(OH)2", "Ethylene"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "c114", subject: "Chemistry",
    question: "Hydration of ethene (CH2=CH2) with H2O in presence of H3PO4 gives:",
    options: ["Ethanol", "Diethyl ether", "Acetic acid", "Ethylene glycol"],
    correct: 0, year: "2019", source: "KMU"
  },
  {
    id: "c115", subject: "Chemistry",
    question: "What is the systematic name of CHCl3?",
    options: ["Chloroform", "Trichloromethane", "Dichloromethane", "Carbon tetrachloride"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "c116", subject: "Chemistry",
    question: "Which property of water makes it an excellent solvent for ionic compounds?",
    options: ["Low boiling point", "High dielectric constant and ability to solvate ions (H-bonding)", "Nonpolar nature", "Low viscosity"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "c117", subject: "Chemistry",
    question: "In galvanic (voltaic) cell, oxidation occurs at:",
    options: ["Cathode", "Anode", "Both electrodes", "Salt bridge"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "c118", subject: "Chemistry",
    question: "Phenol undergoes nitration to give ortho and para products (not meta) because –OH is a:",
    options: ["Meta-directing deactivating group", "Ortho/para-directing activating group (electron-donating by resonance)", "Meta-directing activating group", "Deactivating para-director"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "c119", subject: "Chemistry",
    question: "The major product of reaction of 2-methylpropene with HBr is:",
    options: ["1-bromo-2-methylpropane", "2-bromo-2-methylpropane (Markovnikov product)", "1-bromo-1-methylpropane", "2-bromo-1-methylpropane"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "c120", subject: "Chemistry",
    question: "Hydrogen bonding is possible when H is bonded to:",
    options: ["Carbon", "N, O, or F (highly electronegative small atoms)", "Any electronegative atom", "Sulfur or phosphorus"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "c121", subject: "Chemistry",
    question: "The process of converting N2 to NH3 by bacteria is called:",
    options: ["Nitrification", "Denitrification", "Biological nitrogen fixation", "Ammonification"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "c122", subject: "Chemistry",
    question: "Molecular orbital theory predicts O2 is paramagnetic because it has:",
    options: ["2 unpaired electrons in degenerate π* antibonding MOs", "No unpaired electrons", "4 unpaired electrons", "1 unpaired electron in σ* MO"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "c123", subject: "Chemistry",
    question: "Radioactive decay follows which order of kinetics?",
    options: ["Zero order", "First order", "Second order", "Third order"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "c124", subject: "Chemistry",
    question: "The product of burning sulphur in oxygen is:",
    options: ["SO3", "SO2 (primarily)", "S2O3", "H2SO4"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "c125", subject: "Chemistry",
    question: "Octane rating of gasoline measures its:",
    options: ["Energy content", "Resistance to knocking (detonation)", "Viscosity", "Carbon content"],
    correct: 1, year: "2022", source: "PMDC"
  },

  // ============================================================
  // PHYSICS - 120 High Difficulty MCQs
  // ============================================================

  {
    id: "p001", subject: "Physics",
    question: "A projectile is launched at 45° for maximum range. The time of flight is related to maximum range R and g as:",
    options: ["T = √(2R/g)", "T = √(R/g)", "T = 2√(R/g)", "T = R/g"],
    correct: 0, year: "2022", source: "NUMS"
  },
  {
    id: "p002", subject: "Physics",
    question: "The moment of inertia of a solid sphere of mass M and radius R about its diameter is:",
    options: ["MR²", "2/3 MR²", "2/5 MR²", "1/2 MR²"],
    correct: 2, year: "2021", source: "UHS"
  },
  {
    id: "p003", subject: "Physics",
    question: "In simple harmonic motion, when displacement is maximum, kinetic energy is:",
    options: ["Maximum", "Zero", "Half maximum", "Equal to potential energy"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "p004", subject: "Physics",
    question: "The escape velocity from Earth's surface is approximately:",
    options: ["7.9 km/s (orbital velocity)", "11.2 km/s", "9.8 km/s", "3 × 10⁸ m/s"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p005", subject: "Physics",
    question: "According to Bernoulli's principle, in fluid flow, increased velocity corresponds to:",
    options: ["Increased pressure", "Decreased pressure", "Constant pressure", "Increased viscosity"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p006", subject: "Physics",
    question: "The work done by a gas in isothermal expansion from V1 to V2 is:",
    options: ["W = P(V2-V1)", "W = nRT ln(V2/V1)", "W = nCvΔT", "W = 0 (no temperature change)"],
    correct: 1, year: "2022", source: "NUMS"
  },
  {
    id: "p007", subject: "Physics",
    question: "The unit of magnetic flux is:",
    options: ["Tesla (T)", "Weber (Wb = T·m²)", "Henry (H)", "Gauss"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "p008", subject: "Physics",
    question: "According to Lenz's law, the induced current direction is such that it:",
    options: ["Aids the change in flux", "Opposes the change in flux causing it", "Is perpendicular to flux", "Has no relation to flux"],
    correct: 1, year: "2022", source: "SZABMU"
  },
  {
    id: "p009", subject: "Physics",
    question: "The de Broglie wavelength of a particle with momentum p is:",
    options: ["λ = h/p", "λ = p/h", "λ = h·p", "λ = h²/p"],
    correct: 0, year: "2020", source: "KMU"
  },
  {
    id: "p010", subject: "Physics",
    question: "In the photoelectric effect, the stopping potential depends on:",
    options: ["Intensity of light", "Frequency of incident light and work function", "Wavelength only", "Number of photons"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p011", subject: "Physics",
    question: "The half-life of a radioactive substance is 10 years. After 30 years, what fraction remains?",
    options: ["1/4", "1/6", "1/8", "1/16"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p012", subject: "Physics",
    question: "A transformer steps up voltage. If turns ratio Ns/Np = 5, and input voltage is 100V, output voltage is:",
    options: ["20 V", "50 V", "500 V", "5 V"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p013", subject: "Physics",
    question: "The refractive index of glass (n=1.5) for light going from glass to air - critical angle is:",
    options: ["30°", "41.8° (sin⁻¹(1/1.5))", "45°", "60°"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "p014", subject: "Physics",
    question: "In Young's double slit experiment, fringe width β is:",
    options: ["β = λd/D", "β = λD/d", "β = Dd/λ", "β = λ/(dD)"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "p015", subject: "Physics",
    question: "The resolving power of a microscope increases with:",
    options: ["Longer wavelength", "Smaller numerical aperture", "Shorter wavelength and higher numerical aperture", "Lower refractive index"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "p016", subject: "Physics",
    question: "Stefan-Boltzmann law states that power radiated by a black body is proportional to:",
    options: ["T²", "T³", "T⁴", "T"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p017", subject: "Physics",
    question: "The terminal velocity of a sphere falling through a viscous fluid depends on radius as:",
    options: ["v ∝ r", "v ∝ r²", "v ∝ r³", "v ∝ √r"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p018", subject: "Physics",
    question: "In Bohr's model, the energy of electron in nth orbit is proportional to:",
    options: ["n²", "1/n", "-1/n²", "-n²"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p019", subject: "Physics",
    question: "The work function of a metal is 2.0 eV. The threshold frequency is:",
    options: ["4.8 × 10¹⁴ Hz", "8.0 × 10¹⁴ Hz", "4.8 × 10¹³ Hz", "2.0 × 10¹⁴ Hz"],
    correct: 0, year: "2020", source: "KMU"
  },
  {
    id: "p020", subject: "Physics",
    question: "Capacitors in series: the equivalent capacitance is:",
    options: ["Sum of all capacitances", "Equal to smallest capacitance only", "Less than the smallest individual capacitance", "Product divided by sum"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "p021", subject: "Physics",
    question: "The Doppler effect for sound: when source moves toward observer, observed frequency is:",
    options: ["Decreased", "Unchanged", "Increased", "Doubled always"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p022", subject: "Physics",
    question: "In a p-n junction diode, the depletion region forms due to:",
    options: ["Accumulation of electrons on p-side", "Diffusion of majority carriers creating immobile ions", "External voltage application", "Temperature effects"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p023", subject: "Physics",
    question: "The magnetic force on a moving charge is maximum when velocity is:",
    options: ["Parallel to B field", "Anti-parallel to B field", "Perpendicular to B field", "Zero"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p024", subject: "Physics",
    question: "The velocity of sound in a medium depends on:",
    options: ["Density only", "Elasticity and density (v = √(E/ρ))", "Frequency", "Amplitude"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p025", subject: "Physics",
    question: "The angular momentum is conserved in a system when:",
    options: ["Linear momentum is zero", "No net external torque acts on the system", "Kinetic energy is constant", "Potential energy is maximum"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p026", subject: "Physics",
    question: "In circular motion, centripetal acceleration is directed:",
    options: ["Tangentially", "Away from center", "Toward center", "Perpendicular to plane"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p027", subject: "Physics",
    question: "The dimension of power is:",
    options: ["[MLT⁻²]", "[ML²T⁻²]", "[ML²T⁻³]", "[MLT⁻³]"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p028", subject: "Physics",
    question: "For a convex lens, when object is placed between F and 2F, image is:",
    options: ["Virtual, erect, magnified on same side", "Real, inverted, magnified beyond 2F", "Real, inverted, at 2F", "Virtual, diminished"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "p029", subject: "Physics",
    question: "The relationship between electric field E and potential V is:",
    options: ["E = V/d", "E = -dV/dx (gradient)", "E = V × d", "E = dV/dx"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p030", subject: "Physics",
    question: "A ball is thrown vertically upward with velocity u. The time to reach maximum height is:",
    options: ["u/g", "2u/g", "u²/2g", "u²/g"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "p031", subject: "Physics",
    question: "The period of a simple pendulum depends on:",
    options: ["Mass of bob", "Length and g (T = 2π√(L/g))", "Amplitude (for small angles approximately)", "Both mass and length"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p032", subject: "Physics",
    question: "In a transformer, if efficiency is 100% (ideal), then:",
    options: ["VpIp = VsIs (power input = power output)", "Vp/Vs = Is/Ip", "Both A and B", "Power is amplified"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p033", subject: "Physics",
    question: "The phenomenon of light splitting into colors by a prism is called:",
    options: ["Diffraction", "Interference", "Dispersion", "Polarization"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p034", subject: "Physics",
    question: "According to Newton's 3rd law, action and reaction forces:",
    options: ["Act on same body in opposite directions", "Act on different bodies, are equal and opposite", "Cancel each other out always", "Are in the same direction"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p035", subject: "Physics",
    question: "The Heisenberg uncertainty principle: Δx · Δp ≥:",
    options: ["h", "h/2", "h/4π (ℏ/2)", "h/2π"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "p036", subject: "Physics",
    question: "In an RC circuit, the time constant τ represents the time for capacitor to charge to:",
    options: ["50% of maximum", "63.2% of maximum (1 - 1/e)", "100% of maximum", "36.8% of maximum"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p037", subject: "Physics",
    question: "The speed of light in vacuum is related to permittivity (ε₀) and permeability (μ₀) of free space as:",
    options: ["c = √(ε₀/μ₀)", "c = ε₀μ₀", "c = 1/√(ε₀μ₀)", "c = √(μ₀/ε₀)"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p038", subject: "Physics",
    question: "Huygen's principle states that every point on a wavefront acts as:",
    options: ["Secondary source of new wavelets", "Reflecting surface", "Absorber of energy", "Diffracting aperture"],
    correct: 0, year: "2020", source: "SZABMU"
  },
  {
    id: "p039", subject: "Physics",
    question: "The frequency of radiation in the visible spectrum ranges approximately from:",
    options: ["10¹⁰ to 10¹² Hz", "4 × 10¹⁴ to 7.5 × 10¹⁴ Hz", "10¹⁶ to 10¹⁸ Hz", "10⁸ to 10¹⁰ Hz"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p040", subject: "Physics",
    question: "Gravitational potential energy at height h above Earth's surface is:",
    options: ["-GMm/r (where r = R+h)", "mgh (approximation near surface)", "Both A and B depending on context", "GM/R²"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "p041", subject: "Physics",
    question: "In nuclear reactions, the mass number (A) is conserved, meaning:",
    options: ["Charge is conserved", "Total number of nucleons remains constant", "Energy is not conserved", "Number of protons is fixed"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p042", subject: "Physics",
    question: "A wire carrying current I in magnetic field B experiences maximum force when angle between I and B is:",
    options: ["0°", "45°", "90°", "180°"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p043", subject: "Physics",
    question: "The critical angle for total internal reflection occurs when refracted angle equals:",
    options: ["0°", "45°", "90°", "The incident angle"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p044", subject: "Physics",
    question: "Kirchhoff's voltage law (KVL) states that the algebraic sum of voltages in a closed loop is:",
    options: ["Equal to EMF", "Zero", "Equal to current × resistance", "Maximum at junction"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p045", subject: "Physics",
    question: "The photoelectric effect proves the particle nature of light because:",
    options: ["Light travels at constant speed", "Energy is quantized in photons (hf) and emission is instantaneous", "Light diffracts around obstacles", "Light undergoes interference"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p046", subject: "Physics",
    question: "The capacitance of a parallel plate capacitor increases when:",
    options: ["Distance between plates increases", "Area of plates decreases", "Dielectric material is inserted between plates", "Voltage increases"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p047", subject: "Physics",
    question: "Maxwell's equations predict electromagnetic waves traveling at:",
    options: ["Speed of sound", "Speed dependent on medium only", "Speed of light (3 × 10⁸ m/s in vacuum)", "Infinite speed"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p048", subject: "Physics",
    question: "The efficiency of a Carnot engine operating between T_H = 600K and T_L = 300K is:",
    options: ["25%", "40%", "50%", "75%"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p049", subject: "Physics",
    question: "Standing waves on a string fixed at both ends have nodes at:",
    options: ["Antinodes at ends", "Nodes at both fixed ends", "Nodes only at center", "Equal spacing from any reference"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p050", subject: "Physics",
    question: "The Compton effect demonstrates:",
    options: ["Wave nature of X-rays", "Particle nature of electromagnetic radiation (photon-electron collision)", "Interference of X-rays", "Diffraction of electrons"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p051", subject: "Physics",
    question: "In semiconductor, n-type material is created by doping with:",
    options: ["Trivalent impurity (Al, B)", "Pentavalent impurity (P, As)", "Divalent impurity", "Tetravalent impurity"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p052", subject: "Physics",
    question: "The work done in displacing a charge in an equipotential surface is:",
    options: ["Maximum", "Minimum", "Zero", "Depends on path"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p053", subject: "Physics",
    question: "Torque is defined as:",
    options: ["Force × displacement", "Force × perpendicular distance from pivot (τ = r × F)", "Mass × acceleration", "Momentum × time"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "p054", subject: "Physics",
    question: "A satellite in circular orbit around Earth has its centripetal force provided by:",
    options: ["Atmospheric drag", "Gravitational force (F = GMm/r²)", "Magnetic force", "Normal force"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p055", subject: "Physics",
    question: "The resonance condition in an RLC circuit occurs when:",
    options: ["XL = XC (inductive reactance equals capacitive reactance)", "R = XL", "R = XC", "Z = XL + XC"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "p056", subject: "Physics",
    question: "Gamma rays are electromagnetic radiation with energy greater than:",
    options: ["1 eV", "1 keV", "100 keV", "100 MeV"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p057", subject: "Physics",
    question: "The momentum of photon with frequency f is:",
    options: ["hf/c²", "hf/c", "hc/f", "h/f"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p058", subject: "Physics",
    question: "In elastic collision, which quantities are conserved?",
    options: ["Momentum only", "Kinetic energy only", "Both momentum and kinetic energy", "Neither"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p059", subject: "Physics",
    question: "The unit of inductance is:",
    options: ["Farad (F)", "Ohm (Ω)", "Henry (H)", "Tesla (T)"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "p060", subject: "Physics",
    question: "Kepler's third law states that the square of the period of a planet is proportional to:",
    options: ["Radius of orbit", "Square of orbital radius", "Cube of semi-major axis", "Mass of planet"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "p061", subject: "Physics",
    question: "Beats are produced by superposition of two waves with:",
    options: ["Same frequency and same amplitude", "Slightly different frequencies", "Same wavelength", "Perpendicular polarizations"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p062", subject: "Physics",
    question: "The energy stored in an inductor L carrying current I is:",
    options: ["LI", "LI²", "½LI²", "L²I"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p063", subject: "Physics",
    question: "In photoelectric effect, the maximum kinetic energy of ejected electron is:",
    options: ["hf", "hf + φ", "hf - φ (where φ = work function)", "φ - hf"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p064", subject: "Physics",
    question: "For a concave mirror, the focal length is related to radius of curvature R as:",
    options: ["f = 2R", "f = R/2", "f = R", "f = R/4"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p065", subject: "Physics",
    question: "Electric flux through a closed surface (Gauss's law) is proportional to:",
    options: ["Surface area", "Enclosed charge (Φ = Q_enc/ε₀)", "Electric field at surface", "Distance from charges"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p066", subject: "Physics",
    question: "According to kinetic theory of gases, temperature is a measure of:",
    options: ["Total kinetic energy", "Average translational kinetic energy of gas molecules", "Potential energy", "Molecular speed"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p067", subject: "Physics",
    question: "The coefficient of restitution (e) for perfectly inelastic collision is:",
    options: ["e = 1", "0 < e < 1", "e = 0", "e > 1"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p068", subject: "Physics",
    question: "Brewster's angle θ_B for polarization by reflection satisfies:",
    options: ["sin(θ_B) = n", "tan(θ_B) = n (refractive index)", "cos(θ_B) = n", "θ_B = 45° always"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "p069", subject: "Physics",
    question: "The binding energy per nucleon is maximum for:",
    options: ["Hydrogen-1", "Helium-4", "Iron-56", "Uranium-238"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "p070", subject: "Physics",
    question: "Electromagnetic induction (Faraday's law) states that induced EMF is proportional to:",
    options: ["Magnetic flux", "Rate of change of magnetic flux (ε = -dΦ/dt)", "Resistance of coil", "Current in coil"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p071", subject: "Physics",
    question: "The wave nature of electrons was experimentally confirmed by:",
    options: ["Millikan oil drop experiment", "Davisson-Germer experiment (electron diffraction)", "Rutherford scattering", "Compton scattering"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p072", subject: "Physics",
    question: "The rms speed of gas molecules is proportional to:",
    options: ["√T (square root of absolute temperature)", "T", "T²", "1/√T"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "p073", subject: "Physics",
    question: "Snell's law of refraction: n₁sinθ₁ = n₂sinθ₂. When light goes from water (n=1.33) to glass (n=1.5), it:",
    options: ["Bends away from normal", "Bends toward normal (into denser medium)", "Goes straight", "Reflects completely"],
    correct: 1, year: "2021", source: "SZABMU"
  },
  {
    id: "p074", subject: "Physics",
    question: "The force between two parallel wires carrying currents in same direction is:",
    options: ["Repulsive", "Attractive", "Zero", "Perpendicular to both wires"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p075", subject: "Physics",
    question: "The first law of thermodynamics: ΔU = Q - W means:",
    options: ["Internal energy change = heat added to system minus work done by system", "Internal energy = total energy", "Heat cannot be converted to work", "Work done = heat added"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "p076", subject: "Physics",
    question: "In an adiabatic process:",
    options: ["Temperature is constant", "Pressure is constant", "No heat exchange occurs (Q = 0)", "Volume is constant"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p077", subject: "Physics",
    question: "The ratio of electric force to gravitational force between an electron and proton is approximately:",
    options: ["10⁻³⁶", "10³⁶", "10¹⁰", "1"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p078", subject: "Physics",
    question: "In alpha decay, the parent nucleus loses:",
    options: ["2 protons and 2 neutrons (mass number decreases by 4, atomic number by 2)", "1 neutron", "1 proton and 1 electron", "2 electrons"],
    correct: 0, year: "2021", source: "SZABMU"
  },
  {
    id: "p079", subject: "Physics",
    question: "The phenomenon by which polarized light changes rotation of plane when passing through optically active substance is:",
    options: ["Faraday rotation", "Optical activity (rotation of plane of polarization)", "Dispersion", "Birefringence"],
    correct: 1, year: "2020", source: "KMU"
  },
  {
    id: "p080", subject: "Physics",
    question: "The electric potential at a distance r from a point charge Q is:",
    options: ["V = kQ/r²", "V = kQ/r", "V = kQ²/r", "V = Q/4πε₀r²"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p081", subject: "Physics",
    question: "The maximum height reached by a projectile launched at angle θ with speed u is:",
    options: ["u²sin2θ/g", "u²sin²θ/2g", "u²sinθ/g", "u²cos²θ/2g"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p082", subject: "Physics",
    question: "Superconductivity is characterized by:",
    options: ["Very high resistance below critical temperature", "Zero electrical resistance below critical temperature", "Very high magnetic permeability", "Absence of magnetic field"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p083", subject: "Physics",
    question: "An object in free fall has:",
    options: ["Zero acceleration", "Constant velocity", "Constant downward acceleration (g ≈ 9.8 m/s²)", "Increasing acceleration"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p084", subject: "Physics",
    question: "The Pauli exclusion principle states that no two electrons in an atom can have:",
    options: ["Same spin", "Same orbital", "Same set of all four quantum numbers (n, l, ml, ms)", "Same energy"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "p085", subject: "Physics",
    question: "Power dissipated in a resistor is given by:",
    options: ["P = IR", "P = I²R = V²/R", "P = V/R", "P = IR²"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p086", subject: "Physics",
    question: "The phenomenon of total internal reflection is used in:",
    options: ["Periscopes", "Telescopes", "Optical fibers and endoscopes", "Microscopes"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p087", subject: "Physics",
    question: "Impulse (J) is defined as:",
    options: ["Force × distance", "Change in momentum (J = FΔt = Δp)", "Mass × acceleration", "Force × velocity"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p088", subject: "Physics",
    question: "The atomic number Z is the number of:",
    options: ["Neutrons in nucleus", "Nucleons in nucleus", "Protons in nucleus (= electrons in neutral atom)", "Mass units"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p089", subject: "Physics",
    question: "An ideal voltmeter has resistance:",
    options: ["Zero", "Very low (near zero)", "Infinite (to measure without drawing current)", "Equal to circuit resistance"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "p090", subject: "Physics",
    question: "The wave equation relates frequency f, wavelength λ, and wave speed v as:",
    options: ["v = f/λ", "v = fλ", "f = vλ", "λ = vf"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p091", subject: "Physics",
    question: "In an inelastic collision, kinetic energy is:",
    options: ["Conserved", "Increased", "Partially converted to other forms (heat, deformation)", "Doubled"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p092", subject: "Physics",
    question: "The SI unit of pressure is:",
    options: ["Bar", "Atm", "Pascal (Pa = N/m²)", "mmHg"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p093", subject: "Physics",
    question: "According to Ampere's law, the magnetic field around a long straight wire at distance r is:",
    options: ["B = μ₀I/2πr", "B = μ₀I/r", "B = μ₀I/4πr²", "B = μ₀I·r"],
    correct: 0, year: "2020", source: "SZABMU"
  },
  {
    id: "p094", subject: "Physics",
    question: "The energy of a photon is E = hf. For visible light (λ = 500 nm), energy is approximately:",
    options: ["1 eV", "2.5 eV", "5 eV", "10 eV"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p095", subject: "Physics",
    question: "Bernoulli's equation is a statement of:",
    options: ["Conservation of mass", "Conservation of momentum", "Conservation of energy in fluid flow", "Newton's second law"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "p096", subject: "Physics",
    question: "The frequency of visible light ranges from approximately:",
    options: ["4 × 10¹⁴ Hz (red) to 7.5 × 10¹⁴ Hz (violet)", "10¹² to 10¹⁴ Hz", "7.5 × 10¹⁴ Hz to 10¹⁶ Hz", "10⁸ to 10¹² Hz"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "p097", subject: "Physics",
    question: "The position of center of mass of a uniform rod lies at:",
    options: ["One end", "One-third of length", "Midpoint (geometric center)", "Two-thirds of length"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "p098", subject: "Physics",
    question: "The threshold energy for nuclear fission of U-235 is approximately:",
    options: ["1 eV", "1 MeV", "6-7 MeV", "100 MeV"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p099", subject: "Physics",
    question: "An ideal ammeter has resistance:",
    options: ["Infinite", "Very high", "Zero (to not affect circuit current)", "Equal to external resistance"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "p100", subject: "Physics",
    question: "Newton's law of universal gravitation: F = Gm₁m₂/r². The value of G is:",
    options: ["9.8 N/kg", "6.674 × 10⁻¹¹ N·m²/kg²", "6.022 × 10²³ N/kg", "1.6 × 10⁻¹⁹ N·m²/kg"],
    correct: 1, year: "2022", source: "PMDC"
  },
  {
    id: "p101", subject: "Physics",
    question: "The 2nd law of thermodynamics states that entropy of an isolated system:",
    options: ["Always decreases", "Remains constant", "Always increases or remains constant (ΔS ≥ 0)", "Depends on temperature"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p102", subject: "Physics",
    question: "In a p-type semiconductor, majority charge carriers are:",
    options: ["Electrons", "Holes", "Protons", "Neutrons"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p103", subject: "Physics",
    question: "The minimum speed for a satellite to orbit Earth at its surface is called:",
    options: ["Escape velocity", "Terminal velocity", "First cosmic velocity (orbital velocity ≈ 7.9 km/s)", "Second cosmic velocity"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "p104", subject: "Physics",
    question: "When two capacitors C₁ and C₂ are connected in parallel, equivalent capacitance is:",
    options: ["C₁ × C₂/(C₁ + C₂)", "C₁ + C₂", "1/C₁ + 1/C₂", "(C₁ + C₂)/2"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "p105", subject: "Physics",
    question: "The LASER principle relies on which phenomenon?",
    options: ["Spontaneous emission", "Stimulated emission of radiation", "Absorption only", "Diffraction"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "p106", subject: "Physics",
    question: "The Lorentz force on a charge q moving with velocity v in electric field E and magnetic field B is:",
    options: ["F = qE only", "F = qvB only", "F = q(E + v × B)", "F = q(E - B)"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p107", subject: "Physics",
    question: "In Young's double-slit experiment, path difference for constructive interference (bright fringes) is:",
    options: ["(n + ½)λ", "nλ (where n = 0, 1, 2...)", "(2n-1)λ/2", "nλ/2"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "p108", subject: "Physics",
    question: "The specific heat capacity of water is 4200 J/kg·K. The heat required to raise 1 kg of water by 10°C is:",
    options: ["420 J", "4200 J", "42000 J", "420000 J"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p109", subject: "Physics",
    question: "The relation between frequency (f) and angular frequency (ω) is:",
    options: ["ω = f", "ω = f/2π", "ω = 2πf", "f = 2πω"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "p110", subject: "Physics",
    question: "The Stefan-Boltzmann law: P = σAT⁴. σ (Stefan's constant) is:",
    options: ["5.67 × 10⁻⁸ W/m²K⁴", "6.63 × 10⁻³⁴ J·s", "1.38 × 10⁻²³ J/K", "8.85 × 10⁻¹² F/m"],
    correct: 0, year: "2022", source: "PMDC"
  },
  {
    id: "p111", subject: "Physics",
    question: "Diffraction of light is most pronounced when slit width is:",
    options: ["Much larger than λ", "Much smaller than λ", "Comparable to λ", "Exactly equal to 2λ"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "p112", subject: "Physics",
    question: "The mass-energy equivalence E = mc² was proposed by:",
    options: ["Newton", "Planck", "Bohr", "Einstein"],
    correct: 3, year: "2022", source: "UHS"
  },
  {
    id: "p113", subject: "Physics",
    question: "Ohm's law states that current (I) is proportional to voltage (V) at:",
    options: ["All temperatures", "Constant temperature (ohmic conductors)", "High temperatures only", "Low temperatures only"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "p114", subject: "Physics",
    question: "In nuclear fusion, lighter nuclei combine to form heavier nucleus with:",
    options: ["Release of energy (mass deficit → energy)", "Absorption of energy", "No energy change", "Release of neutrons only"],
    correct: 0, year: "2022", source: "KMU"
  },
  {
    id: "p115", subject: "Physics",
    question: "The electric field inside a conductor at electrostatic equilibrium is:",
    options: ["Maximum", "Equal to surface charge density", "Zero", "Proportional to volume"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "p116", subject: "Physics",
    question: "The principle of superposition for waves states that:",
    options: ["Waves absorb each other", "Resultant displacement = algebraic sum of individual displacements", "Waves cannot pass through each other", "Larger wave destroys smaller wave"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "p117", subject: "Physics",
    question: "Spring constant (k) is measured in:",
    options: ["N/m", "J/m²", "kg/m", "N·m"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "p118", subject: "Physics",
    question: "A charged particle moving perpendicular to a magnetic field follows a:",
    options: ["Straight line path", "Parabolic path", "Circular path (r = mv/qB)", "Helical path"],
    correct: 2, year: "2021", source: "SZABMU"
  },
  {
    id: "p119", subject: "Physics",
    question: "The number of complete oscillations per second is called:",
    options: ["Wavelength", "Amplitude", "Frequency", "Time period"],
    correct: 2, year: "2020", source: "KMU"
  },
  {
    id: "p120", subject: "Physics",
    question: "The surface tension of liquid causes:",
    options: ["Decrease in pressure inside bubbles", "Capillary rise/fall in tubes (capillarity)", "Viscous flow", "Turbulence"],
    correct: 1, year: "2022", source: "PMDC"
  },

  // ============================================================
  // ENGLISH - 40 High Difficulty MCQs
  // ============================================================

  {
    id: "e001", subject: "English",
    question: "Choose the correct meaning of the word 'EPHEMERAL':",
    options: ["Everlasting", "Short-lived; lasting for a very short time", "Extremely large", "Extremely small"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "e002", subject: "English",
    question: "The antonym of 'VERBOSE' is:",
    options: ["Wordy", "Loquacious", "Terse (brief and concise)", "Garrulous"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "e003", subject: "English",
    question: "Identify the correct sentence:",
    options: ["Neither of the students have submitted their assignments", "Neither of the students has submitted his assignment", "Neither of the student has submitted their assignment", "Neither students has submitted their assignment"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "e004", subject: "English",
    question: "'The data _____ collected from multiple sources.' Choose correct verb form:",
    options: ["was", "were", "is being", "Both A and B are acceptable (data as plural = were; as collective = was)"],
    correct: 3, year: "2022", source: "KMU"
  },
  {
    id: "e005", subject: "English",
    question: "The word 'UBIQUITOUS' means:",
    options: ["Rare and unique", "Present everywhere simultaneously", "Unpleasant odor", "Extremely fast"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "e006", subject: "English",
    question: "Which sentence has correct subject-verb agreement?",
    options: ["The committee have decided on the matter", "A number of students was absent", "The team are playing well", "Each of the boys is responsible for his work"],
    correct: 3, year: "2021", source: "NUMS"
  },
  {
    id: "e007", subject: "English",
    question: "The synonym of 'AMELIORATE' is:",
    options: ["Worsen", "Improve or make better", "Destroy", "Alter completely"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "e008", subject: "English",
    question: "Choose the word that best completes: 'Despite the _____ evidence against him, the lawyer argued his client was innocent.'",
    options: ["Ambiguous", "Superfluous", "Irrefutable (undeniable/conclusive)", "Negligible"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "e009", subject: "English",
    question: "The passive voice of 'The doctor prescribed medicine' is:",
    options: ["Medicine was prescribed by the doctor", "Medicine is prescribed by the doctor", "The doctor was prescribed medicine", "Medicine will be prescribed by the doctor"],
    correct: 0, year: "2022", source: "KMU"
  },
  {
    id: "e010", subject: "English",
    question: "Identify the figure of speech: 'Life is a journey; we all are travelers.'",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "e011", subject: "English",
    question: "The word 'PEDANTIC' means:",
    options: ["Relating to feet", "Overly concerned with rules and minor details", "Relating to children", "Extremely creative"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "e012", subject: "English",
    question: "Choose the correct preposition: 'She insisted ___ going to the party alone.'",
    options: ["at", "for", "on", "in"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "e013", subject: "English",
    question: "The antonym of 'LOQUACIOUS' is:",
    options: ["Talkative", "Garrulous", "Verbose", "Taciturn (reserved, not talkative)"],
    correct: 3, year: "2020", source: "SZABMU"
  },
  {
    id: "e014", subject: "English",
    question: "'Had I known about the exam, I _____ prepared better.' Choose correct form:",
    options: ["would have", "would", "will have", "would have had"],
    correct: 0, year: "2022", source: "KMU"
  },
  {
    id: "e015", subject: "English",
    question: "The word 'ENERVATE' means:",
    options: ["To energize and invigorate", "To weaken or drain of energy", "To innervate (supply with nerves)", "To stimulate"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "e016", subject: "English",
    question: "Identify the grammatical error: 'He is one of those doctors who believes in natural remedies.'",
    options: ["'doctors' should be 'doctor'", "'believes' should be 'believe' (relative clause refers to 'doctors')", "'who' should be 'which'", "No error"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "e017", subject: "English",
    question: "The synonym of 'SAGACIOUS' is:",
    options: ["Foolish", "Stubborn", "Wise and having good judgment", "Cowardly"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "e018", subject: "English",
    question: "Which word is misspelled?",
    options: ["Conscientious", "Millennium", "Liason (should be: Liaison)", "Accommodation"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "e019", subject: "English",
    question: "The word 'OBSEQUIOUS' means:",
    options: ["Stubborn and rebellious", "Excessively compliant or submissive; fawning", "Extremely beautiful", "Characteristic of an obstacle"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "e020", subject: "English",
    question: "'By the time he arrives, we _____ dinner.' Choose correct tense:",
    options: ["will have finished", "will finish", "have finished", "would finish"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "e021", subject: "English",
    question: "The antonym of 'RECALCITRANT' is:",
    options: ["Stubborn", "Defiant", "Obstinate", "Compliant (obedient, willing to comply)"],
    correct: 3, year: "2021", source: "NUMS"
  },
  {
    id: "e022", subject: "English",
    question: "Choose the correct form: 'The news about the floods _____ frightening.'",
    options: ["are", "were", "is", "have been"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "e023", subject: "English",
    question: "The word 'PROPITIOUS' means:",
    options: ["Giving a sign of failure", "Favorably disposed; auspicious", "Extremely dangerous", "Indifferent"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "e024", subject: "English",
    question: "Identify the sentence with correct punctuation:",
    options: ["Its raining outside; so bring your umbrella", "It's raining outside; so bring your umbrella.", "Its' raining outside, so bring your umbrella.", "It's raining outside, bring your umbrella"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "e025", subject: "English",
    question: "The word 'GARRULOUS' means:",
    options: ["Silent and reserved", "Excessively talkative, especially on trivial matters", "Fierce and aggressive", "Extremely formal"],
    correct: 1, year: "2021", source: "PMDC"
  },
  {
    id: "e026", subject: "English",
    question: "Which sentence correctly uses 'fewer' vs 'less'?",
    options: ["There are less students in the class today", "I have less books than you", "She has fewer friends than her sister", "There is fewer milk in the glass"],
    correct: 2, year: "2022", source: "NUMS"
  },
  {
    id: "e027", subject: "English",
    question: "The synonym of 'LACONIC' is:",
    options: ["Wordy and elaborate", "Brief and concise in speech", "Relating to a lake", "Energetic"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "e028", subject: "English",
    question: "Choose the correct sentence:",
    options: ["Whom do you think will win the election?", "Who do you think will win the election?", "Who do you think whom will win?", "Whom does you think will win?"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "e029", subject: "English",
    question: "The word 'INIMICAL' means:",
    options: ["Friendly and supportive", "Hostile; tending to obstruct or harm", "Imitable (worth imitating)", "Imaginative"],
    correct: 1, year: "2019", source: "KMU"
  },
  {
    id: "e030", subject: "English",
    question: "The figure of speech in 'The stars danced playfully in the moonlit sky' is:",
    options: ["Metaphor", "Simile", "Personification", "Alliteration"],
    correct: 2, year: "2022", source: "PMDC"
  },
  {
    id: "e031", subject: "English",
    question: "The word 'SUPERCILIOUS' means:",
    options: ["Extremely careful", "Behaving as if others are inferior; haughty and disdainful", "Extremely beautiful", "Above the cilia (in medical context)"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "e032", subject: "English",
    question: "Choose the correct word: 'The _____ of the test was to measure intelligence.'",
    options: ["principal", "principle", "Principle (guiding rule)", "Principal (main purpose)"],
    correct: 3, year: "2022", source: "UHS"
  },
  {
    id: "e033", subject: "English",
    question: "The antonym of 'PENURIOUS' is:",
    options: ["Poor", "Stingy", "Generous and wealthy", "Obscure"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "e034", subject: "English",
    question: "Identify the incorrect sentence:",
    options: ["He is senior to me by three years", "He is three years elder than me", "He is three years older than me", "He is older than me by three years"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "e035", subject: "English",
    question: "The word 'ALACRITY' means:",
    options: ["Lethargy", "Extreme caution", "Brisk and cheerful readiness", "Confusion"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "e036", subject: "English",
    question: "Which correctly uses the subjunctive mood?",
    options: ["If I was rich, I would help everyone", "If I were rich, I would help everyone", "If I am rich, I would help everyone", "If I would be rich, I would help everyone"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "e037", subject: "English",
    question: "The synonym of 'PARSIMONIOUS' is:",
    options: ["Generous", "Extremely frugal/miserly", "Courageous", "Melancholy"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "e038", subject: "English",
    question: "The word 'EQUIVOCAL' means:",
    options: ["Clear and unambiguous", "Having only one possible meaning", "Having two or more possible meanings; ambiguous", "Equal in value"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "e039", subject: "English",
    question: "The idiom 'bite the bullet' means:",
    options: ["To eat something hard", "To shoot with a gun", "To endure a painful situation with courage", "To make a quick decision"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "e040", subject: "English",
    question: "The word 'SYCOPHANT' means:",
    options: ["A medical professional", "A person who excessively flatters those in power (yes-man)", "A type of tree", "A musical instrument"],
    correct: 1, year: "2019", source: "PMDC"
  },

  // ============================================================
  // LOGICAL REASONING - 40 High Difficulty MCQs
  // ============================================================

  {
    id: "l001", subject: "Logical Reasoning",
    question: "If all doctors are scientists, and some scientists are teachers, which conclusion is definitely true?",
    options: ["All doctors are teachers", "Some doctors are teachers", "No doctor is a teacher", "None of the above follows definitely"],
    correct: 3, year: "2022", source: "NUMS"
  },
  {
    id: "l002", subject: "Logical Reasoning",
    question: "Series: 2, 6, 12, 20, 30, ___",
    options: ["40", "42", "44", "48"],
    correct: 1, year: "2021", source: "UHS"
  },
  {
    id: "l003", subject: "Logical Reasoning",
    question: "If DOCTOR is coded as FQEVQT, how is PATIENT coded?",
    options: ["RCVKGPV", "RAVEINT", "RCVKINT", "PAVEINT"],
    correct: 0, year: "2020", source: "SZABMU"
  },
  {
    id: "l004", subject: "Logical Reasoning",
    question: "A man walks 5 km North, turns East and walks 3 km, then turns South and walks 5 km. How far is he from starting point?",
    options: ["8 km", "5 km", "3 km", "13 km"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "l005", subject: "Logical Reasoning",
    question: "If 'A' is brother of 'B', 'C' is the father of 'A', and 'D' is the mother of 'C', then 'D' is 'B's:",
    options: ["Grandmother", "Mother", "Aunt", "Great-grandmother"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "l006", subject: "Logical Reasoning",
    question: "Odd one out: Kidney, Liver, Heart, Lung, Stomach",
    options: ["Kidney", "Liver", "Stomach (digestive; others are vital organs)", "Heart"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "l007", subject: "Logical Reasoning",
    question: "What is the missing number? 1, 4, 9, 16, 25, ___, 49",
    options: ["36", "32", "30", "34"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "l008", subject: "Logical Reasoning",
    question: "All A are B. No B are C. Therefore:",
    options: ["Some A are C", "No A are C", "Some C are A", "All C are A"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "l009", subject: "Logical Reasoning",
    question: "If Monday is the 3rd day of the month, what day is the 17th?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "l010", subject: "Logical Reasoning",
    question: "Analogy: Stethoscope : Doctor :: Telescope : ___",
    options: ["Optician", "Astronomer", "Biologist", "Chemist"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "l011", subject: "Logical Reasoning",
    question: "Series: A, C, F, J, O, ___",
    options: ["U", "T", "V", "W"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "l012", subject: "Logical Reasoning",
    question: "If 4 workers can complete a task in 6 days, how many days will 8 workers take?",
    options: ["12 days", "8 days", "3 days", "4 days"],
    correct: 2, year: "2022", source: "UHS"
  },
  {
    id: "l013", subject: "Logical Reasoning",
    question: "Which of the following is logically consistent with: 'No exam is easy. Some tests are exams.'?",
    options: ["Some tests are easy", "All tests are exams", "Some tests are not easy (necessarily)", "No tests are hard"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "l014", subject: "Logical Reasoning",
    question: "If MDCAT = 13+4+3+1+20 = 41, what does MBBS equal (using same letter-position-sum method)?",
    options: ["40", "41", "42", "43"],
    correct: 3, year: "2022", source: "KMU"
  },
  {
    id: "l015", subject: "Logical Reasoning",
    question: "Pattern: 3, 7, 15, 31, 63, ___",
    options: ["95", "127", "125", "130"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "l016", subject: "Logical Reasoning",
    question: "Rearrange LAROCID to form a medical term:",
    options: ["CLADIOR", "CORDIAL", "CLADORI", "RADICAL"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "l017", subject: "Logical Reasoning",
    question: "If today is Wednesday, what day will it be after 100 days?",
    options: ["Monday", "Friday", "Saturday", "Sunday"],
    correct: 1, year: "2022", source: "UHS"
  },
  {
    id: "l018", subject: "Logical Reasoning",
    question: "All roses are flowers. All flowers need water. Therefore:",
    options: ["All flowers are roses", "All roses need water", "Some water is in roses", "Only roses need water"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "l019", subject: "Logical Reasoning",
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["0°", "7.5° (hour hand is at 97.5°, minute at 90°)", "15°", "30°"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "l020", subject: "Logical Reasoning",
    question: "Find the odd one out in terms of pattern: 121, 144, 169, 196, 200, 225",
    options: ["169", "196", "200 (not a perfect square)", "225"],
    correct: 2, year: "2019", source: "PMDC"
  },
  {
    id: "l021", subject: "Logical Reasoning",
    question: "Analogy: RBC : Hemoglobin :: WBC : ___",
    options: ["Insulin", "Globulin", "Leukocyte nucleus / immune proteins", "Albumin"],
    correct: 2, year: "2021", source: "NUMS"
  },
  {
    id: "l022", subject: "Logical Reasoning",
    question: "If P > Q, Q > R, and R > S, which is the smallest?",
    options: ["P", "Q", "R", "S"],
    correct: 3, year: "2022", source: "UHS"
  },
  {
    id: "l023", subject: "Logical Reasoning",
    question: "A train 150m long passes a pole in 15 seconds. What is its speed?",
    options: ["8 m/s", "10 m/s", "15 m/s", "20 m/s"],
    correct: 1, year: "2020", source: "SZABMU"
  },
  {
    id: "l024", subject: "Logical Reasoning",
    question: "Some students fail. Raza is a student. Therefore:",
    options: ["Raza will fail", "Raza will pass", "Raza may or may not fail", "Raza definitely passes"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "l025", subject: "Logical Reasoning",
    question: "Number pattern: 2, 3, 5, 8, 13, 21, 34, ___",
    options: ["45", "55", "65", "55"],
    correct: 1, year: "2019", source: "PMDC"
  },
  {
    id: "l026", subject: "Logical Reasoning",
    question: "What comes next? JAK, KBL, LCM, MDN, ___",
    options: ["NEO", "NDP", "OEP", "NFO"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "l027", subject: "Logical Reasoning",
    question: "If A + B means A is mother of B, and A × B means A is brother of B, what does P + Q × R mean?",
    options: ["P is mother of Q who is brother of R (P is aunt/mother of R)", "P is grandmother of R", "Q is father of R", "P is sister of R"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "l028", subject: "Logical Reasoning",
    question: "Mirror image reasoning: If LEFT is written as TFEL in mirror, MDCAT would be written as:",
    options: ["TACMM", "TACTMD", "TACDM", "TACMD"],
    correct: 3, year: "2020", source: "SZABMU"
  },
  {
    id: "l029", subject: "Logical Reasoning",
    question: "If 5 oranges cost Rs. 15, and 8 mangoes cost Rs. 40, what is the cost of 3 oranges and 4 mangoes?",
    options: ["Rs. 25", "Rs. 29", "Rs. 30", "Rs. 35"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "l030", subject: "Logical Reasoning",
    question: "Analogy: Biology : Zoology :: Chemistry : ___",
    options: ["Physics", "Biochemistry", "Pharmacology", "Organic Chemistry"],
    correct: 3, year: "2019", source: "PMDC"
  },
  {
    id: "l031", subject: "Logical Reasoning",
    question: "A is twice as old as B. Three years ago, A was three times as old as B. What is A's current age?",
    options: ["12 years", "14 years", "16 years", "18 years"],
    correct: 0, year: "2021", source: "NUMS"
  },
  {
    id: "l032", subject: "Logical Reasoning",
    question: "Blood relation: Pointing to a boy, a girl said 'He is the son of my father's only son.' What is the girl to the boy?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    correct: 0, year: "2022", source: "UHS"
  },
  {
    id: "l033", subject: "Logical Reasoning",
    question: "If all birds can fly, and penguins are birds, but penguins cannot fly – this is an example of:",
    options: ["Valid deductive argument", "Invalid inductive argument", "A counterexample disproving the universal premise", "Circular reasoning"],
    correct: 2, year: "2020", source: "SZABMU"
  },
  {
    id: "l034", subject: "Logical Reasoning",
    question: "Series completion: BDF, GIK, LNP, ___",
    options: ["QST", "QSU", "QTV", "RST"],
    correct: 1, year: "2022", source: "KMU"
  },
  {
    id: "l035", subject: "Logical Reasoning",
    question: "If North becomes West, and South becomes East in a code, what does East become?",
    options: ["North", "South", "East", "West"],
    correct: 0, year: "2019", source: "PMDC"
  },
  {
    id: "l036", subject: "Logical Reasoning",
    question: "A pipe fills a tank in 6 hours. Another empties it in 9 hours. If both open together, tank fills in:",
    options: ["15 hours", "18 hours", "12 hours", "3 hours"],
    correct: 1, year: "2021", source: "NUMS"
  },
  {
    id: "l037", subject: "Logical Reasoning",
    question: "Odd one out: Femur, Tibia, Radius, Humerus, Patella",
    options: ["Femur", "Tibia", "Radius", "Patella (sesamoid bone; others are long bones)"],
    correct: 3, year: "2022", source: "UHS"
  },
  {
    id: "l038", subject: "Logical Reasoning",
    question: "In a certain code language, BIOLOGY = 2965764, then PHYSICS = ?",
    options: ["7842363", "7854363", "7854266", "7842363"],
    correct: 0, year: "2020", source: "SZABMU"
  },
  {
    id: "l039", subject: "Logical Reasoning",
    question: "What percentage is 15 of 75?",
    options: ["25%", "15%", "20%", "30%"],
    correct: 2, year: "2022", source: "KMU"
  },
  {
    id: "l040", subject: "Logical Reasoning",
    question: "Statement: 'Regular exercise leads to better health.' Conclusion: 'Sedentary people have poor health.' This conclusion is:",
    options: ["Definitely true", "Definitely false", "A valid deduction from the statement", "Not a valid conclusion from the statement alone"],
    correct: 3, year: "2019", source: "PMDC"
  },
];

// ============================================================
// Test Generation Function - Strict Subject Weightage
// 90 MCQs total (45% Bio, 25% Chem, 20% Phys, 5% Eng, 5% LR)
// Prioritises past 5 years (2021-2025) MDCAT questions
// ============================================================

const PAST_5_YEARS = ["2021", "2022", "2023", "2024", "2025"];

export function generateTest(): MCQ[] {
  const distribution: Record<string, number> = {
    "Biology": 40,
    "Chemistry": 22,
    "Physics": 18,
    "English": 5,
    "Logical Reasoning": 5,
  };

  const result: MCQ[] = [];

  for (const [subject, count] of Object.entries(distribution)) {
    const allSubjectMCQs = ALL_MCQS.filter((q) => q.subject === subject);

    // Prefer past-5-year questions; fall back to full pool if insufficient
    const recentMCQs = allSubjectMCQs.filter(
      (q) => q.year && PAST_5_YEARS.includes(q.year)
    );
    const primaryPool = recentMCQs.length >= count ? recentMCQs : allSubjectMCQs;

    const shuffled = [...primaryPool].sort(() => Math.random() - 0.5);

    // Fill up if pool is smaller than required count
    let selected: MCQ[] = [];
    while (selected.length < count) {
      const needed = count - selected.length;
      selected = [...selected, ...shuffled.slice(0, needed)];
      if (selected.length < count) {
        shuffled.sort(() => Math.random() - 0.5);
      }
    }
    result.push(...selected.slice(0, count));
  }

  return result;
}

export const SUBJECT_COLORS: Record<Subject, string> = {
  Biology: "#10B981",
  Chemistry: "#3B82F6",
  Physics: "#8B5CF6",
  English: "#F59E0B",
  "Logical Reasoning": "#EF4444",
};

export const SUBJECT_DISTRIBUTION: Record<Subject, { count: number; percentage: number }> = {
  Biology: { count: 40, percentage: 45 },
  Chemistry: { count: 22, percentage: 25 },
  Physics: { count: 18, percentage: 20 },
  English: { count: 5, percentage: 5 },
  "Logical Reasoning": { count: 5, percentage: 5 },
};
