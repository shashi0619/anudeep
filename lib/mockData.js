// ─── Categories ─────────────────────────────────────────────────────────────

export const mockCategories = [
  {
    _id: "cat-energy",
    name: "Energy Security",
    slug: { current: "energy-security" },
    banner: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format&fit=crop&q=60",
    description: "Geopolitics of energy, resource security, and strategic dependencies in Asia.",
  },
  {
    _id: "cat-japan",
    name: "Japan & East Asia",
    slug: { current: "japan-east-asia" },
    banner: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&auto=format&fit=crop&q=60",
    description: "Japan's foreign policy, India–Japan relations, and East Asian security dynamics.",
  },
  {
    _id: "cat-indopacific",
    name: "Indo-Pacific",
    slug: { current: "indo-pacific" },
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    description: "Strategic competition, alliances, and emerging order in the Indo-Pacific region.",
  },
  {
    _id: "cat-westasia",
    name: "West Asia",
    slug: { current: "west-asia" },
    banner: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
    description: "Geopolitics of the Middle East, Gulf states, and their Asian connections.",
  },
  {
    _id: "cat-foreignpolicy",
    name: "Foreign Policy",
    slug: { current: "foreign-policy" },
    banner: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=60",
    description: "Analysis of foreign policy decisions, diplomatic strategy, and international relations.",
  },
  {
    _id: "cat-law",
    name: "International Law",
    slug: { current: "international-law" },
    banner: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
    description: "International legal frameworks, treaties, and law in global governance.",
  },
];

// ─── Posts ───────────────────────────────────────────────────────────────────

