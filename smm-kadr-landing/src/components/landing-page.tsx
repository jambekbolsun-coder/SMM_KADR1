"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  Code2,
  FileCheck2,
  Film,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Phone,
  Play,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Video,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";


function InstagramGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const phoneDisplay = "+996 503 030 018";
const whatsappUrl = "https://wa.me/996503030018";
const instagramUrl =
  "https://www.instagram.com/smm_kadr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const navItems = [
  ["Главная", "#home"],
  ["О нас", "#about"],
  ["Команда", "#team"],
  ["Как работаем", "#process"],
  ["Отзывы", "#reviews"],
  ["Услуги", "#services"],
  ["Контакты", "#contacts"],
] as const;

const team = [
  {
    name: "Бегимай",
    role: "Управляющая и руководитель отдела продаж",
    department: "Управление и продажи",
    image: "/SMM_KADR1/team/Be.jpg",
    bio: "Управляет отделом продаж и сопровождает клиентов на всех этапах сотрудничества. Проводит консультации, выявляет потребности бизнеса, контролирует коммуникацию и передаёт проекты специалистам компании. Следит за соблюдением сроков и качеством обслуживания.",
    skills: [
      "Управление продажами",
      "Работа с клиентами",
      "Контроль проектов",
      "Деловые переговоры",
    ],
  },

  {
    name: "Айтбек",
    role: "Основатель SMM KADR",
    department: "Стратегия и развитие",
    image: "/SMM_KADR1/team/f5.PNG",
    bio: "Основатель и руководитель SMM KADR. Определяет стратегию развития компании, контролирует качество услуг, проводит переговоры с крупными клиентами и участвует в разработке маркетинговых решений. Более 7 лет работает в сфере SMM, рекламы и маркетинга. Реализовал более 300 проектов.",
    skills: [
      "Маркетинговая стратегия",
      "Аудит бизнеса",
      "Развитие компании",
      "Переговоры",
    ],
  },


  {
    name: "Эржан",
    role: "Главный таргетолог",
    department: "Таргетированная реклама",
    image: "/SMM_KADR1/team/er.jpeg",
    bio: "Отвечает за запуск и ведение таргетированной рекламы. Анализирует бизнес клиента, определяет целевую аудиторию, тестирует рекламные креативы и оптимизирует рекламный бюджет. Контролирует стоимость заявок и эффективность рекламных кампаний.",
    skills: [
      "Meta Ads",
      "Анализ аудитории",
      "Тестирование креативов",
      "Оптимизация рекламы",
    ],
  },

  {
    name: "Жамшутов Бекболсун Ринатович",
    role: "Главный программист",
    department: "Frontend и Backend-разработка",
    image: "SMM_KADR1/team/bekbol.jpeg",
    bio: "Руководит технической разработкой сайтов и цифровых продуктов SMM KADR. Отвечает за Frontend, Backend, архитектуру проектов, базы данных, интеграции и стабильную работу веб-систем. Контролирует техническое качество и безопасность создаваемых решений.",
    skills: [
      "Frontend-разработка",
      "Backend-разработка",
      "Архитектура сайтов",
      "API и интеграции",
    ],
  },

  {
    name: "Эрмек",
    role: "Контент-маркетолог",
    department: "Контент и продвижение",
    image: "/SMM_KADR1/team/f4.PNG",
    bio: "Разрабатывает контент-стратегии для социальных сетей. Анализирует аудиторию и конкурентов, составляет контент-планы, создаёт идеи и технические задания для Reels, Stories и публикаций. Следит, чтобы контент привлекал внимание и помогал бизнесу получать клиентов.",
    skills: [
      "Контент-стратегия",
      "Контент-планы",
      "Сценарии для Reels",
      "Анализ конкурентов",
    ],
  },

  {
    name: "Рахманкул",
    role: "Системный маркетолог",
    department: "Маркетинг и аналитика",
    image: "/SMM_KADR1/team/f2.PNG",
    bio: "Выстраивает комплексную систему маркетинга для бизнеса. Проводит аудит, анализирует воронку продаж, находит точки потери клиентов и разрабатывает решения для увеличения заявок и прибыли. Связывает рекламу, контент, продажи и аналитику в единую систему.",
    skills: [
      "Системный маркетинг",
      "Аудит бизнеса",
      "Воронки продаж",
      "Маркетинговая аналитика",
    ],
  },
  {
  name: "Камила",
  role: "Мобилограф",
  department: "Видео и контент",
  image: "/SMM_KADR1/team/f56.jpeg",
  bio: "Отвечает за мобильную видеосъёмку для социальных сетей. Снимает Reels, Stories, рекламные ролики, интервью и экспертный контент. Работает со светом, композицией и ракурсами, помогает героям уверенно вести себя в кадре и передаёт материалы на монтаж.",
  skills: [
    "Мобильная видеосъёмка",
    "Съёмка Reels",
    "Постановка кадра",
    "Работа со светом",
  ],
},
];

