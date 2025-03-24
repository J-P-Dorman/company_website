import Character from "./components/Character/Character";
import imgConcerto from "../../../../../../assets/characters/character_concerto.jpg";
import imgVolition from "../../../../../../assets/characters/character_volition.jpg";
import "./Characters.scss";

const Characters = () => {
  return (
    <div className="account-section" id="overview-characters">
      <h2 className="section-title">Characters</h2>

      <div className="section-body" id="characters-body">
        <Character
          characterData={{
            id: 0,
            name: "Volition",
            image: imgVolition,
            classes: { rogue: 10, wizard: 2 },
            playTime: 10944,
          }}
        />
        <Character
          characterData={{
            id: 1,
            name: "Concerto",
            image: imgConcerto,
            classes: { bard: 6 },
            playTime: 10944,
          }}
        />
      </div>
    </div>
  );
};

export default Characters;
