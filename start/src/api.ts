import { BackendQuestionInterface, QuestionInterface } from "./types";

const response = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "Who%20was%20a%20voice%20actor%20for%20the%20English%20dubbing%20of%20HOWL%27S%20MOVING%20CASTLE%20%282004%29%3F",
      correct_answer: "Christian%20Bale",
      incorrect_answers: [
        "Matt%20Damon",
        "Joseph%20Gordon-Levitt",
        "Willem%20Dafoe",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "In%20the%20anime%20%22My%20Hero%20Academia%22%2C%20which%20character%20is%20shown%20with%20the%20ability%20to%20manipulate%20gravity%3F",
      correct_answer: "Uraraka",
      incorrect_answers: ["Bakugo", "Deku", "Asui%20"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "What%20caused%20the%20titular%20mascot%20of%20Yo-Kai%20Watch%2C%20Jibanyan%2C%20to%20become%20a%20yokai%3F",
      correct_answer: "Being%20run%20over%20by%20a%20truck",
      incorrect_answers: [
        "Ate%20one%20too%20many%20chocobars",
        "Through%20a%20magical%20ritual",
        "When%20he%20put%20on%20the%20harmaki",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "What%20is%20the%20last%20name%20of%20Edward%20and%20Alphonse%20in%20the%20Fullmetal%20Alchemist%20series.",
      correct_answer: "Elric",
      incorrect_answers: ["Ellis", "Eliek", "Elwood"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "Who%20is%20the%20main%20heroine%20of%20the%20anime%2C%20Full%20Metal%20Panic%21",
      correct_answer: "Kaname%20Chidori",
      incorrect_answers: [
        "Teletha%20Testarossa",
        "Melissa%20Mao",
        "Kyoko%20Tokiwa",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "Who%20is%20the%20author%20of%20the%20manga%20series%20%22Astro%20Boy%22%3F",
      correct_answer: "Osamu%20Tezuka",
      incorrect_answers: [
        "Mitsuteri%20Yokoyama",
        "Takao%20Saito",
        "Yoshihiro%20Tatsumi",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "Who%20was%20given%20the%20title%20%22Full%20Metal%22%20in%20the%20anime%20series%20%22Full%20Metal%20Alchemist%22%3F",
      correct_answer: "Edward%20Elric",
      incorrect_answers: [
        "Alphonse%20Elric",
        "Van%20Hohenheim",
        "Izumi%20Curtis",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "How%20many%20%22JoJos%22%20that%20are%20protagonists%20are%20there%20in%20the%20series%20%22Jojo%27s%20Bizarre%20Adventure%22%3F",
      correct_answer: "8%2B",
      incorrect_answers: ["6%2B", "4%2B", "5%2B"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question: "What%20was%20Ash%20Ketchum%27s%20second%20Pokemon%3F",
      correct_answer: "Caterpie",
      incorrect_answers: ["Charmander", "Pikachu", "Pidgey"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      question:
        "What%20is%20the%20name%20of%20Funny%20Valentine%27s%20stand%20in%20Jojo%27s%20Bizarre%20Adventure%20Part%207%2C%20Steel%20Ball%20Run%3F",
      correct_answer: "Dirty%20Deeds%20Done%20Dirt%20Cheap",
      incorrect_answers: [
        "Filthy%20Acts%20Done%20For%20A%20Reasonable%20Price",
        "Civil%20War",
        "God%20Bless%20The%20USA",
      ],
    },
  ],
};

export const shuffleAnswers = (
  question: QuestionInterface | null,
): string[] => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const normalizeQuestions = (
  backendQuestions: BackendQuestionInterface[],
): QuestionInterface[] => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer),
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      incorrectAnswers,
      question: decodeURIComponent(backendQuestion.question),
    };
  });
};

export const loadQuestions = (): Promise<QuestionInterface[]> => {
  return new Promise((resolve) => {
    const normalizedQuestions = normalizeQuestions(response.results);
    resolve(normalizedQuestions);
  });
};