export const mockPosts = [

  // ── 1. Japan Energy & Iran (featured) ─────────────────────────────────────
  {
    _id: "post-japan-iran-energy",
    title: "Japan's Energy Security and Its Iran Calculus",
    slug: { current: "japan-energy-security-iran-calculus" },
    _createdAt: "2025-05-10T09:00:00Z",
    description:
      "Japan's approach to Iran cannot be understood through bilateral ties alone. It must be located in Japan's larger energy geography — its very low self-sufficiency, heavy fossil fuel dependence, and deep exposure to the Strait of Hormuz as a strategic chokepoint.",
    views: 3840,
    mainImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[0],
    content: [
      {
        _key: "b0",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s0",
            _type: "span",
            text: "I would like to thank the Chennai Centre for China Studies (C3S) for inviting me to speak at its webinar, \"Iran in a Changing World Order\". I reflected on Japan's Energy Security and Its Iran Calculus at a moment when West Asian instability is once again testing the resilience of Asian economies and the limits of alliance politics.",
          },
        ],
      },
      {
        _key: "b1",
        _type: "block",
        style: "h2",
        children: [{ _key: "s1", _type: "span", text: "Japan's Energy Geography: A Nation on the Edge" }],
      },
      {
        _key: "b2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s2",
            _type: "span",
            text: "Japan's Iran calculus cannot be understood narrowly through bilateral ties with Tehran. It must be located in Japan's larger energy geography. Japan has very low energy self-sufficiency — consistently below 15 percent of total primary energy supply met from domestic sources. This makes it one of the most energy-import-dependent advanced economies in the world.",
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "Japan's heavy dependence on imported fossil fuels — oil, liquefied natural gas, and coal — means that disruptions in supply chains carry outsized consequences for Japanese industry, households, and macroeconomic stability. Approximately 90 percent of Japan's crude oil imports transit the Strait of Hormuz, making this narrow waterway one of the most strategically significant chokepoints for Japanese national security.",
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "h2",
        children: [{ _key: "s4", _type: "span", text: "Historical Memory: The 1973 Oil Shock and Its Long Shadow" }],
      },
      {
        _key: "b5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s5",
            _type: "span",
            text: "Tokyo's thinking on energy security is inseparable from its historical memory. The 1973 oil crisis was a formative national trauma. When OPEC embargoed oil exports in response to Western support for Israel in the Yom Kippur War, Japan — which then sourced nearly 80 percent of its oil from the Middle East — was left deeply exposed. The immediate consequences included fuel shortages, runaway inflation, and a sharp economic contraction. The political consequences were equally severe, accelerating a recalibration of Japan's Middle East policy toward a more balanced stance between Arab states and Israel.",
          },
        ],
      },
      {
        _key: "b6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s6",
            _type: "span",
            text: "In the aftermath of 1973, Japan constructed a comprehensive strategic petroleum reserve system. The post-1979 Iranian Revolution reinforced this imperative. Japan built stockpiles designed to provide roughly 150 days of supply — a buffer intended precisely to prevent the kind of acute vulnerability exposed by the 1973 shock. This stockpiling architecture remains central to Japan's energy statecraft today.",
          },
        ],
      },
      {
        _key: "b7",
        _type: "block",
        style: "h2",
        children: [{ _key: "s7", _type: "span", text: "Post-Fukushima: Searching for a New Energy Mix" }],
      },
      {
        _key: "b8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s8",
            _type: "span",
            text: "The 2011 Fukushima nuclear disaster fundamentally disrupted Japan's energy calculus. In the aftermath, Japan shut down its entire nuclear fleet — which had previously supplied nearly 30 percent of its electricity. The immediate substitution effect dramatically increased Japan's dependence on imported fossil fuels, particularly LNG from Qatar, Australia, and the United States. Japan became one of the world's largest LNG importers almost overnight.",
          },
        ],
      },
      {
        _key: "b9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s9",
            _type: "span",
            text: "The post-Fukushima search for a new energy mix — gradually restarting select reactors, aggressively investing in renewables, and diversifying fossil fuel sources — continues to shape Tokyo's thinking today. It has reinforced Japan's structural interest in stable West Asian energy markets even as it seeks to reduce long-term fossil fuel dependence.",
          },
        ],
      },
      {
        _key: "b10",
        _type: "block",
        style: "h2",
        children: [{ _key: "s10", _type: "span", text: "Japan's Triple Balancing Act" }],
      },
      {
        _key: "b11",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s11",
            _type: "span",
            text: "Japan today is trying to do three things at once. First, preserve and deepen the US alliance, which remains the cornerstone of Japan's security architecture and its broader strategic posture in East Asia. Second, avoid being pulled too deeply into conflicts it did not shape and whose escalation dynamics it cannot control — a concern that is especially acute in the Gulf, where any military confrontation could directly threaten Hormuz transit. Third, protect its own strategic autonomy in an era of renewed geopolitical turbulence, including through energy diplomacy that maintains working relationships with a range of actors that the United States may regard with hostility.",
          },
        ],
      },
      {
        _key: "b12",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s12",
            _type: "span",
            text: "That triple balancing act tells us much about both Japan's foreign policy and the changing texture of world order itself. Japan's Iran calculus is ultimately a window into a larger story — about how middle and major powers navigate an international system in which American primacy is increasingly contested, alliance cohesion is under pressure, and energy transitions are reshaping the geopolitical map.",
          },
        ],
      },
      {
        _key: "b13",
        _type: "block",
        style: "h2",
        children: [{ _key: "s13", _type: "span", text: "Implications for Asian Economies and Alliance Politics" }],
      },
      {
        _key: "b14",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s14",
            _type: "span",
            text: "West Asian instability carries asymmetric risks for Asian economies. While the United States has moved toward greater energy self-sufficiency through its shale revolution, Asian economies — Japan, South Korea, India, China — remain heavily exposed to Persian Gulf supply routes. This structural asymmetry is increasingly visible in divergent threat perceptions within the US alliance system in Asia.",
          },
        ],
      },
      {
        _key: "b15",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s15",
            _type: "span",
            text: "For Japan specifically, the challenge is to translate energy vulnerability into diplomatic agency rather than strategic dependence. Japan has historically sought to do this through a combination of official development assistance, investment in upstream energy projects, and careful diplomatic engagement across the Gulf. How well it can sustain that approach in an era of sharper US–Iran confrontation will be one of the defining tests of Japanese foreign policy in the coming decade.",
          },
        ],
      },
    ],
    comments: [],
  },

  // ── 2. India–Japan Relations ───────────────────────────────────────────────
  {
    _id: "post-india-japan",
    title: "The Strategic Depth of India–Japan Relations in the Indo-Pacific",
    slug: { current: "india-japan-relations-indo-pacific" },
    _createdAt: "2025-04-15T08:00:00Z",
    description:
      "India and Japan have elevated their partnership into a Special Strategic and Global Partnership. What drives this convergence, and what are its limits in the emerging Indo-Pacific order?",
    views: 2910,
    mainImage:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[1],
    content: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "The India–Japan relationship has undergone a remarkable transformation over the past two decades. From modest economic ties and episodic diplomatic contact, it has evolved into a Special Strategic and Global Partnership — one of India's most substantive bilateral relationships and one of Japan's most strategically significant partnerships in Asia.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [{ _key: "s2", _type: "span", text: "Convergence Drivers" }],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "Several structural factors drive the India–Japan convergence. Both nations share concerns about China's assertive territorial behaviour, from the East China Sea to the Himalayan border. Both have developed extensive infrastructure cooperation under Japan's Quality Infrastructure frameworks. And both are central to the Quad — alongside the United States and Australia — which has become the most visible multilateral expression of a free and open Indo-Pacific.",
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s4",
            _type: "span",
            text: "Yet the relationship also has limits. India's strategic autonomy tradition, its membership in organisations that include Russia and China, and its non-aligned instincts create friction with Japan's more explicitly alliance-centred foreign policy. Managing these differences while deepening substantive cooperation is the central diplomatic challenge for both sides.",
          },
        ],
      },
    ],
    comments: [],
  },

  // ── 3. Indo-Pacific order ──────────────────────────────────────────────────
  {
    _id: "post-indopacific-order",
    title: "Rethinking the Indo-Pacific: Order, Contestation, and Asian Agency",
    slug: { current: "rethinking-indo-pacific-order" },
    _createdAt: "2025-03-20T10:00:00Z",
    description:
      "The Indo-Pacific has become the primary theatre of great-power competition. But smaller and middle powers are not merely objects of that competition — they are active shapers of regional order.",
    views: 4120,
    mainImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[2],
    content: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "The concept of the Indo-Pacific has moved from think-tank discourse to the centre of great-power strategy in less than a decade. Today, it is the dominant geographic frame through which the United States, Japan, Australia, India, and increasingly Europe understand the primary theatre of strategic competition with China.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [{ _key: "s2", _type: "span", text: "Beyond the Great-Power Frame" }],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "Yet the tendency to reduce Indo-Pacific dynamics to US–China competition obscures the agency of the region's other actors. ASEAN states, South Asian powers, and Pacific island nations are not simply objects of great-power competition. They are active shapers of regional order — negotiating their positions with considerable sophistication, extracting benefits from competing powers, and resisting pressure to choose sides in ways that would limit their strategic flexibility.",
          },
        ],
      },
    ],
    comments: [],
  },

  // ── 4. Strait of Hormuz ────────────────────────────────────────────────────
  {
    _id: "post-hormuz",
    title: "The Strait of Hormuz and Asia's Strategic Vulnerability",
    slug: { current: "strait-of-hormuz-asia-strategic-vulnerability" },
    _createdAt: "2025-02-28T07:00:00Z",
    description:
      "Twenty percent of global oil transits the Strait of Hormuz. For Asian economies — Japan, Korea, India, China — this narrow waterway is the single most consequential geographic chokepoint in their energy security.",
    views: 3300,
    mainImage:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[3],
    content: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "The Strait of Hormuz — 21 miles wide at its narrowest point — is the most consequential geographic chokepoint in the global energy system. Approximately 20 percent of the world's oil and 25 percent of its liquefied natural gas transits this waterway. For Asian economies, the exposure is even sharper: Japan, South Korea, India, and China depend on Hormuz-transiting energy to degrees that make any sustained disruption a direct national security threat.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [{ _key: "s2", _type: "span", text: "Asymmetric Exposure" }],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "The United States' own shale-driven energy revolution has significantly reduced American dependence on Gulf oil. This structural shift is quietly reshaping alliance dynamics. Asian allies and partners increasingly worry that American threat perception of Hormuz contingencies diverges from their own. Managing this asymmetry — ensuring that US strategic commitments extend credibly to the protection of Gulf sea lanes on which Asian prosperity depends — is a growing challenge for the architecture of American alliances in Asia.",
          },
        ],
      },
    ],
    comments: [],
  },

  // ── 5. Foreign policy autonomy ────────────────────────────────────────────
  {
    _id: "post-strategic-autonomy",
    title: "Strategic Autonomy in an Era of Alliance Politics",
    slug: { current: "strategic-autonomy-alliance-politics" },
    _createdAt: "2025-01-18T09:30:00Z",
    description:
      "How do middle and major powers preserve strategic autonomy while embedded in alliance structures? India and Japan offer contrasting but instructive approaches to this enduring dilemma.",
    views: 2650,
    mainImage:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[4],
    content: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "Strategic autonomy — the capacity of a state to make independent foreign policy choices unconstrained by external pressure — is simultaneously one of the most valued and most elusive objectives in contemporary international relations. It is valued because autonomy preserves optionality in an uncertain international environment. It is elusive because the pursuit of security, often through alliances, typically comes at the cost of some degree of policy independence.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [{ _key: "s2", _type: "span", text: "India's Autonomy Tradition" }],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "India's foreign policy has historically been organised around strategic autonomy as a foundational principle. From Nehru's non-alignment to contemporary multi-alignment, the underlying logic is consistent: India will engage all major powers, refuse binding alliance commitments that would constrain its choices, and resist being conscripted into others' conflicts. This tradition has proved surprisingly resilient — surviving the Cold War, the post-1991 opening to the United States, and the current era of US–China competition.",
          },
        ],
      },
    ],
    comments: [],
  },

  // ── 6. Pacific Forum ──────────────────────────────────────────────────────
  {
    _id: "post-pacific-forum",
    title: "Young Leaders and the Future of Pacific Multilateralism",
    slug: { current: "young-leaders-pacific-multilateralism" },
    _createdAt: "2024-12-10T11:00:00Z",
    description:
      "The Pacific Forum's Young Leaders program brings together the next generation of policymakers and scholars across the Indo-Pacific. What vision of regional order are they building?",
    views: 1890,
    mainImage:
      "https://images.unsplash.com/photo-1431274172761-fcdab704bb6d?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[2],
    content: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "The Pacific Forum, based in Honolulu, has for decades served as one of the most important nodes in the Indo-Pacific's policy community. Its Young Leaders program — which brings together emerging scholars, diplomats, and policymakers from across the region — is particularly significant as a space where the next generation of regional order-builders develop shared frameworks, build professional networks, and begin to articulate their own visions for the region.",
          },
        ],
      },
    ],
    comments: [],
  },
];

