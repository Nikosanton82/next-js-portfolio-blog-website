"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "./page.module.css";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
