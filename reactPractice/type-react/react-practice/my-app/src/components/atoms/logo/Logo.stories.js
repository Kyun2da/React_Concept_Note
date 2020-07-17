import React from "react";
import Logo from "./Logo";

export default {
  title: "components|basic/Logo", //스토리북에서 보여질 그룹과 경로를 명시
  coponent: Logo //어떤 컴포넌트를 문서화 할지 명시
};

export const standard = () => <Logo />;
