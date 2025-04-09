import GlowingEffectDemoSecond from "@/ui-comp/Glowing";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl text-white md:text-[8rem] ">Skills</h2>
        
        <div className="grid gap-8">
          <GlowingEffectDemoSecond />
        </div>
      </div>
    </section>
  );
};

export default Skills;