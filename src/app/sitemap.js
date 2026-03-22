export default function sitemap() {
  return [
    {
      url: "https://www.ukbloodcentre.com",
      priority: 1.0,
    },

    {
      url: "https://www.ukbloodcentre.com/about-us",
      priority: 0.8,
    },

    {
      url: "https://www.ukbloodcentre.com/services",
      priority: 0.9,
    },

    // SERVICE DETAIL PAGES
    {
      url: "https://www.ukbloodcentre.com/services/whb",
      priority: 0.8,
    },
    {
      url: "https://www.ukbloodcentre.com/services/prbc",
      priority: 0.8,
    },
    {
      url: "https://www.ukbloodcentre.com/services/sdp",
      priority: 0.9, // important page
    },
    {
      url: "https://www.ukbloodcentre.com/services/rdp",
      priority: 0.8,
    },
    {
      url: "https://www.ukbloodcentre.com/services/ffp",
      priority: 0.8,
    },
    {
      url: "https://www.ukbloodcentre.com/services/cryo",
      priority: 0.8,
    },

    {
      url: "https://www.ukbloodcentre.com/donation-process",
      priority: 0.9,
    },

    {
      url: "https://www.ukbloodcentre.com/contact",
      priority: 0.9,
    },
  ];
}