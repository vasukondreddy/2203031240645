const api = {
  createShortUrl: async (payload) => {
    return payload.map((item, index) => ({
      ...item,
      shortLink: `http://short.ly/${item.shortcode || "mock" + index}`,
      expiry: new Date(Date.now() + 60 * 60000).toISOString(),
    }));
  },

  getStats: async () => {
    return [
      {
        shortLink: "http://short.ly/mock0",
        originalUrl: "https://example.com",
        expiry: new Date(Date.now() + 60 * 60000).toISOString(),
        clicks: 0,
      },
    ];
  },

  resolveShortcode: async (code) => {
    return {
      originalUrl: "https://example.com",
      clicks: 0,
      expiry: new Date(Date.now() + 60 * 60000).toISOString(),
    };
  },
};

export default api;
