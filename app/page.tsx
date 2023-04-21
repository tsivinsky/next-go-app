import { baseURL } from "../lib/constants";
import { Resp } from "../types/resp";

const getData = async () => {
  const resp = await fetch(`${baseURL}/api/message`, {
    cache: "no-store",
  });
  const data: Resp = await resp.json();

  return data;
};

export default async function Index() {
  const data = await getData();

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
