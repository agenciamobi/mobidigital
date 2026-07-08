const mobiSourceColors = {
  cyan: "#18BDCD",
  purple: "#5E2CED",
  magenta: "#E70B85",
  orange: "#F27035",
  black: "#000000",
  white: "#FFFFFF",
} as const;

export const mobiDesignTokens = {
  source: mobiSourceColors,
  semantic: {
    ink: "#111827",
    muted: "#5F6878",
    strong: "#303849",
    soft: "#8A95A8",
    page: "#FAFBFC",
    surface: mobiSourceColors.white,
    surfaceMuted: "#F4F7FA",
    line: "#E2E8F0",
  },
  brand: {
    50: "#F2EEFF",
    100: "#E5DCFF",
    200: "#CDBBFF",
    300: "#AE92FF",
    400: "#835CFA",
    500: mobiSourceColors.purple,
    600: "#4D20D6",
    700: "#3F1BAF",
    800: "#33188D",
    900: "#2A176F",
  },
  cyan: {
    50: "#ECFBFD",
    100: "#D3F5F9",
    200: "#A9EAF1",
    300: "#72DCE6",
    400: "#3AC9D8",
    500: mobiSourceColors.cyan,
    600: "#1298A7",
    700: "#117887",
    800: "#135F6B",
    900: "#144F59",
  },
  magenta: {
    50: "#FFF0F8",
    100: "#FFE0F0",
    200: "#FFC1E2",
    300: "#FF93CB",
    400: "#F94EAA",
    500: mobiSourceColors.magenta,
    600: "#C90773",
    700: "#A60760",
    800: "#87084F",
    900: "#700A44",
  },
  orange: {
    50: "#FFF5EF",
    100: "#FFE8D9",
    200: "#FFD0B3",
    300: "#FFB082",
    400: "#FB8C55",
    500: mobiSourceColors.orange,
    600: "#DF5522",
    700: "#B9401B",
    800: "#93351C",
    900: "#762F1C",
  },
  neutral: {
    50: "#FAFBFC",
    100: "#F4F7FA",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#111827",
  },
  feedback: {
    success: {
      50: "#ECFBFD",
      600: "#1298A7",
      700: "#117887",
    },
    warning: {
      50: "#FFF5EF",
      200: "#FFD0B3",
      900: "#762F1C",
    },
  },
  radius: {
    none: "0px",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    xxl: "1.75rem",
    full: "9999px",
  },
  button: {
    radius: "0.375rem",
    padding: {
      sm: "0.625rem 1rem",
      md: "0.75rem 1.25rem",
      lg: "0.875rem 1.5rem",
    },
    fontWeight: "800",
  },
  motion: {
    duration: {
      fast: "160ms",
      base: "240ms",
      slow: "640ms",
    },
    easing: {
      standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      soft: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
} as const;

export const mobiTailwindColors = {
  brand: mobiDesignTokens.brand,
  cyan: mobiDesignTokens.cyan,
  purple: mobiDesignTokens.brand,
  magenta: mobiDesignTokens.magenta,
  orange: mobiDesignTokens.orange,
  slate: mobiDesignTokens.neutral,
  emerald: mobiDesignTokens.feedback.success,
  amber: mobiDesignTokens.feedback.warning,
  ink: mobiDesignTokens.semantic.ink,
  muted: mobiDesignTokens.semantic.muted,
  strong: mobiDesignTokens.semantic.strong,
  soft: mobiDesignTokens.semantic.soft,
  page: mobiDesignTokens.semantic.page,
  surface: mobiDesignTokens.semantic.surface,
  "surface-muted": mobiDesignTokens.semantic.surfaceMuted,
  line: mobiDesignTokens.semantic.line,
  white: mobiDesignTokens.source.white,
  black: mobiDesignTokens.source.black,
} as const;

export const mobiBorderRadius = mobiDesignTokens.radius;

export const mobiBoxShadow = {
  soft: `0 24px 80px ${mobiDesignTokens.semantic.ink}1A`,
  editorial: `0 18px 70px ${mobiDesignTokens.semantic.ink}14`,
  polaroid: `0 28px 90px ${mobiDesignTokens.semantic.ink}18`,
} as const;

export const mobiKeyframes = {
  "mobi-float": {
    "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(var(--mobi-card-rotation, 0deg))" },
    "50%": { transform: "translate3d(0, -12px, 0) rotate(var(--mobi-card-rotation, 0deg))" },
  },
  "mobi-enter-up": {
    "0%": { opacity: "0", transform: "translate3d(0, 28px, 0)" },
    "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
  },
} as const;

export const mobiAnimation = {
  "float-slow": "mobi-float 7s cubic-bezier(0.16, 1, 0.3, 1) infinite",
  "enter-up": "mobi-enter-up 640ms cubic-bezier(0.16, 1, 0.3, 1) both",
} as const;
