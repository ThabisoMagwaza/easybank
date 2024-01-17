export const COLORS = {
  Primary: 'var(--color-primary-49)',
  GradientPrimary: 'var(--color-gradient-primary)',
  Secondary24: 'var(--color-secondary-24)',
  Secondary61: 'var(--color-secondary-61)',
  Secondary96: 'var(--color-secondary-96)',
  White: 'var(--color-white)',
  Gray98: 'var(--color-gray-98)',
};

const BREAKPOINTS = {
  mobile: 650,
  tablet: 900,
  laptop: 1300,
};

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndUp: `{min-width: ${BREAKPOINTS.laptop / 16}rem}`,
};
