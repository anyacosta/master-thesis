import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { v4 as uuidv4 } from "uuid";

import s from "../../styles/Predictions.module.css";

const Predictions = ({ predictions }) => {
  return (
    <div className={s["container"]}>
      <List>
        {predictions.map(({ label, prob }) => {
          const propValue = Math.round(prob * 100, 0);
          return (
            <li key={uuidv4()} className={s["prediction-list-item"]}>
              <ListItemText primary={`${label} ${propValue}%`} />
              <LinearProgress
                sx={{
                  height: 8,
                }}
                variant="determinate"
                value={propValue}
              />
            </li>
          );
        })}
      </List>
    </div>
  );
};

export default Predictions;
