import { titleCase } from "title-case";
import "./Character.scss";
import Button from "../../../../../../components/Button/Button";
import { format } from "date-fns/fp";

type Props = {
  characterData: {
    id: number;
    image: string;
    name: string;
    classes: Record<string, number>;
    playTime: number;
  };
};

const Character = ({ characterData }: Props) => {
  const { id, image, name, classes, playTime } = characterData;

  return (
    <div className="character">
      <div className="character-background">
        <div className="character-header">
          <div className="character-line character-name">
            <span className="character-title">Name:</span>
            <span className="character-value">{name}</span>
          </div>
          <div className="character-image">
            <img src={image} alt="character image" />
          </div>
        </div>

        <div className="character-body">
          <div className="character-line character-level">
            <span className="character-title">Class:</span>
            <div className="character-value">
              {Object.entries(classes).map(([charClass, level]) => (
                <div className="class">
                  {`${titleCase(charClass)}/${level}`}
                </div>
              ))}
            </div>
          </div>
          <div className="character-line character-playtime">
            <span className="character-title">Playtime:</span>
            <span className="character-value">
              {`${format("HH", playTime)}H ${format("MM", playTime)}M`}
            </span>
          </div>
        </div>
        <div className="character-delete">
          <Button className="btn-error" type="button" onClick={() => {
						// Fire off an RTKQ mutation to delete a character on the back end
						// using id, then invalidate the characters GET request
						// See authentication redux for example 
						alert('Feature not implemented, see code for comment');
					}}>
            Delete Character
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Character;
