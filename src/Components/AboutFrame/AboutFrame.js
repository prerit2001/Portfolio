import React from "react";
import "./AboutFrame.scss";
import Parse from "parse";
import { useEffect } from "react";

export const AboutFrame = () => {
  const [background, setmode] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#f2f2f5"
  );
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#fff" : "#374054"
  );
  const [border, setborder] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "gray" : "#fff"
  );
  const [cc, setCc] = React.useState("Loading ...");
  const [cf, setCf] = React.useState("Loading ...");
  const [lc, setLc] = React.useState("Loading ...");
  const [intro, setIntro] = React.useState("Loading ...");

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

  async function addIntro() {
    try {
      const newPerson = new Parse.Object("Intro");
      newPerson.set(
        "intro",
        "Hello, I am Prerit Kumar Jha, an undergraduate student, currently in my penultimate year, pursuing B.Tech in Computer Science Engineering(CSE) at Indian Institute of Information Technology(IIIT), Pune."
      );
      await newPerson.save();
    } catch (error) {
      console.log("Error saving new Data: ", error);
    }
  }

  async function fetch() {
    let query = new Parse.Query("Rating");
    let queryResult = await query.findAll();
    const currentPerson = queryResult[0];
    console.log("CF", currentPerson.get("codeforces"));
    console.log("CC", currentPerson.get("codechef"));
    console.log("LC", currentPerson.get("leetcode"));
    setCf(currentPerson.get("codeforces"));
    setCc(currentPerson.get("codechef"));
    setLc(currentPerson.get("leetcode"));
    let query2 = new Parse.Query("Intro");
    let queryResult2 = await query2.findAll();
    const currentPerson2 = queryResult2[0];
    setIntro(currentPerson2.get("intro"));
  }

  useEffect(() => {
    // addRating();
    // addIntro();
    fetch();
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontFamily: "'Lato', sans-serif",
          background: "white",
          padding: "50px",
        }}
      >
        <p
          class="underline-small"
          style={{
            textAlign: "center",
            fontFamily: "'Lato', sans-serif",
            fontSize: "2em",
            color: "#374054",
          }}
        >
          About Me
        </p>
        <br />
        <br />
        <br />
        <div className="aboutf" style={{ margin: "auto", color: "#74808A" }}>
          <p>
            <div dangerouslySetInnerHTML={{ __html: intro }} />
          </p>
          <p>
            Grounded and solution oriented CS student. Adept at motivating self
            and others. Passionate about new data structure, algorithm and
            mathematics.Proficient in web development and android development
            both.
          </p>
          <div class="ro" style={{ border: `4px solid ${border}` }}>
            <div
              class="colum"
              style={{
                background: `${background}`,
                color: `${text}`,
                border: `4px solid ${border}`,
              }}
            >
              <a href="https://codeforces.com/profile/prerit2001">
                <p>
                  <b style={{ fontSize: "1.5rem" }}>CodeForces</b>
                  <br />
                  <b style={{ color: "#0056b3" }}>
                    Rated {cf}
                    <br />
                    Expert
                  </b>
                </p>
              </a>
            </div>
            <div
              class="colum"
              style={{
                background: `${background}`,
                color: `${text}`,
                border: `4px solid ${border}`,
              }}
            >
              <a href="https://www.codechef.com/users/prerit2001">
                <p>
                  <b style={{ fontSize: "1.5rem" }}>CodeChef</b>
                  <br />
                  <b style={{ color: "#0056b3" }}>
                    Rated {cc}
                    <br />5 Star
                  </b>
                </p>
              </a>
            </div>
            <div
              class="colum"
              style={{
                background: `${background}`,
                color: `${text}`,
                border: `4px solid ${border}`,
              }}
            >
              <a href="https://leetcode.com/legend_op/">
                <p>
                  <b style={{ fontSize: "1.5rem" }}>LeetCode</b>
                  <br />
                  <b style={{ color: "#0056b3" }}>
                    Rated {lc}
                    <br />
                    Knight
                  </b>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
