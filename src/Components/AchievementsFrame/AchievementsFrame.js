import React from "react";
import "./Achievements.scss";
import Parse from "parse";
import { useEffect } from "react";

export const AchievementsFrame = () => {
  const [background, setmode] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#f2f2f5"
  );
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#fff" : "#374054"
  );

  const [cc, setCc] = React.useState("Loading ...");
  const [cf, setCf] = React.useState("Loading ...");
  const [lc, setLc] = React.useState("Loading ...");

  async function addRating() {
    try {
      const newPerson = new Parse.Object("Rating");
      newPerson.set("codechef", "2088");
      newPerson.set("codeforces", "1679");
      newPerson.set("leetcode", "2167");
      await newPerson.save();
    } catch (error) {
      console.log("Error saving new Data: ", error);
    }
  }

  async function fetchRating() {
    let query = new Parse.Query("Rating");
    let queryResult = await query.findAll();
    const currentPerson = queryResult[0];
    console.log("CF", currentPerson.get("codeforces"));
    console.log("CC", currentPerson.get("codechef"));
    console.log("LC", currentPerson.get("leetcode"));
    setCf(currentPerson.get("codeforces"));
    setCc(currentPerson.get("codechef"));
    setLc(currentPerson.get("leetcode"));
  }

  useEffect(() => {
    // addRating();
    fetchRating();
  }, []);

  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          textAlign: "center",
          padding: "50px",
        }}
      >
        <p
          class="underline-small"
          style={{
            textAlign: "center",
            fontSize: "2em",
            color: "#374054",
          }}
        >
          Achievements
        </p>
        <br />
        <br />
        <br />
        <div class="container" style={{ background: "" }}>
          <div class="layout" style={{ margin: "auto" }}>
            <p
              class="col col-main"
              style={{ background: `${background}`, color: `${text}` }}
            >
              <strong>
                <u>Olympiads</u>
              </strong>
              <br /> <br />
              <ul>
                <li>
                  2018 RMO : Regional Mathematics Olympiad (Stage 2) :<br />{" "}
                  Qualified State Rank 6
                </li>
                <li>
                  2018 NSTSE : National State Talent Search Examination :<br />{" "}
                  Qualified State Rank 3
                </li>
                <li>
                  2019 NSTSE : National State Talent Search Examination :<br />{" "}
                  Qualified State Rank 1
                </li>
              </ul>
            </p>
            <p
              class="col col-complementary"
              role="complementary"
              style={{ background: `${background}`, color: `${text}` }}
            >
              <strong>
                <u>Competitive Programming</u>
              </strong>
              <br />
              <ul>
                <br />
                <li>
                  <b>CodeForces</b> :
                  <a href="https://codeforces.com/profile/prerit2001">
                    <strong style={{ color: "#0056b3" }}>
                      {" "}
                      Rating {cf} : Expert
                    </strong>{" "}
                    : <i>[ @prerit2001 ]</i>{" "}
                  </a>
                </li>
                <li>
                  <b>CodeChef</b> :
                  <a href="https://www.codechef.com/users/prerit2001">
                    <strong style={{ color: "#0056b3" }}>
                      {" "}
                      Rating {cc} : 5 Star
                    </strong>{" "}
                    : <i>[ @prerit2001</i> ]
                  </a>
                </li>
                <li>
                  <b>LeetCode</b>
                  <a href="https://leetcode.com/legend_op/">
                    {" "}
                    :{" "}
                    <strong style={{ color: "#0056b3" }}>
                      Rating {lc} : Guardian
                    </strong>{" "}
                    <i>: [ @legend_op ]</i>{" "}
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