// ─── Article of the Day ───────────────────────────────────────────────────────

export const mockArticleOfTheDay = {
  _id: "aotd-1",
  post: mockPosts[0],
  description:
    "Japan's approach to Iran cannot be understood through bilateral ties alone. It must be located in Japan's larger energy geography — its very low self-sufficiency, heavy fossil fuel dependence, and strategic exposure to the Strait of Hormuz.",
};

// ─── Comments ─────────────────────────────────────────────────────────────────

export const mockComments = [
  {
    _id: "comment-1",
    post: { _ref: "post-japan-iran-energy" },
    _createdAt: "2025-05-11T08:30:00Z",
    name: "Priya Nair",
    comment:
      "Excellent analysis of Japan's energy dilemma. The point about asymmetric Hormuz exposure between the US and its Asian allies deserves much more attention in mainstream policy discussions.",
  },
  {
    _id: "comment-2",
    post: { _ref: "post-japan-iran-energy" },
    _createdAt: "2025-05-12T14:10:00Z",
    name: "Kenji Watanabe",
    comment:
      "The post-Fukushima context is crucial and often missed. Japan's LNG dependence today is a direct legacy of 2011, not just long-term policy choices. Thank you for laying this out clearly.",
  },
  {
    _id: "comment-3",
    post: { _ref: "post-india-japan" },
    _createdAt: "2025-04-20T09:45:00Z",
    name: "Arjun Sharma",
    comment:
      "Would love to see a deeper dive into where the India–Japan partnership has underperformed relative to its stated ambitions — particularly on defence industrial cooperation.",
  },
];
