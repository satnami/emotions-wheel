import styled from "@emotion/styled";
import Link from "next/link";
import { useColorMode } from "theme-ui";
import ColorToggle from "Components/shared/colorToggle";

const StyledAnchor = styled.a`
  margin-right: 15px;
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
`;

const modes = ["light", "dark", "purple", "pink"];

export default () => {
  const [mode, setMode] = useColorMode();
  return (
    <div>
      <ColorToggle
        mode={mode}
        onClick={(e) => {
          const index = modes.indexOf(mode);
          const next = modes[(index + 1) % modes.length];
          setMode(next);
        }}
      />
    </div>
  );
};