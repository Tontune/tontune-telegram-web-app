import { styled } from "@stitches/react";

export const Card = styled("div", {
  padding: "18px 20px",
  borderRadius: "8px",
  backgroundColor: "white",

  "@media (prefers-color-scheme: dark)": {
    backgroundColor: "#111",
  },
});

export const FlexBoxRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
});

export const FlexBoxCol = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const Button = styled("button", {
  backgroundColor: "var(--tg-theme-button-color)",
  border: 0,
  borderRadius: "8px",
  padding: "10px 20px",
  color: "var(--tg-theme-button-text-color)",
  fontWeight: 700,
  cursor: "pointer",

  "&:disabled": { backgroundColor: "#6e6e6e" },
});

export const Ellipsis = styled("div", {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const Input = styled("input", {
  padding: "10px 20px",
  borderRadius: "10px",
  width: "100%",
  border: "1px solid #c2c2c2",

  "@media (prefers-color-scheme: dark)": {
    border: "1px solid #fefefe",
  },
});
