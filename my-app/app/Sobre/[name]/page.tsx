import React from "react";

type props = {
  params: Promise<{
    name: string;
  }>;
};

async function Page({ params }: props) {

    const { name } = await params

  return (
    <div>
      <h1>Página do {name}</h1>
    </div>
  );
}

export default Page;
