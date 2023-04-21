import { baseURL } from "../../lib/constants";
import { Resp } from "../../types/resp";

const getData = async () => {
  const resp = await fetch(`${baseURL}/api/message`, {
    next: {
      revalidate: 10,
    },
  });
  const data: Resp = await resp.json();

  return data;
};

export default async function Revalidate() {
  const resp = await getData();

  return (
    <div>
      <h1>{resp.message}</h1>
    </div>
  );
}
