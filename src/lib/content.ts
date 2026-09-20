// All imagery and editorial content live here for easy replacement.
// Academic areas below are concept content, not a verified KIU course catalogue.
export const programs = [
  {
    id: "computer-science",
    number: "01",
    title: "Computer Science",
    kicker: "CODE A DIFFERENT FUTURE",
    description:
      "Turn curiosity into code. Explore the ideas and systems shaping our digital world.",
    detail:
      "Think logically. Experiment boldly. From the first algorithm to a working application, discover the possibilities of computing.",
    topics: [
      "Artificial Intelligence",
      "Software Engineering",
      "Algorithms",
      "Cybersecurity",
      "Data Science",
    ],
  },
  {
    id: "mathematics",
    number: "02",
    title: "Mathematics",
    kicker: "FIND THE UNDERLYING PATTERN",
    description:
      "A language for understanding complexity. A foundation for new possibilities.",
    detail:
      "Look beyond the answer. Explore the patterns, proofs and models that help us understand complex problems.",
    topics: ["Mathematical Thinking", "Modelling", "Probability", "Logic"],
  },
  {
    id: "management",
    number: "03",
    title: "Management",
    kicker: "IDEAS INTO IMPACT",
    description:
      "Connect people, ideas and strategy. Imagine a better way to do business.",
    detail:
      "Discover how ideas become organizations. Explore the relationship between thoughtful leadership, people and a changing world.",
    topics: ["Strategy", "Entrepreneurship", "Leadership", "Decision Making"],
  },
  {
    id: "science-technology",
    number: "04",
    title: "Science & Technology",
    kicker: "ASK WHAT IF",
    description:
      "Where discovery meets application. Explore the questions that move us forward.",
    detail:
      "Connect scientific curiosity with practical experimentation. Imagine new approaches to the challenges around us.",
    topics: [
      "Scientific Discovery",
      "Experimentation",
      "Emerging Technology",
      "Interdisciplinary Thinking",
    ],
  },
] as const;

export const campusSpaces = [
  {
    title: "Student Residence",
    category: "A PLACE TO BELONG",
    image: "/images/residence.webp",
    alt: "Colorful KIU residence buildings next to trees",
    text: "A campus perspective on the place between your first class and your next big idea.",
    placeholder: false,
  },
  {
    title: "Library",
    category: "FOLLOW YOUR CURIOSITY",
    image: "/images/library.webp",
    alt: "KIU library interior with a yellow spiral staircase",
    text: "Quiet corners, open books, and space to follow a thought a little further.",
    placeholder: false,
  },
  {
    title: "Sports",
    category: "CHANGE YOUR PACE",
    image: "/images/sports.webp",
    alt: "Illustrative photograph of outdoor basketball courts surrounded by forest",
    text: "Make room for a different kind of focus. This image is an illustrative campus-life reference, not a KIU facility.",
    placeholder: true,
  },
  {
    title: "Gym",
    category: "FIND YOUR BALANCE",
    image: "/images/gym.webp",
    alt: "Illustrative photograph of exercise equipment in a sunlit gym",
    text: "A little movement. A clearer mind. This image is an illustrative campus-life reference, not a KIU facility.",
    placeholder: true,
  },
  {
    title: "Study Spaces",
    category: "ROOM FOR YOUR NEXT IDEA",
    image: "/images/students.webp",
    alt: "Students working together at desks at KIU",
    text: "The conversation after class. The shared problem. The moment an idea starts to make sense.",
    placeholder: false,
  },
  {
    title: "Student Life",
    category: "MAKE IT YOUR OWN",
    image: "/images/courtyard.webp",
    alt: "KIU academic courtyard with landscaped outdoor spaces",
    text: "New surroundings. New conversations. A new chapter in Kutaisi.",
    placeholder: false,
  },
] as const;

// DEMO VALUES ONLY: invented to demonstrate the counter interaction.
// Replace every value and label with verified, sourced KIU data before official use.
export const DEMO_STATISTICS = [
  { value: 1200, suffix: "+", label: "Curious minds" },
  { value: 40, suffix: "+", label: "Perspectives from around the world" },
  { value: 25, suffix: "+", label: "Ideas in motion" },
  { value: 12, suffix: "", label: "Fields of possibility" },
] as const;

export const researchTopics = [
  {
    name: "Artificial Intelligence",
    filename: "intelligence.py",
    code: [
      "from curiosity import possibility",
      "",
      "model = Intelligence()",
      "model.learn(experience)",
      "",
      "future = model.imagine(",
      '    purpose="a better tomorrow",',
      "    human_at_the_center=True",
      ")",
    ],
  },
  {
    name: "Software Engineering",
    filename: "tomorrow.ts",
    code: [
      'import { idea } from "possibility";',
      "",
      "const future = await build({",
      "  foundation: curiosity,",
      "  architecture: thoughtful,",
      "  people: atTheCenter,",
      "});",
      "",
      "future.ship();",
    ],
  },
  {
    name: "Algorithms",
    filename: "possibilities.py",
    code: [
      "def find_a_way(problem):",
      "    paths = explore(problem)",
      "",
      "    for path in paths:",
      "        if path.makes_a_difference:",
      "            return improve(path)",
      "",
      "    return try_again()",
    ],
  },
  {
    name: "Cybersecurity",
    filename: "trust.ts",
    code: [
      "const trust = new Foundation();",
      "",
      "for (const system of ourWorld) {",
      "  await understand(system);",
      "  await question(system);",
      "  await protect(system);",
      "}",
      "",
      "// Build with responsibility.",
    ],
  },
  {
    name: "Data Science",
    filename: "perspective.py",
    code: [
      "data = observe(the_world)",
      "",
      "questions = ask_why(data)",
      "patterns = look_closer(questions)",
      "",
      "insight = connect(",
      "    evidence=patterns,",
      "    perspective=human",
      ")",
    ],
  },
] as const;