const reviews = [
  {
    company: "ERA CONCEPT HOME",
    author: "Основатель компании",
    score: 5,
    text: "Команда сначала разобралась в продукте и продажах, а не начала снимать всё подряд. После аудита мы получили понятный контент-план, новые рекламные связки и более сильную подачу проектов. Особенно понравилось, что за результат отвечала целая команда.",
    result: "Стратегия, контент и рекламные креативы",
  },
  {
    company: "SALT ORDO",
    author: "Представитель проекта",
    score: 4,
    text: "Работа выстроена системно: сценарии согласовали заранее, съёмочная команда приехала подготовленной, а монтаж получился живым. На старте было несколько правок по тону роликов, но команда быстро перестроилась и учла обратную связь.",
    result: "Контент-система и Reels для продвижения",
  },
  {
    company: "VIP HOUSE",
    author: "Руководитель отдела продаж",
    score: 5,
    text: "Для нас важно было не просто красивое видео, а материалы, которые помогают продавать. SMM_KADR предложили акции, усилили оффер и подготовили несколько форматов под разные аудитории. Коммуникация и отчётность были прозрачными.",
    result: "Офферы, видео и performance-маркетинг",
  },
  {
    company: "АВАНГАРД",
    author: "Основатель",
    score: 4,
    text: "Сильная сторона команды — широкий набор специалистов. Не пришлось отдельно искать сценариста, оператора, монтажёра и таргетолога. Срок на первый блок контента получился чуть дольше ожидаемого, зато итоговый материал был качественным и цельным.",
    result: "Полный цикл производства контента",
  },
];

const clientNames = [
  "ERA CONCEPT HOME",
  "FASHION MALL",
  "SALT ORDO",
  "YUMI",
  "KEREGE",
  "AVELL",
  "2GIS",
  "VIP HOUSE",
  "АВАНГАРД",
  "ELITE HOUSE",
  "MEGA FASAD",
  "LEADCRAFT",
];

const serviceCards = [
  {
    icon: Camera,
    title: "Профессиональный продакшен",
    text: "Киношная картинка, свет, постановка, режиссура, видеографы и монтажёры.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: MonitorSmartphone,
    title: "Мобильный контент",
    text: "Быстрые живые Reels на смартфон — органично, нативно и под привычки аудитории.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Code2,
    title: "Сайты и digital-системы",
    text: "Frontend, Backend, сайты любой сложности, CRM, чат-боты и интеграции.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Film,
    title: "Свадебный media production",
    text: "Полная съёмка свадьбы, слайд-шоу, команда на площадке и ответственность за результат.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
  },
];

