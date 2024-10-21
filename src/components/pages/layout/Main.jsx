export default function Main({ childComponents = <></> }) {

  return (
    <main className="bg-primaryBackground">
      {childComponents}
    </main>
  );
}
