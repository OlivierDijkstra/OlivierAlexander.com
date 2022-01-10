import Layout from "@components/Layout";
import Reveal from "@components/Reveal";
import { useRouter } from "next/router";

export default function Work() {
  const router = useRouter();

  return (
    <Layout>
      <Reveal>
        <header className="font-medium mb-4">
          <h1>{router.query?.slug}</h1>
        </header>
      </Reveal>
    </Layout>
  );
}