const process = [
  {
    day: "День 1–2",
    title: "Глубокий аудит бизнеса",
    text: "Маркетологи изучают нишу, конкурентов, продажи, точки потери клиентов и разрывы в коммуникации.",
    icon: Search,
  },
  {
    day: "После аудита",
    title: "Стратегия и контент-план",
    text: "Формируем позиционирование, рубрики, офферы, акции и сценарии именно под вашу задачу.",
    icon: Layers3,
  },
  {
    day: "Продакшен",
    title: "Команда выходит на съёмку",
    text: "Сценарист, амбассадор, мобилограф или видеограф выполняют согласованный план.",
    icon: Camera,
  },
  {
    day: "Постпродакшен",
    title: "Монтаж и обработка",
    text: "Материал проходит монтаж, цвет, звук, графику, внутреннюю проверку и согласование.",
    icon: WandSparkles,
  },
  {
    day: "Запуск",
    title: "Таргет и аналитика",
    text: "Таргетолог запускает креативы, тестирует аудитории и отслеживает качество заявок.",
    icon: Target,
  },
  {
    day: "Рост",
    title: "Усиление результата",
    text: "Корректируем гипотезы, создаём новые акции и помогаем бизнесу выделяться среди конкурентов.",
    icon: BarChart3,
  },
];

const prices = [
  {
    title: "Одно видео",
    price: "от 15 000 сом",
    description: "Сценарий, съёмка, монтаж и подготовка материала под публикацию или рекламу.",
    features: ["Маркетинговый сценарий", "Съёмочная команда", "Монтаж и обработка", "Формат под соцсети"],
    popular: false,
  },
  {
    title: "4 видео",
    price: "от 35 000 сом",
    description: "Компактный пакет для теста контента, оффера и рекламных гипотез.",
    features: ["Аудит задачи", "4 сценария", "Съёмка и монтаж", "Командная работа"],
    popular: false,
  },
  {
    title: "8 видео",
    price: "от 70 000 сом",
    description: "Системная работа целой команды для бизнеса, которому нужен стабильный контент.",
    features: ["Аудит бизнеса", "Контент-план", "8 видео", "Таргет и аналитика"],
    popular: true,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function ContactButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", compact && "gap-2")}>
      <Button asChild variant="primary" size={compact ? "default" : "lg"}>
        <a href={`${whatsappUrl}?text=${encodeURIComponent("Здравствуйте! Хочу обсудить продвижение с SMM_KADR.")}`} target="_blank" rel="noreferrer">
          <MessageCircle /> Написать в WhatsApp
        </a>
      </Button>
      <Button asChild variant="outline" size={compact ? "default" : "lg"}>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <InstagramGlyph /> Instagram
        </a>
      </Button>
    </div>
  );
}

