"use client";
import Image from "next/image";
import Layout from "./components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Layout>
        <h1>hello</h1>
        <Link href={"/dashboard"}>Dashboard</Link>
      </Layout>
    </main>
  );
}
