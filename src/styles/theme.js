const size = {
  // ~767px 모바일
  mobile: "800px",
  // 768px~1023px 태블릿
  tablet: "1024px",
  // 1024~ 데스크탑
  desktop: "1800px",
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  table: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
