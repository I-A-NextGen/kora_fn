import { HowItWorkCard } from "./HowItWorkCard";

const steps = [
  {
    number: "01",
    title: "Iyandikishe kuri konti",
    description:
      "Tangirira ku kwiyandikisha ukoresheje izina ryawe, nimero ya telefoni cyangwa email. Urahita ubona konti yawe yihariye igufasha gukurikirana imyitozo yawe.",
  },
  {
    number: "02",
    title: "Hitamo gahunda ikubereye",
    description:
      "Hitamo gahunda y'ibizamini wifuza ukurikije amafaranga, umubare w'ibizamini, n'iminsi bizamara. Dufite gahunda zitandukanye zikwiriye buri wese.",
  },
  {
    number: "03",
    title: "Tangira gukora ibizamini",
    description:
      "Nyuma yo kwishyura no kwemezwa, uhita ubona ibizamini. Ushobora kubikora igihe icyo ari cyo cyose ukoresheje telefoni cyangwa mudasobwa.",
  },
  {
    number: "04",
    title: "Reba amanota n'ubusesenguzi",
    description:
      "Umaze gukora ikizamini, urahita ubona amanota yawe hamwe n'ibisobanuro ku makosa wakoze n'aho usabwa gushyira imbaraga.",
  },
];


const HowItWorks = () => {
  return (
    <div
      className="my-32 min-h-screen px-[5%] sm:px-[15%] lg:px-[10%] scroll-mt-36"
      id="how-it-works"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h2>Uko Bikora</h2>
        <p>Umutekano binyuze mu bumenyi.</p>
      </div>
      <div className="mt-20 flex flex-col gap-y-8 text-justify">
        <div className="flex flex-wrap gap-8 lg:flex-nowrap lg:justify-center lg:gap-12">
          {steps.slice(0, 2).map((step, index) => (
            <HowItWorkCard
              key={index}
              num={step.number}
              title={step.title}
              content={step.description}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 lg:flex-nowrap lg:justify-center lg:gap-12">
          {steps.slice(2, 4).map((step, index) => (
            <HowItWorkCard
              key={index}
              num={step.number}
              title={step.title}
              content={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
