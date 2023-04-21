type Resp = {
  message: string;
};

const getData = async () => {
  const resp = await fetch("/api/message", {
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
