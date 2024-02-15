import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import Link from "next/link";

export default function AdminPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Cours</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Link href="/admin/courses">Cours</Link>
      </LayoutContent>
    </Layout>
  );
}
