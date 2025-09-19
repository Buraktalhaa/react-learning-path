import { StyledButton } from "./Button.styled";

export function Button({ children, $primary }) {
  return <StyledButton $primary>{children}</StyledButton>;
}