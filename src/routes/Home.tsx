import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";

export default function Home() {
  const { isLoading, data } = useQuery([`room`, 1], getRoom);
  console.log(data);
  return <h1>hello</h1>;
}
