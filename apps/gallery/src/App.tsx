import SiteFooter from "./components/footer.tsx";
import SiteHeader from "./components/header.tsx";
import Routes from "./Routes.tsx";

function App() {
  return (
    <main>
      <SiteHeader />
      <Routes />
      <SiteFooter />
    </main>
  );
}

export default App;
