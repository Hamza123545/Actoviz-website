import { redirect } from "next/navigation";

const Services = async (props: { params: Promise<{ slug: string }> }) => {
  redirect("/");
};

export default Services;
