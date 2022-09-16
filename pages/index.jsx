import Head from "next/head";
import Demos from "../components/Demos";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Navbar from "../components/Navbar";
import SingleJob from "../components/SingleJob";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jobboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Demos />
      <JobList />
      <SingleJob />
    </div>
  );
}
