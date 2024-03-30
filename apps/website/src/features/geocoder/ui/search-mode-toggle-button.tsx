import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Button, { ButtonVariant } from "@lucky-parking/ui/components/button";
import type { ButtonProps } from "@lucky-parking/ui/components/button";

export default function SearchModeToggleButton(props: ButtonProps) {
  const { onClick } = props;

  return (
    <Button variant={ButtonVariant.secondary} onClick={onClick}>
      <CompareArrowsIcon />
      <p>Compare Mode</p>
    </Button>
  );
}