function HeroScene() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(45);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${smoothX}% ${smoothY}%, rgba(59,130,246,.30), transparent 48%)`;

  return (
    <motion.div
      className="relative min-h-[450px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.9)] lg:min-h-[620px]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      style={{ backgroundImage: glow }}
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-44" fill="#ffffff" />
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur-md">
        <MousePointer2 className="size-3.5" /> Наведите курсор на 3D-сцену
      </div>
      <div className="absolute bottom-5 left-5 z-20 max-w-[250px] rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs leading-5 text-white/70 backdrop-blur-xl">
        Интерактивная 3D-сцена реагирует на движение мыши. На телефоне модель управляется касанием.
      </div>
      <div className="absolute inset-0 z-10">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="h-full w-full"
        />
      </div>
    </motion.div>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<(typeof team)[number] | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  const currentReview = reviews[reviewIndex];

  useEffect(() => {
    if (reviewsPaused) return;
    const interval = window.setInterval(() => {
      setReviewIndex((value) => (value + 1) % reviews.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [reviewsPaused]);

  useEffect(() => {
    document.body.style.overflow = selectedMember || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember, menuOpen]);

  const reviewStars = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index < currentReview.score),
    [currentReview.score],
  );

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Здравствуйте! Хочу оставить заявку на услуги SMM_KADR.",
      `Имя: ${form.get("name") || "—"}`,
      `Телефон: ${form.get("phone") || "—"}`,
      `Компания / ниша: ${form.get("business") || "—"}`,
      `Интересует: ${form.get("service") || "—"}`,
      `Комментарий: ${form.get("message") || "—"}`,
    ].join("\n");
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="overflow-clip">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_16px_55px_-32px_rgba(15,23,42,0.5)] backdrop-blur-xl lg:px-5">
          <a href="#home" className="flex items-center gap-3" aria-label="SMM_KADR — на главную">
            <Image src="/SMM_KADR1/team/smm1.jpg" width={42} height={42} alt="Логотип SMM_KADR" priority />
            <span>
              <span className="block text-sm font-black tracking-[-0.02em] text-slate-950">SMM_KADR</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Media company</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Основная навигация">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href={`tel:+996503030018`} className="mr-2 text-sm font-bold text-slate-700 hover:text-blue-700">
              {phoneDisplay}
            </a>
            <Button asChild variant="primary">
              <a href="#contacts">Оставить заявку <ArrowRight /></a>
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-slate-950/30 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/logo-mark.svg" width={42} height={42} alt="SMM_KADR" />
                  <span className="font-black">SMM_KADR</span>
                </div>
                <button className="grid size-11 place-items-center rounded-full bg-slate-100" onClick={() => setMenuOpen(false)} aria-label="Закрыть меню">
                  <X />
                </button>
              </div>
              <nav className="grid gap-1">
                {navItems.map(([label, href]) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto grid gap-3">
                <Button asChild variant="primary" size="lg">
                  <a href={`${whatsappUrl}?text=${encodeURIComponent("Здравствуйте! Хочу обсудить продвижение.")}`} target="_blank" rel="noreferrer">
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
                <a className="text-center text-sm font-bold text-slate-600" href="tel:+996503030018">{phoneDisplay}</a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section id="home" className="relative pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.15),transparent_30%),linear-gradient(to_bottom,#eff6ff_0%,#ffffff_78%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-blue-600" />
              </span>
              Рекламная компания · Бишкек · 7 лет на рынке
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[5.3rem]">
              SMM_KADR
              <span className="mt-3 block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Рекламная компания
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              Универсальный медиа-холдинг: маркетинг, съёмка на профессиональную камеру и телефон, таргет, сайты, CRM, чат-боты и полный свадебный продакшен.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Не один специалист — целая команда", "Работаем по ИП и договору", "От идеи до заявок"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700">
                  <CircleCheckBig className="size-4 text-blue-600" /> {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ContactButtons />
            </div>
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["40+", "специалистов"],
                ["300+", "проектов"],
                ["7 лет", "на рынке"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white bg-white/70 p-4 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.5)] backdrop-blur">
                  <div className="text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">{value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.08 }}>
            <HeroScene />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/70 py-6 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-hidden px-5">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Проекты и партнёрства</p>
          <div className="logo-marquee relative flex overflow-hidden">
            <div className="flex min-w-full shrink-0 animate-[marquee_30s_linear_infinite] items-center justify-around gap-4 pr-4 motion-reduce:animate-none">
              {[...clientNames, ...clientNames].map((name, index) => (
                <div key={`${name}-${index}`} className="whitespace-nowrap rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black tracking-[-0.02em] text-slate-700 shadow-sm">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-space relative">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="О компании"
                title="Медиа-команда, которая закрывает весь цикл продвижения"
                description="SMM_KADR объединяет около 40 специалистов: маркетологов, сценаристов, таргетологов, монтажёров, мобилографов, видеографов, аналитиков, программистов Frontend и Backend."
              />
              <div className="mt-7">
                <ContactButtons compact />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="sm:col-span-2 overflow-hidden bg-slate-950 text-white">
                <CardContent className="grid gap-0 p-0 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="p-7 sm:p-9">
                    <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-blue-600"><Users /></div>
                    <h3 className="text-2xl font-bold sm:text-3xl">Не фрилансер. Не маленькое агентство. Полноценный медиа-холдинг.</h3>
                    <p className="mt-4 leading-7 text-white/65">Каждый проект получает маркетинговую, креативную, производственную и техническую команду — с распределённой ответственностью по отделам.</p>
                  </div>
                  <div className="relative min-h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85"
                      alt="Команда на рабочей встрече"
                      fill
                      className="object-cover opacity-80"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
                  </div>
                </CardContent>
              </Card>

              {[
                { icon: ShieldCheck, title: "Официальная работа", text: "Работаем по ИП, заключаем договор, фиксируем объём, сроки и ответственность сторон." },
                { icon: BriefcaseBusiness, title: "Разные ниши", text: "Недвижимость, мебель, детейлинг, косметика, спецтехника, авто, юристы, строительство и другие." },
                { icon: Rocket, title: "Сильная экспертиза", text: "Топовые маркетологи, крупные блогеры-амбассадоры и продажники с серьёзным опытом." },
                { icon: Bot, title: "Технологии", text: "Сайты, CRM, чат-боты, аналитика и автоматизация — внутри одной экосистемы." },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300">
                  <div className="mb-5 grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><Icon /></div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Возможности"
            title="Снимаем, продвигаем и разрабатываем в одном месте"
            description="Профессиональная камера для киношной подачи, смартфон для нативного контента и digital-команда для технической части бизнеса."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceCards.map(({ icon: Icon, title, text, image }, index) => (
              <motion.article
                key={title}
                className={cn("group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10", index === 0 && "md:row-span-2 md:min-h-[805px]")}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-4 grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur"><Icon /></div>
                  <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
                  <p className="mt-3 max-w-lg leading-7 text-white/70">{text}</p>
                  <a href="#contacts" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white">Обсудить задачу <ArrowRight className="size-4" /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-space">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Наша команда"
              title="Руководители ключевых направлений"
              description="Нажмите на карточку специалиста, чтобы открыть подробную информацию. Фото и данные легко меняются в одном файле."
            />
            <Button asChild variant="outline"><a href="#contacts">Познакомиться с командой <ArrowRight /></a></Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <button
                key={`${member.name}-${member.role}`}
                type="button"
                onClick={() => setSelectedMember(member)}
                className={cn(
                  "group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-900 text-left shadow-[0_24px_70px_-40px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20",
                  index === 0 && "lg:col-span-2",
                )}
              >
                <Image src={member.image} alt={`${member.name}, ${member.role}`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/75 backdrop-blur">{member.department}</div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-white/70">{member.role}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300">Подробнее <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMember ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Информация о ${selectedMember.name}`}
              className="relative grid max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-white shadow-2xl md:grid-cols-[0.8fr_1.2fr]"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button onClick={() => setSelectedMember(null)} className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-white/90 shadow-lg" aria-label="Закрыть"><X /></button>
              <div className="relative min-h-80 md:min-h-[560px]">
                <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              <div className="p-7 sm:p-10">
                <div className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">{selectedMember.department}</div>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950">{selectedMember.name}</h3>
                <p className="mt-2 font-semibold text-blue-700">{selectedMember.role}</p>
                <p className="mt-6 leading-7 text-slate-600">{selectedMember.bio}</p>
                <div className="mt-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Компетенции</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{skill}</span>)}
                  </div>
                </div>
                <div className="mt-8"><ContactButtons compact /></div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section id="process" className="section-space bg-blue-50/65">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Как мы работаем"
                title="Сначала понимаем бизнес. Потом создаём контент."
                description="Первые два дня команда не снимает случайные ролики — она ищет разрывы, точки роста и формирует систему, которая должна привести к результату."
              />
              <div className="mt-7 rounded-[1.75rem] border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white"><Zap /></div>
                  <div>
                    <h3 className="font-bold text-slate-950">Отдельно усиливаем оффер</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Помогаем придумать акции и особенности продукта, чтобы бизнес не выглядел как копия конкурентов.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6"><ContactButtons compact /></div>
            </div>

            <div className="relative grid gap-4">
              <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-blue-200 sm:block" />
              {process.map(({ day, title, text, icon: Icon }, index) => (
                <motion.div key={title} className="relative grid gap-4 rounded-[1.75rem] border border-white bg-white/80 p-5 shadow-[0_18px_55px_-38px_rgba(15,23,42,0.6)] backdrop-blur sm:grid-cols-[60px_1fr] sm:p-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.05 }}>
                  <div className="relative z-10 grid size-14 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg"><Icon /></div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">{day}</span>
                    <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="section-space">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Отзывы"
            title="Истории сотрудничества без идеальной рекламной маски"
            description="Ниже подготовлены правдоподобные черновики для согласования с клиентами. Перед публикацией замените их на подтверждённые отзывы."
            align="center"
          />

          <div className="mx-auto mt-10 max-w-5xl" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)}>
            <Card className="relative overflow-hidden border-blue-100 bg-gradient-to-br from-white to-blue-50 p-2 sm:p-4">
              <div className="absolute right-6 top-6 text-blue-100"><Quote className="size-24" /></div>
              <CardContent className="relative p-6 sm:p-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">Черновик для согласования</span>
                    <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">{currentReview.company}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{currentReview.author}</p>
                  </div>
                  <div className="flex gap-1" aria-label={`${currentReview.score} из 5`}>
                    {reviewStars.map((filled, index) => <Star key={index} className={cn("size-5", filled ? "fill-amber-400 text-amber-400" : "text-slate-200")} />)}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={reviewIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                    <blockquote className="text-pretty text-xl font-medium leading-9 text-slate-700 sm:text-2xl sm:leading-10">«{currentReview.text}»</blockquote>
                    <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700"><BarChart3 className="size-4" /> {currentReview.result}</div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-9 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {reviews.map((_, index) => (
                      <button key={index} onClick={() => setReviewIndex(index)} className={cn("h-2.5 rounded-full transition-all", index === reviewIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400")} aria-label={`Показать отзыв ${index + 1}`} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)} className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-700" aria-label="Предыдущий отзыв"><ChevronLeft /></button>
                    <button onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-700" aria-label="Следующий отзыв"><ChevronRight /></button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="section-space bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Услуги и стоимость"
              title="В каждый проект входит команда специалистов"
              description="Финальная стоимость зависит от задачи, локаций, сложности съёмки, количества специалистов и рекламного бюджета."
            />
            <Button asChild variant="primary" size="lg"><a href="#contacts">Получить расчёт <ArrowRight /></a></Button>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {prices.map((plan) => (
              <article key={plan.title} className={cn("relative flex flex-col rounded-[2rem] border p-7 sm:p-8", plan.popular ? "border-blue-400 bg-blue-600 shadow-[0_30px_80px_-35px_rgba(37,99,235,0.8)]" : "border-white/10 bg-white/[0.06]")}>
                {plan.popular ? <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-black text-blue-700">Чаще выбирают</span> : null}
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className={cn("mt-2 leading-7", plan.popular ? "text-blue-100" : "text-white/60")}>{plan.description}</p>
                <div className="mt-7 text-3xl font-black tracking-[-0.04em] sm:text-4xl">{plan.price}</div>
                <div className={cn("my-7 h-px", plan.popular ? "bg-white/20" : "bg-white/10")} />
                <ul className="grid gap-3">
                  {plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-medium"><span className={cn("grid size-6 place-items-center rounded-full", plan.popular ? "bg-white text-blue-700" : "bg-blue-500/20 text-blue-300")}><Check className="size-3.5" /></span>{feature}</li>)}
                </ul>
                <Button asChild variant={plan.popular ? "outline" : "primary"} size="lg" className={cn("mt-8 w-full", plan.popular && "border-white bg-white text-blue-700 hover:bg-blue-50")}>
                  <a href={`${whatsappUrl}?text=${encodeURIComponent(`Здравствуйте! Интересует пакет «${plan.title}» — ${plan.price}.`)}`} target="_blank" rel="noreferrer">Обсудить пакет <ArrowRight /></a>
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:grid-cols-3 sm:p-8">
            {[
              [FileCheck2, "ИП и договор", "Фиксируем объём, сроки, оплату и ответственность."],
              [Users, "Команда под задачу", "Не перекладываем весь проект на одного человека."],
              [BarChart3, "Прозрачные этапы", "Планирование, производство, запуск и аналитика."],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof FileCheck2;
              return <div key={title as string} className="flex items-start gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-600"><IconComponent /></div><div><h3 className="font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text as string}</p></div></div>;
            })}
          </div>
        </div>
      </section>

      <section id="contacts" className="section-space relative">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[2.25rem] border border-blue-100 bg-white shadow-[0_35px_100px_-55px_rgba(15,23,42,0.5)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden bg-blue-600 p-7 text-white sm:p-10 lg:p-12">
                <div className="absolute inset-0 bg-[url('/whatsapp-pattern.svg')] bg-[length:220px_220px] opacity-35" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"><Play className="size-3.5" /> Начнём с задачи</div>
                  <h2 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">Расскажите о бизнесе — мы предложим план действий</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">Оставьте заявку. После отправки откроется WhatsApp с уже заполненным сообщением.</p>
                  <div className="mt-9 grid gap-4">
                    <a href="tel:+996503030018" className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15"><span className="grid size-11 place-items-center rounded-xl bg-white text-blue-700"><Phone /></span><span><span className="block text-xs text-blue-100">Телефон</span><span className="font-bold">{phoneDisplay}</span></span></a>
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15"><span className="grid size-11 place-items-center rounded-xl bg-white text-blue-700"><InstagramGlyph /></span><span><span className="block text-xs text-blue-100">Instagram</span><span className="font-bold">@smm_kadr</span></span></a>
                  </div>
                  <div className="mt-9 flex items-start gap-3 rounded-2xl bg-slate-950/20 p-4 text-sm leading-6 text-blue-50"><ShieldCheck className="mt-0.5 size-5 shrink-0" /> Работаем официально по ИП и договору. Все детали можно обсудить до старта проекта.</div>
                </div>
              </div>

              <form onSubmit={submitLead} className="grid gap-5 p-7 sm:p-10 lg:p-12">
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">Оставить заявку</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Заполните несколько полей — это займёт меньше минуты.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-slate-700">Ваше имя<input name="name" required className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="Например, Азамат" /></label>
                  <label className="grid gap-2 text-sm font-bold text-slate-700">Номер телефона<input name="phone" required inputMode="tel" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="+996 ___ ___ ___" /></label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-slate-700">Компания или ниша<input name="business" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="Недвижимость, авто, мебель..." /></label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">Какая услуга интересует<select name="service" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"><option>Комплексное продвижение</option><option>8 видео</option><option>4 видео</option><option>Одно видео</option><option>Сайт / CRM / чат-бот</option><option>Свадебная съёмка</option><option>Другое</option></select></label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">Комментарий<textarea name="message" rows={4} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="Кратко опишите задачу" /></label>
                <label className="flex items-start gap-3 text-xs leading-5 text-slate-500"><input type="checkbox" required className="mt-1 size-4 accent-blue-600" /> Я согласен на обработку данных для связи по моей заявке.</label>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-fit">Отправить в WhatsApp <ArrowRight /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3"><Image src="/SMM_KADR1/team/smm1.jpg" width={42} height={42} alt="SMM_KADR" /><div><div className="font-black text-slate-950">SMM_KADR</div><div className="text-xs text-slate-500">Рекламная компания · Медиа-холдинг</div></div></div>
          <p className="text-sm text-slate-500">© 2026 SMM_KADR. Бишкек, Кыргызстан.</p>
          <div className="flex gap-2"><a className="grid size-11 place-items-center rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-700" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramGlyph /></a><a className="grid size-11 place-items-center rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-700" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a></div>
        </div>
      </footer>

      <a href={`${whatsappUrl}?text=${encodeURIComponent("Здравствуйте! Хочу получить консультацию SMM_KADR.")}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_18px_45px_-15px_rgba(16,185,129,0.8)] transition hover:-translate-y-1 hover:bg-emerald-600" aria-label="Написать в WhatsApp"><MessageCircle className="size-6" /></a>
    </main>
  );
}
