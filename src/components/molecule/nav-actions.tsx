import Link from "next/link";
import ShimmerButton from "../magicui/shimmer-button";

const NavActions = () => {
  return (
    <Link href="/get-a-free-consultation">
      <ShimmerButton>Get Free Consultation</ShimmerButton>
    </Link>
  );
};

export default NavActions;
