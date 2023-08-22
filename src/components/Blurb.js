import React from "react";
import { data } from "../constants/data";
import SplitText from "./SplitText";

function Blurb() {
  return (
    <div>
      <p>
        i'm currently a student at georgia tech (go jackets!) studying computer
        science. here's my <a href={data.linkResume}>resumé</a>.
      </p>
      <p>
        i like to lift, climb plastic rocks, listen to music (my favorite{" "}
        <a href={data.linkProko}>piece</a>!), and cook.
        {/* playing <a href={data.linkQuizBowl}>quizbowl</a> occasionally and reading jeopardy questions, */}
      </p>
      <p>
        recently, i've been tinkering with film photography, pulling espresso
        shots, throwing ceramics, and pickleballing (though in an extremely
        on-and-off and dilletante manner).
      </p>
      <p>
        i graduated in spring 2023 👨‍🎓, but was previously a teaching assistant
        for cs1332 (data structures & algorithms), a software engineering intern
        at
        <SplitText
          text="microsoft"
          colorSequence={["#F25022", "#7FBA00", "#00A4EF", "#FFB900"]}
        />
        under azure dedicated (summer '21), a software engineering intern at
        <SplitText text="facebook" colorSequence={["#1778F2"]} /> under the
        presence team (summer '22), and a software engineering intern at
        <SplitText text="databricks" colorSequence={["#ff3620"]} /> working on
        ui serving and product infrastructure (summer '23).{" "}
      </p>
      <p>
        i'll be returning to{" "}
        <SplitText text="databricks" colorSequence={["#ff3620"]} /> in 2023 to
        work full time in san francisco!
      </p>
    </div>
  );
}

export default Blurb;
