import "./App.css";
import {
  AboutComponent,
  HeaderComponent,
  HomeComponent,
  ProductComponent,
} from "./components";

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <HomeComponent />
        <AboutComponent />
        <ProductComponent />
      </main>
    </>
  );
}

export default App;
