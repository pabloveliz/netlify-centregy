module.exports = {
  title: "Centregy",
  themeConfig: {
    nav: false,
    sidebar: [["/", "1. Home"],
              ["/SERVICES",  "2. Professional Services"],
              ["/STAFF", "3. Staff Augmentation Services"],
              ["/VACANCIES", "4. Vacancies"],
              ["/blog/", "5. Blog"],
              ["/CONTACT", "6. Contact Us"]
            ],
    displayAllHeaders: true
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
};
