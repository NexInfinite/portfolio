import type { Config } from 'tailwindcss';
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        "main": "#c5c6c7"
      }
    },
    fontFamily: {
      'display': "Martian Mono"
    }
  },

  daisyui: {
    themes: [
      {
        nexin: {
          "primary": "#66FCF1",
          "secondary": "#45A29E",
          "accent": "#1f2833",
          "neutral": "#66fcf1",
          "base-100": "#0b0c10",
          "info": "#c5c6c7",
          "success": "#58ee12",
          "warning": "#e879f9",
          "error": "#f43f5e",
        },
      },
      "dark",
    ]
  },

  plugins: [
    daisyui,
    typography,
  ]
} as Config;
