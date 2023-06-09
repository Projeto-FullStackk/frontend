import Card from "@/components/Card/card";

const Home = () => {
  return (
    <>
      <main>
        <ul className="flex flex-row gap-5 overflow-auto h-[26rem]">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ul>
      </main>
    </>
  )
}

export default Home;
