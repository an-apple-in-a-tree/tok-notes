import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Knowledge = () => {
  return (
    <div className="bg-[#030026] min-h-screen pt-8 flex flex-col items-center justify-start">
      <h1
        className={`${inter.className} bg-gradient-to-r from-[#fc44ff] to-[#8400ff] font-extrabold text-5xl bg-clip-text text-transparent text-center p-4 rounded-lg`}
      >
        Knowledge and the Knower
      </h1>
      <h2
        className={`${inter.className} bg-gradient-to-r from-[#fc44ff] to-[#8400ff] font-bold text-3xl bg-clip-text text-transparent text-center p-2 rounded-lg`}
      >
        Scope:
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 mx-8 text-white">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>Some representation of the world as it is.</p>
              </div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Knowledge
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Fact
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>A knowledge claim of the world that we are certain of.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Opinion
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  A knowledge claim that an individual believes to be true based
                  of their certainty of facts in the world
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Certainty
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  The extent of which the individual believes the their opinion
                  to be fact.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Plato Allegory of the Cave
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Our worldview is impacted by people placing truth in front of
                  us (Politics/Religion)
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Justified True Belief
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Knowledge must be provable, corresponding with reality and
                  held with conviction
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Gettier Problem
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-64 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Challenges JTB definition of knowledge by illustrating that
                  there are cases where individuals can have a justified, true
                  belief regarding a claim but still fail to know it because the
                  reasons for the belief, while justified, turn out to be false
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>

      <h2
        className={`${inter.className} bg-gradient-to-r from-[#fc44ff] to-[#8400ff] font-bold text-2xl bg-clip-text text-transparent text-center p-2 rounded-lg`}
      >
        Perspective
      </h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 my-8 mx-8">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Truth Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  The tendency to assume, in abscence of truth, that interaction
                  partners are telling the truth.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Confirmation Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>Favor outcomes that confirm your existing beliefs</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Unconscious Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Implicit stereotype is the pre-reflective attribution of
                  particular qualities by an individual to a member of some
                  social out group
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Anchoring
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  The first thing you judge influences your judgment that
                  follows.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Sunk Cost Fallacy
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>Clinging to something that has cost you something.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Curse of Knowledge
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Once you understand something you presume it to be obvious to
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Confirmation Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>Favor that which confirms your existing beliefs.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Dunning-Kruger Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>The more you know, the less confident you are.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Belief Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  If a conclusion supports your existing belief, you will
                  rationalize anything that supports it.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Self-Serving Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Failures are due to external factors. Success is due to your
                  own ability.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Backfire Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  When some aspect of your core beliefs is challenged, it causes
                  you to believe it more strongly.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Group Think
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You let the social dynamics of a group situation override the
                  best outcome.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Negativity Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You allow negative things to disproportionately influence your
                  thinking.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Declinism
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You remember the past as better than it was, and expect the
                  future to be worse than it will likely be.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Framing Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You allow yourself to be unduly influenced by context and
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Fundamental Attribution Error
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You judge others on their character, but yourself on the
                  situation.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Halo Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  How much you like someone, or how attractive they are,
                  influences your judgments of them.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Optimism Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>You overestimate the likelihood of positive outcomes.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Pessimism Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>You overestimate the likelihood of negative outcomes.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Just World Hypothesis
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>You believe that people get what they deserve.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  In-Group Bias
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>You unfairly favor those who belong to your group.</p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Placebo Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  If you believe your medicine will \"work\" even if it is fake.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Bystander Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  Presume someone else is going to do something in an emergency
                  situation.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Reactance
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You prefer to do the opposite of what someone is trying to
                  make you do.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Spotlight Effect
                  <div className="badge badge-outline">Term</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="swap-on">
            <div className="card w-full h-32 bg-gradient-to-r from-[#fc44ff] to-[#8400ff] shadow-xl">
              <div className="card-body">
                <p>
                  You overestimate how much people notice how you look and act.
                </p>
              </div>
            </div>
          </div>
        </label>

        
      </div>
    </div>
  );
};

export default Knowledge;
