import { useState } from "react";
import { Card } from "./components/Card";
import themes, { language } from "./data";
import { aiRequest } from "./services/openai.config";
import { Documentation } from "./components/Documentation";
import { Loading } from "./components/Loading";

function App() {
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClickTheme(message) {
    setLoading(true);
    const response = await aiRequest(message);
    setTheme(response.data.choices[0].text);
    setLoading(false);
  }

  function handdleBackToCard() {
    setTheme("");
  }

  if (loading) return <Loading />;

  return (
    <section className="grid place-content-center w-full h-full">
      <h1 className="text-amber-400 text-5xl font-bold grid grid-cols-1 py-10 text-center">
        {language}
      </h1>

      {theme ? (
        <Documentation
          handdleBackToCard={handdleBackToCard}
          responseAI={theme}
        />
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {themes.map((theme, idx) => (
            <Card
              key={idx}
              title={theme.name}
              onClick={() => handleClickTheme(theme.message)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
